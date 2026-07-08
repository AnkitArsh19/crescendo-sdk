# WorkflowRunDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**WorkflowId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**TriggerData** | Pointer to **map[string]interface{}** |  | [optional] 
**ErrorMessage** | Pointer to **string** |  | [optional] 
**StepRuns** | Pointer to [**[]StepRunResponse**](StepRunResponse.md) |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewWorkflowRunDetailResponse

`func NewWorkflowRunDetailResponse() *WorkflowRunDetailResponse`

NewWorkflowRunDetailResponse instantiates a new WorkflowRunDetailResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowRunDetailResponseWithDefaults

`func NewWorkflowRunDetailResponseWithDefaults() *WorkflowRunDetailResponse`

NewWorkflowRunDetailResponseWithDefaults instantiates a new WorkflowRunDetailResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowRunDetailResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowRunDetailResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowRunDetailResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowRunDetailResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetWorkflowId

`func (o *WorkflowRunDetailResponse) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *WorkflowRunDetailResponse) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *WorkflowRunDetailResponse) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *WorkflowRunDetailResponse) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### GetStatus

`func (o *WorkflowRunDetailResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WorkflowRunDetailResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WorkflowRunDetailResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WorkflowRunDetailResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTriggerData

`func (o *WorkflowRunDetailResponse) GetTriggerData() map[string]interface{}`

GetTriggerData returns the TriggerData field if non-nil, zero value otherwise.

### GetTriggerDataOk

`func (o *WorkflowRunDetailResponse) GetTriggerDataOk() (*map[string]interface{}, bool)`

GetTriggerDataOk returns a tuple with the TriggerData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerData

`func (o *WorkflowRunDetailResponse) SetTriggerData(v map[string]interface{})`

SetTriggerData sets TriggerData field to given value.

### HasTriggerData

`func (o *WorkflowRunDetailResponse) HasTriggerData() bool`

HasTriggerData returns a boolean if a field has been set.

### GetErrorMessage

`func (o *WorkflowRunDetailResponse) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *WorkflowRunDetailResponse) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *WorkflowRunDetailResponse) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *WorkflowRunDetailResponse) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetStepRuns

`func (o *WorkflowRunDetailResponse) GetStepRuns() []StepRunResponse`

GetStepRuns returns the StepRuns field if non-nil, zero value otherwise.

### GetStepRunsOk

`func (o *WorkflowRunDetailResponse) GetStepRunsOk() (*[]StepRunResponse, bool)`

GetStepRunsOk returns a tuple with the StepRuns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepRuns

`func (o *WorkflowRunDetailResponse) SetStepRuns(v []StepRunResponse)`

SetStepRuns sets StepRuns field to given value.

### HasStepRuns

`func (o *WorkflowRunDetailResponse) HasStepRuns() bool`

HasStepRuns returns a boolean if a field has been set.

### GetCreatedAt

`func (o *WorkflowRunDetailResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkflowRunDetailResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkflowRunDetailResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *WorkflowRunDetailResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *WorkflowRunDetailResponse) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *WorkflowRunDetailResponse) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *WorkflowRunDetailResponse) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *WorkflowRunDetailResponse) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


