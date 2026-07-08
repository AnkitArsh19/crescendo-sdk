# \CustomEventsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_event**](CustomEventsApi.md#create_event) | **POST** /api/v1/email/custom-events | Create a custom event
[**delete_event**](CustomEventsApi.md#delete_event) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event
[**fire_event**](CustomEventsApi.md#fire_event) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event
[**list_events**](CustomEventsApi.md#list_events) | **GET** /api/v1/email/custom-events | List custom events



## create_event

> models::CustomEvent create_event(create_custom_event_request)
Create a custom event

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_custom_event_request** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md) |  | [required] |

### Return type

[**models::CustomEvent**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_event

> delete_event(name)
Delete a custom event

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**name** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## fire_event

> fire_event(name, fire_custom_event_request)
Fire a custom event

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**name** | **String** |  | [required] |
**fire_custom_event_request** | [**FireCustomEventRequest**](FireCustomEventRequest.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_events

> Vec<models::CustomEvent> list_events()
List custom events

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::CustomEvent>**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

