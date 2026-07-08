# Crescendo::WorkflowRunDetailResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **workflow_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **trigger_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **error_message** | **String** |  | [optional] |
| **step_runs** | [**Array&lt;StepRunResponse&gt;**](StepRunResponse.md) |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::WorkflowRunDetailResponse.new(
  id: null,
  workflow_id: null,
  status: null,
  trigger_data: null,
  error_message: null,
  step_runs: null,
  created_at: null,
  completed_at: null
)
```

