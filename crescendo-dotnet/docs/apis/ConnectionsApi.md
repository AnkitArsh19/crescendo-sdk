# Crescendo.Api.ConnectionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateConnection**](ConnectionsApi.md#createconnection) | **POST** /api/v1/connections | Create connection |
| [**DeleteConnection**](ConnectionsApi.md#deleteconnection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection |
| [**GetConnection**](ConnectionsApi.md#getconnection) | **GET** /api/v1/connections/{connectionId} | Get connection details |
| [**ListConnections**](ConnectionsApi.md#listconnections) | **GET** /api/v1/connections | List connections |
| [**UpdateConnection**](ConnectionsApi.md#updateconnection) | **PATCH** /api/v1/connections/{connectionId} | Update connection |

<a id="createconnection"></a>
# **CreateConnection**
> ConnectionResponse CreateConnection (CreateConnectionRequest createConnectionRequest)

Create connection

Creates a new connection for a third-party app. Requires connection:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createConnectionRequest** | [**CreateConnectionRequest**](CreateConnectionRequest.md) |  |  |

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

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

<a id="deleteconnection"></a>
# **DeleteConnection**
> void DeleteConnection (Guid connectionId)

Delete connection

Deletes a connection. Requires connection:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **connectionId** | **Guid** |  |  |

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

<a id="getconnection"></a>
# **GetConnection**
> ConnectionResponse GetConnection (Guid connectionId)

Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **connectionId** | **Guid** |  |  |

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

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

<a id="listconnections"></a>
# **ListConnections**
> List&lt;ConnectionResponse&gt; ListConnections ()

List connections

Lists all connections. Requires connection:read scope.


### Parameters
This endpoint does not need any parameter.
### Return type

[**List&lt;ConnectionResponse&gt;**](ConnectionResponse.md)

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

<a id="updateconnection"></a>
# **UpdateConnection**
> void UpdateConnection (Guid connectionId, UpdateConnectionRequest updateConnectionRequest)

Update connection

Updates a connection's name or credentials. Requires connection:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **connectionId** | **Guid** |  |  |
| **updateConnectionRequest** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md) |  |  |

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

