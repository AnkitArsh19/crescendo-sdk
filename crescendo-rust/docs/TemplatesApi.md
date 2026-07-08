# \TemplatesApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clone_from_broadcast**](TemplatesApi.md#clone_from_broadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} | 
[**create_template**](TemplatesApi.md#create_template) | **POST** /api/v1/templates | 
[**delete_template**](TemplatesApi.md#delete_template) | **DELETE** /api/v1/templates/{templateId} | 
[**get_template**](TemplatesApi.md#get_template) | **GET** /api/v1/templates/{templateId} | 
[**list_templates**](TemplatesApi.md#list_templates) | **GET** /api/v1/templates | 
[**publish_template**](TemplatesApi.md#publish_template) | **POST** /api/v1/templates/{templateId}/publish | 
[**test_send**](TemplatesApi.md#test_send) | **POST** /api/v1/templates/{templateId}/test | 
[**update_template**](TemplatesApi.md#update_template) | **PATCH** /api/v1/templates/{templateId} | 



## clone_from_broadcast

> models::PublicTemplateResponse clone_from_broadcast(broadcast_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**broadcast_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_template

> models::PublicTemplateResponse create_template(create_template_request, idempotency_key)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_template_request** | [**CreateTemplateRequest**](CreateTemplateRequest.md) |  | [required] |
**idempotency_key** | Option<**String**> |  |  |

### Return type

[**models::PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_template

> delete_template(template_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**template_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_template

> models::PublicTemplateResponse get_template(template_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**template_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_templates

> Vec<models::PublicTemplateResponse> list_templates()


### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::PublicTemplateResponse>**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## publish_template

> models::PublicTemplateResponse publish_template(template_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**template_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## test_send

> models::PublicTestSendResponse test_send(template_id, test_send_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**template_id** | **uuid::Uuid** |  | [required] |
**test_send_request** | [**TestSendRequest**](TestSendRequest.md) |  | [required] |

### Return type

[**models::PublicTestSendResponse**](PublicTestSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_template

> models::PublicTemplateResponse update_template(template_id, update_template_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**template_id** | **uuid::Uuid** |  | [required] |
**update_template_request** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md) |  | [required] |

### Return type

[**models::PublicTemplateResponse**](PublicTemplateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

