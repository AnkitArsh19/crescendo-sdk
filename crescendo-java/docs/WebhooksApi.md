# WebhooksApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubscription**](WebhooksApi.md#createSubscription) | **POST** /api/v1/webhooks |  |
| [**createSubscriptionWithHttpInfo**](WebhooksApi.md#createSubscriptionWithHttpInfo) | **POST** /api/v1/webhooks |  |
| [**deleteSubscription**](WebhooksApi.md#deleteSubscription) | **DELETE** /api/v1/webhooks/{id} |  |
| [**deleteSubscriptionWithHttpInfo**](WebhooksApi.md#deleteSubscriptionWithHttpInfo) | **DELETE** /api/v1/webhooks/{id} |  |
| [**listSubscriptions**](WebhooksApi.md#listSubscriptions) | **GET** /api/v1/webhooks |  |
| [**listSubscriptionsWithHttpInfo**](WebhooksApi.md#listSubscriptionsWithHttpInfo) | **GET** /api/v1/webhooks |  |



## createSubscription

> PublicWebhookResponse createSubscription(createWebhookRequest, idempotencyKey)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        CreateWebhookRequest createWebhookRequest = new CreateWebhookRequest(); // CreateWebhookRequest | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        try {
            PublicWebhookResponse result = apiInstance.createSubscription(createWebhookRequest, idempotencyKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#createSubscription");
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
| **createWebhookRequest** | [**CreateWebhookRequest**](CreateWebhookRequest.md)|  | |
| **idempotencyKey** | **String**|  | [optional] |

### Return type

[**PublicWebhookResponse**](PublicWebhookResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createSubscriptionWithHttpInfo

> ApiResponse<PublicWebhookResponse> createSubscriptionWithHttpInfo(createWebhookRequest, idempotencyKey)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        CreateWebhookRequest createWebhookRequest = new CreateWebhookRequest(); // CreateWebhookRequest | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        try {
            ApiResponse<PublicWebhookResponse> response = apiInstance.createSubscriptionWithHttpInfo(createWebhookRequest, idempotencyKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#createSubscription");
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
| **createWebhookRequest** | [**CreateWebhookRequest**](CreateWebhookRequest.md)|  | |
| **idempotencyKey** | **String**|  | [optional] |

### Return type

ApiResponse<[**PublicWebhookResponse**](PublicWebhookResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteSubscription

> void deleteSubscription(id)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        UUID id = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteSubscription(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteSubscription");
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
| **id** | **UUID**|  | |

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

## deleteSubscriptionWithHttpInfo

> ApiResponse<Void> deleteSubscriptionWithHttpInfo(id)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        UUID id = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteSubscriptionWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteSubscription");
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
| **id** | **UUID**|  | |

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


## listSubscriptions

> List<PublicWebhookListResponse> listSubscriptions()



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        try {
            List<PublicWebhookListResponse> result = apiInstance.listSubscriptions();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#listSubscriptions");
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

[**List&lt;PublicWebhookListResponse&gt;**](PublicWebhookListResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listSubscriptionsWithHttpInfo

> ApiResponse<List<PublicWebhookListResponse>> listSubscriptionsWithHttpInfo()



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        try {
            ApiResponse<List<PublicWebhookListResponse>> response = apiInstance.listSubscriptionsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#listSubscriptions");
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

ApiResponse<[**List&lt;PublicWebhookListResponse&gt;**](PublicWebhookListResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

