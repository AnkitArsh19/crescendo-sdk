# Crescendo\WorkflowsApi

Public API for creating, managing, and triggering workflows

All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**activateWorkflow()**](WorkflowsApi.md#activateWorkflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow |
| [**createWorkflow()**](WorkflowsApi.md#createWorkflow) | **POST** /api/v1/workflows | Create workflow |
| [**deactivateWorkflow()**](WorkflowsApi.md#deactivateWorkflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow |
| [**deleteWorkflow()**](WorkflowsApi.md#deleteWorkflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow |
| [**getWorkflow()**](WorkflowsApi.md#getWorkflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details |
| [**listWorkflows()**](WorkflowsApi.md#listWorkflows) | **GET** /api/v1/workflows | List workflows |
| [**triggerWorkflow()**](WorkflowsApi.md#triggerWorkflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow |
| [**updateWorkflow()**](WorkflowsApi.md#updateWorkflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow |


## `activateWorkflow()`

```php
activateWorkflow($workflow_id)
```

Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string

try {
    $apiInstance->activateWorkflow($workflow_id);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->activateWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |

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

## `createWorkflow()`

```php
createWorkflow($create_workflow_request): \Crescendo\Model\WorkflowSummaryResponse
```

Create workflow

Creates a new workflow. Requires workflow:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_workflow_request = new \Crescendo\Model\CreateWorkflowRequest(); // \Crescendo\Model\CreateWorkflowRequest

try {
    $result = $apiInstance->createWorkflow($create_workflow_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->createWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_workflow_request** | [**\Crescendo\Model\CreateWorkflowRequest**](../Model/CreateWorkflowRequest.md)|  | |

### Return type

[**\Crescendo\Model\WorkflowSummaryResponse**](../Model/WorkflowSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deactivateWorkflow()`

```php
deactivateWorkflow($workflow_id)
```

Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string

try {
    $apiInstance->deactivateWorkflow($workflow_id);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->deactivateWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |

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

## `deleteWorkflow()`

```php
deleteWorkflow($workflow_id)
```

Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string

try {
    $apiInstance->deleteWorkflow($workflow_id);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->deleteWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |

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

## `getWorkflow()`

```php
getWorkflow($workflow_id): \Crescendo\Model\WorkflowDetailResponse
```

Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string

try {
    $result = $apiInstance->getWorkflow($workflow_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->getWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |

### Return type

[**\Crescendo\Model\WorkflowDetailResponse**](../Model/WorkflowDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listWorkflows()`

```php
listWorkflows($status, $limit, $after): \Crescendo\Model\WorkflowListResponse
```

List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$status = 'status_example'; // string
$limit = 50; // int
$after = 'after_example'; // string

try {
    $result = $apiInstance->listWorkflows($status, $limit, $after);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->listWorkflows: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **status** | **string**|  | [optional] |
| **limit** | **int**|  | [optional] [default to 50] |
| **after** | **string**|  | [optional] |

### Return type

[**\Crescendo\Model\WorkflowListResponse**](../Model/WorkflowListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `triggerWorkflow()`

```php
triggerWorkflow($workflow_id, $idempotency_key, $request_body): \Crescendo\Model\WorkflowRunSummaryResponse
```

Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string
$idempotency_key = 'idempotency_key_example'; // string
$request_body = NULL; // array<string,mixed>

try {
    $result = $apiInstance->triggerWorkflow($workflow_id, $idempotency_key, $request_body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->triggerWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |
| **idempotency_key** | **string**|  | [optional] |
| **request_body** | [**array<string,mixed>**](../Model/mixed.md)|  | [optional] |

### Return type

[**\Crescendo\Model\WorkflowRunSummaryResponse**](../Model/WorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateWorkflow()`

```php
updateWorkflow($workflow_id, $update_workflow_request)
```

Update workflow

Updates a workflow's metadata. Requires workflow:write scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string
$update_workflow_request = new \Crescendo\Model\UpdateWorkflowRequest(); // \Crescendo\Model\UpdateWorkflowRequest

try {
    $apiInstance->updateWorkflow($workflow_id, $update_workflow_request);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowsApi->updateWorkflow: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |
| **update_workflow_request** | [**\Crescendo\Model\UpdateWorkflowRequest**](../Model/UpdateWorkflowRequest.md)|  | |

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
