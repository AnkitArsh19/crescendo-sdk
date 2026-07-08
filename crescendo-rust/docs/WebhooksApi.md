# \WebhooksApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_subscription**](WebhooksApi.md#create_subscription) | **POST** /api/v1/webhooks | 
[**delete_subscription**](WebhooksApi.md#delete_subscription) | **DELETE** /api/v1/webhooks/{id} | 
[**list_subscriptions**](WebhooksApi.md#list_subscriptions) | **GET** /api/v1/webhooks | 



## create_subscription

> models::PublicWebhookResponse create_subscription(create_webhook_request, idempotency_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_webhook_request** | [**CreateWebhookRequest**](CreateWebhookRequest.md) |  | [required] |
**idempotency_key** | Option<**String**> |  |  |

### Return type

[**models::PublicWebhookResponse**](PublicWebhookResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_subscription

> delete_subscription(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_subscriptions

> Vec<models::PublicWebhookListResponse> list_subscriptions()


### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::PublicWebhookListResponse>**](PublicWebhookListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

