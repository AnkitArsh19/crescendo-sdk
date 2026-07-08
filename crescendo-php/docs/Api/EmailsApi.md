# Crescendo\EmailsApi

Public API for sending and tracking emails

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getEmail()**](EmailsApi.md#getEmail) | **GET** /api/v1/emails/{emailId} | Get email details |
| [**listEmails()**](EmailsApi.md#listEmails) | **GET** /api/v1/emails | List emails |
| [**searchEmails()**](EmailsApi.md#searchEmails) | **GET** /api/v1/emails/search | Search emails |
| [**sendBatch()**](EmailsApi.md#sendBatch) | **POST** /api/v1/emails/batch |  |
| [**sendEmail()**](EmailsApi.md#sendEmail) | **POST** /api/v1/emails |  |
| [**sendTemplated()**](EmailsApi.md#sendTemplated) | **POST** /api/v1/emails/templated |  |


## `getEmail()`

```php
getEmail($email_id): \Crescendo\Model\EmailLogResponse
```

Get email details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$email_id = 'email_id_example'; // string

try {
    $result = $apiInstance->getEmail($email_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->getEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email_id** | **string**|  | |

### Return type

[**\Crescendo\Model\EmailLogResponse**](../Model/EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listEmails()`

```php
listEmails(): \Crescendo\Model\EmailLogResponse[]
```

List emails

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listEmails();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->listEmails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\EmailLogResponse[]**](../Model/EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `searchEmails()`

```php
searchEmails($q): \Crescendo\Model\EmailLogResponse[]
```

Search emails

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$q = 'q_example'; // string

try {
    $result = $apiInstance->searchEmails($q);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->searchEmails: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **q** | **string**|  | |

### Return type

[**\Crescendo\Model\EmailLogResponse[]**](../Model/EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendBatch()`

```php
sendBatch($send_batch_request): \Crescendo\Model\SendBatchResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$send_batch_request = new \Crescendo\Model\SendBatchRequest(); // \Crescendo\Model\SendBatchRequest

try {
    $result = $apiInstance->sendBatch($send_batch_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->sendBatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **send_batch_request** | [**\Crescendo\Model\SendBatchRequest**](../Model/SendBatchRequest.md)|  | |

### Return type

[**\Crescendo\Model\SendBatchResponse**](../Model/SendBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendEmail()`

```php
sendEmail($send_email_request): \Crescendo\Model\SendEmailResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$send_email_request = new \Crescendo\Model\SendEmailRequest(); // \Crescendo\Model\SendEmailRequest

try {
    $result = $apiInstance->sendEmail($send_email_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->sendEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **send_email_request** | [**\Crescendo\Model\SendEmailRequest**](../Model/SendEmailRequest.md)|  | |

### Return type

[**\Crescendo\Model\SendEmailResponse**](../Model/SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sendTemplated()`

```php
sendTemplated($send_templated_request): \Crescendo\Model\SendEmailResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\EmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$send_templated_request = new \Crescendo\Model\SendTemplatedRequest(); // \Crescendo\Model\SendTemplatedRequest

try {
    $result = $apiInstance->sendTemplated($send_templated_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailsApi->sendTemplated: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **send_templated_request** | [**\Crescendo\Model\SendTemplatedRequest**](../Model/SendTemplatedRequest.md)|  | |

### Return type

[**\Crescendo\Model\SendEmailResponse**](../Model/SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
