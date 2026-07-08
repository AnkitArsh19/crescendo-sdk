# WorkflowsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateWorkflow**](WorkflowsApi.md#activateWorkflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow |
| [**activateWorkflowWithHttpInfo**](WorkflowsApi.md#activateWorkflowWithHttpInfo) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow |
| [**createWorkflow**](WorkflowsApi.md#createWorkflow) | **POST** /api/v1/workflows | Create workflow |
| [**createWorkflowWithHttpInfo**](WorkflowsApi.md#createWorkflowWithHttpInfo) | **POST** /api/v1/workflows | Create workflow |
| [**deactivateWorkflow**](WorkflowsApi.md#deactivateWorkflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow |
| [**deactivateWorkflowWithHttpInfo**](WorkflowsApi.md#deactivateWorkflowWithHttpInfo) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow |
| [**deleteWorkflow**](WorkflowsApi.md#deleteWorkflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow |
| [**deleteWorkflowWithHttpInfo**](WorkflowsApi.md#deleteWorkflowWithHttpInfo) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow |
| [**getWorkflow**](WorkflowsApi.md#getWorkflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details |
| [**getWorkflowWithHttpInfo**](WorkflowsApi.md#getWorkflowWithHttpInfo) | **GET** /api/v1/workflows/{workflowId} | Get workflow details |
| [**listWorkflows**](WorkflowsApi.md#listWorkflows) | **GET** /api/v1/workflows | List workflows |
| [**listWorkflowsWithHttpInfo**](WorkflowsApi.md#listWorkflowsWithHttpInfo) | **GET** /api/v1/workflows | List workflows |
| [**triggerWorkflow**](WorkflowsApi.md#triggerWorkflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow |
| [**triggerWorkflowWithHttpInfo**](WorkflowsApi.md#triggerWorkflowWithHttpInfo) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow |
| [**updateWorkflow**](WorkflowsApi.md#updateWorkflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow |
| [**updateWorkflowWithHttpInfo**](WorkflowsApi.md#updateWorkflowWithHttpInfo) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow |



## activateWorkflow

> void activateWorkflow(workflowId)

Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.activateWorkflow(workflowId);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#activateWorkflow");
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

## activateWorkflowWithHttpInfo

> ApiResponse<Void> activateWorkflowWithHttpInfo(workflowId)

Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.activateWorkflowWithHttpInfo(workflowId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#activateWorkflow");
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


## createWorkflow

> WorkflowSummaryResponse createWorkflow(createWorkflowRequest)

Create workflow

Creates a new workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        CreateWorkflowRequest createWorkflowRequest = new CreateWorkflowRequest(); // CreateWorkflowRequest | 
        try {
            WorkflowSummaryResponse result = apiInstance.createWorkflow(createWorkflowRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#createWorkflow");
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
| **createWorkflowRequest** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md)|  | |

### Return type

[**WorkflowSummaryResponse**](WorkflowSummaryResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createWorkflowWithHttpInfo

> ApiResponse<WorkflowSummaryResponse> createWorkflowWithHttpInfo(createWorkflowRequest)

Create workflow

Creates a new workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        CreateWorkflowRequest createWorkflowRequest = new CreateWorkflowRequest(); // CreateWorkflowRequest | 
        try {
            ApiResponse<WorkflowSummaryResponse> response = apiInstance.createWorkflowWithHttpInfo(createWorkflowRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#createWorkflow");
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
| **createWorkflowRequest** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md)|  | |

### Return type

ApiResponse<[**WorkflowSummaryResponse**](WorkflowSummaryResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deactivateWorkflow

> void deactivateWorkflow(workflowId)

Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deactivateWorkflow(workflowId);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#deactivateWorkflow");
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

## deactivateWorkflowWithHttpInfo

> ApiResponse<Void> deactivateWorkflowWithHttpInfo(workflowId)

Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deactivateWorkflowWithHttpInfo(workflowId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#deactivateWorkflow");
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


## deleteWorkflow

> void deleteWorkflow(workflowId)

Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteWorkflow(workflowId);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#deleteWorkflow");
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

## deleteWorkflowWithHttpInfo

> ApiResponse<Void> deleteWorkflowWithHttpInfo(workflowId)

Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteWorkflowWithHttpInfo(workflowId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#deleteWorkflow");
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


## getWorkflow

> WorkflowDetailResponse getWorkflow(workflowId)

Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            WorkflowDetailResponse result = apiInstance.getWorkflow(workflowId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#getWorkflow");
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

[**WorkflowDetailResponse**](WorkflowDetailResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getWorkflowWithHttpInfo

> ApiResponse<WorkflowDetailResponse> getWorkflowWithHttpInfo(workflowId)

Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<WorkflowDetailResponse> response = apiInstance.getWorkflowWithHttpInfo(workflowId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#getWorkflow");
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

ApiResponse<[**WorkflowDetailResponse**](WorkflowDetailResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listWorkflows

> WorkflowListResponse listWorkflows(status, limit, after)

List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        String status = "status_example"; // String | 
        Integer limit = 50; // Integer | 
        String after = "after_example"; // String | 
        try {
            WorkflowListResponse result = apiInstance.listWorkflows(status, limit, after);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#listWorkflows");
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
| **status** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 50] |
| **after** | **String**|  | [optional] |

### Return type

[**WorkflowListResponse**](WorkflowListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listWorkflowsWithHttpInfo

> ApiResponse<WorkflowListResponse> listWorkflowsWithHttpInfo(status, limit, after)

List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        String status = "status_example"; // String | 
        Integer limit = 50; // Integer | 
        String after = "after_example"; // String | 
        try {
            ApiResponse<WorkflowListResponse> response = apiInstance.listWorkflowsWithHttpInfo(status, limit, after);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#listWorkflows");
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
| **status** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 50] |
| **after** | **String**|  | [optional] |

### Return type

ApiResponse<[**WorkflowListResponse**](WorkflowListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## triggerWorkflow

> WorkflowRunSummaryResponse triggerWorkflow(workflowId, idempotencyKey, requestBody)

Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            WorkflowRunSummaryResponse result = apiInstance.triggerWorkflow(workflowId, idempotencyKey, requestBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#triggerWorkflow");
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
| **idempotencyKey** | **String**|  | [optional] |
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type

[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## triggerWorkflowWithHttpInfo

> ApiResponse<WorkflowRunSummaryResponse> triggerWorkflowWithHttpInfo(workflowId, idempotencyKey, requestBody)

Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        Map<String, Object> requestBody = null; // Map<String, Object> | 
        try {
            ApiResponse<WorkflowRunSummaryResponse> response = apiInstance.triggerWorkflowWithHttpInfo(workflowId, idempotencyKey, requestBody);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#triggerWorkflow");
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
| **idempotencyKey** | **String**|  | [optional] |
| **requestBody** | [**Map&lt;String, Object&gt;**](Object.md)|  | [optional] |

### Return type

ApiResponse<[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## updateWorkflow

> void updateWorkflow(workflowId, updateWorkflowRequest)

Update workflow

Updates a workflow&#39;s metadata. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UpdateWorkflowRequest updateWorkflowRequest = new UpdateWorkflowRequest(); // UpdateWorkflowRequest | 
        try {
            apiInstance.updateWorkflow(workflowId, updateWorkflowRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#updateWorkflow");
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
| **updateWorkflowRequest** | [**UpdateWorkflowRequest**](UpdateWorkflowRequest.md)|  | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## updateWorkflowWithHttpInfo

> ApiResponse<Void> updateWorkflowWithHttpInfo(workflowId, updateWorkflowRequest)

Update workflow

Updates a workflow&#39;s metadata. Requires workflow:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WorkflowsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WorkflowsApi apiInstance = new WorkflowsApi(defaultClient);
        UUID workflowId = UUID.randomUUID(); // UUID | 
        UpdateWorkflowRequest updateWorkflowRequest = new UpdateWorkflowRequest(); // UpdateWorkflowRequest | 
        try {
            ApiResponse<Void> response = apiInstance.updateWorkflowWithHttpInfo(workflowId, updateWorkflowRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WorkflowsApi#updateWorkflow");
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
| **updateWorkflowRequest** | [**UpdateWorkflowRequest**](UpdateWorkflowRequest.md)|  | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

