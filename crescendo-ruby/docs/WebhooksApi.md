# Crescendo::WebhooksApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_subscription**](WebhooksApi.md#create_subscription) | **POST** /api/v1/webhooks |  |
| [**delete_subscription**](WebhooksApi.md#delete_subscription) | **DELETE** /api/v1/webhooks/{id} |  |
| [**list_subscriptions**](WebhooksApi.md#list_subscriptions) | **GET** /api/v1/webhooks |  |


## create_subscription

> <PublicWebhookResponse> create_subscription(create_webhook_request, opts)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WebhooksApi.new
create_webhook_request = Crescendo::CreateWebhookRequest.new({url: 'url_example', subscribed_events: ['subscribed_events_example']}) # CreateWebhookRequest | 
opts = {
  idempotency_key: 'idempotency_key_example' # String | 
}

begin
  
  result = api_instance.create_subscription(create_webhook_request, opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->create_subscription: #{e}"
end
```

#### Using the create_subscription_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicWebhookResponse>, Integer, Hash)> create_subscription_with_http_info(create_webhook_request, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.create_subscription_with_http_info(create_webhook_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicWebhookResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->create_subscription_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_webhook_request** | [**CreateWebhookRequest**](CreateWebhookRequest.md) |  |  |
| **idempotency_key** | **String** |  | [optional] |

### Return type

[**PublicWebhookResponse**](PublicWebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_subscription

> delete_subscription(id)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WebhooksApi.new
id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  
  api_instance.delete_subscription(id)
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->delete_subscription: #{e}"
end
```

#### Using the delete_subscription_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_subscription_with_http_info(id)

```ruby
begin
  
  data, status_code, headers = api_instance.delete_subscription_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->delete_subscription_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## list_subscriptions

> <Array<PublicWebhookListResponse>> list_subscriptions



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WebhooksApi.new

begin
  
  result = api_instance.list_subscriptions
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->list_subscriptions: #{e}"
end
```

#### Using the list_subscriptions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<PublicWebhookListResponse>>, Integer, Hash)> list_subscriptions_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.list_subscriptions_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<PublicWebhookListResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling WebhooksApi->list_subscriptions_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;PublicWebhookListResponse&gt;**](PublicWebhookListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

