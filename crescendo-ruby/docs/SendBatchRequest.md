# Crescendo::SendBatchRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **from** | **String** |  |  |
| **subject** | **String** |  |  |
| **html_body** | **String** |  | [optional] |
| **text_body** | **String** |  | [optional] |
| **template_id** | **String** |  | [optional] |
| **template_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **email_type** | **String** |  | [optional] |
| **to** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'crescendo'

instance = Crescendo::SendBatchRequest.new(
  from: null,
  subject: null,
  html_body: null,
  text_body: null,
  template_id: null,
  template_data: null,
  email_type: null,
  to: null
)
```

