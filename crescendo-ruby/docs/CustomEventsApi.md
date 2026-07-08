# Crescendo::CustomEventsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_event**](CustomEventsApi.md#create_event) | **POST** /api/v1/email/custom-events | Create a custom event |
| [**delete_event**](CustomEventsApi.md#delete_event) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event |
| [**fire_event**](CustomEventsApi.md#fire_event) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event |
| [**list_events**](CustomEventsApi.md#list_events) | **GET** /api/v1/email/custom-events | List custom events |


## create_event

> <CustomEvent> create_event(create_custom_event_request)

Create a custom event

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::CustomEventsApi.new
create_custom_event_request = Crescendo::CreateCustomEventRequest.new # CreateCustomEventRequest | 

begin
  # Create a custom event
  result = api_instance.create_event(create_custom_event_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->create_event: #{e}"
end
```

#### Using the create_event_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CustomEvent>, Integer, Hash)> create_event_with_http_info(create_custom_event_request)

```ruby
begin
  # Create a custom event
  data, status_code, headers = api_instance.create_event_with_http_info(create_custom_event_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CustomEvent>
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->create_event_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_custom_event_request** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md) |  |  |

### Return type

[**CustomEvent**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_event

> delete_event(name)

Delete a custom event

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::CustomEventsApi.new
name = 'name_example' # String | 

begin
  # Delete a custom event
  api_instance.delete_event(name)
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->delete_event: #{e}"
end
```

#### Using the delete_event_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_event_with_http_info(name)

```ruby
begin
  # Delete a custom event
  data, status_code, headers = api_instance.delete_event_with_http_info(name)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->delete_event_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## fire_event

> fire_event(name, fire_custom_event_request)

Fire a custom event

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::CustomEventsApi.new
name = 'name_example' # String | 
fire_custom_event_request = Crescendo::FireCustomEventRequest.new # FireCustomEventRequest | 

begin
  # Fire a custom event
  api_instance.fire_event(name, fire_custom_event_request)
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->fire_event: #{e}"
end
```

#### Using the fire_event_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> fire_event_with_http_info(name, fire_custom_event_request)

```ruby
begin
  # Fire a custom event
  data, status_code, headers = api_instance.fire_event_with_http_info(name, fire_custom_event_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->fire_event_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **fire_custom_event_request** | [**FireCustomEventRequest**](FireCustomEventRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## list_events

> <Array<CustomEvent>> list_events

List custom events

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::CustomEventsApi.new

begin
  # List custom events
  result = api_instance.list_events
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->list_events: #{e}"
end
```

#### Using the list_events_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<CustomEvent>>, Integer, Hash)> list_events_with_http_info

```ruby
begin
  # List custom events
  data, status_code, headers = api_instance.list_events_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<CustomEvent>>
rescue Crescendo::ApiError => e
  puts "Error when calling CustomEventsApi->list_events_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;CustomEvent&gt;**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

