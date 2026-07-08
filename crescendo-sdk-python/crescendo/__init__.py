"""
@package crescendo

Official Python SDK for the Crescendo Email Service API.

Usage:
    from crescendo import Crescendo

    client = Crescendo(api_key="cm_sk_...")

    # Send a transactional email
    result = client.emails.send(
        from_address="hi@myapp.com",
        to="user@example.com",
        subject="Welcome!",
        html_body="<h1>Hello {{FIRST_NAME}}</h1>",
    )

    # Send using a published template
    result = client.emails.send_templated(
        from_address="hi@myapp.com",
        to="user@example.com",
        template_id="3fa85f64-...",
        variables={"FIRST_NAME": "Alice"},
    )
"""

import os
import json
from typing import Any, Dict, List, Optional, Union
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from urllib.parse import urlencode


BASE_URL = os.environ.get("CRESCENDO_BASE_URL", "https://api.crescendo.run")


class CrescendoError(Exception):
    """Raised when the Crescendo API returns a non-2xx response."""

    def __init__(self, message: str, status_code: int, response: dict):
        super().__init__(message)
        self.status_code = status_code
        self.response = response


def _request(api_key: str, method: str, path: str, body: Optional[dict] = None) -> Any:
    url = f"{BASE_URL}{path}"
    data = json.dumps(body).encode() if body is not None else None
    req = Request(
        url,
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    )
    try:
        with urlopen(req) as resp:
            if resp.status == 204:
                return None
            return json.loads(resp.read())
    except HTTPError as e:
        body_raw = e.read()
        try:
            err_body = json.loads(body_raw)
        except Exception:
            err_body = {}
        raise CrescendoError(
            err_body.get("message", f"Crescendo API error: {e.code}"),
            e.code,
            err_body,
        ) from e


class _Emails:
    def __init__(self, api_key: str):
        self._key = api_key

    def send(
        self,
        *,
        from_address: str,
        to: str,
        subject: str,
        html_body: str,
        text_body: Optional[str] = None,
        email_type: str = "TRANSACTIONAL",
        tags: Optional[Dict[str, str]] = None,
    ) -> dict:
        """Send a single email."""
        payload: Dict[str, Any] = {
            "from": from_address,
            "to": to,
            "subject": subject,
            "htmlBody": html_body,
            "emailType": email_type,
        }
        if text_body:
            payload["textBody"] = text_body
        if tags:
            payload["tags"] = tags
        return _request(self._key, "POST", "/api/v1/emails", payload)

    def send_templated(
        self,
        *,
        from_address: str,
        to: str,
        template_id: str,
        variables: Optional[Dict[str, Any]] = None,
        email_type: str = "TRANSACTIONAL",
    ) -> dict:
        """Send an email using a published template."""
        payload: Dict[str, Any] = {
            "from": from_address,
            "to": to,
            "templateId": template_id,
            "emailType": email_type,
        }
        if variables:
            payload["variables"] = variables
        return _request(self._key, "POST", "/api/v1/emails/templated", payload)

    def send_batch(
        self,
        *,
        from_address: str,
        subject: str,
        html_body: str,
        recipients: List[Union[str, Dict[str, Any]]],
        email_type: str = "TRANSACTIONAL",
    ) -> dict:
        """Send emails to multiple recipients in a single request (max 100)."""
        return _request(self._key, "POST", "/api/v1/emails/batch", {
            "from": from_address,
            "subject": subject,
            "htmlBody": html_body,
            "recipients": recipients,
            "emailType": email_type,
        })

    def get(self, email_id: str) -> dict:
        """Get the delivery status of a sent email."""
        return _request(self._key, "GET", f"/api/v1/emails/{email_id}")

    def list(
        self,
        *,
        status: Optional[str] = None,
        domain_id: Optional[str] = None,
        after: Optional[str] = None,
        limit: int = 20,
        tags: Optional[Dict[str, str]] = None,
    ) -> dict:
        """List email logs with optional filtering."""
        params: Dict[str, Any] = {"limit": limit}
        if status:
            params["status"] = status
        if domain_id:
            params["domainId"] = domain_id
        if after:
            params["after"] = after
        if tags:
            for k, v in tags.items():
                params[f"tag.{k}"] = v
        query = urlencode(params)
        return _request(self._key, "GET", f"/api/v1/emails?{query}")


class _Templates:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self) -> list:
        return _request(self._key, "GET", "/api/v1/templates")

    def get(self, template_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/templates/{template_id}")

    def create(
        self,
        *,
        name: str,
        subject: str,
        html_body: str,
        text_body: Optional[str] = None,
        variables: Optional[list] = None,
    ) -> dict:
        """Create a new DRAFT template."""
        payload: Dict[str, Any] = {"name": name, "subject": subject, "htmlBody": html_body}
        if text_body:
            payload["textBody"] = text_body
        if variables:
            payload["variables"] = variables
        return _request(self._key, "POST", "/api/v1/templates", payload)

    def update(self, template_id: str, **kwargs) -> dict:
        payload = {k: v for k, v in {
            "name": kwargs.get("name"),
            "subject": kwargs.get("subject"),
            "htmlBody": kwargs.get("html_body"),
            "textBody": kwargs.get("text_body"),
            "variables": kwargs.get("variables"),
        }.items() if v is not None}
        return _request(self._key, "PATCH", f"/api/v1/templates/{template_id}", payload)

    def delete(self, template_id: str) -> None:
        _request(self._key, "DELETE", f"/api/v1/templates/{template_id}")

    def publish(self, template_id: str) -> dict:
        """Validate all {{variables}} and freeze a publish snapshot."""
        return _request(self._key, "POST", f"/api/v1/templates/{template_id}/publish")

    def test_send(self, template_id: str, *, to_address: str, variables: Optional[dict] = None) -> dict:
        """Send a test email; does not count against production quotas."""
        return _request(self._key, "POST", f"/api/v1/templates/{template_id}/test", {
            "toAddress": to_address,
            "variables": variables or {},
        })

    def clone_from_broadcast(self, broadcast_id: str) -> dict:
        """Clone a broadcast's content into a new draft template."""
        return _request(self._key, "POST", f"/api/v1/templates/clone-from-broadcast/{broadcast_id}")


class _Suppressions:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self) -> list:
        return _request(self._key, "GET", "/api/v1/suppressions")

    def suppress(self, email: str, reason: str = "MANUAL") -> dict:
        return _request(self._key, "POST", "/api/v1/suppressions", {"email": email, "reason": reason})

    def unsuppress(self, email: str) -> None:
        from urllib.parse import quote
        _request(self._key, "DELETE", f"/api/v1/suppressions/{quote(email, safe='')}")


class _Domains:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self) -> list:
        return _request(self._key, "GET", "/api/v1/domains")

    def add(self, domain_name: str) -> dict:
        return _request(self._key, "POST", "/api/v1/domains", {"domainName": domain_name})

    def verify(self, domain_id: str) -> dict:
        return _request(self._key, "POST", f"/api/v1/domains/{domain_id}/verify")

    def delete(self, domain_id: str) -> None:
        _request(self._key, "DELETE", f"/api/v1/domains/{domain_id}")


class _Metrics:
    def __init__(self, api_key: str):
        self._key = api_key

    def get(self, *, domain_id: Optional[str] = None, days: int = 30) -> dict:
        params: Dict[str, Any] = {"days": days}
        if domain_id:
            params["domainId"] = domain_id
        return _request(self._key, "GET", f"/api/v1/metrics?{urlencode(params)}")


class _Webhooks:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self) -> list:
        return _request(self._key, "GET", "/api/v1/webhooks")

    def create(self, *, url: str, subscribed_events: List[str]) -> dict:
        """Create a webhook subscription. Use subscribed_events (not events)."""
        return _request(self._key, "POST", "/api/v1/webhooks", {"url": url, "subscribedEvents": subscribed_events})

    def delete(self, webhook_id: str) -> None:
        _request(self._key, "DELETE", f"/api/v1/webhooks/{webhook_id}")


class _Workflows:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self, **kwargs) -> dict:
        return _request(self._key, "GET", f"/api/v1/workflows?{urlencode(kwargs)}" if kwargs else "/api/v1/workflows")

    def get(self, workflow_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/workflows/{workflow_id}")

    def create(self, **kwargs) -> dict:
        return _request(self._key, "POST", "/api/v1/workflows", kwargs)

    def update(self, workflow_id: str, **kwargs) -> dict:
        return _request(self._key, "PATCH", f"/api/v1/workflows/{workflow_id}", kwargs)

    def delete(self, workflow_id: str) -> None:
        _request(self._key, "DELETE", f"/api/v1/workflows/{workflow_id}")

    def activate(self, workflow_id: str) -> None:
        _request(self._key, "POST", f"/api/v1/workflows/{workflow_id}/activate")

    def deactivate(self, workflow_id: str) -> None:
        _request(self._key, "POST", f"/api/v1/workflows/{workflow_id}/deactivate")

    def trigger(self, workflow_id: str, **kwargs) -> dict:
        return _request(self._key, "POST", f"/api/v1/workflows/{workflow_id}/trigger", kwargs)


class _Connections:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self, **kwargs) -> dict:
        return _request(self._key, "GET", f"/api/v1/connections?{urlencode(kwargs)}" if kwargs else "/api/v1/connections")

    def get(self, connection_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/connections/{connection_id}")

    def create(self, **kwargs) -> dict:
        return _request(self._key, "POST", "/api/v1/connections", kwargs)

    def update(self, connection_id: str, **kwargs) -> dict:
        return _request(self._key, "PATCH", f"/api/v1/connections/{connection_id}", kwargs)

    def delete(self, connection_id: str) -> None:
        _request(self._key, "DELETE", f"/api/v1/connections/{connection_id}")


class _Apps:
    def __init__(self, api_key: str):
        self._key = api_key

    def list(self) -> list:
        return _request(self._key, "GET", "/api/v1/apps")

    def get(self, app_key: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/apps/{app_key}")


class _Runs:
    def __init__(self, api_key: str):
        self._key = api_key

    def list_all(self, **kwargs) -> dict:
        return _request(self._key, "GET", f"/api/v1/runs?{urlencode(kwargs)}" if kwargs else "/api/v1/runs")

    def list_by_workflow(self, workflow_id: str, **kwargs) -> dict:
        return _request(self._key, "GET", f"/api/v1/workflows/{workflow_id}/runs?{urlencode(kwargs)}" if kwargs else f"/api/v1/workflows/{workflow_id}/runs")

    def get(self, workflow_id: str, run_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/workflows/{workflow_id}/runs/{run_id}")

    def cancel(self, workflow_id: str, run_id: str) -> None:
        _request(self._key, "POST", f"/api/v1/workflows/{workflow_id}/runs/{run_id}/cancel")

    def get_stats(self, workflow_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/workflows/{workflow_id}/runs/stats")

    def list_steps(self, run_id: str) -> list:
        return _request(self._key, "GET", f"/api/v1/runs/{run_id}/steps")

    def get_step(self, run_id: str, step_id: str) -> dict:
        return _request(self._key, "GET", f"/api/v1/runs/{run_id}/steps/{step_id}")


class _Contacts:
    """Audience/contact management. Backend routes are /api/v1/audiences."""

    def __init__(self, api_key: str):
        self._key = api_key

    def upsert(self, **kwargs) -> dict:
        """Create or update a contact (audience member) by email address."""
        return _request(self._key, "POST", "/api/v1/audiences", kwargs)

    def get(self, email: str) -> dict:
        """Get a contact by their email address."""
        from urllib.parse import quote
        return _request(self._key, "GET", f"/api/v1/audiences/{quote(email, safe='')}")

    def set_property(self, email: str, property: str, value) -> dict:
        """Set a custom property on a contact (drives dynamic audience segments)."""
        from urllib.parse import quote
        return _request(self._key, "PATCH", f"/api/v1/audiences/{quote(email, safe='')}/properties",
                        {"property": property, "value": value})

    def add_to_audience(self, email: str, audience_id: str) -> dict:
        """Add a contact to an audience."""
        return _request(self._key, "POST", f"/api/v1/audiences/{audience_id}/contacts", {"email": email})

    def remove_from_audience(self, email: str, audience_id: str) -> None:
        """Remove a contact from an audience."""
        from urllib.parse import quote
        _request(self._key, "DELETE", f"/api/v1/audiences/{audience_id}/contacts/{quote(email, safe='')}")


class Crescendo:
    """
    Crescendo Email Service client.

    Args:
        api_key: Your Crescendo API key (starts with `cm_sk_`).
                 Can also be set via the CRESCENDO_API_KEY environment variable.

    Example:
        client = Crescendo(api_key="cm_sk_...")
        client.emails.send(from_address="hi@app.com", to="user@example.com", subject="Hi", html_body="<p>Hello</p>")
    """

    def __init__(self, api_key: Optional[str] = None):
        key = api_key or os.environ.get("CRESCENDO_API_KEY")
        if not key:
            raise ValueError("Crescendo: api_key is required. Pass it directly or set CRESCENDO_API_KEY.")
        self.emails       = _Emails(key)
        self.templates    = _Templates(key)
        self.suppressions = _Suppressions(key)
        self.domains      = _Domains(key)
        self.metrics      = _Metrics(key)
        self.webhooks     = _Webhooks(key)
        self.workflows    = _Workflows(key)
        self.connections  = _Connections(key)
        self.apps         = _Apps(key)
        self.runs         = _Runs(key)
        self.contacts     = _Contacts(key)
