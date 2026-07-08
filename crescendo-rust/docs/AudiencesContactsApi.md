# \AudiencesContactsApi

All URIs are relative to *https://api.crescendo.run*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_contact**](AudiencesContactsApi.md#create_contact) | **POST** /api/v1/audiences | Create a contact
[**delete_contact**](AudiencesContactsApi.md#delete_contact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact
[**get_contact**](AudiencesContactsApi.md#get_contact) | **GET** /api/v1/audiences/{contactId} | Get contact details
[**list_contacts**](AudiencesContactsApi.md#list_contacts) | **GET** /api/v1/audiences | List contacts
[**update_contact**](AudiencesContactsApi.md#update_contact) | **PATCH** /api/v1/audiences/{contactId} | Update contact



## create_contact

> models::ContactResponse create_contact(create_contact_request)
Create a contact

Adds a new contact to your audience. Requires contact:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_contact_request** | [**CreateContactRequest**](CreateContactRequest.md) |  | [required] |

### Return type

[**models::ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_contact

> delete_contact(contact_id)
Delete contact

Deletes a contact. Requires contact:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contact_id** | **uuid::Uuid** |  | [required] |

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_contact

> models::ContactResponse get_contact(contact_id)
Get contact details

Gets details for a specific contact. Requires contact:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contact_id** | **uuid::Uuid** |  | [required] |

### Return type

[**models::ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_contacts

> models::PublicPageContactResponse list_contacts(limit, after)
List contacts

Lists all contacts. Requires contact:read scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> |  |  |[default to 100]
**after** | Option<**String**> |  |  |

### Return type

[**models::PublicPageContactResponse**](PublicPageContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_contact

> models::ContactResponse update_contact(contact_id, update_contact_request)
Update contact

Updates a contact. Requires contact:write scope.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**contact_id** | **uuid::Uuid** |  | [required] |
**update_contact_request** | [**UpdateContactRequest**](UpdateContactRequest.md) |  | [required] |

### Return type

[**models::ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

