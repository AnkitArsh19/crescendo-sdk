# \ConnectionsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_connection**](ConnectionsApi.md#create_connection) | **POST** /api/v1/connections | Create connection
[**delete_connection**](ConnectionsApi.md#delete_connection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection
[**get_connection**](ConnectionsApi.md#get_connection) | **GET** /api/v1/connections/{connectionId} | Get connection details
[**list_connections**](ConnectionsApi.md#list_connections) | **GET** /api/v1/connections | List connections
[**update_connection**](ConnectionsApi.md#update_connection) | **PATCH** /api/v1/connections/{connectionId} | Update connection



## create_connection

> models::ConnectionResponse create_connection(create_connection_request)
Create connection

Creates a new connection for a third-party app. Requires connection:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_connection_request** | [**CreateConnectionRequest**](CreateConnectionRequest.md) |  | [required] |

### Return type

[**models::ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_connection

> delete_connection(connection_id)
Delete connection

Deletes a connection. Requires connection:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**connection_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_connection

> models::ConnectionResponse get_connection(connection_id)
Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**connection_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::ConnectionResponse**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_connections

> Vec<models::ConnectionResponse> list_connections()
List connections

Lists all connections. Requires connection:read scope.

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::ConnectionResponse>**](ConnectionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_connection

> update_connection(connection_id, update_connection_request)
Update connection

Updates a connection's name or credentials. Requires connection:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**connection_id** | **uuid::Uuid** |  | [required] |
**update_connection_request** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

