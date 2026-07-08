# Crescendo::EmailLogResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **to** | **String** |  | [optional] |
| **from** | **String** |  | [optional] |
| **subject** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **provider** | **String** |  | [optional] |
| **provider_message_id** | **String** |  | [optional] |
| **error** | **String** |  | [optional] |
| **template_id** | **String** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **sent_at** | **Time** |  | [optional] |
| **opened_at** | **Time** |  | [optional] |
| **open_count** | **Integer** |  | [optional] |
| **click_count** | **Integer** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::EmailLogResponse.new(
  id: null,
  to: null,
  from: null,
  subject: null,
  status: null,
  provider: null,
  provider_message_id: null,
  error: null,
  template_id: null,
  created_at: null,
  sent_at: null,
  opened_at: null,
  open_count: null,
  click_count: null
)
```

