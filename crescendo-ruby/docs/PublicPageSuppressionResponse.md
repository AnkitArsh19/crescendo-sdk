# Crescendo::PublicPageSuppressionResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | [**Array&lt;SuppressionResponse&gt;**](SuppressionResponse.md) |  | [optional] |
| **has_more** | **Boolean** |  | [optional] |
| **next_cursor** | **String** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PublicPageSuppressionResponse.new(
  data: null,
  has_more: null,
  next_cursor: null
)
```

