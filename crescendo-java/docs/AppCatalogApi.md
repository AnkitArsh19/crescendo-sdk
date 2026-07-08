# AppCatalogApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApp**](AppCatalogApi.md#getApp) | **GET** /api/v1/apps/{appKey} | Get app details |
| [**getAppWithHttpInfo**](AppCatalogApi.md#getAppWithHttpInfo) | **GET** /api/v1/apps/{appKey} | Get app details |
| [**listApps**](AppCatalogApi.md#listApps) | **GET** /api/v1/apps | List apps |
| [**listAppsWithHttpInfo**](AppCatalogApi.md#listAppsWithHttpInfo) | **GET** /api/v1/apps | List apps |



## getApp

> AppDetailResponse getApp(appKey)

Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AppCatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AppCatalogApi apiInstance = new AppCatalogApi(defaultClient);
        String appKey = "appKey_example"; // String | 
        try {
            AppDetailResponse result = apiInstance.getApp(appKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AppCatalogApi#getApp");
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
| **appKey** | **String**|  | |

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

## getAppWithHttpInfo

> ApiResponse<AppDetailResponse> getAppWithHttpInfo(appKey)

Get app details

Gets triggers, actions, and connection schemas for a specific app. Requires app:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AppCatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AppCatalogApi apiInstance = new AppCatalogApi(defaultClient);
        String appKey = "appKey_example"; // String | 
        try {
            ApiResponse<AppDetailResponse> response = apiInstance.getAppWithHttpInfo(appKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AppCatalogApi#getApp");
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
| **appKey** | **String**|  | |

### Return type

ApiResponse<[**AppDetailResponse**](AppDetailResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listApps

> List<AppSummaryResponse> listApps()

List apps

Lists all supported apps in the catalog. Requires app:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AppCatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AppCatalogApi apiInstance = new AppCatalogApi(defaultClient);
        try {
            List<AppSummaryResponse> result = apiInstance.listApps();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AppCatalogApi#listApps");
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

## listAppsWithHttpInfo

> ApiResponse<List<AppSummaryResponse>> listAppsWithHttpInfo()

List apps

Lists all supported apps in the catalog. Requires app:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AppCatalogApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AppCatalogApi apiInstance = new AppCatalogApi(defaultClient);
        try {
            ApiResponse<List<AppSummaryResponse>> response = apiInstance.listAppsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AppCatalogApi#listApps");
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

ApiResponse<[**List&lt;AppSummaryResponse&gt;**](AppSummaryResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

