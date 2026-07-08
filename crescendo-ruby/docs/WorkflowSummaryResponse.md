# Crescendo::WorkflowSummaryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **is_active** | **Boolean** |  | [optional] |
| **status** | **String** |  | [optional] |
| **step_count** | **Integer** |  | [optional] |
| **revision** | **Integer** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **updated_at** | **Time** |  | [optional] |
| **last_run_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::WorkflowSummaryResponse.new(
  id: null,
  name: null,
  description: null,
  is_active: null,
  status: null,
  step_count: null,
  revision: null,
  created_at: null,
  updated_at: null,
  last_run_at: null
)
```

