# AudiencesContactsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createContact**](AudiencesContactsApi.md#createContact) | **POST** /api/v1/audiences | Create a contact |
| [**createContactWithHttpInfo**](AudiencesContactsApi.md#createContactWithHttpInfo) | **POST** /api/v1/audiences | Create a contact |
| [**deleteContact**](AudiencesContactsApi.md#deleteContact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact |
| [**deleteContactWithHttpInfo**](AudiencesContactsApi.md#deleteContactWithHttpInfo) | **DELETE** /api/v1/audiences/{contactId} | Delete contact |
| [**getContact**](AudiencesContactsApi.md#getContact) | **GET** /api/v1/audiences/{contactId} | Get contact details |
| [**getContactWithHttpInfo**](AudiencesContactsApi.md#getContactWithHttpInfo) | **GET** /api/v1/audiences/{contactId} | Get contact details |
| [**listContacts**](AudiencesContactsApi.md#listContacts) | **GET** /api/v1/audiences | List contacts |
| [**listContactsWithHttpInfo**](AudiencesContactsApi.md#listContactsWithHttpInfo) | **GET** /api/v1/audiences | List contacts |
| [**updateContact**](AudiencesContactsApi.md#updateContact) | **PATCH** /api/v1/audiences/{contactId} | Update contact |
| [**updateContactWithHttpInfo**](AudiencesContactsApi.md#updateContactWithHttpInfo) | **PATCH** /api/v1/audiences/{contactId} | Update contact |



## createContact

> ContactResponse createContact(createContactRequest)

Create a contact

Adds a new contact to your audience. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        CreateContactRequest createContactRequest = new CreateContactRequest(); // CreateContactRequest | 
        try {
            ContactResponse result = apiInstance.createContact(createContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#createContact");
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
| **createContactRequest** | [**CreateContactRequest**](CreateContactRequest.md)|  | |

### Return type

[**ContactResponse**](ContactResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## createContactWithHttpInfo

> ApiResponse<ContactResponse> createContactWithHttpInfo(createContactRequest)

Create a contact

Adds a new contact to your audience. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        CreateContactRequest createContactRequest = new CreateContactRequest(); // CreateContactRequest | 
        try {
            ApiResponse<ContactResponse> response = apiInstance.createContactWithHttpInfo(createContactRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#createContact");
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
| **createContactRequest** | [**CreateContactRequest**](CreateContactRequest.md)|  | |

### Return type

ApiResponse<[**ContactResponse**](ContactResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## deleteContact

> void deleteContact(contactId)

Delete contact

Deletes a contact. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        try {
            apiInstance.deleteContact(contactId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#deleteContact");
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
| **contactId** | **UUID**|  | |

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

## deleteContactWithHttpInfo

> ApiResponse<Void> deleteContactWithHttpInfo(contactId)

Delete contact

Deletes a contact. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<Void> response = apiInstance.deleteContactWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#deleteContact");
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
| **contactId** | **UUID**|  | |

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


## getContact

> ContactResponse getContact(contactId)

Get contact details

Gets details for a specific contact. Requires contact:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        try {
            ContactResponse result = apiInstance.getContact(contactId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#getContact");
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
| **contactId** | **UUID**|  | |

### Return type

[**ContactResponse**](ContactResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getContactWithHttpInfo

> ApiResponse<ContactResponse> getContactWithHttpInfo(contactId)

Get contact details

Gets details for a specific contact. Requires contact:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<ContactResponse> response = apiInstance.getContactWithHttpInfo(contactId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#getContact");
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
| **contactId** | **UUID**|  | |

### Return type

ApiResponse<[**ContactResponse**](ContactResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listContacts

> PublicPageContactResponse listContacts(limit, after)

List contacts

Lists all contacts. Requires contact:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            PublicPageContactResponse result = apiInstance.listContacts(limit, after);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#listContacts");
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

[**PublicPageContactResponse**](PublicPageContactResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listContactsWithHttpInfo

> ApiResponse<PublicPageContactResponse> listContactsWithHttpInfo(limit, after)

List contacts

Lists all contacts. Requires contact:read scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        Integer limit = 100; // Integer | 
        String after = "after_example"; // String | 
        try {
            ApiResponse<PublicPageContactResponse> response = apiInstance.listContactsWithHttpInfo(limit, after);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#listContacts");
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

ApiResponse<[**PublicPageContactResponse**](PublicPageContactResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## updateContact

> ContactResponse updateContact(contactId, updateContactRequest)

Update contact

Updates a contact. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        UpdateContactRequest updateContactRequest = new UpdateContactRequest(); // UpdateContactRequest | 
        try {
            ContactResponse result = apiInstance.updateContact(contactId, updateContactRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#updateContact");
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
| **contactId** | **UUID**|  | |
| **updateContactRequest** | [**UpdateContactRequest**](UpdateContactRequest.md)|  | |

### Return type

[**ContactResponse**](ContactResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## updateContactWithHttpInfo

> ApiResponse<ContactResponse> updateContactWithHttpInfo(contactId, updateContactRequest)

Update contact

Updates a contact. Requires contact:write scope.

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.AudiencesContactsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        AudiencesContactsApi apiInstance = new AudiencesContactsApi(defaultClient);
        UUID contactId = UUID.randomUUID(); // UUID | 
        UpdateContactRequest updateContactRequest = new UpdateContactRequest(); // UpdateContactRequest | 
        try {
            ApiResponse<ContactResponse> response = apiInstance.updateContactWithHttpInfo(contactId, updateContactRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AudiencesContactsApi#updateContact");
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
| **contactId** | **UUID**|  | |
| **updateContactRequest** | [**UpdateContactRequest**](UpdateContactRequest.md)|  | |

### Return type

ApiResponse<[**ContactResponse**](ContactResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

