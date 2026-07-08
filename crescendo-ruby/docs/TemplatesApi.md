# Crescendo::TemplatesApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clone_from_broadcast**](TemplatesApi.md#clone_from_broadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} |  |
| [**create_template**](TemplatesApi.md#create_template) | **POST** /api/v1/templates |  |
| [**delete_template**](TemplatesApi.md#delete_template) | **DELETE** /api/v1/templates/{templateId} |  |
| [**get_template**](TemplatesApi.md#get_template) | **GET** /api/v1/templates/{templateId} |  |
| [**list_templates**](TemplatesApi.md#list_templates) | **GET** /api/v1/templates |  |
| [**publish_template**](TemplatesApi.md#publish_template) | **POST** /api/v1/templates/{templateId}/publish |  |
| [**test_send**](TemplatesApi.md#test_send) | **POST** /api/v1/templates/{templateId}/test |  |
| [**update_template**](TemplatesApi.md#update_template) | **PATCH** /api/v1/templates/{templateId} |  |


## clone_from_broadcast

> <PublicTemplateResponse> clone_from_broadcast(broadcast_id)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
broadcast_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  
  result = api_instance.clone_from_broadcast(broadcast_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->clone_from_broadcast: #{e}"
end
```

#### Using the clone_from_broadcast_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTemplateResponse>, Integer, Hash)> clone_from_broadcast_with_http_info(broadcast_id)

```ruby
begin
  
  data, status_code, headers = api_instance.clone_from_broadcast_with_http_info(broadcast_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTemplateResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->clone_from_broadcast_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **broadcast_id** | **String** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## create_template

> <PublicTemplateResponse> create_template(create_template_request, opts)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
create_template_request = Crescendo::CreateTemplateRequest.new({name: 'name_example', subject: 'subject_example', html_body: 'html_body_example'}) # CreateTemplateRequest | 
opts = {
  idempotency_key: 'idempotency_key_example' # String | 
}

begin
  
  result = api_instance.create_template(create_template_request, opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->create_template: #{e}"
end
```

#### Using the create_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTemplateResponse>, Integer, Hash)> create_template_with_http_info(create_template_request, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.create_template_with_http_info(create_template_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTemplateResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->create_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_template_request** | [**CreateTemplateRequest**](CreateTemplateRequest.md) |  |  |
| **idempotency_key** | **String** |  | [optional] |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_template

> delete_template(template_id)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
template_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  
  api_instance.delete_template(template_id)
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->delete_template: #{e}"
end
```

#### Using the delete_template_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_template_with_http_info(template_id)

```ruby
begin
  
  data, status_code, headers = api_instance.delete_template_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->delete_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_template

> <PublicTemplateResponse> get_template(template_id)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
template_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  
  result = api_instance.get_template(template_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->get_template: #{e}"
end
```

#### Using the get_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTemplateResponse>, Integer, Hash)> get_template_with_http_info(template_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_template_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTemplateResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->get_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_id** | **String** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_templates

> <Array<PublicTemplateResponse>> list_templates



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new

begin
  
  result = api_instance.list_templates
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->list_templates: #{e}"
end
```

#### Using the list_templates_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<PublicTemplateResponse>>, Integer, Hash)> list_templates_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.list_templates_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<PublicTemplateResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->list_templates_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;PublicTemplateResponse&gt;**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## publish_template

> <PublicTemplateResponse> publish_template(template_id)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
template_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  
  result = api_instance.publish_template(template_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->publish_template: #{e}"
end
```

#### Using the publish_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTemplateResponse>, Integer, Hash)> publish_template_with_http_info(template_id)

```ruby
begin
  
  data, status_code, headers = api_instance.publish_template_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTemplateResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->publish_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_id** | **String** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## test_send

> <PublicTestSendResponse> test_send(template_id, test_send_request)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
template_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
test_send_request = Crescendo::TestSendRequest.new({to_address: 'to_address_example'}) # TestSendRequest | 

begin
  
  result = api_instance.test_send(template_id, test_send_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->test_send: #{e}"
end
```

#### Using the test_send_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTestSendResponse>, Integer, Hash)> test_send_with_http_info(template_id, test_send_request)

```ruby
begin
  
  data, status_code, headers = api_instance.test_send_with_http_info(template_id, test_send_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTestSendResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->test_send_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_id** | **String** |  |  |
| **test_send_request** | [**TestSendRequest**](TestSendRequest.md) |  |  |

### Return type

[**PublicTestSendResponse**](PublicTestSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## update_template

> <PublicTemplateResponse> update_template(template_id, update_template_request)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::TemplatesApi.new
template_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
update_template_request = Crescendo::UpdateTemplateRequest.new # UpdateTemplateRequest | 

begin
  
  result = api_instance.update_template(template_id, update_template_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->update_template: #{e}"
end
```

#### Using the update_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicTemplateResponse>, Integer, Hash)> update_template_with_http_info(template_id, update_template_request)

```ruby
begin
  
  data, status_code, headers = api_instance.update_template_with_http_info(template_id, update_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicTemplateResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling TemplatesApi->update_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_id** | **String** |  |  |
| **update_template_request** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md) |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

