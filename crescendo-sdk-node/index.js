/**
 * @crescendo/email
 *
 * Official Node.js/TypeScript SDK for the Crescendo Email Service API.
 *
 * Supports:
 *  - Email: send, send-templated, send-batch
 *  - Templates: CRUD, publish, test-send, clone-from-broadcast
 *  - Contacts & Audiences: upsert, set-property, audience membership
 *  - Suppressions: suppress, unsuppress, list
 *  - Domains: list, add, verify, delete
 *  - Email Logs: list (with tag/status filtering), get
 *  - Metrics: get domain metrics rollup
 *  - Outbound Webhooks: create, list, delete
 */

const BASE_URL = process.env.CRESCENDO_BASE_URL || 'https://api.crescendo.run';

class CrescendoError extends Error {
  constructor(message, statusCode, response) {
    super(message);
    this.name = 'CrescendoError';
    this.statusCode = statusCode;
    this.response = response;
  }
}

async function request(apiKey, method, path, body) {
  const url = `${BASE_URL}${path}`;
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let errBody;
    try { errBody = await res.json(); } catch { errBody = {}; }
    throw new CrescendoError(
      errBody.message || `Crescendo API error: ${res.status}`,
      res.status,
      errBody,
    );
  }

  if (res.status === 204) return null;
  return res.json();
}

/**
 * Creates a Crescendo Email client.
 *
 * @example
 * import { crescendo } from '@crescendo/email';
 * const client = crescendo({ apiKey: 'cm_sk_...' });
 * await client.emails.send({ from: 'hi@myapp.com', to: 'user@example.com', subject: 'Hello', htmlBody: '<h1>Hi</h1>' });
 */
function crescendo({ apiKey }) {
  if (!apiKey) throw new Error('crescendo: apiKey is required');

  const r = (method, path, body) => request(apiKey, method, path, body);

  return {
    // ── Emails ──────────────────────────────────────────────────────────────

    emails: {
      /**
       * Send a single transactional/marketing email.
       * @param {Object} params
       * @param {string} params.from - Sender address (must be from a verified domain)
       * @param {string} params.to - Recipient address
       * @param {string} params.subject - Email subject line
       * @param {string} params.htmlBody - HTML body
       * @param {string} [params.textBody] - Plain text body (recommended)
       * @param {'TRANSACTIONAL'|'MARKETING'} [params.emailType=TRANSACTIONAL]
       * @param {Record<string,string>} [params.tags] - Arbitrary key-value tags for log filtering
       */
      send: (params) => r('POST', '/api/v1/emails', params),

      /**
       * Send an email using a published template.
       * @param {Object} params
       * @param {string} params.from
       * @param {string} params.to
       * @param {string} params.templateId - UUID of a PUBLISHED template
       * @param {Record<string,any>} [params.variables] - Variable values to substitute
       */
      sendTemplated: (params) => r('POST', '/api/v1/emails/templated', params),

      /**
       * Send the same email to multiple recipients in one request (up to 100).
       * @param {Object} params
       * @param {string} params.from
       * @param {string} params.subject
       * @param {string} params.htmlBody
       * @param {Array<string|{to:string, [key:string]:any}>} params.recipients - Recipient addresses or per-recipient variable maps
       */
      sendBatch: (params) => r('POST', '/api/v1/emails/batch', params),

      /** Get the delivery status of a sent email by ID. */
      get: (emailId) => r('GET', `/api/v1/emails/${emailId}`),

      /**
       * List email logs with filtering.
       * @param {Object} [filters]
       * @param {'SENT'|'DELIVERED'|'FAILED'|'BOUNCED'} [filters.status]
       * @param {string} [filters.domainId]
       * @param {string} [filters.after] - cursor (ISO timestamp)
       * @param {number} [filters.limit=20]
       * @param {Record<string,string>} [filters.tags]
       */
      list: (filters = {}) => {
        const q = new URLSearchParams(filters).toString();
        return r('GET', `/api/v1/emails${q ? '?' + q : ''}`);
      },
    },

    // ── Templates ────────────────────────────────────────────────────────────

    templates: {
      /** List all templates (draft and published). */
      list: () => r('GET', '/api/v1/templates'),

      /** Get a single template by ID. */
      get: (id) => r('GET', `/api/v1/templates/${id}`),

      /**
       * Create a new DRAFT template.
       * @param {Object} params
       * @param {string} params.name
       * @param {string} params.subject
       * @param {string} params.htmlBody
       * @param {string} [params.textBody]
       * @param {Array<{name:string, type:'STRING'|'NUMBER', fallbackValue?:string}>} [params.variables]
       */
      create: (params) => r('POST', '/api/v1/templates', params),

      /**
       * Update an existing template (resets to DRAFT if previously published).
       * @param {string} id
       * @param {Partial<CreateTemplateParams>} params
       */
      update: (id, params) => r('PATCH', `/api/v1/templates/${id}`, params),

      /** Permanently delete a template. */
      delete: (id) => r('DELETE', `/api/v1/templates/${id}`),

      /**
       * Publish a template.
       * Validates all {{VAR}} references, freezes a snapshot, flips status to PUBLISHED.
       * Only published templates can be referenced by ID in send calls.
       */
      publish: (id) => r('POST', `/api/v1/templates/${id}/publish`),

      /**
       * Send a test email using the template's current draft content.
       * Does NOT require the template to be published.
       * Tagged `isTest=true` in email logs.
       * @param {string} id
       * @param {{ toAddress: string, variables?: Record<string,any> }} params
       */
      testSend: (id, params) => r('POST', `/api/v1/templates/${id}/test`, params),

      /**
       * Clone a broadcast's content into a new draft template.
       * @param {string} broadcastId
       */
      cloneFromBroadcast: (broadcastId) =>
        r('POST', `/api/v1/templates/clone-from-broadcast/${broadcastId}`),
    },

    // ── Contacts & Audiences ─────────────────────────────────────────────────

    contacts: {
      /**
       * Create or update a contact by email address.
       * @param {Object} params
       * @param {string} params.email
       * @param {string} [params.firstName]
       * @param {string} [params.lastName]
       * @param {Record<string,any>} [params.customProperties]
       */
      upsert: (params) => r('POST', '/api/v1/audiences', params),

      /** Get a contact by their email address. */
      get: (email) => r('GET', `/api/v1/audiences/${encodeURIComponent(email)}`),

      /**
       * Set a custom property on a contact.
       * This is the primitive that drives dynamic audience segments.
       * @param {string} email
       * @param {string} property
       * @param {any} value
       */
      setProperty: (email, property, value) =>
        r('PATCH', `/api/v1/audiences/${encodeURIComponent(email)}/properties`, { property, value }),

      /** Add a contact to an audience. */
      addToAudience: (email, audienceId) =>
        r('POST', `/api/v1/audiences/${audienceId}/contacts`, { email }),

      /** Remove a contact from an audience. */
      removeFromAudience: (email, audienceId) =>
        r('DELETE', `/api/v1/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`),
    },

    // ── Suppressions ─────────────────────────────────────────────────────────

    suppressions: {
      /** List all suppressed addresses. */
      list: () => r('GET', '/api/v1/suppressions'),

      /**
       * Suppress an email address (blocks all future sends).
       * @param {string} email
       * @param {'MANUAL'|'BOUNCE'|'COMPLAINT'|'UNSUBSCRIBE'} [reason='MANUAL']
       */
      suppress: (email, reason = 'MANUAL') =>
        r('POST', '/api/v1/suppressions', { email, reason }),

      /** Remove an address from the suppression list. */
      unsuppress: (email) =>
        r('DELETE', `/api/v1/suppressions/${encodeURIComponent(email)}`),
    },

    // ── Domains ──────────────────────────────────────────────────────────────

    domains: {
      /** List all domains. */
      list: () => r('GET', '/api/v1/domains'),

      /**
       * Add a new domain for verification.
       * @param {string} domainName - e.g., 'mail.myapp.com'
       */
      add: (domainName) => r('POST', '/api/v1/domains', { domainName }),

      /** Trigger an on-demand DNS re-check for a pending domain. */
      verify: (id) => r('POST', `/api/v1/domains/${id}/verify`),

      /** Delete a domain. */
      delete: (id) => r('DELETE', `/api/v1/domains/${id}`),
    },

    // ── Metrics ──────────────────────────────────────────────────────────────

    metrics: {
      /**
       * Get daily email delivery metrics.
       * @param {Object} [params]
       * @param {string} [params.domainId] - filter by domain (omit for all domains)
       * @param {number} [params.days=30] - number of days to look back
       */
      get: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return r('GET', `/api/v1/metrics${q ? '?' + q : ''}`);
      },
    },

    // ── Outbound Webhooks ────────────────────────────────────────────────────

    webhooks: {
      /** List all webhook subscriptions. */
      list: () => r('GET', '/api/v1/webhooks'),

      /**
       * Create a new webhook subscription.
       * @param {Object} params
       * @param {string} params.url - HTTPS endpoint to deliver events to
       * @param {string[]} params.subscribedEvents - Event types to subscribe to
       * @example
       * client.webhooks.create({ url: 'https://myapp.com/hooks/email', subscribedEvents: ['email.delivered', 'email.bounced'] })
       */
      create: ({ url, subscribedEvents }) => r('POST', '/api/v1/webhooks', { url, subscribedEvents }),

      /** Delete a webhook subscription. */
      delete: (id) => r('DELETE', `/api/v1/webhooks/${id}`),
    },

    // ── Workflows ────────────────────────────────────────────────────────────

    workflows: {
      list: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return r('GET', `/api/v1/workflows${q ? '?' + q : ''}`);
      },
      get: (id) => r('GET', `/api/v1/workflows/${id}`),
      create: (params) => r('POST', '/api/v1/workflows', params),
      update: (id, params) => r('PATCH', `/api/v1/workflows/${id}`, params),
      delete: (id) => r('DELETE', `/api/v1/workflows/${id}`),
      activate: (id) => r('POST', `/api/v1/workflows/${id}/activate`),
      deactivate: (id) => r('POST', `/api/v1/workflows/${id}/deactivate`),
      trigger: (id, params) => r('POST', `/api/v1/workflows/${id}/trigger`, params),
    },

    // ── Connections ──────────────────────────────────────────────────────────

    connections: {
      list: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return r('GET', `/api/v1/connections${q ? '?' + q : ''}`);
      },
      get: (id) => r('GET', `/api/v1/connections/${id}`),
      create: (params) => r('POST', '/api/v1/connections', params),
      update: (id, params) => r('PATCH', `/api/v1/connections/${id}`, params),
      delete: (id) => r('DELETE', `/api/v1/connections/${id}`),
    },

    // ── Apps & Catalog ───────────────────────────────────────────────────────

    apps: {
      list: () => r('GET', '/api/v1/apps'),
      get: (appKey) => r('GET', `/api/v1/apps/${appKey}`),
    },

    // ── Workflow Runs ────────────────────────────────────────────────────────

    runs: {
      listAll: (params = {}) => {
        const q = new URLSearchParams(params).toString();
        return r('GET', `/api/v1/runs${q ? '?' + q : ''}`);
      },
      listByWorkflow: (workflowId, params = {}) => {
        const q = new URLSearchParams(params).toString();
        return r('GET', `/api/v1/workflows/${workflowId}/runs${q ? '?' + q : ''}`);
      },
      get: (workflowId, runId) => r('GET', `/api/v1/workflows/${workflowId}/runs/${runId}`),
      cancel: (workflowId, runId) => r('POST', `/api/v1/workflows/${workflowId}/runs/${runId}/cancel`),
      getStats: (workflowId) => r('GET', `/api/v1/workflows/${workflowId}/runs/stats`),
      listSteps: (runId) => r('GET', `/api/v1/runs/${runId}/steps`),
      getStep: (runId, stepId) => r('GET', `/api/v1/runs/${runId}/steps/${stepId}`),
    },
  };
}

module.exports = { crescendo, CrescendoError };
module.exports.crescendo = crescendo;
module.exports.CrescendoError = CrescendoError;
