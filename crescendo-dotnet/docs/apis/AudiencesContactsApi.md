# Crescendo.Api.AudiencesContactsApi

All URIs are relative to *https://api.crescendo.run*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CreateContact**](AudiencesContactsApi.md#createcontact) | **POST** /api/v1/audiences | Create a contact |
| [**DeleteContact**](AudiencesContactsApi.md#deletecontact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact |
| [**GetContact**](AudiencesContactsApi.md#getcontact) | **GET** /api/v1/audiences/{contactId} | Get contact details |
| [**ListContacts**](AudiencesContactsApi.md#listcontacts) | **GET** /api/v1/audiences | List contacts |
| [**UpdateContact**](AudiencesContactsApi.md#updatecontact) | **PATCH** /api/v1/audiences/{contactId} | Update contact |

<a id="createcontact"></a>
# **CreateContact**
> ContactResponse CreateContact (CreateContactRequest createContactRequest)

Create a contact

Adds a new contact to your audience. Requires contact:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createContactRequest** | [**CreateContactRequest**](CreateContactRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletecontact"></a>
# **DeleteContact**
> void DeleteContact (Guid contactId)

Delete contact

Deletes a contact. Requires contact:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **Guid** |  |  |

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

<a id="getcontact"></a>
# **GetContact**
> ContactResponse GetContact (Guid contactId)

Get contact details

Gets details for a specific contact. Requires contact:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **Guid** |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listcontacts"></a>
# **ListContacts**
> PublicPageContactResponse ListContacts (int limit = null, string after = null)

List contacts

Lists all contacts. Requires contact:read scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **int** |  | [optional] [default to 100] |
| **after** | **string** |  | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updatecontact"></a>
# **UpdateContact**
> ContactResponse UpdateContact (Guid contactId, UpdateContactRequest updateContactRequest)

Update contact

Updates a contact. Requires contact:write scope.


### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **contactId** | **Guid** |  |  |
| **updateContactRequest** | [**UpdateContactRequest**](UpdateContactRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

