# Crescendo\AppCatalogApi



All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getApp()**](AppCatalogApi.md#getApp) | **GET** /api/v1/apps/{appKey} | Get app details |
| [**listApps()**](AppCatalogApi.md#listApps) | **GET** /api/v1/apps | List apps |


## `getApp()`

```php
getApp($app_key): \Crescendo\Model\AppDetailResponse
```

Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AppCatalogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$app_key = 'app_key_example'; // string

try {
    $result = $apiInstance->getApp($app_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AppCatalogApi->getApp: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **app_key** | **string**|  | |

### Return type

[**\Crescendo\Model\AppDetailResponse**](../Model/AppDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listApps()`

```php
listApps(): \Crescendo\Model\AppSummaryResponse[]
```

List apps

Lists all supported apps in the catalog. Requires app:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\AppCatalogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listApps();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AppCatalogApi->listApps: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\AppSummaryResponse[]**](../Model/AppSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
