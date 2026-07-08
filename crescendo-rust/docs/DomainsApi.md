# \DomainsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_domain**](DomainsApi.md#add_domain) | **POST** /api/v1/domains | Add a domain
[**delete_domain**](DomainsApi.md#delete_domain) | **DELETE** /api/v1/domains/{domainId} | Delete domain
[**get_domain**](DomainsApi.md#get_domain) | **GET** /api/v1/domains/{domainId} | Get domain details
[**list_domains**](DomainsApi.md#list_domains) | **GET** /api/v1/domains | List domains
[**verify_domain**](DomainsApi.md#verify_domain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS



## add_domain

> models::DomainResponse add_domain(add_domain_request)
Add a domain

Registers a new domain. Requires domain:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**add_domain_request** | [**AddDomainRequest**](AddDomainRequest.md) |  | [required] |

### Return type

[**models::DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_domain

> delete_domain(domain_id)
Delete domain

Deletes a domain. Requires domain:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**domain_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_domain

> models::DomainResponse get_domain(domain_id)
Get domain details

Gets details and DNS records for a domain. Requires domain:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**domain_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_domains

> models::PublicPageDomainResponse list_domains(limit, after)
List domains

Lists all registered domains. Requires domain:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> |  |  |[default to 100]
**after** | Option<**String**> |  |  |

### Return type

[**models::PublicPageDomainResponse**](PublicPageDomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## verify_domain

> models::DomainResponse verify_domain(domain_id)
Verify domain DNS

Triggers a DNS verification check. Requires domain:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**domain_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::DomainResponse**](DomainResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

