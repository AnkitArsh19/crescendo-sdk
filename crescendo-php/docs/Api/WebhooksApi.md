# Crescendo\WebhooksApi

Public API for managing outbound webhook subscriptions

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSubscription()**](WebhooksApi.md#createSubscription) | **POST** /api/v1/webhooks |  |
| [**deleteSubscription()**](WebhooksApi.md#deleteSubscription) | **DELETE** /api/v1/webhooks/{id} |  |
| [**listSubscriptions()**](WebhooksApi.md#listSubscriptions) | **GET** /api/v1/webhooks |  |


## `createSubscription()`

```php
createSubscription($create_webhook_request, $idempotency_key): \Crescendo\Model\PublicWebhookResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_webhook_request = new \Crescendo\Model\CreateWebhookRequest(); // \Crescendo\Model\CreateWebhookRequest
$idempotency_key = 'idempotency_key_example'; // string

try {
    $result = $apiInstance->createSubscription($create_webhook_request, $idempotency_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->createSubscription: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_webhook_request** | [**\Crescendo\Model\CreateWebhookRequest**](../Model/CreateWebhookRequest.md)|  | |
| **idempotency_key** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\PublicWebhookResponse**](../Model/PublicWebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteSubscription()`

```php
deleteSubscription($id)
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 'id_example'; // string

try {
    $apiInstance->deleteSubscription($id);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->deleteSubscription: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**|  | |

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

## `listSubscriptions()`

```php
listSubscriptions(): \Crescendo\Model\PublicWebhookListResponse[]
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listSubscriptions();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->listSubscriptions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\PublicWebhookListResponse[]**](../Model/PublicWebhookListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
