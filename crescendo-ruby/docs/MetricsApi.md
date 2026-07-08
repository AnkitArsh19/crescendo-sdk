# Crescendo::MetricsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_metrics**](MetricsApi.md#get_metrics) | **GET** /api/v1/metrics |  |


## get_metrics

> <MetricsResponse> get_metrics(opts)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::MetricsApi.new
opts = {
  days: 56 # Integer | 
}

begin
  
  result = api_instance.get_metrics(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling MetricsApi->get_metrics: #{e}"
end
```

#### Using the get_metrics_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<MetricsResponse>, Integer, Hash)> get_metrics_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.get_metrics_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <MetricsResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling MetricsApi->get_metrics_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **days** | **Integer** |  | [optional][default to 30] |

### Return type

[**MetricsResponse**](MetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

