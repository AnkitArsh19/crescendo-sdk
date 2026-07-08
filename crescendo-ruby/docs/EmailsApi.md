# Crescendo::EmailsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_email**](EmailsApi.md#get_email) | **GET** /api/v1/emails/{emailId} | Get email details |
| [**list_emails**](EmailsApi.md#list_emails) | **GET** /api/v1/emails | List emails |
| [**search_emails**](EmailsApi.md#search_emails) | **GET** /api/v1/emails/search | Search emails |
| [**send_batch**](EmailsApi.md#send_batch) | **POST** /api/v1/emails/batch |  |
| [**send_email**](EmailsApi.md#send_email) | **POST** /api/v1/emails |  |
| [**send_templated**](EmailsApi.md#send_templated) | **POST** /api/v1/emails/templated |  |


## get_email

> <EmailLogResponse> get_email(email_id)

Get email details

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new
email_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get email details
  result = api_instance.get_email(email_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->get_email: #{e}"
end
```

#### Using the get_email_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EmailLogResponse>, Integer, Hash)> get_email_with_http_info(email_id)

```ruby
begin
  # Get email details
  data, status_code, headers = api_instance.get_email_with_http_info(email_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EmailLogResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->get_email_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email_id** | **String** |  |  |

### Return type

[**EmailLogResponse**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_emails

> <Array<EmailLogResponse>> list_emails

List emails

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new

begin
  # List emails
  result = api_instance.list_emails
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->list_emails: #{e}"
end
```

#### Using the list_emails_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<EmailLogResponse>>, Integer, Hash)> list_emails_with_http_info

```ruby
begin
  # List emails
  data, status_code, headers = api_instance.list_emails_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<EmailLogResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->list_emails_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;EmailLogResponse&gt;**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## search_emails

> <Array<EmailLogResponse>> search_emails(q)

Search emails

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new
q = 'q_example' # String | 

begin
  # Search emails
  result = api_instance.search_emails(q)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->search_emails: #{e}"
end
```

#### Using the search_emails_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<EmailLogResponse>>, Integer, Hash)> search_emails_with_http_info(q)

```ruby
begin
  # Search emails
  data, status_code, headers = api_instance.search_emails_with_http_info(q)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<EmailLogResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->search_emails_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **q** | **String** |  |  |

### Return type

[**Array&lt;EmailLogResponse&gt;**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## send_batch

> <SendBatchResponse> send_batch(send_batch_request)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new
send_batch_request = Crescendo::SendBatchRequest.new({from: 'from_example', subject: 'subject_example', to: ['to_example']}) # SendBatchRequest | 

begin
  
  result = api_instance.send_batch(send_batch_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_batch: #{e}"
end
```

#### Using the send_batch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SendBatchResponse>, Integer, Hash)> send_batch_with_http_info(send_batch_request)

```ruby
begin
  
  data, status_code, headers = api_instance.send_batch_with_http_info(send_batch_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SendBatchResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_batch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **send_batch_request** | [**SendBatchRequest**](SendBatchRequest.md) |  |  |

### Return type

[**SendBatchResponse**](SendBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## send_email

> <SendEmailResponse> send_email(send_email_request)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new
send_email_request = Crescendo::SendEmailRequest.new({from: 'from_example', to: 'to_example', subject: 'subject_example', email_type: 'TRANSACTIONAL'}) # SendEmailRequest | 

begin
  
  result = api_instance.send_email(send_email_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_email: #{e}"
end
```

#### Using the send_email_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SendEmailResponse>, Integer, Hash)> send_email_with_http_info(send_email_request)

```ruby
begin
  
  data, status_code, headers = api_instance.send_email_with_http_info(send_email_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SendEmailResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_email_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **send_email_request** | [**SendEmailRequest**](SendEmailRequest.md) |  |  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## send_templated

> <SendEmailResponse> send_templated(send_templated_request)



### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::EmailsApi.new
send_templated_request = Crescendo::SendTemplatedRequest.new({from: 'from_example', to: 'to_example', template_id: 'template_id_example'}) # SendTemplatedRequest | 

begin
  
  result = api_instance.send_templated(send_templated_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_templated: #{e}"
end
```

#### Using the send_templated_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SendEmailResponse>, Integer, Hash)> send_templated_with_http_info(send_templated_request)

```ruby
begin
  
  data, status_code, headers = api_instance.send_templated_with_http_info(send_templated_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SendEmailResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling EmailsApi->send_templated_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **send_templated_request** | [**SendTemplatedRequest**](SendTemplatedRequest.md) |  |  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

