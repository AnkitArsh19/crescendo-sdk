# Crescendo::ConnectionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_connection**](ConnectionsApi.md#create_connection) | **POST** /api/v1/connections | Create connection |
| [**delete_connection**](ConnectionsApi.md#delete_connection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection |
| [**get_connection**](ConnectionsApi.md#get_connection) | **GET** /api/v1/connections/{connectionId} | Get connection details |
| [**list_connections**](ConnectionsApi.md#list_connections) | **GET** /api/v1/connections | List connections |
| [**update_connection**](ConnectionsApi.md#update_connection) | **PATCH** /api/v1/connections/{connectionId} | Update connection |


## create_connection

> <ConnectionResponse> create_connection(create_connection_request)

Create connection

Creates a new connection for a third-party app. Requires connection:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::ConnectionsApi.new
create_connection_request = Crescendo::CreateConnectionRequest.new({app_key: 'app_key_example', name: 'name_example', credentials: { key: 3.56}}) # CreateConnectionRequest | 

begin
  # Create connection
  result = api_instance.create_connection(create_connection_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->create_connection: #{e}"
end
```

#### Using the create_connection_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionResponse>, Integer, Hash)> create_connection_with_http_info(create_connection_request)

```ruby
begin
  # Create connection
  data, status_code, headers = api_instance.create_connection_with_http_info(create_connection_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->create_connection_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_connection_request** | [**CreateConnectionRequest**](CreateConnectionRequest.md) |  |  |

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_connection

> delete_connection(connection_id)

Delete connection

Deletes a connection. Requires connection:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::ConnectionsApi.new
connection_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete connection
  api_instance.delete_connection(connection_id)
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->delete_connection: #{e}"
end
```

#### Using the delete_connection_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_connection_with_http_info(connection_id)

```ruby
begin
  # Delete connection
  data, status_code, headers = api_instance.delete_connection_with_http_info(connection_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->delete_connection_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **connection_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_connection

> <ConnectionResponse> get_connection(connection_id)

Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::ConnectionsApi.new
connection_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get connection details
  result = api_instance.get_connection(connection_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->get_connection: #{e}"
end
```

#### Using the get_connection_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ConnectionResponse>, Integer, Hash)> get_connection_with_http_info(connection_id)

```ruby
begin
  # Get connection details
  data, status_code, headers = api_instance.get_connection_with_http_info(connection_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ConnectionResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->get_connection_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **connection_id** | **String** |  |  |

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_connections

> <Array<ConnectionResponse>> list_connections

List connections

Lists all connections. Requires connection:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::ConnectionsApi.new

begin
  # List connections
  result = api_instance.list_connections
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->list_connections: #{e}"
end
```

#### Using the list_connections_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<ConnectionResponse>>, Integer, Hash)> list_connections_with_http_info

```ruby
begin
  # List connections
  data, status_code, headers = api_instance.list_connections_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<ConnectionResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->list_connections_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ConnectionResponse&gt;**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## update_connection

> update_connection(connection_id, update_connection_request)

Update connection

Updates a connection's name or credentials. Requires connection:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::ConnectionsApi.new
connection_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
update_connection_request = Crescendo::UpdateConnectionRequest.new # UpdateConnectionRequest | 

begin
  # Update connection
  api_instance.update_connection(connection_id, update_connection_request)
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->update_connection: #{e}"
end
```

#### Using the update_connection_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> update_connection_with_http_info(connection_id, update_connection_request)

```ruby
begin
  # Update connection
  data, status_code, headers = api_instance.update_connection_with_http_info(connection_id, update_connection_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling ConnectionsApi->update_connection_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **connection_id** | **String** |  |  |
| **update_connection_request** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

