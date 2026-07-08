# Crescendo::MetricsResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **summary** | [**MetricsSummary**](MetricsSummary.md) |  | [optional] |
| **daily** | [**Array&lt;DailyCount&gt;**](DailyCount.md) |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::MetricsResponse.new(
  summary: null,
  daily: null
)
```

