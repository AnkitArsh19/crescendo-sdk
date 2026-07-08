# Crescendo::AudiencesContactsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_contact**](AudiencesContactsApi.md#create_contact) | **POST** /api/v1/audiences | Create a contact |
| [**delete_contact**](AudiencesContactsApi.md#delete_contact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact |
| [**get_contact**](AudiencesContactsApi.md#get_contact) | **GET** /api/v1/audiences/{contactId} | Get contact details |
| [**list_contacts**](AudiencesContactsApi.md#list_contacts) | **GET** /api/v1/audiences | List contacts |
| [**update_contact**](AudiencesContactsApi.md#update_contact) | **PATCH** /api/v1/audiences/{contactId} | Update contact |


## create_contact

> <ContactResponse> create_contact(create_contact_request)

Create a contact

Adds a new contact to your audience. Requires contact:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AudiencesContactsApi.new
create_contact_request = Crescendo::CreateContactRequest.new({email: 'email_example'}) # CreateContactRequest | 

begin
  # Create a contact
  result = api_instance.create_contact(create_contact_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->create_contact: #{e}"
end
```

#### Using the create_contact_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ContactResponse>, Integer, Hash)> create_contact_with_http_info(create_contact_request)

```ruby
begin
  # Create a contact
  data, status_code, headers = api_instance.create_contact_with_http_info(create_contact_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ContactResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->create_contact_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_contact_request** | [**CreateContactRequest**](CreateContactRequest.md) |  |  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## delete_contact

> delete_contact(contact_id)

Delete contact

Deletes a contact. Requires contact:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AudiencesContactsApi.new
contact_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete contact
  api_instance.delete_contact(contact_id)
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->delete_contact: #{e}"
end
```

#### Using the delete_contact_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_contact_with_http_info(contact_id)

```ruby
begin
  # Delete contact
  data, status_code, headers = api_instance.delete_contact_with_http_info(contact_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->delete_contact_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **contact_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_contact

> <ContactResponse> get_contact(contact_id)

Get contact details

Gets details for a specific contact. Requires contact:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AudiencesContactsApi.new
contact_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get contact details
  result = api_instance.get_contact(contact_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->get_contact: #{e}"
end
```

#### Using the get_contact_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ContactResponse>, Integer, Hash)> get_contact_with_http_info(contact_id)

```ruby
begin
  # Get contact details
  data, status_code, headers = api_instance.get_contact_with_http_info(contact_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ContactResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->get_contact_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **contact_id** | **String** |  |  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_contacts

> <PublicPageContactResponse> list_contacts(opts)

List contacts

Lists all contacts. Requires contact:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AudiencesContactsApi.new
opts = {
  limit: 56, # Integer | 
  after: 'after_example' # String | 
}

begin
  # List contacts
  result = api_instance.list_contacts(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->list_contacts: #{e}"
end
```

#### Using the list_contacts_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicPageContactResponse>, Integer, Hash)> list_contacts_with_http_info(opts)

```ruby
begin
  # List contacts
  data, status_code, headers = api_instance.list_contacts_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicPageContactResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->list_contacts_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **Integer** |  | [optional][default to 100] |
| **after** | **String** |  | [optional] |

### Return type

[**PublicPageContactResponse**](PublicPageContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## update_contact

> <ContactResponse> update_contact(contact_id, update_contact_request)

Update contact

Updates a contact. Requires contact:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::AudiencesContactsApi.new
contact_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
update_contact_request = Crescendo::UpdateContactRequest.new # UpdateContactRequest | 

begin
  # Update contact
  result = api_instance.update_contact(contact_id, update_contact_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->update_contact: #{e}"
end
```

#### Using the update_contact_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ContactResponse>, Integer, Hash)> update_contact_with_http_info(contact_id, update_contact_request)

```ruby
begin
  # Update contact
  data, status_code, headers = api_instance.update_contact_with_http_info(contact_id, update_contact_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ContactResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling AudiencesContactsApi->update_contact_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **contact_id** | **String** |  |  |
| **update_contact_request** | [**UpdateContactRequest**](UpdateContactRequest.md) |  |  |

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

