# Crescendo\TemplatesApi

Public API for managing email templates

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cloneFromBroadcast()**](TemplatesApi.md#cloneFromBroadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} |  |
| [**createTemplate()**](TemplatesApi.md#createTemplate) | **POST** /api/v1/templates |  |
| [**deleteTemplate()**](TemplatesApi.md#deleteTemplate) | **DELETE** /api/v1/templates/{templateId} |  |
| [**getTemplate()**](TemplatesApi.md#getTemplate) | **GET** /api/v1/templates/{templateId} |  |
| [**listTemplates()**](TemplatesApi.md#listTemplates) | **GET** /api/v1/templates |  |
| [**publishTemplate()**](TemplatesApi.md#publishTemplate) | **POST** /api/v1/templates/{templateId}/publish |  |
| [**testSend()**](TemplatesApi.md#testSend) | **POST** /api/v1/templates/{templateId}/test |  |
| [**updateTemplate()**](TemplatesApi.md#updateTemplate) | **PATCH** /api/v1/templates/{templateId} |  |


## `cloneFromBroadcast()`

```php
cloneFromBroadcast($broadcast_id): \Crescendo\Model\PublicTemplateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$broadcast_id = 'broadcast_id_example'; // string

try {
    $result = $apiInstance->cloneFromBroadcast($broadcast_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->cloneFromBroadcast: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **broadcast_id** | **string**|  | |

### Return type

[**\Crescendo\Model\PublicTemplateResponse**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTemplate()`

```php
createTemplate($create_template_request, $idempotency_key): \Crescendo\Model\PublicTemplateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_template_request = new \Crescendo\Model\CreateTemplateRequest(); // \Crescendo\Model\CreateTemplateRequest
$idempotency_key = 'idempotency_key_example'; // string

try {
    $result = $apiInstance->createTemplate($create_template_request, $idempotency_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->createTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_template_request** | [**\Crescendo\Model\CreateTemplateRequest**](../Model/CreateTemplateRequest.md)|  | |
| **idempotency_key** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\PublicTemplateResponse**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTemplate()`

```php
deleteTemplate($template_id)
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_id = 'template_id_example'; // string

try {
    $apiInstance->deleteTemplate($template_id);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->deleteTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**|  | |

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

## `getTemplate()`

```php
getTemplate($template_id): \Crescendo\Model\PublicTemplateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_id = 'template_id_example'; // string

try {
    $result = $apiInstance->getTemplate($template_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->getTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**|  | |

### Return type

[**\Crescendo\Model\PublicTemplateResponse**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTemplates()`

```php
listTemplates(): \Crescendo\Model\PublicTemplateResponse[]
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listTemplates();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->listTemplates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\PublicTemplateResponse[]**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `publishTemplate()`

```php
publishTemplate($template_id): \Crescendo\Model\PublicTemplateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_id = 'template_id_example'; // string

try {
    $result = $apiInstance->publishTemplate($template_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->publishTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**|  | |

### Return type

[**\Crescendo\Model\PublicTemplateResponse**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `testSend()`

```php
testSend($template_id, $test_send_request): \Crescendo\Model\PublicTestSendResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_id = 'template_id_example'; // string
$test_send_request = new \Crescendo\Model\TestSendRequest(); // \Crescendo\Model\TestSendRequest

try {
    $result = $apiInstance->testSend($template_id, $test_send_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->testSend: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**|  | |
| **test_send_request** | [**\Crescendo\Model\TestSendRequest**](../Model/TestSendRequest.md)|  | |

### Return type

[**\Crescendo\Model\PublicTestSendResponse**](../Model/PublicTestSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTemplate()`

```php
updateTemplate($template_id, $update_template_request): \Crescendo\Model\PublicTemplateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\TemplatesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_id = 'template_id_example'; // string
$update_template_request = new \Crescendo\Model\UpdateTemplateRequest(); // \Crescendo\Model\UpdateTemplateRequest

try {
    $result = $apiInstance->updateTemplate($template_id, $update_template_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplatesApi->updateTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**|  | |
| **update_template_request** | [**\Crescendo\Model\UpdateTemplateRequest**](../Model/UpdateTemplateRequest.md)|  | |

### Return type

[**\Crescendo\Model\PublicTemplateResponse**](../Model/PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
