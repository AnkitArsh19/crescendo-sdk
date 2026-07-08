#!/usr/bin/env node
/**
 * Crescendo MCP Server
 *
 * Implements the Model Context Protocol (MCP) using the official
 * @modelcontextprotocol/sdk — provides correct lifecycle negotiation,
 * ping keepalive, protocol version management, and stdio transport.
 *
 * Exposes tools:
 *  - crescendo_send_email
 *  - crescendo_list_templates
 *  - crescendo_publish_template
 *  - crescendo_list_domains
 *  - crescendo_verify_domain
 *  - crescendo_list_suppressions
 *  - crescendo_suppress_email
 *  - crescendo_get_metrics
 *  - crescendo_list_logs
 *  - crescendo_list_webhooks
 *  - crescendo_create_webhook
 *  - crescendo_create_workflow
 *  - crescendo_get_workflow
 *  - crescendo_run_workflow
 *  - crescendo_update_workflow
 *  - crescendo_list_connections
 *  - crescendo_list_apps
 *
 * Install and run:
 *   CRESCENDO_API_KEY=cm_sk_... npx @crescendo/mcp
 *
 * Or add to Claude Code / Cursor mcp.json:
 *   {
 *     "mcpServers": {
 *       "crescendo": {
 *         "command": "npx",
 *         "args": ["-y", "@crescendo/mcp"],
 *         "env": { "CRESCENDO_API_KEY": "cm_sk_..." }
 *       }
 *     }
 *   }
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { crescendo, CrescendoError } from '@crescendo/email';

// ─── Bootstrap ─────────────────────────────────────────────────────────────────

const apiKey = process.env.CRESCENDO_API_KEY;
if (!apiKey) {
  process.stderr.write('Error: CRESCENDO_API_KEY environment variable is required.\n');
  process.exit(1);
}

const client = crescendo({ apiKey });

// ─── MCP Server ────────────────────────────────────────────────────────────────

const server = new McpServer({
  name: 'crescendo-mcp',
  version: '1.0.0',
});

// ─── Helper ─────────────────────────────────────────────────────────────────────

function textResult(data) {
  return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
}

function errorResult(e) {
  const msg = e instanceof CrescendoError
    ? `CrescendoError (${e.statusCode}): ${e.message}`
    : String(e.message ?? e);
  return { content: [{ type: 'text', text: msg }], isError: true };
}

async function tool(fn) {
  try {
    return textResult(await fn());
  } catch (e) {
    return errorResult(e);
  }
}

// ─── Email tools ────────────────────────────────────────────────────────────────

server.tool(
  'crescendo_send_email',
  'Send a transactional or marketing email via Crescendo. The "from" address must belong to a verified domain.',
  {
    from:       z.string().email().describe('Sender email (must be on a verified Crescendo domain)'),
    to:         z.string().email().describe('Recipient email address'),
    subject:    z.string().describe('Email subject line. Supports {{VARIABLE}} interpolation.'),
    html_body:  z.string().describe('HTML body of the email'),
    text_body:  z.string().optional().describe('Plain text fallback (recommended)'),
    email_type: z.enum(['TRANSACTIONAL', 'MARKETING']).optional().default('TRANSACTIONAL'),
    tags:       z.record(z.string()).optional().describe('Key-value tags for log filtering'),
  },
  async ({ from, to, subject, html_body, text_body, email_type, tags }) =>
    tool(() => client.emails.send({ from, to, subject, htmlBody: html_body, textBody: text_body, emailType: email_type, tags })),
);

server.tool(
  'crescendo_list_logs',
  'List email logs with optional status and limit filters.',
  {
    status: z.enum(['PENDING', 'SENT', 'DELIVERED', 'FAILED', 'BOUNCED', 'SUPPRESSED']).optional(),
    limit:  z.number().int().min(1).max(100).optional().default(20),
  },
  async ({ status, limit }) => tool(() => client.emails.list({ status, limit })),
);

// ─── Template tools ─────────────────────────────────────────────────────────────

server.tool(
  'crescendo_list_templates',
  'List all email templates (both DRAFT and PUBLISHED) for the authenticated user.',
  {},
  async () => tool(() => client.templates.list()),
);

server.tool(
  'crescendo_publish_template',
  'Publish a draft template. Validates all {{variables}}, freezes a snapshot, and sets status to PUBLISHED. Only published templates can be used in send calls.',
  { template_id: z.string().uuid().describe('UUID of the template to publish') },
  async ({ template_id }) => tool(() => client.templates.publish(template_id)),
);

// ─── Domain tools ───────────────────────────────────────────────────────────────

server.tool(
  'crescendo_list_domains',
  'List all email sending domains and their verification status.',
  {},
  async () => tool(() => client.domains.list()),
);

server.tool(
  'crescendo_verify_domain',
  'Trigger an on-demand DNS re-check for a pending domain.',
  { domain_id: z.string().uuid().describe('UUID of the domain to verify') },
  async ({ domain_id }) => tool(() => client.domains.verify(domain_id)),
);

// ─── Suppression tools ──────────────────────────────────────────────────────────

server.tool(
  'crescendo_list_suppressions',
  'List all suppressed email addresses (addresses that will not receive future emails).',
  {},
  async () => tool(() => client.suppressions.list()),
);

server.tool(
  'crescendo_suppress_email',
  'Manually add an email address to the suppression list.',
  {
    email:  z.string().email().describe('Email address to suppress'),
    reason: z.enum(['MANUAL', 'BOUNCE', 'COMPLAINT', 'UNSUBSCRIBE']).optional().default('MANUAL'),
  },
  async ({ email, reason }) => tool(() => client.suppressions.suppress(email, reason)),
);

// ─── Metrics ────────────────────────────────────────────────────────────────────

server.tool(
  'crescendo_get_metrics',
  'Get daily email delivery metrics including sent count, bounce rate, and complaint rate.',
  {
    domain_id: z.string().uuid().optional().describe('Filter by domain ID (omit for all domains)'),
    days:      z.number().int().min(1).max(365).optional().default(30).describe('Number of days to look back'),
  },
  async ({ domain_id, days }) => tool(() => client.metrics.get({ domainId: domain_id, days })),
);

// ─── Webhook tools ──────────────────────────────────────────────────────────────

server.tool(
  'crescendo_list_webhooks',
  'List all outbound webhook subscriptions (signing secrets are not returned after creation).',
  {},
  async () => tool(() => client.webhooks.list()),
);

server.tool(
  'crescendo_create_webhook',
  'Create a new outbound webhook subscription to receive email events in real time. The signing secret is returned once — store it immediately.',
  {
    url: z.string().url().describe('Public HTTPS URL to deliver events to'),
    subscribed_events: z.array(z.string()).describe(
      'Event types: email.delivered, email.bounced, email.opened, email.clicked, email.complained, email.unsubscribed, domain.verification_changed, dmarc.alignment_failure',
    ),
  },
  async ({ url, subscribed_events }) =>
    tool(() => client.webhooks.create({ url, subscribedEvents: subscribed_events })),
);

// ─── Workflow tools ─────────────────────────────────────────────────────────────

server.tool(
  'crescendo_create_workflow',
  'Create a new automation workflow.',
  {
    name:        z.string().describe('Name of the workflow'),
    description: z.string().optional().describe('Description of the workflow'),
  },
  async ({ name, description }) => tool(() => client.workflows.create({ name, description })),
);

server.tool(
  'crescendo_get_workflow',
  'Get details of a specific workflow including its steps and configuration.',
  { workflow_id: z.string().uuid().describe('UUID of the workflow') },
  async ({ workflow_id }) => tool(() => client.workflows.get(workflow_id)),
);

server.tool(
  'crescendo_run_workflow',
  'Trigger a run of an active workflow.',
  {
    workflow_id: z.string().uuid().describe('UUID of the workflow to trigger'),
    payload:     z.record(z.unknown()).optional().describe('Input payload for the workflow trigger'),
  },
  async ({ workflow_id, payload }) => tool(() => client.workflows.trigger(workflow_id, payload ?? {})),
);

server.tool(
  'crescendo_update_workflow',
  'Update the name or description of a workflow.',
  {
    workflow_id: z.string().uuid().describe('UUID of the workflow'),
    name:        z.string().optional().describe('New name for the workflow'),
    description: z.string().optional().describe('New description for the workflow'),
  },
  async ({ workflow_id, name, description }) =>
    tool(() => client.workflows.update(workflow_id, { name, description })),
);

// ─── Connection / App tools ─────────────────────────────────────────────────────

server.tool(
  'crescendo_list_connections',
  'List all authenticated connections available for use in workflows.',
  {},
  async () => tool(() => client.connections.list()),
);

server.tool(
  'crescendo_list_apps',
  'List all available apps and their trigger/action definitions that can be used in workflows.',
  {},
  async () => tool(() => client.apps.list()),
);

// ─── Start ──────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
process.stderr.write('Crescendo MCP Server ready (official SDK, stdio transport).\n');
