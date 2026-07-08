# WorkflowRunsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelRun**](WorkflowRunsApi.md#cancelRun) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run |
| [**cancelRunWithHttpInfo**](WorkflowRunsApi.md#cancelRunWithHttpInfo) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run |
| [**getRunDetail**](WorkflowRunsApi.md#getRunDetail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details |
| [**getRunDetailWithHttpInfo**](WorkflowRunsApi.md#getRunDetailWithHttpInfo) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details |
| [**getRunStats**](WorkflowRunsApi.md#getRunStats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics |
| [**getRunStatsWithHttpInfo**](WorkflowRunsApi.md#getRunStatsWithHttpInfo) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics |
| [**getStepRun**](WorkflowRunsApi.md#getStepRun) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details |
| [**getStepRunWithHttpInfo**](WorkflowRunsApi.md#getStepRunWithHttpInfo) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details |
| [**listAllRuns**](WorkflowRunsApi.md#listAllRuns) | **GET** /api/v1/runs | List all runs |
| [**listAllRunsWithHttpInfo**](WorkflowRunsApi.md#listAllRunsWithHttpInfo) | **GET** /api/v1/runs | List all runs |
| [**listRuns**](WorkflowRunsApi.md#listRuns) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs |
| [**listRunsWithHttpInfo**](WorkflowRunsApi.md#listRunsWithHttpInfo) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs |
| [**listStepRuns**](WorkflowRunsApi.md#listStepRuns) | **GET** /api/v1/runs/{runId}/steps | List step runs |
| [**listStepRunsWithHttpInfo**](WorkflowRunsApi.md#listStepRunsWithHttpInfo) | **GET** /api/v1/runs/{runId}/steps | List step runs |



## cancelRun

> void cancelRun(workflowId, runId)

Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.cancelRun(workflowId, runId);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#cancelRun");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **runId** | **UUID**|  | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## cancelRunWithHttpInfo

> ApiResponse<Void> cancelRunWithHttpInfo(workflowId, runId)

Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.cancelRunWithHttpInfo(workflowId, runId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#cancelRun");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **runId** | **UUID**|  | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getRunDetail

> WorkflowRunDetailResponse getRunDetail(workflowId, runId)

Get run details

Gets execution details including step results for a specific run. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            WorkflowRunDetailResponse result = apiInstance.getRunDetail(workflowId, runId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getRunDetail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **runId** | **UUID**|  | |

### Return type

[**WorkflowRunDetailResponse**](WorkflowRunDetailResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getRunDetailWithHttpInfo

> ApiResponse<WorkflowRunDetailResponse> getRunDetailWithHttpInfo(workflowId, runId)

Get run details

Gets execution details including step results for a specific run. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<WorkflowRunDetailResponse> response = apiInstance.getRunDetailWithHttpInfo(workflowId, runId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getRunDetail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **runId** | **UUID**|  | |

### Return type

ApiResponse<[**WorkflowRunDetailResponse**](WorkflowRunDetailResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getRunStats

> WorkflowRunStatsResponse getRunStats(workflowId)

Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            WorkflowRunStatsResponse result = apiInstance.getRunStats(workflowId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getRunStats");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |

### Return type

[**WorkflowRunStatsResponse**](WorkflowRunStatsResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getRunStatsWithHttpInfo

> ApiResponse<WorkflowRunStatsResponse> getRunStatsWithHttpInfo(workflowId)

Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<WorkflowRunStatsResponse> response = apiInstance.getRunStatsWithHttpInfo(workflowId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getRunStats");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |

### Return type

ApiResponse<[**WorkflowRunStatsResponse**](WorkflowRunStatsResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getStepRun

> StepRunResponse getStepRun(runId, stepRunId)

Get step run details

Gets specific step execution details. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID runId = UUID.randomUUID(); // UUID | 
        UUID stepRunId = UUID.randomUUID(); // UUID | 
        try {
            StepRunResponse result = apiInstance.getStepRun(runId, stepRunId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getStepRun");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runId** | **UUID**|  | |
| **stepRunId** | **UUID**|  | |

### Return type

[**StepRunResponse**](StepRunResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getStepRunWithHttpInfo

> ApiResponse<StepRunResponse> getStepRunWithHttpInfo(runId, stepRunId)

Get step run details

Gets specific step execution details. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID runId = UUID.randomUUID(); // UUID | 
        UUID stepRunId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<StepRunResponse> response = apiInstance.getStepRunWithHttpInfo(runId, stepRunId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#getStepRun");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runId** | **UUID**|  | |
| **stepRunId** | **UUID**|  | |

### Return type

ApiResponse<[**StepRunResponse**](StepRunResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listAllRuns

> PageWorkflowRunSummaryResponse listAllRuns(page, size)

List all runs

Lists execution runs across all workflows. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        Integer page = 0; // Integer | 
        Integer size = 20; // Integer | 
        try {
            PageWorkflowRunSummaryResponse result = apiInstance.listAllRuns(page, size);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listAllRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 20] |

### Return type

[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listAllRunsWithHttpInfo

> ApiResponse<PageWorkflowRunSummaryResponse> listAllRunsWithHttpInfo(page, size)

List all runs

Lists execution runs across all workflows. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        Integer page = 0; // Integer | 
        Integer size = 20; // Integer | 
        try {
            ApiResponse<PageWorkflowRunSummaryResponse> response = apiInstance.listAllRunsWithHttpInfo(page, size);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listAllRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 20] |

### Return type

ApiResponse<[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listRuns

> PageWorkflowRunSummaryResponse listRuns(workflowId, page, size)

List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        Integer page = 0; // Integer | 
        Integer size = 20; // Integer | 
        try {
            PageWorkflowRunSummaryResponse result = apiInstance.listRuns(workflowId, page, size);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 20] |

### Return type

[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listRunsWithHttpInfo

> ApiResponse<PageWorkflowRunSummaryResponse> listRunsWithHttpInfo(workflowId, page, size)

List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        Integer page = 0; // Integer | 
        Integer size = 20; // Integer | 
        try {
            ApiResponse<PageWorkflowRunSummaryResponse> response = apiInstance.listRunsWithHttpInfo(workflowId, page, size);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **workflowId** | **UUID**|  | |
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 20] |

### Return type

ApiResponse<[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listStepRuns

> List<StepRunResponse> listStepRuns(runId)

List step runs

Lists step execution details for a specific run. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            List<StepRunResponse> result = apiInstance.listStepRuns(runId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listStepRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runId** | **UUID**|  | |

### Return type

[**List&lt;StepRunResponse&gt;**](StepRunResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listStepRunsWithHttpInfo

> ApiResponse<List<StepRunResponse>> listStepRunsWithHttpInfo(runId)

List step runs

Lists step execution details for a specific run. Requires run:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowRunsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowRunsApi apiInstance = new WorkflowRunsApi(defaultClient);
        UUID runId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<List<StepRunResponse>> response = apiInstance.listStepRunsWithHttpInfo(runId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowRunsApi#listStepRuns");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **runId** | **UUID**|  | |

### Return type

ApiResponse<[**List&lt;StepRunResponse&gt;**](StepRunResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

