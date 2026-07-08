# EMAIL_SKILL.md — Crescendo Email Service

This file teaches AI coding assistants (Claude Code, Cursor, Copilot) how to correctly integrate with the Crescendo Email API. Read this before generating any code that sends email, manages templates, or handles email events.

---

## What is Crescendo?

Crescendo is a workflow-automation platform with a built-in transactional/marketing email service module (`crescendomail`). It is _not_ a standalone ESP — it is a platform that combines email sending, visual template builder, contact management, deliverability monitoring, and workflow automation into one product.

API base URL: `https://api.crescendo.run`  
Auth: Bearer token (`Authorization: Bearer cm_sk_...`)

---

## Quick-start: Sending an email

### Node.js

```js
import { crescendo } from '@crescendo/email';

const client = crescendo({ apiKey: process.env.CRESCENDO_API_KEY });

// Send a single transactional email
await client.emails.send({
  from: 'hello@myapp.com',    // must be a verified domain
  to: 'user@example.com',
  subject: 'Welcome to MyApp, {{FIRST_NAME}}!',
  htmlBody: '<h1>Hi {{FIRST_NAME}},</h1><p>Welcome aboard!</p>',
  emailType: 'TRANSACTIONAL',
});
```

### Python

```python
from crescendo import Crescendo
import os

client = Crescendo(api_key=os.environ["CRESCENDO_API_KEY"])

client.emails.send(
    from_address="hello@myapp.com",
    to="user@example.com",
    subject="Welcome!",
    html_body="<h1>Hi {{FIRST_NAME}}</h1><p>Welcome aboard.</p>",
)
```

### cURL

```bash
curl -X POST https://api.crescendo.run/api/v1/emails \
  -H "Authorization: Bearer $CRESCENDO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "hello@myapp.com",
    "to": "user@example.com",
    "subject": "Welcome!",
    "htmlBody": "<h1>Hello</h1>",
    "emailType": "TRANSACTIONAL"
  }'
```

---

## Email types

| `emailType` | When to use |
|---|---|
| `TRANSACTIONAL` | Password resets, order confirmations, receipts, one-time codes |
| `MARKETING` | Newsletters, promotional campaigns, broadcasts |

**Important:** Marketing emails require a verified domain with a working unsubscribe link. Use `TRANSACTIONAL` for all automated, account-driven emails.

---

## Templates

Templates support `{{VARIABLE_NAME}}` interpolation. Templates must be **Published** before they can be referenced in send calls. Editing a published template does _not_ retroactively change already-sent emails.

### Reserved variables (always available, no declaration needed)

| Variable | Value injected at runtime |
|---|---|
| `{{FIRST_NAME}}` | Contact's first name |
| `{{LAST_NAME}}` | Contact's last name |
| `{{EMAIL}}` | Recipient email address |
| `{{CRESCENDO_UNSUBSCRIBE_URL}}` | Signed one-click unsubscribe URL |

### Template lifecycle

```
DRAFT → (publish) → PUBLISHED
                     ↓
              referenced in send calls
```

Any edit to a published template reverts it to DRAFT. Re-publish after editing.

### Sending with a template

```js
await client.emails.sendTemplated({
  from: 'hello@myapp.com',
  to: 'user@example.com',
  templateId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  variables: { ORDER_ID: '#12345', TOTAL: '$99.00' },
});
```

---

## Variable syntax rules

- Syntax: `{{VARIABLE_NAME}}` — double braces, uppercase recommended.
- Only declared variables (or reserved names above) are allowed in published templates.
- Declare variables in the template's `variables` array: `{ name: 'ORDER_ID', type: 'STRING', fallbackValue: 'N/A' }`.
- If a variable has no `fallbackValue`, it **must** be supplied at send time or the call will fail with 422.

---

## Domains

Every `from` address must belong to a verified domain. Adding and verifying a domain:

```js
// 1. Add the domain
const domain = await client.domains.add('mail.myapp.com');
// 2. Add the returned DNS records to your DNS provider
// 3. Trigger verification
await client.domains.verify(domain.id);
```

Common mistake: using a `from` address on an unverified domain will return `422 Unprocessable Entity — domain not verified`.

---

## Suppressions

Crescendo automatically suppresses addresses on hard bounces and spam complaints. Never manually retry sending to a suppressed address — check first:

```js
// Always check before sending to an unknown address
const list = await client.suppressions.list();
const isSuppressed = list.some(s => s.email === targetEmail);
```

---

## Tagging emails for log correlation

Tags are key-value pairs attached to an email send. Auto-tag emails triggered from a workflow with `workflowRunId` and `stepRunId` to link Logbook workflow history to email logs:

```js
await client.emails.send({
  ...,
  tags: { workflowRunId: ctx.workflowRunId, stepRunId: ctx.stepId, customerId: '123' },
});
```

Tags are GIN-indexed in the database — use them freely, they are cheap to filter on.

---

## Outbound webhooks (event delivery)

Register a URL to receive email events in real time instead of polling:

```js
await client.webhooks.create({
  url: 'https://myapp.com/hooks/email',
  events: ['email.delivered', 'email.bounced', 'email.opened', 'email.complained'],
});
```

All events are signed with HMAC-SHA256 (`X-Crescendo-Signature` header). Verify the signature before processing:

```js
const crypto = require('crypto');

function verifyWebhook(rawBody, signature, secret) {
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
```

### Available event types

| Event | When it fires |
|---|---|
| `email.delivered` | Provider confirms delivery |
| `email.opened` | Open-tracking pixel hit |
| `email.clicked` | Tracked link clicked |
| `email.bounced` | Hard or soft bounce from provider |
| `email.complained` | Recipient marked as spam |
| `email.unsubscribed` | Global or per-topic unsubscribe |
| `domain.verification_changed` | Domain DNS check flipped status |
| `dmarc.alignment_failure` | DMARC aggregate report shows a failing source |

---

## Crescendo workflow nodes (`crescendomail`)

When building Crescendo workflows in code, use these node action keys:

| Action key | What it does |
|---|---|
| `crescendomail:send` | Send a raw HTML/text email |
| `crescendomail:send-templated` | Send using a published template ID |
| `crescendomail:send-batch` | Send to up to 100 recipients |
| `crescendomail:create-broadcast` | Create a draft broadcast |
| `crescendomail:send-broadcast` | Send or schedule a draft broadcast |
| `crescendomail:upsert-contact` | Create/update a contact |
| `crescendomail:set-contact-property` | Set a contact property (drives segments) |
| `crescendomail:add-to-audience` | Add contact to an audience |
| `crescendomail:remove-from-audience` | Remove contact from an audience |
| `crescendomail:suppress` | Manually suppress an address |
| `crescendomail:unsuppress` | Remove from suppression list |
| `crescendomail:get-status` | Fetch delivery status for an emailId |
| `crescendomail:wait-for-event` | Suspend workflow until email event fires |
| `crescendomail:verify-domain` | Trigger on-demand domain DNS re-check |

### `wait-for-event` — pausing a workflow until an email event fires

```js
// Workflow step config:
{
  appKey: 'crescendomail',
  actionKey: 'wait-for-event',
  configuration: {
    emailId: '{{steps.sendEmail.output.emailId}}',
    event: 'delivered',     // delivered | opened | clicked | bounced
    timeoutHours: 48,       // resume with TIMEOUT if no event after 48h
  }
}
```

---

## Common mistakes to avoid

1. **Sending from an unverified domain** → 422 error. Always verify the domain first.
2. **Using an unpublished template** → 422 error. Call `/publish` before referencing a template in a send.
3. **Missing required variable in send call** → 422 error. Declare variables with `fallbackValue` or supply them at send time.
4. **Polling for delivery status instead of using webhooks** → Inefficient. Register a webhook subscription for `email.delivered` instead.
5. **Sending MARKETING email without an unsubscribe link** → Will fail eligibility check. Always include `{{CRESCENDO_UNSUBSCRIBE_URL}}` in marketing templates.
6. **Retrying sends to suppressed addresses** → Check the suppression list first, or catch the `422 recipient suppressed` error and skip silently.

---

## Error codes

| HTTP Status | Meaning |
|---|---|
| `400` | Bad request — malformed JSON or missing required fields |
| `401` | Missing or invalid API key |
| `403` | Quota exceeded, or action not permitted |
| `404` | Resource not found (template, domain, email) |
| `422` | Business logic rejection — read the `message` field for details |
| `429` | Rate limit exceeded — back off with exponential retry |
| `500` | Internal server error — retry with backoff |

All errors return: `{ "message": "human-readable description", "code": "MACHINE_CODE" }`

---

## Rate limits

- Sends: 1,000 requests/minute per API key
- Template operations: 100 requests/minute
- Suppression reads: 500 requests/minute

---

## More resources

- API Reference: `https://api.crescendo.run/swagger-ui.html`
- Docs: `https://docs.crescendo.run`
- Node.js SDK: `@crescendo/email`
- Python SDK: `crescendo` (PyPI)
