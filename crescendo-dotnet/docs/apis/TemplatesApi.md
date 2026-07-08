# Crescendo.Api.TemplatesApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CloneFromBroadcast**](TemplatesApi.md#clonefrombroadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} |  |
| [**CreateTemplate**](TemplatesApi.md#createtemplate) | **POST** /api/v1/templates |  |
| [**DeleteTemplate**](TemplatesApi.md#deletetemplate) | **DELETE** /api/v1/templates/{templateId} |  |
| [**GetTemplate**](TemplatesApi.md#gettemplate) | **GET** /api/v1/templates/{templateId} |  |
| [**ListTemplates**](TemplatesApi.md#listtemplates) | **GET** /api/v1/templates |  |
| [**PublishTemplate**](TemplatesApi.md#publishtemplate) | **POST** /api/v1/templates/{templateId}/publish |  |
| [**TestSend**](TemplatesApi.md#testsend) | **POST** /api/v1/templates/{templateId}/test |  |
| [**UpdateTemplate**](TemplatesApi.md#updatetemplate) | **PATCH** /api/v1/templates/{templateId} |  |

<a id="clonefrombroadcast"></a>
# **CloneFromBroadcast**
> PublicTemplateResponse CloneFromBroadcast (Guid broadcastId)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **broadcastId** | **Guid** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

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

<a id="createtemplate"></a>
# **CreateTemplate**
> PublicTemplateResponse CreateTemplate (CreateTemplateRequest createTemplateRequest, string idempotencyKey = null)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createTemplateRequest** | [**CreateTemplateRequest**](CreateTemplateRequest.md) |  |  |
| **idempotencyKey** | **string** |  | [optional]  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

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

<a id="deletetemplate"></a>
# **DeleteTemplate**
> void DeleteTemplate (Guid templateId)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **Guid** |  |  |

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

<a id="gettemplate"></a>
# **GetTemplate**
> PublicTemplateResponse GetTemplate (Guid templateId)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **Guid** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

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

<a id="listtemplates"></a>
# **ListTemplates**
> List&lt;PublicTemplateResponse&gt; ListTemplates ()




### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;PublicTemplateResponse&gt;**](PublicTemplateResponse.md)

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

<a id="publishtemplate"></a>
# **PublishTemplate**
> PublicTemplateResponse PublishTemplate (Guid templateId)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **Guid** |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

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

<a id="testsend"></a>
# **TestSend**
> PublicTestSendResponse TestSend (Guid templateId, TestSendRequest testSendRequest)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **Guid** |  |  |
| **testSendRequest** | [**TestSendRequest**](TestSendRequest.md) |  |  |

### Return type

[**PublicTestSendResponse**](PublicTestSendResponse.md)

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

<a id="updatetemplate"></a>
# **UpdateTemplate**
> PublicTemplateResponse UpdateTemplate (Guid templateId, UpdateTemplateRequest updateTemplateRequest)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **Guid** |  |  |
| **updateTemplateRequest** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md) |  |  |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)

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

