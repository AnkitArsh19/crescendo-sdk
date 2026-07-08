# Crescendo.Api.SuppressionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddSuppression**](SuppressionsApi.md#addsuppression) | **POST** /api/v1/suppressions | Add a suppression |
| [**ImportSuppressions**](SuppressionsApi.md#importsuppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions |
| [**ListSuppressions**](SuppressionsApi.md#listsuppressions) | **GET** /api/v1/suppressions | List suppressions |
| [**RemoveSuppression**](SuppressionsApi.md#removesuppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression |

<a id="addsuppression"></a>
# **AddSuppression**
> void AddSuppression (AddSuppressionRequest addSuppressionRequest)

Add a suppression

Manually suppresses an email address. Requires suppression:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **addSuppressionRequest** | [**AddSuppressionRequest**](AddSuppressionRequest.md) |  |  |

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

<a id="importsuppressions"></a>
# **ImportSuppressions**
> void ImportSuppressions (ImportSuppressionsRequest importSuppressionsRequest)

Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **importSuppressionsRequest** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md) |  |  |

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

<a id="listsuppressions"></a>
# **ListSuppressions**
> PublicPageSuppressionResponse ListSuppressions (int limit = null, string after = null)

List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **int** |  | [optional] [default to 100] |
| **after** | **string** |  | [optional]  |

### Return type

[**PublicPageSuppressionResponse**](PublicPageSuppressionResponse.md)

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

<a id="removesuppression"></a>
# **RemoveSuppression**
> void RemoveSuppression (Guid suppressionId)

Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **suppressionId** | **Guid** |  |  |

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

