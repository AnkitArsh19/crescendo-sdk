# Crescendo.Api.EmailsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetEmail**](EmailsApi.md#getemail) | **GET** /api/v1/emails/{emailId} | Get email details |
| [**ListEmails**](EmailsApi.md#listemails) | **GET** /api/v1/emails | List emails |
| [**SearchEmails**](EmailsApi.md#searchemails) | **GET** /api/v1/emails/search | Search emails |
| [**SendBatch**](EmailsApi.md#sendbatch) | **POST** /api/v1/emails/batch |  |
| [**SendEmail**](EmailsApi.md#sendemail) | **POST** /api/v1/emails |  |
| [**SendTemplated**](EmailsApi.md#sendtemplated) | **POST** /api/v1/emails/templated |  |

<a id="getemail"></a>
# **GetEmail**
> EmailLogResponse GetEmail (Guid emailId)

Get email details


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **emailId** | **Guid** |  |  |

### Return type

[**EmailLogResponse**](EmailLogResponse.md)

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

<a id="listemails"></a>
# **ListEmails**
> List&lt;EmailLogResponse&gt; ListEmails ()

List emails


### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)

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

<a id="searchemails"></a>
# **SearchEmails**
> List&lt;EmailLogResponse&gt; SearchEmails (string q)

Search emails


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **q** | **string** |  |  |

### Return type

[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)

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

<a id="sendbatch"></a>
# **SendBatch**
> SendBatchResponse SendBatch (SendBatchRequest sendBatchRequest)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sendBatchRequest** | [**SendBatchRequest**](SendBatchRequest.md) |  |  |

### Return type

[**SendBatchResponse**](SendBatchResponse.md)

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

<a id="sendemail"></a>
# **SendEmail**
> SendEmailResponse SendEmail (SendEmailRequest sendEmailRequest)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sendEmailRequest** | [**SendEmailRequest**](SendEmailRequest.md) |  |  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

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

<a id="sendtemplated"></a>
# **SendTemplated**
> SendEmailResponse SendTemplated (SendTemplatedRequest sendTemplatedRequest)




### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sendTemplatedRequest** | [**SendTemplatedRequest**](SendTemplatedRequest.md) |  |  |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

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

