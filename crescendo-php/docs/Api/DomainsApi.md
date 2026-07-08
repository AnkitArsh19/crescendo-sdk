# Crescendo\DomainsApi

Public API for managing email domains

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addDomain()**](DomainsApi.md#addDomain) | **POST** /api/v1/domains | Add a domain |
| [**deleteDomain()**](DomainsApi.md#deleteDomain) | **DELETE** /api/v1/domains/{domainId} | Delete domain |
| [**getDomain()**](DomainsApi.md#getDomain) | **GET** /api/v1/domains/{domainId} | Get domain details |
| [**listDomains()**](DomainsApi.md#listDomains) | **GET** /api/v1/domains | List domains |
| [**verifyDomain()**](DomainsApi.md#verifyDomain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS |


## `addDomain()`

```php
addDomain($add_domain_request): \Crescendo\Model\DomainResponse
```

Add a domain

Registers a new domain. Requires domain:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\DomainsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$add_domain_request = new \Crescendo\Model\AddDomainRequest(); // \Crescendo\Model\AddDomainRequest

try {
    $result = $apiInstance->addDomain($add_domain_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DomainsApi->addDomain: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **add_domain_request** | [**\Crescendo\Model\AddDomainRequest**](../Model/AddDomainRequest.md)|  | |

### Return type

[**\Crescendo\Model\DomainResponse**](../Model/DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteDomain()`

```php
deleteDomain($domain_id)
```

Delete domain

Deletes a domain. Requires domain:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\DomainsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$domain_id = 'domain_id_example'; // string

try {
    $apiInstance->deleteDomain($domain_id);
} catch (Exception $e) {
    echo 'Exception when calling DomainsApi->deleteDomain: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **domain_id** | **string**|  | |

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

## `getDomain()`

```php
getDomain($domain_id): \Crescendo\Model\DomainResponse
```

Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\DomainsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$domain_id = 'domain_id_example'; // string

try {
    $result = $apiInstance->getDomain($domain_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DomainsApi->getDomain: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **domain_id** | **string**|  | |

### Return type

[**\Crescendo\Model\DomainResponse**](../Model/DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listDomains()`

```php
listDomains($limit, $after): \Crescendo\Model\PublicPageDomainResponse
```

List domains

Lists all registered domains. Requires domain:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\DomainsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$limit = 100; // int
$after = 'after_example'; // string

try {
    $result = $apiInstance->listDomains($limit, $after);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DomainsApi->listDomains: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] [default to 100] |
| **after** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\PublicPageDomainResponse**](../Model/PublicPageDomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `verifyDomain()`

```php
verifyDomain($domain_id): \Crescendo\Model\DomainResponse
```

Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\DomainsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$domain_id = 'domain_id_example'; // string

try {
    $result = $apiInstance->verifyDomain($domain_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DomainsApi->verifyDomain: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **domain_id** | **string**|  | |

### Return type

[**\Crescendo\Model\DomainResponse**](../Model/DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
