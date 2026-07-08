#!/usr/bin/env node
/**
 * crescendo-cli
 * 
 * Official CLI for the Crescendo Email Service API.
 * 
 * Usage:
 *   crescendo send --from hi@myapp.com --to user@example.com --subject "Hello" --html "<h1>Hi</h1>"
 *   crescendo templates list
 *   crescendo templates publish <id>
 *   crescendo domains list
 *   crescendo domains add mail.myapp.com
 *   crescendo logs list --status BOUNCED --limit 20
 *   crescendo suppressions list
 *   crescendo suppressions add user@example.com
 *   crescendo webhooks list
 *   crescendo webhooks add --url https://myapp.com/hook --events email.delivered,email.bounced
 */

'use strict';

const { crescendo, CrescendoError } = require('@crescendo/email');
const fs = require('fs');

// ─── Parse args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

function flag(name, defaultVal) {
  const idx = args.indexOf(`--${name}`);
  if (idx === -1) return defaultVal;
  return args[idx + 1];
}

function hasFlag(name) {
  return args.includes(`--${name}`);
}

function positional(idx) {
  return args.filter(a => !a.startsWith('--'))[idx];
}

// ─── Config ────────────────────────────────────────────────────────────────────

const apiKey = process.env.CRESCENDO_API_KEY || flag('api-key');
if (!apiKey) {
  console.error('Error: CRESCENDO_API_KEY environment variable or --api-key flag is required.');
  process.exit(1);
}

const client = crescendo({ apiKey });

// ─── Output helpers ────────────────────────────────────────────────────────────

function out(data) {
  if (hasFlag('json')) {
    process.stdout.write(JSON.stringify(data, null, 2) + '\n');
  } else {
    prettyPrint(data);
  }
}

function prettyPrint(data) {
  if (Array.isArray(data)) {
    data.forEach(item => prettyPrint(item));
    return;
  }
  if (typeof data === 'object' && data !== null) {
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k.padEnd(24)} ${v}`);
    });
    console.log('');
  } else {
    console.log(data);
  }
}

function err(msg) {
  console.error(`\x1b[31mError:\x1b[0m ${msg}`);
  process.exit(1);
}

// ─── Commands ──────────────────────────────────────────────────────────────────

const [cmd, subcmd, ...rest] = args.filter(a => !a.startsWith('--'));

async function run() {
  try {
    switch (cmd) {

      // ── send ───────────────────────────────────────────────────────────────
      case 'send': {
        const from    = flag('from');
        const to      = flag('to');
        const subject = flag('subject');
        const htmlFile = flag('html-file');
        const html    = flag('html') || (htmlFile ? fs.readFileSync(htmlFile, 'utf8') : null);
        const text    = flag('text');
        const type    = flag('type', 'TRANSACTIONAL');

        if (!from || !to || !subject || !html) err('send requires --from, --to, --subject, and --html (or --html-file)');

        const result = await client.emails.send({
          from, to, subject, htmlBody: html, textBody: text, emailType: type,
        });
        console.log(`\x1b[32m✓\x1b[0m Queued email: ${result.emailId}`);
        out(result);
        break;
      }

      // ── templates ──────────────────────────────────────────────────────────
      case 'templates': {
        switch (subcmd) {
          case 'list': {
            const list = await client.templates.list();
            if (list.length === 0) { console.log('No templates found.'); break; }
            list.forEach(t => {
              const badge = t.status === 'PUBLISHED' ? '\x1b[32mPUBLISHED\x1b[0m' : '\x1b[33mDRAFT\x1b[0m';
              console.log(`  ${t.id}  ${t.name.padEnd(32)}  ${badge}`);
            });
            break;
          }
          case 'get': {
            const id = rest[0]; if (!id) err('templates get requires a template ID');
            out(await client.templates.get(id));
            break;
          }
          case 'publish': {
            const id = rest[0]; if (!id) err('templates publish requires a template ID');
            const result = await client.templates.publish(id);
            console.log(`\x1b[32m✓\x1b[0m Published template: ${result.name}`);
            break;
          }
          case 'delete': {
            const id = rest[0]; if (!id) err('templates delete requires a template ID');
            await client.templates.delete(id);
            console.log(`\x1b[32m✓\x1b[0m Deleted template: ${id}`);
            break;
          }
          default:
            console.error(`Unknown subcommand: templates ${subcmd}`);
            console.error('Available: list, get <id>, publish <id>, delete <id>');
        }
        break;
      }

      // ── domains ────────────────────────────────────────────────────────────
      case 'domains': {
        switch (subcmd) {
          case 'list': {
            const list = await client.domains.list();
            if (list.length === 0) { console.log('No domains found.'); break; }
            list.forEach(d => {
              const badge = d.status === 'VERIFIED' ? '\x1b[32mVERIFIED\x1b[0m' : '\x1b[33mPENDING\x1b[0m';
              console.log(`  ${d.id}  ${d.domainName.padEnd(40)}  ${badge}`);
            });
            break;
          }
          case 'add': {
            const name = rest[0]; if (!name) err('domains add requires a domain name');
            const result = await client.domains.add(name);
            console.log(`\x1b[32m✓\x1b[0m Domain added: ${result.domainName}`);
            console.log('\nAdd these DNS records:');
            (result.dnsRecords || []).forEach(r => {
              console.log(`  ${r.type.padEnd(6)} ${r.name.padEnd(40)} ${r.value}`);
            });
            break;
          }
          case 'verify': {
            const id = rest[0]; if (!id) err('domains verify requires a domain ID');
            const result = await client.domains.verify(id);
            console.log(`\x1b[32m✓\x1b[0m Verification triggered. Status: ${result.status}`);
            break;
          }
          case 'delete': {
            const id = rest[0]; if (!id) err('domains delete requires a domain ID');
            await client.domains.delete(id);
            console.log(`\x1b[32m✓\x1b[0m Deleted domain: ${id}`);
            break;
          }
          default:
            console.error(`Unknown subcommand: domains ${subcmd}`);
            console.error('Available: list, add <name>, verify <id>, delete <id>');
        }
        break;
      }

      // ── logs ───────────────────────────────────────────────────────────────
      case 'logs': {
        if (subcmd === 'list') {
          const status = flag('status');
          const limit  = parseInt(flag('limit', '20'), 10);
          const result = await client.emails.list({ status, limit });
          const items  = result.content || result;
          if (!items.length) { console.log('No email logs found.'); break; }
          items.forEach(log => {
            const s = log.status.padEnd(12);
            console.log(`  ${log.id}  ${s}  ${log.toAddress.padEnd(36)}  ${log.subject}`);
          });
        } else {
          console.error('Available: logs list [--status STATUS] [--limit N]');
        }
        break;
      }

      // ── suppressions ───────────────────────────────────────────────────────
      case 'suppressions': {
        switch (subcmd) {
          case 'list': {
            const list = await client.suppressions.list();
            if (!list.length) { console.log('No suppressions.'); break; }
            list.forEach(s => console.log(`  ${s.email.padEnd(40)}  ${s.reason}`));
            break;
          }
          case 'add': {
            const email  = rest[0]; if (!email) err('suppressions add requires an email address');
            const reason = flag('reason', 'MANUAL');
            await client.suppressions.suppress(email, reason);
            console.log(`\x1b[32m✓\x1b[0m Suppressed: ${email}`);
            break;
          }
          case 'remove': {
            const email = rest[0]; if (!email) err('suppressions remove requires an email address');
            await client.suppressions.unsuppress(email);
            console.log(`\x1b[32m✓\x1b[0m Removed suppression: ${email}`);
            break;
          }
          default:
            console.error('Available: suppressions list, add <email>, remove <email>');
        }
        break;
      }

      // ── webhooks ───────────────────────────────────────────────────────────
      case 'webhooks': {
        switch (subcmd) {
          case 'list': {
            const list = await client.webhooks.list();
            if (!list.length) { console.log('No webhook subscriptions.'); break; }
            list.forEach(w => {
              console.log(`  ${w.id}  ${w.url}`);
              console.log(`       Events: ${w.events.join(', ')}`);
            });
            break;
          }
          case 'add': {
            const url    = flag('url'); if (!url) err('webhooks add requires --url');
            const events = (flag('events') || '').split(',').map(e => e.trim()).filter(Boolean);
            if (!events.length) err('webhooks add requires --events (comma-separated)');
            const result = await client.webhooks.create({ url, events });
            console.log(`\x1b[32m✓\x1b[0m Webhook created: ${result.id}`);
            console.log(`  Secret: ${result.secret}`);
            break;
          }
          case 'delete': {
            const id = rest[0]; if (!id) err('webhooks delete requires a webhook ID');
            await client.webhooks.delete(id);
            console.log(`\x1b[32m✓\x1b[0m Deleted webhook: ${id}`);
            break;
          }
          default:
            console.error('Available: webhooks list, add --url <url> --events <events>, delete <id>');
        }
        break;
      }

      // ── workflows ──────────────────────────────────────────────────────────
      case 'workflows': {
        switch (subcmd) {
          case 'list': {
            const data = await client.workflows.list();
            out(data.content || data);
            break;
          }
          case 'trigger': {
            const id = rest[0]; if (!id) err('workflows trigger requires a workflow ID');
            const result = await client.workflows.trigger(id, {});
            console.log(`\x1b[32m✓\x1b[0m Workflow triggered: Run ID ${result.runId}`);
            break;
          }
          case 'activate': {
            const id = rest[0]; if (!id) err('workflows activate requires a workflow ID');
            await client.workflows.activate(id);
            console.log(`\x1b[32m✓\x1b[0m Workflow activated`);
            break;
          }
          case 'deactivate': {
            const id = rest[0]; if (!id) err('workflows deactivate requires a workflow ID');
            await client.workflows.deactivate(id);
            console.log(`\x1b[32m✓\x1b[0m Workflow deactivated`);
            break;
          }
          case 'delete': {
            const id = rest[0]; if (!id) err('workflows delete requires a workflow ID');
            await client.workflows.delete(id);
            console.log(`\x1b[32m✓\x1b[0m Workflow deleted`);
            break;
          }
          default:
            console.error('Available: workflows list, trigger <id>, activate <id>, deactivate <id>, delete <id>');
        }
        break;
      }

      // ── connections ────────────────────────────────────────────────────────
      case 'connections': {
        switch (subcmd) {
          case 'list': {
            const data = await client.connections.list();
            out(data.content || data);
            break;
          }
          default:
            console.error('Available: connections list');
        }
        break;
      }

      // ── apps ───────────────────────────────────────────────────────────────
      case 'apps': {
        switch (subcmd) {
          case 'list': {
            const data = await client.apps.list();
            out(data);
            break;
          }
          default:
            console.error('Available: apps list');
        }
        break;
      }

      // ── help ───────────────────────────────────────────────────────────────
      case 'help':
      case '--help':
      case '-h':
      case undefined:
        printHelp();
        break;

      default:
        console.error(`Unknown command: ${cmd}`);
        printHelp();
        process.exit(1);
    }
  } catch (e) {
    if (e instanceof CrescendoError) {
      err(`${e.message} (HTTP ${e.statusCode})`);
    }
    throw e;
  }
}

function printHelp() {
  console.log(`
\x1b[1mCrescendo CLI\x1b[0m — Email & Workflow Automation
\x1b[36mWorkflows\x1b[0m
  crescendo workflows list
  crescendo workflows trigger <id>
  crescendo workflows activate <id>
  crescendo workflows deactivate <id>
  crescendo workflows delete <id>
  crescendo connections list
  crescendo apps list

\x1b[36mEmail\x1b[0m
  crescendo send --from <from> --to <to> --subject <subject> --html <html>
  crescendo send --from <from> --to <to> --subject <subject> --html-file email.html

\x1b[36mTemplates\x1b[0m
  crescendo templates list
  crescendo templates get <id>
  crescendo templates publish <id>
  crescendo templates delete <id>

\x1b[36mDomains\x1b[0m
  crescendo domains list
  crescendo domains add <domain>
  crescendo domains verify <id>
  crescendo domains delete <id>

\x1b[36mEmail Logs\x1b[0m
  crescendo logs list [--status BOUNCED] [--limit 20]

\x1b[36mSuppressions\x1b[0m
  crescendo suppressions list
  crescendo suppressions add <email> [--reason MANUAL]
  crescendo suppressions remove <email>

\x1b[36mWebhooks\x1b[0m
  crescendo webhooks list
  crescendo webhooks add --url <url> --events email.delivered,email.bounced
  crescendo webhooks delete <id>

\x1b[36mGlobal flags\x1b[0m
  --api-key <key>   Override CRESCENDO_API_KEY env var
  --json            Output raw JSON instead of formatted output
`);
}

run();
