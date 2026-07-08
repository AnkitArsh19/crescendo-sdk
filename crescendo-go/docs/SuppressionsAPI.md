# \SuppressionsAPI

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddSuppression**](SuppressionsAPI.md#AddSuppression) | **Post** /api/v1/suppressions | Add a suppression
[**ImportSuppressions**](SuppressionsAPI.md#ImportSuppressions) | **Post** /api/v1/suppressions/import | Bulk import suppressions
[**ListSuppressions**](SuppressionsAPI.md#ListSuppressions) | **Get** /api/v1/suppressions | List suppressions
[**RemoveSuppression**](SuppressionsAPI.md#RemoveSuppression) | **Delete** /api/v1/suppressions/{suppressionId} | Delete a suppression



## AddSuppression

> AddSuppression(ctx).AddSuppressionRequest(addSuppressionRequest).Execute()

Add a suppression



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
	addSuppressionRequest := *openapiclient.NewAddSuppressionRequest("Email_example") // AddSuppressionRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SuppressionsAPI.AddSuppression(context.Background()).AddSuppressionRequest(addSuppressionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SuppressionsAPI.AddSuppression``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddSuppressionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addSuppressionRequest** | [**AddSuppressionRequest**](AddSuppressionRequest.md) |  | 

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


## ImportSuppressions

> ImportSuppressions(ctx).ImportSuppressionsRequest(importSuppressionsRequest).Execute()

Bulk import suppressions



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
	importSuppressionsRequest := *openapiclient.NewImportSuppressionsRequest() // ImportSuppressionsRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SuppressionsAPI.ImportSuppressions(context.Background()).ImportSuppressionsRequest(importSuppressionsRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SuppressionsAPI.ImportSuppressions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportSuppressionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importSuppressionsRequest** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md) |  | 

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


## ListSuppressions

> PublicPageSuppressionResponse ListSuppressions(ctx).Limit(limit).After(after).Execute()

List suppressions



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
	limit := int32(56) // int32 |  (optional) (default to 100)
	after := "after_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SuppressionsAPI.ListSuppressions(context.Background()).Limit(limit).After(after).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SuppressionsAPI.ListSuppressions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSuppressions`: PublicPageSuppressionResponse
	fmt.Fprintf(os.Stdout, "Response from `SuppressionsAPI.ListSuppressions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSuppressionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** |  | [default to 100]
 **after** | **string** |  | 

### Return type

[**PublicPageSuppressionResponse**](PublicPageSuppressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveSuppression

> RemoveSuppression(ctx, suppressionId).Execute()

Delete a suppression



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
	suppressionId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SuppressionsAPI.RemoveSuppression(context.Background(), suppressionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SuppressionsAPI.RemoveSuppression``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**suppressionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveSuppressionRequest struct via the builder pattern


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

