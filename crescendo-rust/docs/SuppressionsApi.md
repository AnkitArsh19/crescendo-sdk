# \SuppressionsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_suppression**](SuppressionsApi.md#add_suppression) | **POST** /api/v1/suppressions | Add a suppression
[**import_suppressions**](SuppressionsApi.md#import_suppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions
[**list_suppressions**](SuppressionsApi.md#list_suppressions) | **GET** /api/v1/suppressions | List suppressions
[**remove_suppression**](SuppressionsApi.md#remove_suppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression



## add_suppression

> add_suppression(add_suppression_request)
Add a suppression

Manually suppresses an email address. Requires suppression:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**add_suppression_request** | [**AddSuppressionRequest**](AddSuppressionRequest.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## import_suppressions

> import_suppressions(import_suppressions_request)
Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**import_suppressions_request** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_suppressions

> models::PublicPageSuppressionResponse list_suppressions(limit, after)
List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> |  |  |[default to 100]
**after** | Option<**String**> |  |  |

### Return type

[**models::PublicPageSuppressionResponse**](PublicPageSuppressionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## remove_suppression

> remove_suppression(suppression_id)
Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**suppression_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

