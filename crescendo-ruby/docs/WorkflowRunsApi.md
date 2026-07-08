# Crescendo::WorkflowRunsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_run**](WorkflowRunsApi.md#cancel_run) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run |
| [**get_run_detail**](WorkflowRunsApi.md#get_run_detail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details |
| [**get_run_stats**](WorkflowRunsApi.md#get_run_stats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics |
| [**get_step_run**](WorkflowRunsApi.md#get_step_run) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details |
| [**list_all_runs**](WorkflowRunsApi.md#list_all_runs) | **GET** /api/v1/runs | List all runs |
| [**list_runs**](WorkflowRunsApi.md#list_runs) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs |
| [**list_step_runs**](WorkflowRunsApi.md#list_step_runs) | **GET** /api/v1/runs/{runId}/steps | List step runs |


## cancel_run

> cancel_run(workflow_id, run_id)

Cancel workflow run

Cancels a pending or currently executing run. Requires run:cancel scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
run_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Cancel workflow run
  api_instance.cancel_run(workflow_id, run_id)
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->cancel_run: #{e}"
end
```

#### Using the cancel_run_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> cancel_run_with_http_info(workflow_id, run_id)

```ruby
begin
  # Cancel workflow run
  data, status_code, headers = api_instance.cancel_run_with_http_info(workflow_id, run_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->cancel_run_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |
| **run_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_run_detail

> <WorkflowRunDetailResponse> get_run_detail(workflow_id, run_id)

Get run details

Gets execution details including step results for a specific run. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
run_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get run details
  result = api_instance.get_run_detail(workflow_id, run_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_run_detail: #{e}"
end
```

#### Using the get_run_detail_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowRunDetailResponse>, Integer, Hash)> get_run_detail_with_http_info(workflow_id, run_id)

```ruby
begin
  # Get run details
  data, status_code, headers = api_instance.get_run_detail_with_http_info(workflow_id, run_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowRunDetailResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_run_detail_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |
| **run_id** | **String** |  |  |

### Return type

[**WorkflowRunDetailResponse**](WorkflowRunDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## get_run_stats

> <WorkflowRunStatsResponse> get_run_stats(workflow_id)

Get run statistics

Gets aggregated execution statistics for a workflow. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get run statistics
  result = api_instance.get_run_stats(workflow_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_run_stats: #{e}"
end
```

#### Using the get_run_stats_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowRunStatsResponse>, Integer, Hash)> get_run_stats_with_http_info(workflow_id)

```ruby
begin
  # Get run statistics
  data, status_code, headers = api_instance.get_run_stats_with_http_info(workflow_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowRunStatsResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_run_stats_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |

### Return type

[**WorkflowRunStatsResponse**](WorkflowRunStatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## get_step_run

> <StepRunResponse> get_step_run(run_id, step_run_id)

Get step run details

Gets specific step execution details. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
run_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
step_run_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get step run details
  result = api_instance.get_step_run(run_id, step_run_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_step_run: #{e}"
end
```

#### Using the get_step_run_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<StepRunResponse>, Integer, Hash)> get_step_run_with_http_info(run_id, step_run_id)

```ruby
begin
  # Get step run details
  data, status_code, headers = api_instance.get_step_run_with_http_info(run_id, step_run_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <StepRunResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->get_step_run_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **run_id** | **String** |  |  |
| **step_run_id** | **String** |  |  |

### Return type

[**StepRunResponse**](StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_all_runs

> <PageWorkflowRunSummaryResponse> list_all_runs(opts)

List all runs

Lists execution runs across all workflows. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
opts = {
  page: 56, # Integer | 
  size: 56 # Integer | 
}

begin
  # List all runs
  result = api_instance.list_all_runs(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_all_runs: #{e}"
end
```

#### Using the list_all_runs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PageWorkflowRunSummaryResponse>, Integer, Hash)> list_all_runs_with_http_info(opts)

```ruby
begin
  # List all runs
  data, status_code, headers = api_instance.list_all_runs_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PageWorkflowRunSummaryResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_all_runs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** |  | [optional][default to 0] |
| **size** | **Integer** |  | [optional][default to 20] |

### Return type

[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_runs

> <PageWorkflowRunSummaryResponse> list_runs(workflow_id, opts)

List workflow runs

Lists all execution runs for a specific workflow. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  page: 56, # Integer | 
  size: 56 # Integer | 
}

begin
  # List workflow runs
  result = api_instance.list_runs(workflow_id, opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_runs: #{e}"
end
```

#### Using the list_runs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PageWorkflowRunSummaryResponse>, Integer, Hash)> list_runs_with_http_info(workflow_id, opts)

```ruby
begin
  # List workflow runs
  data, status_code, headers = api_instance.list_runs_with_http_info(workflow_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PageWorkflowRunSummaryResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_runs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |
| **page** | **Integer** |  | [optional][default to 0] |
| **size** | **Integer** |  | [optional][default to 20] |

### Return type

[**PageWorkflowRunSummaryResponse**](PageWorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_step_runs

> <Array<StepRunResponse>> list_step_runs(run_id)

List step runs

Lists step execution details for a specific run. Requires run:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowRunsApi.new
run_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # List step runs
  result = api_instance.list_step_runs(run_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_step_runs: #{e}"
end
```

#### Using the list_step_runs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<StepRunResponse>>, Integer, Hash)> list_step_runs_with_http_info(run_id)

```ruby
begin
  # List step runs
  data, status_code, headers = api_instance.list_step_runs_with_http_info(run_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<StepRunResponse>>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowRunsApi->list_step_runs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **run_id** | **String** |  |  |

### Return type

[**Array&lt;StepRunResponse&gt;**](StepRunResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

