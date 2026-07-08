# Crescendo\ConnectionsApi

Public API for managing third-party app credentials

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createConnection()**](ConnectionsApi.md#createConnection) | **POST** /api/v1/connections | Create connection |
| [**deleteConnection()**](ConnectionsApi.md#deleteConnection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection |
| [**getConnection()**](ConnectionsApi.md#getConnection) | **GET** /api/v1/connections/{connectionId} | Get connection details |
| [**listConnections()**](ConnectionsApi.md#listConnections) | **GET** /api/v1/connections | List connections |
| [**updateConnection()**](ConnectionsApi.md#updateConnection) | **PATCH** /api/v1/connections/{connectionId} | Update connection |


## `createConnection()`

```php
createConnection($create_connection_request): \Crescendo\Model\ConnectionResponse
```

Create connection

Creates a new connection for a third-party app. Requires connection:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\ConnectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_connection_request = new \Crescendo\Model\CreateConnectionRequest(); // \Crescendo\Model\CreateConnectionRequest

try {
    $result = $apiInstance->createConnection($create_connection_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConnectionsApi->createConnection: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_connection_request** | [**\Crescendo\Model\CreateConnectionRequest**](../Model/CreateConnectionRequest.md)|  | |

### Return type

[**\Crescendo\Model\ConnectionResponse**](../Model/ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteConnection()`

```php
deleteConnection($connection_id)
```

Delete connection

Deletes a connection. Requires connection:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\ConnectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$connection_id = 'connection_id_example'; // string

try {
    $apiInstance->deleteConnection($connection_id);
} catch (Exception $e) {
    echo 'Exception when calling ConnectionsApi->deleteConnection: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **connection_id** | **string**|  | |

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

## `getConnection()`

```php
getConnection($connection_id): \Crescendo\Model\ConnectionResponse
```

Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\ConnectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$connection_id = 'connection_id_example'; // string

try {
    $result = $apiInstance->getConnection($connection_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConnectionsApi->getConnection: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **connection_id** | **string**|  | |

### Return type

[**\Crescendo\Model\ConnectionResponse**](../Model/ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listConnections()`

```php
listConnections(): \Crescendo\Model\ConnectionResponse[]
```

List connections

Lists all connections. Requires connection:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\ConnectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->listConnections();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConnectionsApi->listConnections: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\Crescendo\Model\ConnectionResponse[]**](../Model/ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateConnection()`

```php
updateConnection($connection_id, $update_connection_request)
```

Update connection

Updates a connection's name or credentials. Requires connection:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\ConnectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$connection_id = 'connection_id_example'; // string
$update_connection_request = new \Crescendo\Model\UpdateConnectionRequest(); // \Crescendo\Model\UpdateConnectionRequest

try {
    $apiInstance->updateConnection($connection_id, $update_connection_request);
} catch (Exception $e) {
    echo 'Exception when calling ConnectionsApi->updateConnection: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **connection_id** | **string**|  | |
| **update_connection_request** | [**\Crescendo\Model\UpdateConnectionRequest**](../Model/UpdateConnectionRequest.md)|  | |

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
