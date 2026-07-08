# Crescendo.Api.DomainsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddDomain**](DomainsApi.md#adddomain) | **POST** /api/v1/domains | Add a domain |
| [**DeleteDomain**](DomainsApi.md#deletedomain) | **DELETE** /api/v1/domains/{domainId} | Delete domain |
| [**GetDomain**](DomainsApi.md#getdomain) | **GET** /api/v1/domains/{domainId} | Get domain details |
| [**ListDomains**](DomainsApi.md#listdomains) | **GET** /api/v1/domains | List domains |
| [**VerifyDomain**](DomainsApi.md#verifydomain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS |

<a id="adddomain"></a>
# **AddDomain**
> DomainResponse AddDomain (AddDomainRequest addDomainRequest)

Add a domain

Registers a new domain. Requires domain:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **addDomainRequest** | [**AddDomainRequest**](AddDomainRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletedomain"></a>
# **DeleteDomain**
> void DeleteDomain (Guid domainId)

Delete domain

Deletes a domain. Requires domain:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domainId** | **Guid** |  |  |

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

<a id="getdomain"></a>
# **GetDomain**
> DomainResponse GetDomain (Guid domainId)

Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domainId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listdomains"></a>
# **ListDomains**
> PublicPageDomainResponse ListDomains (int limit = null, string after = null)

List domains

Lists all registered domains. Requires domain:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **int** |  | [optional] [default to 100] |
| **after** | **string** |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="verifydomain"></a>
# **VerifyDomain**
> DomainResponse VerifyDomain (Guid domainId)

Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **domainId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

