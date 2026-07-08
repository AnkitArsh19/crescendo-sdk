# Crescendo::UpdateTemplateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [optional] |
| **subject** | **String** |  | [optional] |
| **html_body** | **String** |  | [optional] |
| **text_body** | **String** |  | [optional] |
| **variables** | [**Array&lt;TemplateVariable&gt;**](TemplateVariable.md) |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::UpdateTemplateRequest.new(
  name: null,
  subject: null,
  html_body: null,
  text_body: null,
  variables: null
)
```

