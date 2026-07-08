# Crescendo.Api.WorkflowRunsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CancelRun**](WorkflowRunsApi.md#cancelrun) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run |
| [**GetRunDetail**](WorkflowRunsApi.md#getrundetail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details |
| [**GetRunStats**](WorkflowRunsApi.md#getrunstats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics |
| [**GetStepRun**](WorkflowRunsApi.md#getsteprun) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details |
| [**ListAllRuns**](WorkflowRunsApi.md#listallruns) | **GET** /api/v1/runs | List all runs |
| [**ListRuns**](WorkflowRunsApi.md#listruns) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs |
| [**ListStepRuns**](WorkflowRunsApi.md#liststepruns) | **GET** /api/v1/runs/{runId}/steps | List step runs |

<a id="cancelrun"></a>
# **CancelRun**
> void CancelRun (Guid workflowId, Guid runId)

Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |
| **runId** | **Guid** |  |  |

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

<a id="getrundetail"></a>
# **GetRunDetail**
> WorkflowRunDetailResponse GetRunDetail (Guid workflowId, Guid runId)

Get run details

Gets execution details including step results for a specific run. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |
| **runId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getrunstats"></a>
# **GetRunStats**
> WorkflowRunStatsResponse GetRunStats (Guid workflowId)

Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getsteprun"></a>
# **GetStepRun**
> StepRunResponse GetStepRun (Guid runId, Guid stepRunId)

Get step run details

Gets specific step execution details. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **runId** | **Guid** |  |  |
| **stepRunId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listallruns"></a>
# **ListAllRuns**
> PageWorkflowRunSummaryResponse ListAllRuns (int page = null, int size = null)

List all runs

Lists execution runs across all workflows. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** |  | [optional] [default to 0] |
| **size** | **int** |  | [optional] [default to 20] |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listruns"></a>
# **ListRuns**
> PageWorkflowRunSummaryResponse ListRuns (Guid workflowId, int page = null, int size = null)

List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **workflowId** | **Guid** |  |  |
| **page** | **int** |  | [optional] [default to 0] |
| **size** | **int** |  | [optional] [default to 20] |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="liststepruns"></a>
# **ListStepRuns**
> List&lt;StepRunResponse&gt; ListStepRuns (Guid runId)

List step runs

Lists step execution details for a specific run. Requires run:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **runId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

