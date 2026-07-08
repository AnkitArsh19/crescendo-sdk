# ConnectionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**AppKey** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 
**GrantedScopes** | Pointer to **string** |  | [optional] 

## Methods

### NewConnectionResponse

`func NewConnectionResponse() *ConnectionResponse`

NewConnectionResponse instantiates a new ConnectionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectionResponseWithDefaults

`func NewConnectionResponseWithDefaults() *ConnectionResponse`

NewConnectionResponseWithDefaults instantiates a new ConnectionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ConnectionResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectionResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectionResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectionResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAppKey

`func (o *ConnectionResponse) GetAppKey() string`

GetAppKey returns the AppKey field if non-nil, zero value otherwise.

### GetAppKeyOk

`func (o *ConnectionResponse) GetAppKeyOk() (*string, bool)`

GetAppKeyOk returns a tuple with the AppKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppKey

`func (o *ConnectionResponse) SetAppKey(v string)`

SetAppKey sets AppKey field to given value.

### HasAppKey

`func (o *ConnectionResponse) HasAppKey() bool`

HasAppKey returns a boolean if a field has been set.

### GetName

`func (o *ConnectionResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectionResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectionResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectionResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *ConnectionResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ConnectionResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ConnectionResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ConnectionResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ConnectionResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ConnectionResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ConnectionResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ConnectionResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ConnectionResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ConnectionResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ConnectionResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ConnectionResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetGrantedScopes

`func (o *ConnectionResponse) GetGrantedScopes() string`

GetGrantedScopes returns the GrantedScopes field if non-nil, zero value otherwise.

### GetGrantedScopesOk

`func (o *ConnectionResponse) GetGrantedScopesOk() (*string, bool)`

GetGrantedScopesOk returns a tuple with the GrantedScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantedScopes

`func (o *ConnectionResponse) SetGrantedScopes(v string)`

SetGrantedScopes sets GrantedScopes field to given value.

### HasGrantedScopes

`func (o *ConnectionResponse) HasGrantedScopes() bool`

HasGrantedScopes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


