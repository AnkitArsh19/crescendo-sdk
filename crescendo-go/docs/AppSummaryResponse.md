# AppSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppKey** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**LogoUrl** | Pointer to **string** |  | [optional] 
**AuthType** | Pointer to **string** |  | [optional] 
**AltAuthType** | Pointer to **string** |  | [optional] 
**CredentialSchema** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Category** | Pointer to **string** |  | [optional] 
**HelpUrl** | Pointer to **string** |  | [optional] 
**Internal** | Pointer to **bool** |  | [optional] 
**HasPlatformKey** | Pointer to **bool** |  | [optional] 

## Methods

### NewAppSummaryResponse

`func NewAppSummaryResponse() *AppSummaryResponse`

NewAppSummaryResponse instantiates a new AppSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppSummaryResponseWithDefaults

`func NewAppSummaryResponseWithDefaults() *AppSummaryResponse`

NewAppSummaryResponseWithDefaults instantiates a new AppSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppKey

`func (o *AppSummaryResponse) GetAppKey() string`

GetAppKey returns the AppKey field if non-nil, zero value otherwise.

### GetAppKeyOk

`func (o *AppSummaryResponse) GetAppKeyOk() (*string, bool)`

GetAppKeyOk returns a tuple with the AppKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppKey

`func (o *AppSummaryResponse) SetAppKey(v string)`

SetAppKey sets AppKey field to given value.

### HasAppKey

`func (o *AppSummaryResponse) HasAppKey() bool`

HasAppKey returns a boolean if a field has been set.

### GetName

`func (o *AppSummaryResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppSummaryResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppSummaryResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AppSummaryResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AppSummaryResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AppSummaryResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AppSummaryResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AppSummaryResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLogoUrl

`func (o *AppSummaryResponse) GetLogoUrl() string`

GetLogoUrl returns the LogoUrl field if non-nil, zero value otherwise.

### GetLogoUrlOk

`func (o *AppSummaryResponse) GetLogoUrlOk() (*string, bool)`

GetLogoUrlOk returns a tuple with the LogoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogoUrl

`func (o *AppSummaryResponse) SetLogoUrl(v string)`

SetLogoUrl sets LogoUrl field to given value.

### HasLogoUrl

`func (o *AppSummaryResponse) HasLogoUrl() bool`

HasLogoUrl returns a boolean if a field has been set.

### GetAuthType

`func (o *AppSummaryResponse) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *AppSummaryResponse) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *AppSummaryResponse) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *AppSummaryResponse) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetAltAuthType

`func (o *AppSummaryResponse) GetAltAuthType() string`

GetAltAuthType returns the AltAuthType field if non-nil, zero value otherwise.

### GetAltAuthTypeOk

`func (o *AppSummaryResponse) GetAltAuthTypeOk() (*string, bool)`

GetAltAuthTypeOk returns a tuple with the AltAuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltAuthType

`func (o *AppSummaryResponse) SetAltAuthType(v string)`

SetAltAuthType sets AltAuthType field to given value.

### HasAltAuthType

`func (o *AppSummaryResponse) HasAltAuthType() bool`

HasAltAuthType returns a boolean if a field has been set.

### GetCredentialSchema

`func (o *AppSummaryResponse) GetCredentialSchema() []map[string]interface{}`

GetCredentialSchema returns the CredentialSchema field if non-nil, zero value otherwise.

### GetCredentialSchemaOk

`func (o *AppSummaryResponse) GetCredentialSchemaOk() (*[]map[string]interface{}, bool)`

GetCredentialSchemaOk returns a tuple with the CredentialSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialSchema

`func (o *AppSummaryResponse) SetCredentialSchema(v []map[string]interface{})`

SetCredentialSchema sets CredentialSchema field to given value.

### HasCredentialSchema

`func (o *AppSummaryResponse) HasCredentialSchema() bool`

HasCredentialSchema returns a boolean if a field has been set.

### GetCategory

`func (o *AppSummaryResponse) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *AppSummaryResponse) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *AppSummaryResponse) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *AppSummaryResponse) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetHelpUrl

`func (o *AppSummaryResponse) GetHelpUrl() string`

GetHelpUrl returns the HelpUrl field if non-nil, zero value otherwise.

### GetHelpUrlOk

`func (o *AppSummaryResponse) GetHelpUrlOk() (*string, bool)`

GetHelpUrlOk returns a tuple with the HelpUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpUrl

`func (o *AppSummaryResponse) SetHelpUrl(v string)`

SetHelpUrl sets HelpUrl field to given value.

### HasHelpUrl

`func (o *AppSummaryResponse) HasHelpUrl() bool`

HasHelpUrl returns a boolean if a field has been set.

### GetInternal

`func (o *AppSummaryResponse) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *AppSummaryResponse) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *AppSummaryResponse) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *AppSummaryResponse) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetHasPlatformKey

`func (o *AppSummaryResponse) GetHasPlatformKey() bool`

GetHasPlatformKey returns the HasPlatformKey field if non-nil, zero value otherwise.

### GetHasPlatformKeyOk

`func (o *AppSummaryResponse) GetHasPlatformKeyOk() (*bool, bool)`

GetHasPlatformKeyOk returns a tuple with the HasPlatformKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPlatformKey

`func (o *AppSummaryResponse) SetHasPlatformKey(v bool)`

SetHasPlatformKey sets HasPlatformKey field to given value.

### HasHasPlatformKey

`func (o *AppSummaryResponse) HasHasPlatformKey() bool`

HasHasPlatformKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


