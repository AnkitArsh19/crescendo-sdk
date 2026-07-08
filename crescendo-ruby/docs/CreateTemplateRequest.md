# Crescendo::CreateTemplateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **subject** | **String** |  |  |
| **html_body** | **String** |  |  |
| **text_body** | **String** |  | [optional] |
| **variables** | [**Array&lt;TemplateVariable&gt;**](TemplateVariable.md) |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::CreateTemplateRequest.new(
  name: null,
  subject: null,
  html_body: null,
  text_body: null,
  variables: null
)
```

