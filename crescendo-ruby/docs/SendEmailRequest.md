# Crescendo::SendEmailRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **from** | **String** |  |  |
| **to** | **String** |  |  |
| **subject** | **String** |  |  |
| **html_body** | **String** |  | [optional] |
| **text_body** | **String** |  | [optional] |
| **template_id** | **String** |  | [optional] |
| **template_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **email_type** | **String** |  |  |

## Example

```ruby
require 'crescendo'

instance = Crescendo::SendEmailRequest.new(
  from: null,
  to: null,
  subject: null,
  html_body: null,
  text_body: null,
  template_id: null,
  template_data: null,
  email_type: null
)
```

