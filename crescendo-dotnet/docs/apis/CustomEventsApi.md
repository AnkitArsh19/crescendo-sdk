# Crescendo.Api.CustomEventsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateEvent**](CustomEventsApi.md#createevent) | **POST** /api/v1/email/custom-events | Create a custom event |
| [**DeleteEvent**](CustomEventsApi.md#deleteevent) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event |
| [**FireEvent**](CustomEventsApi.md#fireevent) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event |
| [**ListEvents**](CustomEventsApi.md#listevents) | **GET** /api/v1/email/custom-events | List custom events |

<a id="createevent"></a>
# **CreateEvent**
> CustomEvent CreateEvent (CreateCustomEventRequest createCustomEventRequest)

Create a custom event


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createCustomEventRequest** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md) |  |  |

### Return type

[**CustomEvent**](CustomEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deleteevent"></a>
# **DeleteEvent**
> void DeleteEvent (string name)

Delete a custom event


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string** |  |  |

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

<a id="fireevent"></a>
# **FireEvent**
> void FireEvent (string name, FireCustomEventRequest fireCustomEventRequest)

Fire a custom event


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **name** | **string** |  |  |
| **fireCustomEventRequest** | [**FireCustomEventRequest**](FireCustomEventRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listevents"></a>
# **ListEvents**
> List&lt;CustomEvent&gt; ListEvents ()

List custom events


### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;CustomEvent&gt;**](CustomEvent.md)

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

