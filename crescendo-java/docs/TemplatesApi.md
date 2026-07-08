# TemplatesApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cloneFromBroadcast**](TemplatesApi.md#cloneFromBroadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} |  |
| [**cloneFromBroadcastWithHttpInfo**](TemplatesApi.md#cloneFromBroadcastWithHttpInfo) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} |  |
| [**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /api/v1/templates |  |
| [**createTemplateWithHttpInfo**](TemplatesApi.md#createTemplateWithHttpInfo) | **POST** /api/v1/templates |  |
| [**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /api/v1/templates/{templateId} |  |
| [**deleteTemplateWithHttpInfo**](TemplatesApi.md#deleteTemplateWithHttpInfo) | **DELETE** /api/v1/templates/{templateId} |  |
| [**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /api/v1/templates/{templateId} |  |
| [**getTemplateWithHttpInfo**](TemplatesApi.md#getTemplateWithHttpInfo) | **GET** /api/v1/templates/{templateId} |  |
| [**listTemplates**](TemplatesApi.md#listTemplates) | **GET** /api/v1/templates |  |
| [**listTemplatesWithHttpInfo**](TemplatesApi.md#listTemplatesWithHttpInfo) | **GET** /api/v1/templates |  |
| [**publishTemplate**](TemplatesApi.md#publishTemplate) | **POST** /api/v1/templates/{templateId}/publish |  |
| [**publishTemplateWithHttpInfo**](TemplatesApi.md#publishTemplateWithHttpInfo) | **POST** /api/v1/templates/{templateId}/publish |  |
| [**testSend**](TemplatesApi.md#testSend) | **POST** /api/v1/templates/{templateId}/test |  |
| [**testSendWithHttpInfo**](TemplatesApi.md#testSendWithHttpInfo) | **POST** /api/v1/templates/{templateId}/test |  |
| [**updateTemplate**](TemplatesApi.md#updateTemplate) | **PATCH** /api/v1/templates/{templateId} |  |
| [**updateTemplateWithHttpInfo**](TemplatesApi.md#updateTemplateWithHttpInfo) | **PATCH** /api/v1/templates/{templateId} |  |



## cloneFromBroadcast

> PublicTemplateResponse cloneFromBroadcast(broadcastId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID broadcastId = UUID.randomUUID(); // UUID | 
        try {
            PublicTemplateResponse result = apiInstance.cloneFromBroadcast(broadcastId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#cloneFromBroadcast");
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
| **broadcastId** | **UUID**|  | |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## cloneFromBroadcastWithHttpInfo

> ApiResponse<PublicTemplateResponse> cloneFromBroadcastWithHttpInfo(broadcastId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID broadcastId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<PublicTemplateResponse> response = apiInstance.cloneFromBroadcastWithHttpInfo(broadcastId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#cloneFromBroadcast");
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
| **broadcastId** | **UUID**|  | |

### Return type

ApiResponse<[**PublicTemplateResponse**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## createTemplate

> PublicTemplateResponse createTemplate(createTemplateRequest, idempotencyKey)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        CreateTemplateRequest createTemplateRequest = new CreateTemplateRequest(); // CreateTemplateRequest | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        try {
            PublicTemplateResponse result = apiInstance.createTemplate(createTemplateRequest, idempotencyKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#createTemplate");
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
| **createTemplateRequest** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | |
| **idempotencyKey** | **String**|  | [optional] |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createTemplateWithHttpInfo

> ApiResponse<PublicTemplateResponse> createTemplateWithHttpInfo(createTemplateRequest, idempotencyKey)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        CreateTemplateRequest createTemplateRequest = new CreateTemplateRequest(); // CreateTemplateRequest | 
        String idempotencyKey = "idempotencyKey_example"; // String | 
        try {
            ApiResponse<PublicTemplateResponse> response = apiInstance.createTemplateWithHttpInfo(createTemplateRequest, idempotencyKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#createTemplate");
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
| **createTemplateRequest** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | |
| **idempotencyKey** | **String**|  | [optional] |

### Return type

ApiResponse<[**PublicTemplateResponse**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteTemplate

> void deleteTemplate(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteTemplate(templateId);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#deleteTemplate");
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
| **templateId** | **UUID**|  | |

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

## deleteTemplateWithHttpInfo

> ApiResponse<Void> deleteTemplateWithHttpInfo(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteTemplateWithHttpInfo(templateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#deleteTemplate");
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
| **templateId** | **UUID**|  | |

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


## getTemplate

> PublicTemplateResponse getTemplate(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            PublicTemplateResponse result = apiInstance.getTemplate(templateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#getTemplate");
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
| **templateId** | **UUID**|  | |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getTemplateWithHttpInfo

> ApiResponse<PublicTemplateResponse> getTemplateWithHttpInfo(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<PublicTemplateResponse> response = apiInstance.getTemplateWithHttpInfo(templateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#getTemplate");
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
| **templateId** | **UUID**|  | |

### Return type

ApiResponse<[**PublicTemplateResponse**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listTemplates

> List<PublicTemplateResponse> listTemplates()



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        try {
            List<PublicTemplateResponse> result = apiInstance.listTemplates();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#listTemplates");
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

[**List&lt;PublicTemplateResponse&gt;**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listTemplatesWithHttpInfo

> ApiResponse<List<PublicTemplateResponse>> listTemplatesWithHttpInfo()



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        try {
            ApiResponse<List<PublicTemplateResponse>> response = apiInstance.listTemplatesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#listTemplates");
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

ApiResponse<[**List&lt;PublicTemplateResponse&gt;**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## publishTemplate

> PublicTemplateResponse publishTemplate(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            PublicTemplateResponse result = apiInstance.publishTemplate(templateId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#publishTemplate");
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
| **templateId** | **UUID**|  | |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## publishTemplateWithHttpInfo

> ApiResponse<PublicTemplateResponse> publishTemplateWithHttpInfo(templateId)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<PublicTemplateResponse> response = apiInstance.publishTemplateWithHttpInfo(templateId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#publishTemplate");
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
| **templateId** | **UUID**|  | |

### Return type

ApiResponse<[**PublicTemplateResponse**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## testSend

> PublicTestSendResponse testSend(templateId, testSendRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        TestSendRequest testSendRequest = new TestSendRequest(); // TestSendRequest | 
        try {
            PublicTestSendResponse result = apiInstance.testSend(templateId, testSendRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#testSend");
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
| **templateId** | **UUID**|  | |
| **testSendRequest** | [**TestSendRequest**](TestSendRequest.md)|  | |

### Return type

[**PublicTestSendResponse**](PublicTestSendResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## testSendWithHttpInfo

> ApiResponse<PublicTestSendResponse> testSendWithHttpInfo(templateId, testSendRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        TestSendRequest testSendRequest = new TestSendRequest(); // TestSendRequest | 
        try {
            ApiResponse<PublicTestSendResponse> response = apiInstance.testSendWithHttpInfo(templateId, testSendRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#testSend");
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
| **templateId** | **UUID**|  | |
| **testSendRequest** | [**TestSendRequest**](TestSendRequest.md)|  | |

### Return type

ApiResponse<[**PublicTestSendResponse**](PublicTestSendResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## updateTemplate

> PublicTemplateResponse updateTemplate(templateId, updateTemplateRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        UpdateTemplateRequest updateTemplateRequest = new UpdateTemplateRequest(); // UpdateTemplateRequest | 
        try {
            PublicTemplateResponse result = apiInstance.updateTemplate(templateId, updateTemplateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#updateTemplate");
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
| **templateId** | **UUID**|  | |
| **updateTemplateRequest** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md)|  | |

### Return type

[**PublicTemplateResponse**](PublicTemplateResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## updateTemplateWithHttpInfo

> ApiResponse<PublicTemplateResponse> updateTemplateWithHttpInfo(templateId, updateTemplateRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.TemplatesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        TemplatesApi apiInstance = new TemplatesApi(defaultClient);
        UUID templateId = UUID.randomUUID(); // UUID | 
        UpdateTemplateRequest updateTemplateRequest = new UpdateTemplateRequest(); // UpdateTemplateRequest | 
        try {
            ApiResponse<PublicTemplateResponse> response = apiInstance.updateTemplateWithHttpInfo(templateId, updateTemplateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplatesApi#updateTemplate");
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
| **templateId** | **UUID**|  | |
| **updateTemplateRequest** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md)|  | |

### Return type

ApiResponse<[**PublicTemplateResponse**](PublicTemplateResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

