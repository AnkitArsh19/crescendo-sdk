# WorkflowSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**StepCount** | Pointer to **int32** |  | [optional] 
**Revision** | Pointer to **int64** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 
**LastRunAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewWorkflowSummaryResponse

`func NewWorkflowSummaryResponse() *WorkflowSummaryResponse`

NewWorkflowSummaryResponse instantiates a new WorkflowSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowSummaryResponseWithDefaults

`func NewWorkflowSummaryResponseWithDefaults() *WorkflowSummaryResponse`

NewWorkflowSummaryResponseWithDefaults instantiates a new WorkflowSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowSummaryResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowSummaryResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowSummaryResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowSummaryResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkflowSummaryResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowSummaryResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowSummaryResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowSummaryResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *WorkflowSummaryResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowSummaryResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowSummaryResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowSummaryResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsActive

`func (o *WorkflowSummaryResponse) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *WorkflowSummaryResponse) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *WorkflowSummaryResponse) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *WorkflowSummaryResponse) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetStatus

`func (o *WorkflowSummaryResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WorkflowSummaryResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WorkflowSummaryResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *WorkflowSummaryResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStepCount

`func (o *WorkflowSummaryResponse) GetStepCount() int32`

GetStepCount returns the StepCount field if non-nil, zero value otherwise.

### GetStepCountOk

`func (o *WorkflowSummaryResponse) GetStepCountOk() (*int32, bool)`

GetStepCountOk returns a tuple with the StepCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepCount

`func (o *WorkflowSummaryResponse) SetStepCount(v int32)`

SetStepCount sets StepCount field to given value.

### HasStepCount

`func (o *WorkflowSummaryResponse) HasStepCount() bool`

HasStepCount returns a boolean if a field has been set.

### GetRevision

`func (o *WorkflowSummaryResponse) GetRevision() int64`

GetRevision returns the Revision field if non-nil, zero value otherwise.

### GetRevisionOk

`func (o *WorkflowSummaryResponse) GetRevisionOk() (*int64, bool)`

GetRevisionOk returns a tuple with the Revision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevision

`func (o *WorkflowSummaryResponse) SetRevision(v int64)`

SetRevision sets Revision field to given value.

### HasRevision

`func (o *WorkflowSummaryResponse) HasRevision() bool`

HasRevision returns a boolean if a field has been set.

### GetCreatedAt

`func (o *WorkflowSummaryResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkflowSummaryResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkflowSummaryResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *WorkflowSummaryResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *WorkflowSummaryResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *WorkflowSummaryResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *WorkflowSummaryResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *WorkflowSummaryResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetLastRunAt

`func (o *WorkflowSummaryResponse) GetLastRunAt() time.Time`

GetLastRunAt returns the LastRunAt field if non-nil, zero value otherwise.

### GetLastRunAtOk

`func (o *WorkflowSummaryResponse) GetLastRunAtOk() (*time.Time, bool)`

GetLastRunAtOk returns a tuple with the LastRunAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRunAt

`func (o *WorkflowSummaryResponse) SetLastRunAt(v time.Time)`

SetLastRunAt sets LastRunAt field to given value.

### HasLastRunAt

`func (o *WorkflowSummaryResponse) HasLastRunAt() bool`

HasLastRunAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


