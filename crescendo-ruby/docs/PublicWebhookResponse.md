# Crescendo::PublicWebhookResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **url** | **String** |  | [optional] |
| **signing_secret** | **String** |  | [optional] |
| **subscribed_events** | **Array&lt;String&gt;** |  | [optional] |
| **created_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PublicWebhookResponse.new(
  id: null,
  url: null,
  signing_secret: null,
  subscribed_events: null,
  created_at: null
)
```

