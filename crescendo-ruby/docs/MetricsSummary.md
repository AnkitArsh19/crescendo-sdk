# Crescendo::MetricsSummary

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total** | **Integer** |  | [optional] |
| **pending** | **Integer** |  | [optional] |
| **sent** | **Integer** |  | [optional] |
| **delivered** | **Integer** |  | [optional] |
| **failed** | **Integer** |  | [optional] |
| **bounced** | **Integer** |  | [optional] |
| **suppressed** | **Integer** |  | [optional] |
| **total_opens** | **Integer** |  | [optional] |
| **total_clicks** | **Integer** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::MetricsSummary.new(
  total: null,
  pending: null,
  sent: null,
  delivered: null,
  failed: null,
  bounced: null,
  suppressed: null,
  total_opens: null,
  total_clicks: null
)
```

