# Crescendo::WorkflowRunSummaryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **workflow_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **error_message** | **String** |  | [optional] |
| **total_steps** | **Integer** |  | [optional] |
| **completed_steps** | **Integer** |  | [optional] |
| **failed_steps** | **Integer** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::WorkflowRunSummaryResponse.new(
  id: null,
  workflow_id: null,
  status: null,
  error_message: null,
  total_steps: null,
  completed_steps: null,
  failed_steps: null,
  created_at: null,
  completed_at: null
)
```

