# \WorkflowRunsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_run**](WorkflowRunsApi.md#cancel_run) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run
[**get_run_detail**](WorkflowRunsApi.md#get_run_detail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details
[**get_run_stats**](WorkflowRunsApi.md#get_run_stats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics
[**get_step_run**](WorkflowRunsApi.md#get_step_run) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details
[**list_all_runs**](WorkflowRunsApi.md#list_all_runs) | **GET** /api/v1/runs | List all runs
[**list_runs**](WorkflowRunsApi.md#list_runs) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs
[**list_step_runs**](WorkflowRunsApi.md#list_step_runs) | **GET** /api/v1/runs/{runId}/steps | List step runs



## cancel_run

> cancel_run(workflow_id, run_id)
Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |
**run_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_run_detail

> models::WorkflowRunDetailResponse get_run_detail(workflow_id, run_id)
Get run details

Gets execution details including step results for a specific run. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |
**run_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::WorkflowRunDetailResponse**](WorkflowRunDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_run_stats

> models::WorkflowRunStatsResponse get_run_stats(workflow_id)
Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::WorkflowRunStatsResponse**](WorkflowRunStatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_step_run

> models::StepRunResponse get_step_run(run_id, step_run_id)
Get step run details

Gets specific step execution details. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**run_id** | **uuid::Uuid** |  | [required] |
**step_run_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::StepRunResponse**](StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_all_runs

> models::PageWorkflowRunSummaryResponse list_all_runs(page, size)
List all runs

Lists execution runs across all workflows. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> |  |  |[default to 0]
**size** | Option<**i32**> |  |  |[default to 20]

### Return type

[**models::PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_runs

> models::PageWorkflowRunSummaryResponse list_runs(workflow_id, page, size)
List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**workflow_id** | **uuid::Uuid** |  | [required] |
**page** | Option<**i32**> |  |  |[default to 0]
**size** | Option<**i32**> |  |  |[default to 20]

### Return type

[**models::PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_step_runs

> Vec<models::StepRunResponse> list_step_runs(run_id)
List step runs

Lists step execution details for a specific run. Requires run:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**run_id** | **uuid::Uuid** |  | [required] |

### Return type

[**Vec<models::StepRunResponse>**](StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

