# EmailsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEmail**](EmailsApi.md#getEmail) | **GET** /api/v1/emails/{emailId} | Get email details |
| [**getEmailWithHttpInfo**](EmailsApi.md#getEmailWithHttpInfo) | **GET** /api/v1/emails/{emailId} | Get email details |
| [**listEmails**](EmailsApi.md#listEmails) | **GET** /api/v1/emails | List emails |
| [**listEmailsWithHttpInfo**](EmailsApi.md#listEmailsWithHttpInfo) | **GET** /api/v1/emails | List emails |
| [**searchEmails**](EmailsApi.md#searchEmails) | **GET** /api/v1/emails/search | Search emails |
| [**searchEmailsWithHttpInfo**](EmailsApi.md#searchEmailsWithHttpInfo) | **GET** /api/v1/emails/search | Search emails |
| [**sendBatch**](EmailsApi.md#sendBatch) | **POST** /api/v1/emails/batch |  |
| [**sendBatchWithHttpInfo**](EmailsApi.md#sendBatchWithHttpInfo) | **POST** /api/v1/emails/batch |  |
| [**sendEmail**](EmailsApi.md#sendEmail) | **POST** /api/v1/emails |  |
| [**sendEmailWithHttpInfo**](EmailsApi.md#sendEmailWithHttpInfo) | **POST** /api/v1/emails |  |
| [**sendTemplated**](EmailsApi.md#sendTemplated) | **POST** /api/v1/emails/templated |  |
| [**sendTemplatedWithHttpInfo**](EmailsApi.md#sendTemplatedWithHttpInfo) | **POST** /api/v1/emails/templated |  |



## getEmail

> EmailLogResponse getEmail(emailId)

Get email details

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        UUID emailId = UUID.randomUUID(); // UUID | 
        try {
            EmailLogResponse result = apiInstance.getEmail(emailId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#getEmail");
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
| **emailId** | **UUID**|  | |

### Return type

[**EmailLogResponse**](EmailLogResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## getEmailWithHttpInfo

> ApiResponse<EmailLogResponse> getEmailWithHttpInfo(emailId)

Get email details

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        UUID emailId = UUID.randomUUID(); // UUID | 
        try {
            ApiResponse<EmailLogResponse> response = apiInstance.getEmailWithHttpInfo(emailId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#getEmail");
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
| **emailId** | **UUID**|  | |

### Return type

ApiResponse<[**EmailLogResponse**](EmailLogResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## listEmails

> List<EmailLogResponse> listEmails()

List emails

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        try {
            List<EmailLogResponse> result = apiInstance.listEmails();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#listEmails");
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

[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## listEmailsWithHttpInfo

> ApiResponse<List<EmailLogResponse>> listEmailsWithHttpInfo()

List emails

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        try {
            ApiResponse<List<EmailLogResponse>> response = apiInstance.listEmailsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#listEmails");
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

ApiResponse<[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## searchEmails

> List<EmailLogResponse> searchEmails(q)

Search emails

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        String q = "q_example"; // String | 
        try {
            List<EmailLogResponse> result = apiInstance.searchEmails(q);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#searchEmails");
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
| **q** | **String**|  | |

### Return type

[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## searchEmailsWithHttpInfo

> ApiResponse<List<EmailLogResponse>> searchEmailsWithHttpInfo(q)

Search emails

### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        String q = "q_example"; // String | 
        try {
            ApiResponse<List<EmailLogResponse>> response = apiInstance.searchEmailsWithHttpInfo(q);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#searchEmails");
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
| **q** | **String**|  | |

### Return type

ApiResponse<[**List&lt;EmailLogResponse&gt;**](EmailLogResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## sendBatch

> SendBatchResponse sendBatch(sendBatchRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendBatchRequest sendBatchRequest = new SendBatchRequest(); // SendBatchRequest | 
        try {
            SendBatchResponse result = apiInstance.sendBatch(sendBatchRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendBatch");
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
| **sendBatchRequest** | [**SendBatchRequest**](SendBatchRequest.md)|  | |

### Return type

[**SendBatchResponse**](SendBatchResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## sendBatchWithHttpInfo

> ApiResponse<SendBatchResponse> sendBatchWithHttpInfo(sendBatchRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendBatchRequest sendBatchRequest = new SendBatchRequest(); // SendBatchRequest | 
        try {
            ApiResponse<SendBatchResponse> response = apiInstance.sendBatchWithHttpInfo(sendBatchRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendBatch");
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
| **sendBatchRequest** | [**SendBatchRequest**](SendBatchRequest.md)|  | |

### Return type

ApiResponse<[**SendBatchResponse**](SendBatchResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## sendEmail

> SendEmailResponse sendEmail(sendEmailRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendEmailRequest sendEmailRequest = new SendEmailRequest(); // SendEmailRequest | 
        try {
            SendEmailResponse result = apiInstance.sendEmail(sendEmailRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendEmail");
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
| **sendEmailRequest** | [**SendEmailRequest**](SendEmailRequest.md)|  | |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## sendEmailWithHttpInfo

> ApiResponse<SendEmailResponse> sendEmailWithHttpInfo(sendEmailRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendEmailRequest sendEmailRequest = new SendEmailRequest(); // SendEmailRequest | 
        try {
            ApiResponse<SendEmailResponse> response = apiInstance.sendEmailWithHttpInfo(sendEmailRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendEmail");
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
| **sendEmailRequest** | [**SendEmailRequest**](SendEmailRequest.md)|  | |

### Return type

ApiResponse<[**SendEmailResponse**](SendEmailResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## sendTemplated

> SendEmailResponse sendTemplated(sendTemplatedRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendTemplatedRequest sendTemplatedRequest = new SendTemplatedRequest(); // SendTemplatedRequest | 
        try {
            SendEmailResponse result = apiInstance.sendTemplated(sendTemplatedRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendTemplated");
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
| **sendTemplatedRequest** | [**SendTemplatedRequest**](SendTemplatedRequest.md)|  | |

### Return type

[**SendEmailResponse**](SendEmailResponse.md)


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

## sendTemplatedWithHttpInfo

> ApiResponse<SendEmailResponse> sendTemplatedWithHttpInfo(sendTemplatedRequest)



### Example

```java
// Import classes:
import io.crescendo.ApiClient;
import io.crescendo.ApiException;
import io.crescendo.ApiResponse;
import io.crescendo.Configuration;
import io.crescendo.models.*;
import io.crescendo.api.EmailsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.crescendo.run");

        EmailsApi apiInstance = new EmailsApi(defaultClient);
        SendTemplatedRequest sendTemplatedRequest = new SendTemplatedRequest(); // SendTemplatedRequest | 
        try {
            ApiResponse<SendEmailResponse> response = apiInstance.sendTemplatedWithHttpInfo(sendTemplatedRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling EmailsApi#sendTemplated");
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
| **sendTemplatedRequest** | [**SendTemplatedRequest**](SendTemplatedRequest.md)|  | |

### Return type

ApiResponse<[**SendEmailResponse**](SendEmailResponse.md)>


### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

