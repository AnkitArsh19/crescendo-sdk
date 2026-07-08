# AppDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppKey** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**LogoUrl** | Pointer to **string** |  | [optional] 
**AuthType** | Pointer to **string** |  | [optional] 
**AltAuthType** | Pointer to **string** |  | [optional] 
**Triggers** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Actions** | Pointer to **[]map[string]interface{}** |  | [optional] 
**CredentialSchema** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Category** | Pointer to **string** |  | [optional] 
**HelpUrl** | Pointer to **string** |  | [optional] 
**Internal** | Pointer to **bool** |  | [optional] 
**HasPlatformKey** | Pointer to **bool** |  | [optional] 

## Methods

### NewAppDetailResponse

`func NewAppDetailResponse() *AppDetailResponse`

NewAppDetailResponse instantiates a new AppDetailResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppDetailResponseWithDefaults

`func NewAppDetailResponseWithDefaults() *AppDetailResponse`

NewAppDetailResponseWithDefaults instantiates a new AppDetailResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppKey

`func (o *AppDetailResponse) GetAppKey() string`

GetAppKey returns the AppKey field if non-nil, zero value otherwise.

### GetAppKeyOk

`func (o *AppDetailResponse) GetAppKeyOk() (*string, bool)`

GetAppKeyOk returns a tuple with the AppKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppKey

`func (o *AppDetailResponse) SetAppKey(v string)`

SetAppKey sets AppKey field to given value.

### HasAppKey

`func (o *AppDetailResponse) HasAppKey() bool`

HasAppKey returns a boolean if a field has been set.

### GetName

`func (o *AppDetailResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppDetailResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppDetailResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AppDetailResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AppDetailResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AppDetailResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AppDetailResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AppDetailResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLogoUrl

`func (o *AppDetailResponse) GetLogoUrl() string`

GetLogoUrl returns the LogoUrl field if non-nil, zero value otherwise.

### GetLogoUrlOk

`func (o *AppDetailResponse) GetLogoUrlOk() (*string, bool)`

GetLogoUrlOk returns a tuple with the LogoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoUrl

`func (o *AppDetailResponse) SetLogoUrl(v string)`

SetLogoUrl sets LogoUrl field to given value.

### HasLogoUrl

`func (o *AppDetailResponse) HasLogoUrl() bool`

HasLogoUrl returns a boolean if a field has been set.

### GetAuthType

`func (o *AppDetailResponse) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *AppDetailResponse) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *AppDetailResponse) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *AppDetailResponse) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetAltAuthType

`func (o *AppDetailResponse) GetAltAuthType() string`

GetAltAuthType returns the AltAuthType field if non-nil, zero value otherwise.

### GetAltAuthTypeOk

`func (o *AppDetailResponse) GetAltAuthTypeOk() (*string, bool)`

GetAltAuthTypeOk returns a tuple with the AltAuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltAuthType

`func (o *AppDetailResponse) SetAltAuthType(v string)`

SetAltAuthType sets AltAuthType field to given value.

### HasAltAuthType

`func (o *AppDetailResponse) HasAltAuthType() bool`

HasAltAuthType returns a boolean if a field has been set.

### GetTriggers

`func (o *AppDetailResponse) GetTriggers() []map[string]interface{}`

GetTriggers returns the Triggers field if non-nil, zero value otherwise.

### GetTriggersOk

`func (o *AppDetailResponse) GetTriggersOk() (*[]map[string]interface{}, bool)`

GetTriggersOk returns a tuple with the Triggers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggers

`func (o *AppDetailResponse) SetTriggers(v []map[string]interface{})`

SetTriggers sets Triggers field to given value.

### HasTriggers

`func (o *AppDetailResponse) HasTriggers() bool`

HasTriggers returns a boolean if a field has been set.

### GetActions

`func (o *AppDetailResponse) GetActions() []map[string]interface{}`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *AppDetailResponse) GetActionsOk() (*[]map[string]interface{}, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *AppDetailResponse) SetActions(v []map[string]interface{})`

SetActions sets Actions field to given value.

### HasActions

`func (o *AppDetailResponse) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetCredentialSchema

`func (o *AppDetailResponse) GetCredentialSchema() []map[string]interface{}`

GetCredentialSchema returns the CredentialSchema field if non-nil, zero value otherwise.

### GetCredentialSchemaOk

`func (o *AppDetailResponse) GetCredentialSchemaOk() (*[]map[string]interface{}, bool)`

GetCredentialSchemaOk returns a tuple with the CredentialSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialSchema

`func (o *AppDetailResponse) SetCredentialSchema(v []map[string]interface{})`

SetCredentialSchema sets CredentialSchema field to given value.

### HasCredentialSchema

`func (o *AppDetailResponse) HasCredentialSchema() bool`

HasCredentialSchema returns a boolean if a field has been set.

### GetCategory

`func (o *AppDetailResponse) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *AppDetailResponse) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *AppDetailResponse) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *AppDetailResponse) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetHelpUrl

`func (o *AppDetailResponse) GetHelpUrl() string`

GetHelpUrl returns the HelpUrl field if non-nil, zero value otherwise.

### GetHelpUrlOk

`func (o *AppDetailResponse) GetHelpUrlOk() (*string, bool)`

GetHelpUrlOk returns a tuple with the HelpUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpUrl

`func (o *AppDetailResponse) SetHelpUrl(v string)`

SetHelpUrl sets HelpUrl field to given value.

### HasHelpUrl

`func (o *AppDetailResponse) HasHelpUrl() bool`

HasHelpUrl returns a boolean if a field has been set.

### GetInternal

`func (o *AppDetailResponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *AppDetailResponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *AppDetailResponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *AppDetailResponse) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetHasPlatformKey

`func (o *AppDetailResponse) GetHasPlatformKey() bool`

GetHasPlatformKey returns the HasPlatformKey field if non-nil, zero value otherwise.

### GetHasPlatformKeyOk

`func (o *AppDetailResponse) GetHasPlatformKeyOk() (*bool, bool)`

GetHasPlatformKeyOk returns a tuple with the HasPlatformKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPlatformKey

`func (o *AppDetailResponse) SetHasPlatformKey(v bool)`

SetHasPlatformKey sets HasPlatformKey field to given value.

### HasHasPlatformKey

`func (o *AppDetailResponse) HasHasPlatformKey() bool`

HasHasPlatformKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


