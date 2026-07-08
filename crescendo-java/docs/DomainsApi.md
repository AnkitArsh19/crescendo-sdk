# DomainsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDomain**](DomainsApi.md#addDomain) | **POST** /api/v1/domains | Add a domain |
| [**addDomainWithHttpInfo**](DomainsApi.md#addDomainWithHttpInfo) | **POST** /api/v1/domains | Add a domain |
| [**deleteDomain**](DomainsApi.md#deleteDomain) | **DELETE** /api/v1/domains/{domainId} | Delete domain |
| [**deleteDomainWithHttpInfo**](DomainsApi.md#deleteDomainWithHttpInfo) | **DELETE** /api/v1/domains/{domainId} | Delete domain |
| [**getDomain**](DomainsApi.md#getDomain) | **GET** /api/v1/domains/{domainId} | Get domain details |
| [**getDomainWithHttpInfo**](DomainsApi.md#getDomainWithHttpInfo) | **GET** /api/v1/domains/{domainId} | Get domain details |
| [**listDomains**](DomainsApi.md#listDomains) | **GET** /api/v1/domains | List domains |
| [**listDomainsWithHttpInfo**](DomainsApi.md#listDomainsWithHttpInfo) | **GET** /api/v1/domains | List domains |
| [**verifyDomain**](DomainsApi.md#verifyDomain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS |
| [**verifyDomainWithHttpInfo**](DomainsApi.md#verifyDomainWithHttpInfo) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS |



## addDomain

> DomainResponse addDomain(addDomainRequest)

Add a domain

Registers a new domain. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        AddDomainRequest addDomainRequest = new AddDomainRequest(); // AddDomainRequest | 
        try {
            DomainResponse result = apiInstance.addDomain(addDomainRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#addDomain");
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
| **addDomainRequest** | [**AddDomainRequest**](AddDomainRequest.md)|  | |

### Return type

[**DomainResponse**](DomainResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## addDomainWithHttpInfo

> ApiResponse<DomainResponse> addDomainWithHttpInfo(addDomainRequest)

Add a domain

Registers a new domain. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        AddDomainRequest addDomainRequest = new AddDomainRequest(); // AddDomainRequest | 
        try {
            ApiResponse<DomainResponse> response = apiInstance.addDomainWithHttpInfo(addDomainRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#addDomain");
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
| **addDomainRequest** | [**AddDomainRequest**](AddDomainRequest.md)|  | |

### Return type

ApiResponse<[**DomainResponse**](DomainResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteDomain

> void deleteDomain(domainId)

Delete domain

Deletes a domain. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteDomain(domainId);
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#deleteDomain");
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
| **domainId** | **UUID**|  | |

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

## deleteDomainWithHttpInfo

> ApiResponse<Void> deleteDomainWithHttpInfo(domainId)

Delete domain

Deletes a domain. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteDomainWithHttpInfo(domainId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#deleteDomain");
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
| **domainId** | **UUID**|  | |

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


## getDomain

> DomainResponse getDomain(domainId)

Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            DomainResponse result = apiInstance.getDomain(domainId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#getDomain");
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
| **domainId** | **UUID**|  | |

### Return type

[**DomainResponse**](DomainResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getDomainWithHttpInfo

> ApiResponse<DomainResponse> getDomainWithHttpInfo(domainId)

Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<DomainResponse> response = apiInstance.getDomainWithHttpInfo(domainId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#getDomain");
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
| **domainId** | **UUID**|  | |

### Return type

ApiResponse<[**DomainResponse**](DomainResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listDomains

> PublicPageDomainResponse listDomains(limit, after)

List domains

Lists all registered domains. Requires domain:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            PublicPageDomainResponse result = apiInstance.listDomains(limit, after);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#listDomains");
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

[**PublicPageDomainResponse**](PublicPageDomainResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listDomainsWithHttpInfo

> ApiResponse<PublicPageDomainResponse> listDomainsWithHttpInfo(limit, after)

List domains

Lists all registered domains. Requires domain:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            ApiResponse<PublicPageDomainResponse> response = apiInstance.listDomainsWithHttpInfo(limit, after);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#listDomains");
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

ApiResponse<[**PublicPageDomainResponse**](PublicPageDomainResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## verifyDomain

> DomainResponse verifyDomain(domainId)

Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            DomainResponse result = apiInstance.verifyDomain(domainId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#verifyDomain");
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
| **domainId** | **UUID**|  | |

### Return type

[**DomainResponse**](DomainResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## verifyDomainWithHttpInfo

> ApiResponse<DomainResponse> verifyDomainWithHttpInfo(domainId)

Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.DomainsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        DomainsApi apiInstance = new DomainsApi(defaultClient);
        UUID domainId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<DomainResponse> response = apiInstance.verifyDomainWithHttpInfo(domainId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling DomainsApi#verifyDomain");
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
| **domainId** | **UUID**|  | |

### Return type

ApiResponse<[**DomainResponse**](DomainResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

