# \EmailsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_email**](EmailsApi.md#get_email) | **GET** /api/v1/emails/{emailId} | Get email details
[**list_emails**](EmailsApi.md#list_emails) | **GET** /api/v1/emails | List emails
[**search_emails**](EmailsApi.md#search_emails) | **GET** /api/v1/emails/search | Search emails
[**send_batch**](EmailsApi.md#send_batch) | **POST** /api/v1/emails/batch | 
[**send_email**](EmailsApi.md#send_email) | **POST** /api/v1/emails | 
[**send_templated**](EmailsApi.md#send_templated) | **POST** /api/v1/emails/templated | 



## get_email

> models::EmailLogResponse get_email(email_id)
Get email details

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**email_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::EmailLogResponse**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_emails

> Vec<models::EmailLogResponse> list_emails()
List emails

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::EmailLogResponse>**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## search_emails

> Vec<models::EmailLogResponse> search_emails(q)
Search emails

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**q** | **String** |  | [required] |

### Return type

[**Vec<models::EmailLogResponse>**](EmailLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_batch

> models::SendBatchResponse send_batch(send_batch_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**send_batch_request** | [**SendBatchRequest**](SendBatchRequest.md) |  | [required] |

### Return type

[**models::SendBatchResponse**](SendBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_email

> models::SendEmailResponse send_email(send_email_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**send_email_request** | [**SendEmailRequest**](SendEmailRequest.md) |  | [required] |

### Return type

[**models::SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## send_templated

> models::SendEmailResponse send_templated(send_templated_request)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**send_templated_request** | [**SendTemplatedRequest**](SendTemplatedRequest.md) |  | [required] |

### Return type

[**models::SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

