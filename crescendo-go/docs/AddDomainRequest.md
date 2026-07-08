# AddDomainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DomainName** | **string** |  | 
**AllowedEmailType** | Pointer to **string** |  | [optional] 
**CredentialSource** | Pointer to **string** |  | [optional] 
**EmailProviderConnectionId** | Pointer to **string** |  | [optional] 

## Methods

### NewAddDomainRequest

`func NewAddDomainRequest(domainName string, ) *AddDomainRequest`

NewAddDomainRequest instantiates a new AddDomainRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddDomainRequestWithDefaults

`func NewAddDomainRequestWithDefaults() *AddDomainRequest`

NewAddDomainRequestWithDefaults instantiates a new AddDomainRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomainName

`func (o *AddDomainRequest) GetDomainName() string`

GetDomainName returns the DomainName field if non-nil, zero value otherwise.

### GetDomainNameOk

`func (o *AddDomainRequest) GetDomainNameOk() (*string, bool)`

GetDomainNameOk returns a tuple with the DomainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainName

`func (o *AddDomainRequest) SetDomainName(v string)`

SetDomainName sets DomainName field to given value.


### GetAllowedEmailType

`func (o *AddDomainRequest) GetAllowedEmailType() string`

GetAllowedEmailType returns the AllowedEmailType field if non-nil, zero value otherwise.

### GetAllowedEmailTypeOk

`func (o *AddDomainRequest) GetAllowedEmailTypeOk() (*string, bool)`

GetAllowedEmailTypeOk returns a tuple with the AllowedEmailType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedEmailType

`func (o *AddDomainRequest) SetAllowedEmailType(v string)`

SetAllowedEmailType sets AllowedEmailType field to given value.

### HasAllowedEmailType

`func (o *AddDomainRequest) HasAllowedEmailType() bool`

HasAllowedEmailType returns a boolean if a field has been set.

### GetCredentialSource

`func (o *AddDomainRequest) GetCredentialSource() string`

GetCredentialSource returns the CredentialSource field if non-nil, zero value otherwise.

### GetCredentialSourceOk

`func (o *AddDomainRequest) GetCredentialSourceOk() (*string, bool)`

GetCredentialSourceOk returns a tuple with the CredentialSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialSource

`func (o *AddDomainRequest) SetCredentialSource(v string)`

SetCredentialSource sets CredentialSource field to given value.

### HasCredentialSource

`func (o *AddDomainRequest) HasCredentialSource() bool`

HasCredentialSource returns a boolean if a field has been set.

### GetEmailProviderConnectionId

`func (o *AddDomainRequest) GetEmailProviderConnectionId() string`

GetEmailProviderConnectionId returns the EmailProviderConnectionId field if non-nil, zero value otherwise.

### GetEmailProviderConnectionIdOk

`func (o *AddDomainRequest) GetEmailProviderConnectionIdOk() (*string, bool)`

GetEmailProviderConnectionIdOk returns a tuple with the EmailProviderConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailProviderConnectionId

`func (o *AddDomainRequest) SetEmailProviderConnectionId(v string)`

SetEmailProviderConnectionId sets EmailProviderConnectionId field to given value.

### HasEmailProviderConnectionId

`func (o *AddDomainRequest) HasEmailProviderConnectionId() bool`

HasEmailProviderConnectionId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


