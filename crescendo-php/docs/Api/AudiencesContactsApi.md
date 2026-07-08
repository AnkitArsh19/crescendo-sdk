# Crescendo\AudiencesContactsApi



All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createContact()**](AudiencesContactsApi.md#createContact) | **POST** /api/v1/audiences | Create a contact |
| [**deleteContact()**](AudiencesContactsApi.md#deleteContact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact |
| [**getContact()**](AudiencesContactsApi.md#getContact) | **GET** /api/v1/audiences/{contactId} | Get contact details |
| [**listContacts()**](AudiencesContactsApi.md#listContacts) | **GET** /api/v1/audiences | List contacts |
| [**updateContact()**](AudiencesContactsApi.md#updateContact) | **PATCH** /api/v1/audiences/{contactId} | Update contact |


## `createContact()`

```php
createContact($create_contact_request): \Crescendo\Model\ContactResponse
```

Create a contact

Adds a new contact to your audience. Requires contact:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AudiencesContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_contact_request = new \Crescendo\Model\CreateContactRequest(); // \Crescendo\Model\CreateContactRequest

try {
    $result = $apiInstance->createContact($create_contact_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AudiencesContactsApi->createContact: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_contact_request** | [**\Crescendo\Model\CreateContactRequest**](../Model/CreateContactRequest.md)|  | |

### Return type

[**\Crescendo\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteContact()`

```php
deleteContact($contact_id)
```

Delete contact

Deletes a contact. Requires contact:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AudiencesContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string

try {
    $apiInstance->deleteContact($contact_id);
} catch (Exception $e) {
    echo 'Exception when calling AudiencesContactsApi->deleteContact: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**|  | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getContact()`

```php
getContact($contact_id): \Crescendo\Model\ContactResponse
```

Get contact details

Gets details for a specific contact. Requires contact:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AudiencesContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string

try {
    $result = $apiInstance->getContact($contact_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AudiencesContactsApi->getContact: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**|  | |

### Return type

[**\Crescendo\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listContacts()`

```php
listContacts($limit, $after): \Crescendo\Model\PublicPageContactResponse
```

List contacts

Lists all contacts. Requires contact:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AudiencesContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$limit = 100; // int
$after = 'after_example'; // string

try {
    $result = $apiInstance->listContacts($limit, $after);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AudiencesContactsApi->listContacts: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] [default to 100] |
| **after** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\PublicPageContactResponse**](../Model/PublicPageContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateContact()`

```php
updateContact($contact_id, $update_contact_request): \Crescendo\Model\ContactResponse
```

Update contact

Updates a contact. Requires contact:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AudiencesContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_id = 'contact_id_example'; // string
$update_contact_request = new \Crescendo\Model\UpdateContactRequest(); // \Crescendo\Model\UpdateContactRequest

try {
    $result = $apiInstance->updateContact($contact_id, $update_contact_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AudiencesContactsApi->updateContact: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **contact_id** | **string**|  | |
| **update_contact_request** | [**\Crescendo\Model\UpdateContactRequest**](../Model/UpdateContactRequest.md)|  | |

### Return type

[**\Crescendo\Model\ContactResponse**](../Model/ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
