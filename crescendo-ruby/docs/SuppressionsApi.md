# Crescendo::SuppressionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_suppression**](SuppressionsApi.md#add_suppression) | **POST** /api/v1/suppressions | Add a suppression |
| [**import_suppressions**](SuppressionsApi.md#import_suppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions |
| [**list_suppressions**](SuppressionsApi.md#list_suppressions) | **GET** /api/v1/suppressions | List suppressions |
| [**remove_suppression**](SuppressionsApi.md#remove_suppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression |


## add_suppression

> add_suppression(add_suppression_request)

Add a suppression

Manually suppresses an email address. Requires suppression:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::SuppressionsApi.new
add_suppression_request = Crescendo::AddSuppressionRequest.new({email: 'email_example'}) # AddSuppressionRequest | 

begin
  # Add a suppression
  api_instance.add_suppression(add_suppression_request)
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->add_suppression: #{e}"
end
```

#### Using the add_suppression_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> add_suppression_with_http_info(add_suppression_request)

```ruby
begin
  # Add a suppression
  data, status_code, headers = api_instance.add_suppression_with_http_info(add_suppression_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->add_suppression_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **add_suppression_request** | [**AddSuppressionRequest**](AddSuppressionRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## import_suppressions

> import_suppressions(import_suppressions_request)

Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::SuppressionsApi.new
import_suppressions_request = Crescendo::ImportSuppressionsRequest.new # ImportSuppressionsRequest | 

begin
  # Bulk import suppressions
  api_instance.import_suppressions(import_suppressions_request)
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->import_suppressions: #{e}"
end
```

#### Using the import_suppressions_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> import_suppressions_with_http_info(import_suppressions_request)

```ruby
begin
  # Bulk import suppressions
  data, status_code, headers = api_instance.import_suppressions_with_http_info(import_suppressions_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->import_suppressions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **import_suppressions_request** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## list_suppressions

> <PublicPageSuppressionResponse> list_suppressions(opts)

List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::SuppressionsApi.new
opts = {
  limit: 56, # Integer | 
  after: 'after_example' # String | 
}

begin
  # List suppressions
  result = api_instance.list_suppressions(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->list_suppressions: #{e}"
end
```

#### Using the list_suppressions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicPageSuppressionResponse>, Integer, Hash)> list_suppressions_with_http_info(opts)

```ruby
begin
  # List suppressions
  data, status_code, headers = api_instance.list_suppressions_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicPageSuppressionResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->list_suppressions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **Integer** |  | [optional][default to 100] |
| **after** | **String** |  | [optional] |

### Return type

[**PublicPageSuppressionResponse**](PublicPageSuppressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## remove_suppression

> remove_suppression(suppression_id)

Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::SuppressionsApi.new
suppression_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete a suppression
  api_instance.remove_suppression(suppression_id)
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->remove_suppression: #{e}"
end
```

#### Using the remove_suppression_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> remove_suppression_with_http_info(suppression_id)

```ruby
begin
  # Delete a suppression
  data, status_code, headers = api_instance.remove_suppression_with_http_info(suppression_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling SuppressionsApi->remove_suppression_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **suppression_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

