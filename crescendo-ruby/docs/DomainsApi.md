# Crescendo::DomainsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_domain**](DomainsApi.md#add_domain) | **POST** /api/v1/domains | Add a domain |
| [**delete_domain**](DomainsApi.md#delete_domain) | **DELETE** /api/v1/domains/{domainId} | Delete domain |
| [**get_domain**](DomainsApi.md#get_domain) | **GET** /api/v1/domains/{domainId} | Get domain details |
| [**list_domains**](DomainsApi.md#list_domains) | **GET** /api/v1/domains | List domains |
| [**verify_domain**](DomainsApi.md#verify_domain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS |


## add_domain

> <DomainResponse> add_domain(add_domain_request)

Add a domain

Registers a new domain. Requires domain:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::DomainsApi.new
add_domain_request = Crescendo::AddDomainRequest.new({domain_name: 'domain_name_example'}) # AddDomainRequest | 

begin
  # Add a domain
  result = api_instance.add_domain(add_domain_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->add_domain: #{e}"
end
```

#### Using the add_domain_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DomainResponse>, Integer, Hash)> add_domain_with_http_info(add_domain_request)

```ruby
begin
  # Add a domain
  data, status_code, headers = api_instance.add_domain_with_http_info(add_domain_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DomainResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->add_domain_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **add_domain_request** | [**AddDomainRequest**](AddDomainRequest.md) |  |  |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_domain

> delete_domain(domain_id)

Delete domain

Deletes a domain. Requires domain:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::DomainsApi.new
domain_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete domain
  api_instance.delete_domain(domain_id)
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->delete_domain: #{e}"
end
```

#### Using the delete_domain_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_domain_with_http_info(domain_id)

```ruby
begin
  # Delete domain
  data, status_code, headers = api_instance.delete_domain_with_http_info(domain_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->delete_domain_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **domain_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_domain

> <DomainResponse> get_domain(domain_id)

Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::DomainsApi.new
domain_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get domain details
  result = api_instance.get_domain(domain_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->get_domain: #{e}"
end
```

#### Using the get_domain_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DomainResponse>, Integer, Hash)> get_domain_with_http_info(domain_id)

```ruby
begin
  # Get domain details
  data, status_code, headers = api_instance.get_domain_with_http_info(domain_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DomainResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->get_domain_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **domain_id** | **String** |  |  |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_domains

> <PublicPageDomainResponse> list_domains(opts)

List domains

Lists all registered domains. Requires domain:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::DomainsApi.new
opts = {
  limit: 56, # Integer | 
  after: 'after_example' # String | 
}

begin
  # List domains
  result = api_instance.list_domains(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->list_domains: #{e}"
end
```

#### Using the list_domains_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicPageDomainResponse>, Integer, Hash)> list_domains_with_http_info(opts)

```ruby
begin
  # List domains
  data, status_code, headers = api_instance.list_domains_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicPageDomainResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->list_domains_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **Integer** |  | [optional][default to 100] |
| **after** | **String** |  | [optional] |

### Return type

[**PublicPageDomainResponse**](PublicPageDomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## verify_domain

> <DomainResponse> verify_domain(domain_id)

Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::DomainsApi.new
domain_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Verify domain DNS
  result = api_instance.verify_domain(domain_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->verify_domain: #{e}"
end
```

#### Using the verify_domain_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DomainResponse>, Integer, Hash)> verify_domain_with_http_info(domain_id)

```ruby
begin
  # Verify domain DNS
  data, status_code, headers = api_instance.verify_domain_with_http_info(domain_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DomainResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling DomainsApi->verify_domain_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **domain_id** | **String** |  |  |

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

