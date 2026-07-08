# \WorkflowsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_workflow**](WorkflowsApi.md#activate_workflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow
[**create_workflow**](WorkflowsApi.md#create_workflow) | **POST** /api/v1/workflows | Create workflow
[**deactivate_workflow**](WorkflowsApi.md#deactivate_workflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow
[**delete_workflow**](WorkflowsApi.md#delete_workflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow
[**get_workflow**](WorkflowsApi.md#get_workflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details
[**list_workflows**](WorkflowsApi.md#list_workflows) | **GET** /api/v1/workflows | List workflows
[**trigger_workflow**](WorkflowsApi.md#trigger_workflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow
[**update_workflow**](WorkflowsApi.md#update_workflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow



## activate_workflow

> activate_workflow(workflow_id)
Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_workflow

> models::WorkflowSummaryResponse create_workflow(create_workflow_request)
Create workflow

Creates a new workflow. Requires workflow:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_workflow_request** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md) |  | [required] |

### Return type

[**models::WorkflowSummaryResponse**](WorkflowSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## deactivate_workflow

> deactivate_workflow(workflow_id)
Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_workflow

> delete_workflow(workflow_id)
Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_workflow

> models::WorkflowDetailResponse get_workflow(workflow_id)
Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::WorkflowDetailResponse**](WorkflowDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_workflows

> models::WorkflowListResponse list_workflows(status, limit, after)
List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> |  |  |
**limit** | Option<**i32**> |  |  |[default to 50]
**after** | Option<**String**> |  |  |

### Return type

[**models::WorkflowListResponse**](WorkflowListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## trigger_workflow

> models::WorkflowRunSummaryResponse trigger_workflow(workflow_id, idempotency_key, request_body)
Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |
**idempotency_key** | Option<**String**> |  |  |
**request_body** | Option<[**std::collections::HashMap<String, serde_json::Value>**](SerdeJson__Value.md)> |  |  |

### Return type

[**models::WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_workflow

> update_workflow(workflow_id, update_workflow_request)
Update workflow

Updates a workflow's metadata. Requires workflow:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |
**update_workflow_request** | [**UpdateWorkflowRequest**](UpdateWorkflowRequest.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

