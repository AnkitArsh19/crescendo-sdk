# Crescendo\SuppressionsApi

Public API for managing email suppressions

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addSuppression()**](SuppressionsApi.md#addSuppression) | **POST** /api/v1/suppressions | Add a suppression |
| [**importSuppressions()**](SuppressionsApi.md#importSuppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions |
| [**listSuppressions()**](SuppressionsApi.md#listSuppressions) | **GET** /api/v1/suppressions | List suppressions |
| [**removeSuppression()**](SuppressionsApi.md#removeSuppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression |


## `addSuppression()`

```php
addSuppression($add_suppression_request)
```

Add a suppression

Manually suppresses an email address. Requires suppression:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\SuppressionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$add_suppression_request = new \Crescendo\Model\AddSuppressionRequest(); // \Crescendo\Model\AddSuppressionRequest

try {
    $apiInstance->addSuppression($add_suppression_request);
} catch (Exception $e) {
    echo 'Exception when calling SuppressionsApi->addSuppression: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **add_suppression_request** | [**\Crescendo\Model\AddSuppressionRequest**](../Model/AddSuppressionRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `importSuppressions()`

```php
importSuppressions($import_suppressions_request)
```

Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\SuppressionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$import_suppressions_request = new \Crescendo\Model\ImportSuppressionsRequest(); // \Crescendo\Model\ImportSuppressionsRequest

try {
    $apiInstance->importSuppressions($import_suppressions_request);
} catch (Exception $e) {
    echo 'Exception when calling SuppressionsApi->importSuppressions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **import_suppressions_request** | [**\Crescendo\Model\ImportSuppressionsRequest**](../Model/ImportSuppressionsRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSuppressions()`

```php
listSuppressions($limit, $after): \Crescendo\Model\PublicPageSuppressionResponse
```

List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\SuppressionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$limit = 100; // int
$after = 'after_example'; // string

try {
    $result = $apiInstance->listSuppressions($limit, $after);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SuppressionsApi->listSuppressions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**|  | [optional] [default to 100] |
| **after** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\PublicPageSuppressionResponse**](../Model/PublicPageSuppressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeSuppression()`

```php
removeSuppression($suppression_id)
```

Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\SuppressionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$suppression_id = 'suppression_id_example'; // string

try {
    $apiInstance->removeSuppression($suppression_id);
} catch (Exception $e) {
    echo 'Exception when calling SuppressionsApi->removeSuppression: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **suppression_id** | **string**|  | |

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
