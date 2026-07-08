# \AppCatalogAPI

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetApp**](AppCatalogAPI.md#GetApp) | **Get** /api/v1/apps/{appKey} | Get app details
[**ListApps**](AppCatalogAPI.md#ListApps) | **Get** /api/v1/apps | List apps



## GetApp

> AppDetailResponse GetApp(ctx, appKey).Execute()

Get app details



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
	appKey := "appKey_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AppCatalogAPI.GetApp(context.Background(), appKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AppCatalogAPI.GetApp``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetApp`: AppDetailResponse
	fmt.Fprintf(os.Stdout, "Response from `AppCatalogAPI.GetApp`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appKey** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAppRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AppDetailResponse**](AppDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListApps

> []AppSummaryResponse ListApps(ctx).Execute()

List apps



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
	resp, r, err := apiClient.AppCatalogAPI.ListApps(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AppCatalogAPI.ListApps``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListApps`: []AppSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `AppCatalogAPI.ListApps`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListAppsRequest struct via the builder pattern


### Return type

[**[]AppSummaryResponse**](AppSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

