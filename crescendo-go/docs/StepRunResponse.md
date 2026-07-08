# StepRunResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**StepId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**InputData** | Pointer to **map[string]interface{}** |  | [optional] 
**OutputData** | Pointer to **map[string]interface{}** |  | [optional] 
**ErrorMessage** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewStepRunResponse

`func NewStepRunResponse() *StepRunResponse`

NewStepRunResponse instantiates a new StepRunResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStepRunResponseWithDefaults

`func NewStepRunResponseWithDefaults() *StepRunResponse`

NewStepRunResponseWithDefaults instantiates a new StepRunResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *StepRunResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StepRunResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StepRunResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StepRunResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStepId

`func (o *StepRunResponse) GetStepId() string`

GetStepId returns the StepId field if non-nil, zero value otherwise.

### GetStepIdOk

`func (o *StepRunResponse) GetStepIdOk() (*string, bool)`

GetStepIdOk returns a tuple with the StepId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepId

`func (o *StepRunResponse) SetStepId(v string)`

SetStepId sets StepId field to given value.

### HasStepId

`func (o *StepRunResponse) HasStepId() bool`

HasStepId returns a boolean if a field has been set.

### GetStatus

`func (o *StepRunResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StepRunResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StepRunResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StepRunResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetInputData

`func (o *StepRunResponse) GetInputData() map[string]interface{}`

GetInputData returns the InputData field if non-nil, zero value otherwise.

### GetInputDataOk

`func (o *StepRunResponse) GetInputDataOk() (*map[string]interface{}, bool)`

GetInputDataOk returns a tuple with the InputData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputData

`func (o *StepRunResponse) SetInputData(v map[string]interface{})`

SetInputData sets InputData field to given value.

### HasInputData

`func (o *StepRunResponse) HasInputData() bool`

HasInputData returns a boolean if a field has been set.

### GetOutputData

`func (o *StepRunResponse) GetOutputData() map[string]interface{}`

GetOutputData returns the OutputData field if non-nil, zero value otherwise.

### GetOutputDataOk

`func (o *StepRunResponse) GetOutputDataOk() (*map[string]interface{}, bool)`

GetOutputDataOk returns a tuple with the OutputData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputData

`func (o *StepRunResponse) SetOutputData(v map[string]interface{})`

SetOutputData sets OutputData field to given value.

### HasOutputData

`func (o *StepRunResponse) HasOutputData() bool`

HasOutputData returns a boolean if a field has been set.

### GetErrorMessage

`func (o *StepRunResponse) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *StepRunResponse) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *StepRunResponse) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *StepRunResponse) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetCreatedAt

`func (o *StepRunResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *StepRunResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *StepRunResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *StepRunResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *StepRunResponse) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *StepRunResponse) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *StepRunResponse) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *StepRunResponse) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


