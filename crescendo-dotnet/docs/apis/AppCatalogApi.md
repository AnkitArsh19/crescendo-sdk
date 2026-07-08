# Crescendo.Api.AppCatalogApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**GetApp**](AppCatalogApi.md#getapp) | **GET** /api/v1/apps/{appKey} | Get app details |
| [**ListApps**](AppCatalogApi.md#listapps) | **GET** /api/v1/apps | List apps |

<a id="getapp"></a>
# **GetApp**
> AppDetailResponse GetApp (string appKey)

Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **appKey** | **string** |  |  |

### Return type

[**AppDetailResponse**](AppDetailResponse.md)

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

<a id="listapps"></a>
# **ListApps**
> List&lt;AppSummaryResponse&gt; ListApps ()

List apps

Lists all supported apps in the catalog. Requires app:read scope.


### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;AppSummaryResponse&gt;**](AppSummaryResponse.md)

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

