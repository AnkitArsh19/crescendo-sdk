# ConnectionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConnection**](ConnectionsApi.md#createConnection) | **POST** /api/v1/connections | Create connection |
| [**createConnectionWithHttpInfo**](ConnectionsApi.md#createConnectionWithHttpInfo) | **POST** /api/v1/connections | Create connection |
| [**deleteConnection**](ConnectionsApi.md#deleteConnection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection |
| [**deleteConnectionWithHttpInfo**](ConnectionsApi.md#deleteConnectionWithHttpInfo) | **DELETE** /api/v1/connections/{connectionId} | Delete connection |
| [**getConnection**](ConnectionsApi.md#getConnection) | **GET** /api/v1/connections/{connectionId} | Get connection details |
| [**getConnectionWithHttpInfo**](ConnectionsApi.md#getConnectionWithHttpInfo) | **GET** /api/v1/connections/{connectionId} | Get connection details |
| [**listConnections**](ConnectionsApi.md#listConnections) | **GET** /api/v1/connections | List connections |
| [**listConnectionsWithHttpInfo**](ConnectionsApi.md#listConnectionsWithHttpInfo) | **GET** /api/v1/connections | List connections |
| [**updateConnection**](ConnectionsApi.md#updateConnection) | **PATCH** /api/v1/connections/{connectionId} | Update connection |
| [**updateConnectionWithHttpInfo**](ConnectionsApi.md#updateConnectionWithHttpInfo) | **PATCH** /api/v1/connections/{connectionId} | Update connection |



## createConnection

> ConnectionResponse createConnection(createConnectionRequest)

Create connection

Creates a new connection for a third-party app. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        CreateConnectionRequest createConnectionRequest = new CreateConnectionRequest(); // CreateConnectionRequest | 
        try {
            ConnectionResponse result = apiInstance.createConnection(createConnectionRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#createConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createConnectionRequest** | [**CreateConnectionRequest**](CreateConnectionRequest.md)|  | |

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

## createConnectionWithHttpInfo

> ApiResponse<ConnectionResponse> createConnectionWithHttpInfo(createConnectionRequest)

Create connection

Creates a new connection for a third-party app. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        CreateConnectionRequest createConnectionRequest = new CreateConnectionRequest(); // CreateConnectionRequest | 
        try {
            ApiResponse<ConnectionResponse> response = apiInstance.createConnectionWithHttpInfo(createConnectionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#createConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createConnectionRequest** | [**CreateConnectionRequest**](CreateConnectionRequest.md)|  | |

### Return type

ApiResponse<[**ConnectionResponse**](ConnectionResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteConnection

> void deleteConnection(connectionId)

Delete connection

Deletes a connection. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteConnection(connectionId);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#deleteConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## deleteConnectionWithHttpInfo

> ApiResponse<Void> deleteConnectionWithHttpInfo(connectionId)

Delete connection

Deletes a connection. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteConnectionWithHttpInfo(connectionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#deleteConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getConnection

> ConnectionResponse getConnection(connectionId)

Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        try {
            ConnectionResponse result = apiInstance.getConnection(connectionId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#getConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |

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

## getConnectionWithHttpInfo

> ApiResponse<ConnectionResponse> getConnectionWithHttpInfo(connectionId)

Get connection details

Gets metadata for a specific connection. Credentials are never returned. Requires connection:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<ConnectionResponse> response = apiInstance.getConnectionWithHttpInfo(connectionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#getConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |

### Return type

ApiResponse<[**ConnectionResponse**](ConnectionResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listConnections

> List<ConnectionResponse> listConnections()

List connections

Lists all connections. Requires connection:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        try {
            List<ConnectionResponse> result = apiInstance.listConnections();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#listConnections");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

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

## listConnectionsWithHttpInfo

> ApiResponse<List<ConnectionResponse>> listConnectionsWithHttpInfo()

List connections

Lists all connections. Requires connection:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        try {
            ApiResponse<List<ConnectionResponse>> response = apiInstance.listConnectionsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#listConnections");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**List&lt;ConnectionResponse&gt;**](ConnectionResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## updateConnection

> void updateConnection(connectionId, updateConnectionRequest)

Update connection

Updates a connection&#39;s name or credentials. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        UpdateConnectionRequest updateConnectionRequest = new UpdateConnectionRequest(); // UpdateConnectionRequest | 
        try {
            apiInstance.updateConnection(connectionId, updateConnectionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#updateConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |
| **updateConnectionRequest** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md)|  | |

### Return type


null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## updateConnectionWithHttpInfo

> ApiResponse<Void> updateConnectionWithHttpInfo(connectionId, updateConnectionRequest)

Update connection

Updates a connection&#39;s name or credentials. Requires connection:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.ConnectionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
        UUID connectionId = UUID.randomUUID(); // UUID | 
        UpdateConnectionRequest updateConnectionRequest = new UpdateConnectionRequest(); // UpdateConnectionRequest | 
        try {
            ApiResponse<Void> response = apiInstance.updateConnectionWithHttpInfo(connectionId, updateConnectionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling ConnectionsApi#updateConnection");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectionId** | **UUID**|  | |
| **updateConnectionRequest** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md)|  | |

### Return type


ApiResponse<Void>

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

