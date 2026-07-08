# Crescendo::PublicWebhookListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **url** | **String** |  | [optional] |
| **subscribed_events** | **Array&lt;String&gt;** |  | [optional] |
| **created_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PublicWebhookListResponse.new(
  id: null,
  url: null,
  subscribed_events: null,
  created_at: null
)
```

