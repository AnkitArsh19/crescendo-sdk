# Crescendo::WorkflowsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**activate_workflow**](WorkflowsApi.md#activate_workflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow |
| [**create_workflow**](WorkflowsApi.md#create_workflow) | **POST** /api/v1/workflows | Create workflow |
| [**deactivate_workflow**](WorkflowsApi.md#deactivate_workflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow |
| [**delete_workflow**](WorkflowsApi.md#delete_workflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow |
| [**get_workflow**](WorkflowsApi.md#get_workflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details |
| [**list_workflows**](WorkflowsApi.md#list_workflows) | **GET** /api/v1/workflows | List workflows |
| [**trigger_workflow**](WorkflowsApi.md#trigger_workflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow |
| [**update_workflow**](WorkflowsApi.md#update_workflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow |


## activate_workflow

> activate_workflow(workflow_id)

Activate workflow

Enables triggering for a workflow. Requires workflow:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Activate workflow
  api_instance.activate_workflow(workflow_id)
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->activate_workflow: #{e}"
end
```

#### Using the activate_workflow_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> activate_workflow_with_http_info(workflow_id)

```ruby
begin
  # Activate workflow
  data, status_code, headers = api_instance.activate_workflow_with_http_info(workflow_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->activate_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create_workflow

> <WorkflowSummaryResponse> create_workflow(create_workflow_request)

Create workflow

Creates a new workflow. Requires workflow:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
create_workflow_request = Crescendo::CreateWorkflowRequest.new({name: 'name_example'}) # CreateWorkflowRequest | 

begin
  # Create workflow
  result = api_instance.create_workflow(create_workflow_request)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->create_workflow: #{e}"
end
```

#### Using the create_workflow_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowSummaryResponse>, Integer, Hash)> create_workflow_with_http_info(create_workflow_request)

```ruby
begin
  # Create workflow
  data, status_code, headers = api_instance.create_workflow_with_http_info(create_workflow_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowSummaryResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->create_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_workflow_request** | [**CreateWorkflowRequest**](CreateWorkflowRequest.md) |  |  |

### Return type

[**WorkflowSummaryResponse**](WorkflowSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## deactivate_workflow

> deactivate_workflow(workflow_id)

Deactivate workflow

Disables triggering for a workflow. Requires workflow:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Deactivate workflow
  api_instance.deactivate_workflow(workflow_id)
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->deactivate_workflow: #{e}"
end
```

#### Using the deactivate_workflow_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> deactivate_workflow_with_http_info(workflow_id)

```ruby
begin
  # Deactivate workflow
  data, status_code, headers = api_instance.deactivate_workflow_with_http_info(workflow_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->deactivate_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## delete_workflow

> delete_workflow(workflow_id)

Delete workflow

Soft-deletes a workflow. Requires workflow:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Delete workflow
  api_instance.delete_workflow(workflow_id)
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->delete_workflow: #{e}"
end
```

#### Using the delete_workflow_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_workflow_with_http_info(workflow_id)

```ruby
begin
  # Delete workflow
  data, status_code, headers = api_instance.delete_workflow_with_http_info(workflow_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->delete_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get_workflow

> <WorkflowDetailResponse> get_workflow(workflow_id)

Get workflow details

Gets metadata and step configuration for a specific workflow. Requires workflow:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 

begin
  # Get workflow details
  result = api_instance.get_workflow(workflow_id)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->get_workflow: #{e}"
end
```

#### Using the get_workflow_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowDetailResponse>, Integer, Hash)> get_workflow_with_http_info(workflow_id)

```ruby
begin
  # Get workflow details
  data, status_code, headers = api_instance.get_workflow_with_http_info(workflow_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowDetailResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->get_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |

### Return type

[**WorkflowDetailResponse**](WorkflowDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## list_workflows

> <WorkflowListResponse> list_workflows(opts)

List workflows

Lists workflows with optional status filter and cursor pagination. Requires workflow:read scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
opts = {
  status: 'status_example', # String | 
  limit: 56, # Integer | 
  after: 'after_example' # String | 
}

begin
  # List workflows
  result = api_instance.list_workflows(opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->list_workflows: #{e}"
end
```

#### Using the list_workflows_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowListResponse>, Integer, Hash)> list_workflows_with_http_info(opts)

```ruby
begin
  # List workflows
  data, status_code, headers = api_instance.list_workflows_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowListResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->list_workflows_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **limit** | **Integer** |  | [optional][default to 50] |
| **after** | **String** |  | [optional] |

### Return type

[**WorkflowListResponse**](WorkflowListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## trigger_workflow

> <WorkflowRunSummaryResponse> trigger_workflow(workflow_id, opts)

Trigger workflow

Programmatically triggers an active workflow. Returns immediately while execution happens asynchronously. Requires workflow:trigger scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
opts = {
  idempotency_key: 'idempotency_key_example', # String | 
  request_body: { key: 3.56} # Hash<String, Object> | 
}

begin
  # Trigger workflow
  result = api_instance.trigger_workflow(workflow_id, opts)
  p result
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->trigger_workflow: #{e}"
end
```

#### Using the trigger_workflow_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WorkflowRunSummaryResponse>, Integer, Hash)> trigger_workflow_with_http_info(workflow_id, opts)

```ruby
begin
  # Trigger workflow
  data, status_code, headers = api_instance.trigger_workflow_with_http_info(workflow_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WorkflowRunSummaryResponse>
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->trigger_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |
| **idempotency_key** | **String** |  | [optional] |
| **request_body** | [**Hash&lt;String, Object&gt;**](Object.md) |  | [optional] |

### Return type

[**WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## update_workflow

> update_workflow(workflow_id, update_workflow_request)

Update workflow

Updates a workflow's metadata. Requires workflow:write scope.

### Examples

```ruby
require 'time'
require 'crescendo'

api_instance = Crescendo::WorkflowsApi.new
workflow_id = '38400000-8cf0-11bd-b23e-10b96e4ef00d' # String | 
update_workflow_request = Crescendo::UpdateWorkflowRequest.new # UpdateWorkflowRequest | 

begin
  # Update workflow
  api_instance.update_workflow(workflow_id, update_workflow_request)
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->update_workflow: #{e}"
end
```

#### Using the update_workflow_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> update_workflow_with_http_info(workflow_id, update_workflow_request)

```ruby
begin
  # Update workflow
  data, status_code, headers = api_instance.update_workflow_with_http_info(workflow_id, update_workflow_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Crescendo::ApiError => e
  puts "Error when calling WorkflowsApi->update_workflow_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **workflow_id** | **String** |  |  |
| **update_workflow_request** | [**UpdateWorkflowRequest**](UpdateWorkflowRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

