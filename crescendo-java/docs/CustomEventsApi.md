# CustomEventsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEvent**](CustomEventsApi.md#createEvent) | **POST** /api/v1/email/custom-events | Create a custom event |
| [**createEventWithHttpInfo**](CustomEventsApi.md#createEventWithHttpInfo) | **POST** /api/v1/email/custom-events | Create a custom event |
| [**deleteEvent**](CustomEventsApi.md#deleteEvent) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event |
| [**deleteEventWithHttpInfo**](CustomEventsApi.md#deleteEventWithHttpInfo) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event |
| [**fireEvent**](CustomEventsApi.md#fireEvent) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event |
| [**fireEventWithHttpInfo**](CustomEventsApi.md#fireEventWithHttpInfo) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event |
| [**listEvents**](CustomEventsApi.md#listEvents) | **GET** /api/v1/email/custom-events | List custom events |
| [**listEventsWithHttpInfo**](CustomEventsApi.md#listEventsWithHttpInfo) | **GET** /api/v1/email/custom-events | List custom events |



## createEvent

> CustomEvent createEvent(createCustomEventRequest)

Create a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        CreateCustomEventRequest createCustomEventRequest = new CreateCustomEventRequest(); // CreateCustomEventRequest | 
        try {
            CustomEvent result = apiInstance.createEvent(createCustomEventRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#createEvent");
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
| **createCustomEventRequest** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md)|  | |

### Return type

[**CustomEvent**](CustomEvent.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createEventWithHttpInfo

> ApiResponse<CustomEvent> createEventWithHttpInfo(createCustomEventRequest)

Create a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        CreateCustomEventRequest createCustomEventRequest = new CreateCustomEventRequest(); // CreateCustomEventRequest | 
        try {
            ApiResponse<CustomEvent> response = apiInstance.createEventWithHttpInfo(createCustomEventRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#createEvent");
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
| **createCustomEventRequest** | [**CreateCustomEventRequest**](CreateCustomEventRequest.md)|  | |

### Return type

ApiResponse<[**CustomEvent**](CustomEvent.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteEvent

> void deleteEvent(name)

Delete a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        String name = "name_example"; // String | 
        try {
            apiInstance.deleteEvent(name);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#deleteEvent");
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
| **name** | **String**|  | |

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

## deleteEventWithHttpInfo

> ApiResponse<Void> deleteEventWithHttpInfo(name)

Delete a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        String name = "name_example"; // String | 
        try {
            ApiResponse<Void> response = apiInstance.deleteEventWithHttpInfo(name);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#deleteEvent");
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
| **name** | **String**|  | |

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


## fireEvent

> void fireEvent(name, fireCustomEventRequest)

Fire a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        String name = "name_example"; // String | 
        FireCustomEventRequest fireCustomEventRequest = new FireCustomEventRequest(); // FireCustomEventRequest | 
        try {
            apiInstance.fireEvent(name, fireCustomEventRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#fireEvent");
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
| **name** | **String**|  | |
| **fireCustomEventRequest** | [**FireCustomEventRequest**](FireCustomEventRequest.md)|  | |

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

## fireEventWithHttpInfo

> ApiResponse<Void> fireEventWithHttpInfo(name, fireCustomEventRequest)

Fire a custom event

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        String name = "name_example"; // String | 
        FireCustomEventRequest fireCustomEventRequest = new FireCustomEventRequest(); // FireCustomEventRequest | 
        try {
            ApiResponse<Void> response = apiInstance.fireEventWithHttpInfo(name, fireCustomEventRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#fireEvent");
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
| **name** | **String**|  | |
| **fireCustomEventRequest** | [**FireCustomEventRequest**](FireCustomEventRequest.md)|  | |

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


## listEvents

> List<CustomEvent> listEvents()

List custom events

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        try {
            List<CustomEvent> result = apiInstance.listEvents();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#listEvents");
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

[**List&lt;CustomEvent&gt;**](CustomEvent.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listEventsWithHttpInfo

> ApiResponse<List<CustomEvent>> listEventsWithHttpInfo()

List custom events

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.CustomEventsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        CustomEventsApi apiInstance = new CustomEventsApi(defaultClient);
        try {
            ApiResponse<List<CustomEvent>> response = apiInstance.listEventsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CustomEventsApi#listEvents");
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

ApiResponse<[**List&lt;CustomEvent&gt;**](CustomEvent.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

