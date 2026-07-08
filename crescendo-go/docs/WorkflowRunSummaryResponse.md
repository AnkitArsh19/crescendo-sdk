# WorkflowRunSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**WorkflowId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**ErrorMessage** | Pointer to **string** |  | [optional] 
**TotalSteps** | Pointer to **int32** |  | [optional] 
**CompletedSteps** | Pointer to **int32** |  | [optional] 
**FailedSteps** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**CompletedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewWorkflowRunSummaryResponse

`func NewWorkflowRunSummaryResponse() *WorkflowRunSummaryResponse`

NewWorkflowRunSummaryResponse instantiates a new WorkflowRunSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowRunSummaryResponseWithDefaults

`func NewWorkflowRunSummaryResponseWithDefaults() *WorkflowRunSummaryResponse`

NewWorkflowRunSummaryResponseWithDefaults instantiates a new WorkflowRunSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowRunSummaryResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowRunSummaryResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowRunSummaryResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowRunSummaryResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetWorkflowId

`func (o *WorkflowRunSummaryResponse) GetWorkflowId() string`

GetWorkflowId returns the WorkflowId field if non-nil, zero value otherwise.

### GetWorkflowIdOk

`func (o *WorkflowRunSummaryResponse) GetWorkflowIdOk() (*string, bool)`

GetWorkflowIdOk returns a tuple with the WorkflowId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowId

`func (o *WorkflowRunSummaryResponse) SetWorkflowId(v string)`

SetWorkflowId sets WorkflowId field to given value.

### HasWorkflowId

`func (o *WorkflowRunSummaryResponse) HasWorkflowId() bool`

HasWorkflowId returns a boolean if a field has been set.

### GetStatus

`func (o *WorkflowRunSummaryResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WorkflowRunSummaryResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WorkflowRunSummaryResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WorkflowRunSummaryResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrorMessage

`func (o *WorkflowRunSummaryResponse) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *WorkflowRunSummaryResponse) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *WorkflowRunSummaryResponse) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *WorkflowRunSummaryResponse) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetTotalSteps

`func (o *WorkflowRunSummaryResponse) GetTotalSteps() int32`

GetTotalSteps returns the TotalSteps field if non-nil, zero value otherwise.

### GetTotalStepsOk

`func (o *WorkflowRunSummaryResponse) GetTotalStepsOk() (*int32, bool)`

GetTotalStepsOk returns a tuple with the TotalSteps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSteps

`func (o *WorkflowRunSummaryResponse) SetTotalSteps(v int32)`

SetTotalSteps sets TotalSteps field to given value.

### HasTotalSteps

`func (o *WorkflowRunSummaryResponse) HasTotalSteps() bool`

HasTotalSteps returns a boolean if a field has been set.

### GetCompletedSteps

`func (o *WorkflowRunSummaryResponse) GetCompletedSteps() int32`

GetCompletedSteps returns the CompletedSteps field if non-nil, zero value otherwise.

### GetCompletedStepsOk

`func (o *WorkflowRunSummaryResponse) GetCompletedStepsOk() (*int32, bool)`

GetCompletedStepsOk returns a tuple with the CompletedSteps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedSteps

`func (o *WorkflowRunSummaryResponse) SetCompletedSteps(v int32)`

SetCompletedSteps sets CompletedSteps field to given value.

### HasCompletedSteps

`func (o *WorkflowRunSummaryResponse) HasCompletedSteps() bool`

HasCompletedSteps returns a boolean if a field has been set.

### GetFailedSteps

`func (o *WorkflowRunSummaryResponse) GetFailedSteps() int32`

GetFailedSteps returns the FailedSteps field if non-nil, zero value otherwise.

### GetFailedStepsOk

`func (o *WorkflowRunSummaryResponse) GetFailedStepsOk() (*int32, bool)`

GetFailedStepsOk returns a tuple with the FailedSteps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedSteps

`func (o *WorkflowRunSummaryResponse) SetFailedSteps(v int32)`

SetFailedSteps sets FailedSteps field to given value.

### HasFailedSteps

`func (o *WorkflowRunSummaryResponse) HasFailedSteps() bool`

HasFailedSteps returns a boolean if a field has been set.

### GetCreatedAt

`func (o *WorkflowRunSummaryResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkflowRunSummaryResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkflowRunSummaryResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *WorkflowRunSummaryResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCompletedAt

`func (o *WorkflowRunSummaryResponse) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *WorkflowRunSummaryResponse) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *WorkflowRunSummaryResponse) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *WorkflowRunSummaryResponse) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


