# Crescendo\CustomEventsApi



All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createEvent()**](CustomEventsApi.md#createEvent) | **POST** /api/v1/email/custom-events | Create a custom event |
| [**deleteEvent()**](CustomEventsApi.md#deleteEvent) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event |
| [**fireEvent()**](CustomEventsApi.md#fireEvent) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event |
| [**listEvents()**](CustomEventsApi.md#listEvents) | **GET** /api/v1/email/custom-events | List custom events |


## `createEvent()`

```php
createEvent($create_custom_event_request): \Crescendo\Model\CustomEvent
```

Create a custom event

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\CustomEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_custom_event_request = new \Crescendo\Model\CreateCustomEventRequest(); // \Crescendo\Model\CreateCustomEventRequest

try {
    $result = $apiInstance->createEvent($create_custom_event_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomEventsApi->createEvent: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_custom_event_request** | [**\Crescendo\Model\CreateCustomEventRequest**](../Model/CreateCustomEventRequest.md)|  | |

### Return type

[**\Crescendo\Model\CustomEvent**](../Model/CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteEvent()`

```php
deleteEvent($name)
```

Delete a custom event

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\CustomEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$name = 'name_example'; // string

try {
    $apiInstance->deleteEvent($name);
} catch (Exception $e) {
    echo 'Exception when calling CustomEventsApi->deleteEvent: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**|  | |

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

## `fireEvent()`

```php
fireEvent($name, $fire_custom_event_request)
```

Fire a custom event

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\CustomEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$name = 'name_example'; // string
$fire_custom_event_request = new \Crescendo\Model\FireCustomEventRequest(); // \Crescendo\Model\FireCustomEventRequest

try {
    $apiInstance->fireEvent($name, $fire_custom_event_request);
} catch (Exception $e) {
    echo 'Exception when calling CustomEventsApi->fireEvent: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **name** | **string**|  | |
| **fire_custom_event_request** | [**\Crescendo\Model\FireCustomEventRequest**](../Model/FireCustomEventRequest.md)|  | |

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

## `listEvents()`

```php
listEvents(): \Crescendo\Model\CustomEvent[]
```

List custom events

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\CustomEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listEvents();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CustomEventsApi->listEvents: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\CustomEvent[]**](../Model/CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
