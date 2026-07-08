# Crescendo::SendTemplatedRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **from** | **String** |  |  |
| **to** | **String** |  |  |
| **template_id** | **String** |  |  |
| **template_data** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **email_type** | **String** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::SendTemplatedRequest.new(
  from: null,
  to: null,
  template_id: null,
  template_data: null,
  email_type: null
)
```

