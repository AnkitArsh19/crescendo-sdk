# Crescendo.Api.WebhooksApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateSubscription**](WebhooksApi.md#createsubscription) | **POST** /api/v1/webhooks |  |
| [**DeleteSubscription**](WebhooksApi.md#deletesubscription) | **DELETE** /api/v1/webhooks/{id} |  |
| [**ListSubscriptions**](WebhooksApi.md#listsubscriptions) | **GET** /api/v1/webhooks |  |

<a id="createsubscription"></a>
# **CreateSubscription**
> PublicWebhookResponse CreateSubscription (CreateWebhookRequest createWebhookRequest, string idempotencyKey = null)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createWebhookRequest** | [**CreateWebhookRequest**](CreateWebhookRequest.md) |  |  |
| **idempotencyKey** | **string** |  | [optional]  |

### Return type

[**PublicWebhookResponse**](PublicWebhookResponse.md)

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

<a id="deletesubscription"></a>
# **DeleteSubscription**
> void DeleteSubscription (Guid id)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **Guid** |  |  |

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

<a id="listsubscriptions"></a>
# **ListSubscriptions**
> List&lt;PublicWebhookListResponse&gt; ListSubscriptions ()




### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;PublicWebhookListResponse&gt;**](PublicWebhookListResponse.md)

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

