# Crescendo\WorkflowRunsApi



All URIs are relative to https://api.crescendo.run, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelRun()**](WorkflowRunsApi.md#cancelRun) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run |
| [**getRunDetail()**](WorkflowRunsApi.md#getRunDetail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details |
| [**getRunStats()**](WorkflowRunsApi.md#getRunStats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics |
| [**getStepRun()**](WorkflowRunsApi.md#getStepRun) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details |
| [**listAllRuns()**](WorkflowRunsApi.md#listAllRuns) | **GET** /api/v1/runs | List all runs |
| [**listRuns()**](WorkflowRunsApi.md#listRuns) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs |
| [**listStepRuns()**](WorkflowRunsApi.md#listStepRuns) | **GET** /api/v1/runs/{runId}/steps | List step runs |


## `cancelRun()`

```php
cancelRun($workflow_id, $run_id)
```

Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string
$run_id = 'run_id_example'; // string

try {
    $apiInstance->cancelRun($workflow_id, $run_id);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->cancelRun: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |
| **run_id** | **string**|  | |

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

## `getRunDetail()`

```php
getRunDetail($workflow_id, $run_id): \Crescendo\Model\WorkflowRunDetailResponse
```

Get run details

Gets execution details including step results for a specific run. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string
$run_id = 'run_id_example'; // string

try {
    $result = $apiInstance->getRunDetail($workflow_id, $run_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->getRunDetail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |
| **run_id** | **string**|  | |

### Return type

[**\Crescendo\Model\WorkflowRunDetailResponse**](../Model/WorkflowRunDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRunStats()`

```php
getRunStats($workflow_id): \Crescendo\Model\WorkflowRunStatsResponse
```

Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string

try {
    $result = $apiInstance->getRunStats($workflow_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->getRunStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |

### Return type

[**\Crescendo\Model\WorkflowRunStatsResponse**](../Model/WorkflowRunStatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getStepRun()`

```php
getStepRun($run_id, $step_run_id): \Crescendo\Model\StepRunResponse
```

Get step run details

Gets specific step execution details. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$run_id = 'run_id_example'; // string
$step_run_id = 'step_run_id_example'; // string

try {
    $result = $apiInstance->getStepRun($run_id, $step_run_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->getStepRun: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **run_id** | **string**|  | |
| **step_run_id** | **string**|  | |

### Return type

[**\Crescendo\Model\StepRunResponse**](../Model/StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllRuns()`

```php
listAllRuns($page, $size): \Crescendo\Model\PageWorkflowRunSummaryResponse
```

List all runs

Lists execution runs across all workflows. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 0; // int
$size = 20; // int

try {
    $result = $apiInstance->listAllRuns($page, $size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->listAllRuns: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**|  | [optional] [default to 0] |
| **size** | **int**|  | [optional] [default to 20] |

### Return type

[**\Crescendo\Model\PageWorkflowRunSummaryResponse**](../Model/PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listRuns()`

```php
listRuns($workflow_id, $page, $size): \Crescendo\Model\PageWorkflowRunSummaryResponse
```

List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$workflow_id = 'workflow_id_example'; // string
$page = 0; // int
$size = 20; // int

try {
    $result = $apiInstance->listRuns($workflow_id, $page, $size);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->listRuns: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **workflow_id** | **string**|  | |
| **page** | **int**|  | [optional] [default to 0] |
| **size** | **int**|  | [optional] [default to 20] |

### Return type

[**\Crescendo\Model\PageWorkflowRunSummaryResponse**](../Model/PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listStepRuns()`

```php
listStepRuns($run_id): \Crescendo\Model\StepRunResponse[]
```

List step runs

Lists step execution details for a specific run. Requires run:read scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Crescendo\Api\WorkflowRunsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$run_id = 'run_id_example'; // string

try {
    $result = $apiInstance->listStepRuns($run_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WorkflowRunsApi->listStepRuns: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **run_id** | **string**|  | |

### Return type

[**\Crescendo\Model\StepRunResponse[]**](../Model/StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
