# \CustomEventsAPI

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateEvent**](CustomEventsAPI.md#CreateEvent) | **Post** /api/v1/email/custom-events | Create a custom event
[**DeleteEvent**](CustomEventsAPI.md#DeleteEvent) | **Delete** /api/v1/email/custom-events/{name} | Delete a custom event
[**FireEvent**](CustomEventsAPI.md#FireEvent) | **Post** /api/v1/email/custom-events/{name}/fire | Fire a custom event
[**ListEvents**](CustomEventsAPI.md#ListEvents) | **Get** /api/v1/email/custom-events | List custom events



## CreateEvent

> CustomEvent CreateEvent(ctx).CreateCustomEventRequest(createCustomEventRequest).Execute()

Create a custom event

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
	createCustomEventRequest := *openapiclient.NewCreateCustomEventRequest() // CreateCustomEventRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomEventsAPI.CreateEvent(context.Background()).CreateCustomEventRequest(createCustomEventRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomEventsAPI.CreateEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateEvent`: CustomEvent
	fmt.Fprintf(os.Stdout, "Response from `CustomEventsAPI.CreateEvent`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomEventRequest** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md) |  | 

### Return type

[**CustomEvent**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteEvent

> DeleteEvent(ctx, name).Execute()

Delete a custom event

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
	name := "name_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CustomEventsAPI.DeleteEvent(context.Background(), name).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomEventsAPI.DeleteEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEventRequest struct via the builder pattern


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


## FireEvent

> FireEvent(ctx, name).FireCustomEventRequest(fireCustomEventRequest).Execute()

Fire a custom event

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
	name := "name_example" // string | 
	fireCustomEventRequest := *openapiclient.NewFireCustomEventRequest() // FireCustomEventRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CustomEventsAPI.FireEvent(context.Background(), name).FireCustomEventRequest(fireCustomEventRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomEventsAPI.FireEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiFireEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fireCustomEventRequest** | [**FireCustomEventRequest**](FireCustomEventRequest.md) |  | 

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


## ListEvents

> []CustomEvent ListEvents(ctx).Execute()

List custom events

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
	resp, r, err := apiClient.CustomEventsAPI.ListEvents(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomEventsAPI.ListEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListEvents`: []CustomEvent
	fmt.Fprintf(os.Stdout, "Response from `CustomEventsAPI.ListEvents`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListEventsRequest struct via the builder pattern


### Return type

[**[]CustomEvent**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

