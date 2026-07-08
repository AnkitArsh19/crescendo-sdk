# Crescendo.Api.WorkflowsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ActivateWorkflow**](WorkflowsApi.md#activateworkflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow |
| [**CreateWorkflow**](WorkflowsApi.md#createworkflow) | **POST** /api/v1/workflows | Create workflow |
| [**DeactivateWorkflow**](WorkflowsApi.md#deactivateworkflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow |
| [**DeleteWorkflow**](WorkflowsApi.md#deleteworkflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow |
| [**GetWorkflow**](WorkflowsApi.md#getworkflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details |
| [**ListWorkflows**](WorkflowsApi.md#listworkflows) | **GET** /api/v1/workflows | List workflows |
| [**TriggerWorkflow**](WorkflowsApi.md#triggerworkflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow |
| [**UpdateWorkflow**](WorkflowsApi.md#updateworkflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow |

<a id="activateworkflow"></a>
# **ActivateWorkflow**
> void ActivateWorkflow (Guid workflowId)

Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="createworkflow"></a>
# **CreateWorkflow**
> WorkflowSummaryResponse CreateWorkflow (CreateWorkflowRequest createWorkflowRequest)

Create workflow

Creates a new workflow. Requires workflow:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createWorkflowRequest** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deactivateworkflow"></a>
# **DeactivateWorkflow**
> void DeactivateWorkflow (Guid workflowId)

Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deleteworkflow"></a>
# **DeleteWorkflow**
> void DeleteWorkflow (Guid workflowId)

Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getworkflow"></a>
# **GetWorkflow**
> WorkflowDetailResponse GetWorkflow (Guid workflowId)

Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listworkflows"></a>
# **ListWorkflows**
> WorkflowListResponse ListWorkflows (string status = null, int limit = null, string after = null)

List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **status** | **string** |  | [optional]  |
| **limit** | **int** |  | [optional] [default to 50] |
| **after** | **string** |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="triggerworkflow"></a>
# **TriggerWorkflow**
> WorkflowRunSummaryResponse TriggerWorkflow (Guid workflowId, string idempotencyKey = null, Dictionary<string, Object> requestBody = null)

Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |
| **idempotencyKey** | **string** |  | [optional]  |
| **requestBody** | [**Dictionary&lt;string, Object&gt;**](Object.md) |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updateworkflow"></a>
# **UpdateWorkflow**
> void UpdateWorkflow (Guid workflowId, UpdateWorkflowRequest updateWorkflowRequest)

Update workflow

Updates a workflow's metadata. Requires workflow:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |
| **updateWorkflowRequest** | [**UpdateWorkflowRequest**](UpdateWorkflowRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

