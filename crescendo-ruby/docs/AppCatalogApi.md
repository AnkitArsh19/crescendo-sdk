# Crescendo::AppCatalogApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_app**](AppCatalogApi.md#get_app) | **GET** /api/v1/apps/{appKey} | Get app details |
| [**list_apps**](AppCatalogApi.md#list_apps) | **GET** /api/v1/apps | List apps |


## get_app

> <AppDetailResponse> get_app(app_key)

Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AppCatalogApi.new
app_key = 'app_key_example' # String | 

begin
  # Get app details
  result = api_instance.get_app(app_key)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AppCatalogApi->get_app: #{e}"
end
```

#### Using the get_app_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AppDetailResponse>, Integer, Hash)> get_app_with_http_info(app_key)

```ruby
begin
  # Get app details
  data, status_code, headers = api_instance.get_app_with_http_info(app_key)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AppDetailResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling AppCatalogApi->get_app_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **app_key** | **String** |  |  |

### Return type

[**AppDetailResponse**](AppDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_apps

> <Array<AppSummaryResponse>> list_apps

List apps

Lists all supported apps in the catalog. Requires app:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AppCatalogApi.new

begin
  # List apps
  result = api_instance.list_apps
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AppCatalogApi->list_apps: #{e}"
end
```

#### Using the list_apps_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<AppSummaryResponse>>, Integer, Hash)> list_apps_with_http_info

```ruby
begin
  # List apps
  data, status_code, headers = api_instance.list_apps_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<AppSummaryResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling AppCatalogApi->list_apps_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AppSummaryResponse&gt;**](AppSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

