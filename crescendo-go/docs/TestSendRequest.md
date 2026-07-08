# TestSendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ToAddress** | **string** |  | 
**Variables** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewTestSendRequest

`func NewTestSendRequest(toAddress string, ) *TestSendRequest`

NewTestSendRequest instantiates a new TestSendRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestSendRequestWithDefaults

`func NewTestSendRequestWithDefaults() *TestSendRequest`

NewTestSendRequestWithDefaults instantiates a new TestSendRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToAddress

`func (o *TestSendRequest) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *TestSendRequest) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *TestSendRequest) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.


### GetVariables

`func (o *TestSendRequest) GetVariables() map[string]interface{}`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *TestSendRequest) GetVariablesOk() (*map[string]interface{}, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *TestSendRequest) SetVariables(v map[string]interface{})`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *TestSendRequest) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


