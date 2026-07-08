# StepResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Order** | Pointer to **float32** |  | [optional] 
**AppKey** | Pointer to **string** |  | [optional] 
**ActionKey** | Pointer to **string** |  | [optional] 
**ConnectionId** | Pointer to **string** |  | [optional] 
**ParentStepId** | Pointer to **string** |  | [optional] 
**BranchKey** | Pointer to **string** |  | [optional] 
**Configuration** | Pointer to **map[string]interface{}** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewStepResponse

`func NewStepResponse() *StepResponse`

NewStepResponse instantiates a new StepResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStepResponseWithDefaults

`func NewStepResponseWithDefaults() *StepResponse`

NewStepResponseWithDefaults instantiates a new StepResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *StepResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StepResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StepResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StepResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *StepResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StepResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StepResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *StepResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *StepResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StepResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StepResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StepResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOrder

`func (o *StepResponse) GetOrder() float32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *StepResponse) GetOrderOk() (*float32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *StepResponse) SetOrder(v float32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *StepResponse) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetAppKey

`func (o *StepResponse) GetAppKey() string`

GetAppKey returns the AppKey field if non-nil, zero value otherwise.

### GetAppKeyOk

`func (o *StepResponse) GetAppKeyOk() (*string, bool)`

GetAppKeyOk returns a tuple with the AppKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppKey

`func (o *StepResponse) SetAppKey(v string)`

SetAppKey sets AppKey field to given value.

### HasAppKey

`func (o *StepResponse) HasAppKey() bool`

HasAppKey returns a boolean if a field has been set.

### GetActionKey

`func (o *StepResponse) GetActionKey() string`

GetActionKey returns the ActionKey field if non-nil, zero value otherwise.

### GetActionKeyOk

`func (o *StepResponse) GetActionKeyOk() (*string, bool)`

GetActionKeyOk returns a tuple with the ActionKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionKey

`func (o *StepResponse) SetActionKey(v string)`

SetActionKey sets ActionKey field to given value.

### HasActionKey

`func (o *StepResponse) HasActionKey() bool`

HasActionKey returns a boolean if a field has been set.

### GetConnectionId

`func (o *StepResponse) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *StepResponse) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *StepResponse) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.

### HasConnectionId

`func (o *StepResponse) HasConnectionId() bool`

HasConnectionId returns a boolean if a field has been set.

### GetParentStepId

`func (o *StepResponse) GetParentStepId() string`

GetParentStepId returns the ParentStepId field if non-nil, zero value otherwise.

### GetParentStepIdOk

`func (o *StepResponse) GetParentStepIdOk() (*string, bool)`

GetParentStepIdOk returns a tuple with the ParentStepId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentStepId

`func (o *StepResponse) SetParentStepId(v string)`

SetParentStepId sets ParentStepId field to given value.

### HasParentStepId

`func (o *StepResponse) HasParentStepId() bool`

HasParentStepId returns a boolean if a field has been set.

### GetBranchKey

`func (o *StepResponse) GetBranchKey() string`

GetBranchKey returns the BranchKey field if non-nil, zero value otherwise.

### GetBranchKeyOk

`func (o *StepResponse) GetBranchKeyOk() (*string, bool)`

GetBranchKeyOk returns a tuple with the BranchKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranchKey

`func (o *StepResponse) SetBranchKey(v string)`

SetBranchKey sets BranchKey field to given value.

### HasBranchKey

`func (o *StepResponse) HasBranchKey() bool`

HasBranchKey returns a boolean if a field has been set.

### GetConfiguration

`func (o *StepResponse) GetConfiguration() map[string]interface{}`

GetConfiguration returns the Configuration field if non-nil, zero value otherwise.

### GetConfigurationOk

`func (o *StepResponse) GetConfigurationOk() (*map[string]interface{}, bool)`

GetConfigurationOk returns a tuple with the Configuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguration

`func (o *StepResponse) SetConfiguration(v map[string]interface{})`

SetConfiguration sets Configuration field to given value.

### HasConfiguration

`func (o *StepResponse) HasConfiguration() bool`

HasConfiguration returns a boolean if a field has been set.

### GetCreatedAt

`func (o *StepResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *StepResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *StepResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *StepResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *StepResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *StepResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *StepResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *StepResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


