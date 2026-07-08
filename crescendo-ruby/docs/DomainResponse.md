# Crescendo::DomainResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **domain_name** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **required_dns_records** | [**Array&lt;DnsRecord&gt;**](DnsRecord.md) |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **verified_at** | **Time** |  | [optional] |
| **spf_verified** | **Boolean** |  | [optional] |
| **dkim_verified** | **Boolean** |  | [optional] |
| **dmarc_verified** | **Boolean** |  | [optional] |
| **daily_send_cap** | **Integer** |  | [optional] |
| **warming_status** | **String** |  | [optional] |
| **send_readiness** | **String** |  | [optional] |
| **allowed_email_type** | **String** |  | [optional] |
| **credential_source** | **String** |  | [optional] |
| **email_provider_connection_id** | **String** |  | [optional] |
| **health_status** | **String** |  | [optional] |
| **warnings** | **Array&lt;String&gt;** |  | [optional] |
| **tracking_enabled** | **Boolean** |  | [optional] |
| **unsubscribe_logo_url** | **String** |  | [optional] |
| **unsubscribe_primary_color** | **String** |  | [optional] |
| **unsubscribe_copy** | **String** |  | [optional] |
| **bimi_logo_url** | **String** |  | [optional] |
| **bimi_vmc_url** | **String** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::DomainResponse.new(
  id: null,
  domain_name: null,
  status: null,
  required_dns_records: null,
  created_at: null,
  verified_at: null,
  spf_verified: null,
  dkim_verified: null,
  dmarc_verified: null,
  daily_send_cap: null,
  warming_status: null,
  send_readiness: null,
  allowed_email_type: null,
  credential_source: null,
  email_provider_connection_id: null,
  health_status: null,
  warnings: null,
  tracking_enabled: null,
  unsubscribe_logo_url: null,
  unsubscribe_primary_color: null,
  unsubscribe_copy: null,
  bimi_logo_url: null,
  bimi_vmc_url: null
)
```

