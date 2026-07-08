# Crescendo::PageWorkflowRunSummaryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_pages** | **Integer** |  | [optional] |
| **total_elements** | **Integer** |  | [optional] |
| **pageable** | [**PageableObject**](PageableObject.md) |  | [optional] |
| **sort** | [**SortObject**](SortObject.md) |  | [optional] |
| **first** | **Boolean** |  | [optional] |
| **last** | **Boolean** |  | [optional] |
| **number_of_elements** | **Integer** |  | [optional] |
| **size** | **Integer** |  | [optional] |
| **content** | [**Array&lt;WorkflowRunSummaryResponse&gt;**](WorkflowRunSummaryResponse.md) |  | [optional] |
| **number** | **Integer** |  | [optional] |
| **empty** | **Boolean** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PageWorkflowRunSummaryResponse.new(
  total_pages: null,
  total_elements: null,
  pageable: null,
  sort: null,
  first: null,
  last: null,
  number_of_elements: null,
  size: null,
  content: null,
  number: null,
  empty: null
)
```

