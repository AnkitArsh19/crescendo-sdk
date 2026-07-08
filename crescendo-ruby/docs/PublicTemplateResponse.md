# Crescendo::PublicTemplateResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **subject** | **String** |  | [optional] |
| **html_body** | **String** |  | [optional] |
| **text_body** | **String** |  | [optional] |
| **status** | **String** |  | [optional] |
| **variables** | [**Array&lt;TemplateVariable&gt;**](TemplateVariable.md) |  | [optional] |
| **has_published_snapshot** | **Boolean** |  | [optional] |
| **published_at** | **Time** |  | [optional] |
| **created_at** | **Time** |  | [optional] |
| **updated_at** | **Time** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::PublicTemplateResponse.new(
  id: null,
  name: null,
  subject: null,
  html_body: null,
  text_body: null,
  status: null,
  variables: null,
  has_published_snapshot: null,
  published_at: null,
  created_at: null,
  updated_at: null
)
```

