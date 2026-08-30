# Crescendo::PageableObject

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **offset** | **Integer** |  | [optional] |
| **paged** | **Boolean** |  | [optional] |
| **page_number** | **Integer** |  | [optional] |
| **page_size** | **Integer** |  | [optional] |
| **sort** | [**SortObject**](SortObject.md) |  | [optional] |
| **unpaged** | **Boolean** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PageableObject.new(
  offset: null,
  paged: null,
  page_number: null,
  page_size: null,
  sort: null,
  unpaged: null
)
```

