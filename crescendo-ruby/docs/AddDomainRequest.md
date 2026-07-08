# Crescendo::AddDomainRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **domain_name** | **String** |  |  |
| **allowed_email_type** | **String** |  | [optional] |
| **credential_source** | **String** |  | [optional] |
| **email_provider_connection_id** | **String** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::AddDomainRequest.new(
  domain_name: null,
  allowed_email_type: null,
  credential_source: null,
  email_provider_connection_id: null
)
```

