# Crescendo::AppSummaryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **app_key** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **logo_url** | **String** |  | [optional] |
| **auth_type** | **String** |  | [optional] |
| **alt_auth_type** | **String** |  | [optional] |
| **credential_schema** | **Array&lt;Hash&lt;String, Object&gt;&gt;** |  | [optional] |
| **category** | **String** |  | [optional] |
| **help_url** | **String** |  | [optional] |
| **internal** | **Boolean** |  | [optional] |
| **has_platform_key** | **Boolean** |  | [optional] |

## Example

```ruby
require 'crescendo'

instance = Crescendo::AppSummaryResponse.new(
  app_key: null,
  name: null,
  description: null,
  logo_url: null,
  auth_type: null,
  alt_auth_type: null,
  credential_schema: null,
  category: null,
  help_url: null,
  internal: null,
  has_platform_key: null
)
```

