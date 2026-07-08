# Crescendo::WorkflowRunStatsResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_runs** | **Integer** |  | [optional] |
| **success_count** | **Integer** |  | [optional] |
| **failed_count** | **Integer** |  | [optional] |
| **running_count** | **Integer** |  | [optional] |
| **pending_count** | **Integer** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::WorkflowRunStatsResponse.new(
  total_runs: null,
  success_count: null,
  failed_count: null,
  running_count: null,
  pending_count: null
)
```

