# WorkflowListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]WorkflowSummaryResponse**](WorkflowSummaryResponse.md) |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewWorkflowListResponse

`func NewWorkflowListResponse() *WorkflowListResponse`

NewWorkflowListResponse instantiates a new WorkflowListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowListResponseWithDefaults

`func NewWorkflowListResponseWithDefaults() *WorkflowListResponse`

NewWorkflowListResponseWithDefaults instantiates a new WorkflowListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *WorkflowListResponse) GetData() []WorkflowSummaryResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *WorkflowListResponse) GetDataOk() (*[]WorkflowSummaryResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *WorkflowListResponse) SetData(v []WorkflowSummaryResponse)`

SetData sets Data field to given value.

### HasData

`func (o *WorkflowListResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetNextCursor

`func (o *WorkflowListResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *WorkflowListResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *WorkflowListResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *WorkflowListResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


