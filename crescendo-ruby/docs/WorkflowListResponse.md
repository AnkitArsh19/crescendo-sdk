# Crescendo::WorkflowListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;WorkflowSummaryResponse&gt;**](WorkflowSummaryResponse.md) |  | [optional] |
| **next_cursor** | **String** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::WorkflowListResponse.new(
  data: null,
  next_cursor: null
)
```

