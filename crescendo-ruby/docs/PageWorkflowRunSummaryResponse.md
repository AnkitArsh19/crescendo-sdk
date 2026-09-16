# Crescendo::PageWorkflowRunSummaryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_pages** | **Integer** |  | [optional] |
| **total_elements** | **Integer** |  | [optional] |
| **size** | **Integer** |  | [optional] |
| **content** | [**Array&lt;WorkflowRunSummaryResponse&gt;**](WorkflowRunSummaryResponse.md) |  | [optional] |
| **number** | **Integer** |  | [optional] |
| **pageable** | [**PageableObject**](PageableObject.md) |  | [optional] |
| **sort** | [**SortObject**](SortObject.md) |  | [optional] |
| **number_of_elements** | **Integer** |  | [optional] |
| **first** | **Boolean** |  | [optional] |
| **last** | **Boolean** |  | [optional] |
| **empty** | **Boolean** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PageWorkflowRunSummaryResponse.new(
  total_pages: null,
  total_elements: null,
  size: null,
  content: null,
  number: null,
  pageable: null,
  sort: null,
  number_of_elements: null,
  first: null,
  last: null,
  empty: null
)
```

