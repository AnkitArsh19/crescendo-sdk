# SuppressionsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSuppression**](SuppressionsApi.md#addSuppression) | **POST** /api/v1/suppressions | Add a suppression |
| [**addSuppressionWithHttpInfo**](SuppressionsApi.md#addSuppressionWithHttpInfo) | **POST** /api/v1/suppressions | Add a suppression |
| [**importSuppressions**](SuppressionsApi.md#importSuppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions |
| [**importSuppressionsWithHttpInfo**](SuppressionsApi.md#importSuppressionsWithHttpInfo) | **POST** /api/v1/suppressions/import | Bulk import suppressions |
| [**listSuppressions**](SuppressionsApi.md#listSuppressions) | **GET** /api/v1/suppressions | List suppressions |
| [**listSuppressionsWithHttpInfo**](SuppressionsApi.md#listSuppressionsWithHttpInfo) | **GET** /api/v1/suppressions | List suppressions |
| [**removeSuppression**](SuppressionsApi.md#removeSuppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression |
| [**removeSuppressionWithHttpInfo**](SuppressionsApi.md#removeSuppressionWithHttpInfo) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression |



## addSuppression

> void addSuppression(addSuppressionRequest)

Add a suppression

Manually suppresses an email address. Requires suppression:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        AddSuppressionRequest addSuppressionRequest = new AddSuppressionRequest(); // AddSuppressionRequest | 
        try {
            apiInstance.addSuppression(addSuppressionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#addSuppression");
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
| **addSuppressionRequest** | [**AddSuppressionRequest**](AddSuppressionRequest.md)|  | |

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

## addSuppressionWithHttpInfo

> ApiResponse<Void> addSuppressionWithHttpInfo(addSuppressionRequest)

Add a suppression

Manually suppresses an email address. Requires suppression:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        AddSuppressionRequest addSuppressionRequest = new AddSuppressionRequest(); // AddSuppressionRequest | 
        try {
            ApiResponse<Void> response = apiInstance.addSuppressionWithHttpInfo(addSuppressionRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#addSuppression");
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
| **addSuppressionRequest** | [**AddSuppressionRequest**](AddSuppressionRequest.md)|  | |

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


## importSuppressions

> void importSuppressions(importSuppressionsRequest)

Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        ImportSuppressionsRequest importSuppressionsRequest = new ImportSuppressionsRequest(); // ImportSuppressionsRequest | 
        try {
            apiInstance.importSuppressions(importSuppressionsRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#importSuppressions");
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
| **importSuppressionsRequest** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md)|  | |

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

## importSuppressionsWithHttpInfo

> ApiResponse<Void> importSuppressionsWithHttpInfo(importSuppressionsRequest)

Bulk import suppressions

Imports a bulk list of suppressions. Requires suppression:import scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        ImportSuppressionsRequest importSuppressionsRequest = new ImportSuppressionsRequest(); // ImportSuppressionsRequest | 
        try {
            ApiResponse<Void> response = apiInstance.importSuppressionsWithHttpInfo(importSuppressionsRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#importSuppressions");
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
| **importSuppressionsRequest** | [**ImportSuppressionsRequest**](ImportSuppressionsRequest.md)|  | |

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


## listSuppressions

> PublicPageSuppressionResponse listSuppressions(limit, after)

List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            PublicPageSuppressionResponse result = apiInstance.listSuppressions(limit, after);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#listSuppressions");
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
| **limit** | **Integer**|  | [optional] [default to 100] |
| **after** | **String**|  | [optional] |

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

## listSuppressionsWithHttpInfo

> ApiResponse<PublicPageSuppressionResponse> listSuppressionsWithHttpInfo(limit, after)

List suppressions

Lists all suppressed email addresses. Requires suppression:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            ApiResponse<PublicPageSuppressionResponse> response = apiInstance.listSuppressionsWithHttpInfo(limit, after);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#listSuppressions");
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
| **limit** | **Integer**|  | [optional] [default to 100] |
| **after** | **String**|  | [optional] |

### Return type

ApiResponse<[**PublicPageSuppressionResponse**](PublicPageSuppressionResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## removeSuppression

> void removeSuppression(suppressionId)

Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        UUID suppressionId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.removeSuppression(suppressionId);
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#removeSuppression");
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
| **suppressionId** | **UUID**|  | |

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

## removeSuppressionWithHttpInfo

> ApiResponse<Void> removeSuppressionWithHttpInfo(suppressionId)

Delete a suppression

Removes an email address from the suppression list. Requires suppression:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.SuppressionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        SuppressionsApi apiInstance = new SuppressionsApi(defaultClient);
        UUID suppressionId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.removeSuppressionWithHttpInfo(suppressionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling SuppressionsApi#removeSuppression");
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
| **suppressionId** | **UUID**|  | |

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

