# \AppCatalogApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_app**](AppCatalogApi.md#get_app) | **GET** /api/v1/apps/{appKey} | Get app details
[**list_apps**](AppCatalogApi.md#list_apps) | **GET** /api/v1/apps | List apps



## get_app

> models::AppDetailResponse get_app(app_key)
Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**app_key** | **String** |  | [required] |

### Return type

[**models::AppDetailResponse**](AppDetailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_apps

> Vec<models::AppSummaryResponse> list_apps()
List apps

Lists all supported apps in the catalog. Requires app:read scope.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::AppSummaryResponse>**](AppSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

