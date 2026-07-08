# \ConnectionsAPI

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateConnection**](ConnectionsAPI.md#CreateConnection) | **Post** /api/v1/connections | Create connection
[**DeleteConnection**](ConnectionsAPI.md#DeleteConnection) | **Delete** /api/v1/connections/{connectionId} | Delete connection
[**GetConnection**](ConnectionsAPI.md#GetConnection) | **Get** /api/v1/connections/{connectionId} | Get connection details
[**ListConnections**](ConnectionsAPI.md#ListConnections) | **Get** /api/v1/connections | List connections
[**UpdateConnection**](ConnectionsAPI.md#UpdateConnection) | **Patch** /api/v1/connections/{connectionId} | Update connection



## CreateConnection

> ConnectionResponse CreateConnection(ctx).CreateConnectionRequest(createConnectionRequest).Execute()

Create connection



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/AnkitArsh19/crescendo-go"
)

func main() {
	createConnectionRequest := *openapiclient.NewCreateConnectionRequest("AppKey_example", "Name_example", map[string]interface{}{"key": interface{}(123)}) // CreateConnectionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.CreateConnection(context.Background()).CreateConnectionRequest(createConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.CreateConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateConnection`: ConnectionResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.CreateConnection`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConnectionRequest** | [**CreateConnectionRequest**](CreateConnectionRequest.md) |  | 

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteConnection

> DeleteConnection(ctx, connectionId).Execute()

Delete connection



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/AnkitArsh19/crescendo-go"
)

func main() {
	connectionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ConnectionsAPI.DeleteConnection(context.Background(), connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.DeleteConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConnection

> ConnectionResponse GetConnection(ctx, connectionId).Execute()

Get connection details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/AnkitArsh19/crescendo-go"
)

func main() {
	connectionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.GetConnection(context.Background(), connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.GetConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnection`: ConnectionResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.GetConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListConnections

> []ConnectionResponse ListConnections(ctx).Execute()

List connections



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/AnkitArsh19/crescendo-go"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.ListConnections(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.ListConnections``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListConnections`: []ConnectionResponse
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.ListConnections`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListConnectionsRequest struct via the builder pattern


### Return type

[**[]ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateConnection

> UpdateConnection(ctx, connectionId).UpdateConnectionRequest(updateConnectionRequest).Execute()

Update connection



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/AnkitArsh19/crescendo-go"
)

func main() {
	connectionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	updateConnectionRequest := *openapiclient.NewUpdateConnectionRequest() // UpdateConnectionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ConnectionsAPI.UpdateConnection(context.Background(), connectionId).UpdateConnectionRequest(updateConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.UpdateConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateConnectionRequest** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md) |  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

