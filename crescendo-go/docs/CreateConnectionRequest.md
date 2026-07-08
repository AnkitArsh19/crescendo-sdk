# CreateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppKey** | **string** |  | 
**Name** | **string** |  | 
**Credentials** | **map[string]interface{}** |  | 

## Methods

### NewCreateConnectionRequest

`func NewCreateConnectionRequest(appKey string, name string, credentials map[string]interface{}, ) *CreateConnectionRequest`

NewCreateConnectionRequest instantiates a new CreateConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateConnectionRequestWithDefaults

`func NewCreateConnectionRequestWithDefaults() *CreateConnectionRequest`

NewCreateConnectionRequestWithDefaults instantiates a new CreateConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppKey

`func (o *CreateConnectionRequest) GetAppKey() string`

GetAppKey returns the AppKey field if non-nil, zero value otherwise.

### GetAppKeyOk

`func (o *CreateConnectionRequest) GetAppKeyOk() (*string, bool)`

GetAppKeyOk returns a tuple with the AppKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppKey

`func (o *CreateConnectionRequest) SetAppKey(v string)`

SetAppKey sets AppKey field to given value.


### GetName

`func (o *CreateConnectionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateConnectionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateConnectionRequest) SetName(v string)`

SetName sets Name field to given value.


### GetCredentials

`func (o *CreateConnectionRequest) GetCredentials() map[string]interface{}`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *CreateConnectionRequest) GetCredentialsOk() (*map[string]interface{}, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *CreateConnectionRequest) SetCredentials(v map[string]interface{})`

SetCredentials sets Credentials field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


