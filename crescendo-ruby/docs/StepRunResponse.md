# Crescendo::StepRunResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **step_id** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **input_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **output_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **error_message** | **String** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **completed_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::StepRunResponse.new(
  id: null,
  step_id: null,
  status: null,
  input_data: null,
  output_data: null,
  error_message: null,
  created_at: null,
  completed_at: null
)
```

