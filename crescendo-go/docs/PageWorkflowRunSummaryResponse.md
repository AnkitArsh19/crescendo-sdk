# PageWorkflowRunSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalPages** | Pointer to **int32** |  | [optional] 
**TotalElements** | Pointer to **int64** |  | [optional] 
**Pageable** | Pointer to [**PageableObject**](PageableObject.md) |  | [optional] 
**Sort** | Pointer to [**SortObject**](SortObject.md) |  | [optional] 
**First** | Pointer to **bool** |  | [optional] 
**Last** | Pointer to **bool** |  | [optional] 
**NumberOfElements** | Pointer to **int32** |  | [optional] 
**Size** | Pointer to **int32** |  | [optional] 
**Content** | Pointer to [**[]WorkflowRunSummaryResponse**](WorkflowRunSummaryResponse.md) |  | [optional] 
**Number** | Pointer to **int32** |  | [optional] 
**Empty** | Pointer to **bool** |  | [optional] 

## Methods

### NewPageWorkflowRunSummaryResponse

`func NewPageWorkflowRunSummaryResponse() *PageWorkflowRunSummaryResponse`

NewPageWorkflowRunSummaryResponse instantiates a new PageWorkflowRunSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageWorkflowRunSummaryResponseWithDefaults

`func NewPageWorkflowRunSummaryResponseWithDefaults() *PageWorkflowRunSummaryResponse`

NewPageWorkflowRunSummaryResponseWithDefaults instantiates a new PageWorkflowRunSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalPages

`func (o *PageWorkflowRunSummaryResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *PageWorkflowRunSummaryResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *PageWorkflowRunSummaryResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *PageWorkflowRunSummaryResponse) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalElements

`func (o *PageWorkflowRunSummaryResponse) GetTotalElements() int64`

GetTotalElements returns the TotalElements field if non-nil, zero value otherwise.

### GetTotalElementsOk

`func (o *PageWorkflowRunSummaryResponse) GetTotalElementsOk() (*int64, bool)`

GetTotalElementsOk returns a tuple with the TotalElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalElements

`func (o *PageWorkflowRunSummaryResponse) SetTotalElements(v int64)`

SetTotalElements sets TotalElements field to given value.

### HasTotalElements

`func (o *PageWorkflowRunSummaryResponse) HasTotalElements() bool`

HasTotalElements returns a boolean if a field has been set.

### GetPageable

`func (o *PageWorkflowRunSummaryResponse) GetPageable() PageableObject`

GetPageable returns the Pageable field if non-nil, zero value otherwise.

### GetPageableOk

`func (o *PageWorkflowRunSummaryResponse) GetPageableOk() (*PageableObject, bool)`

GetPageableOk returns a tuple with the Pageable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageable

`func (o *PageWorkflowRunSummaryResponse) SetPageable(v PageableObject)`

SetPageable sets Pageable field to given value.

### HasPageable

`func (o *PageWorkflowRunSummaryResponse) HasPageable() bool`

HasPageable returns a boolean if a field has been set.

### GetSort

`func (o *PageWorkflowRunSummaryResponse) GetSort() SortObject`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *PageWorkflowRunSummaryResponse) GetSortOk() (*SortObject, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *PageWorkflowRunSummaryResponse) SetSort(v SortObject)`

SetSort sets Sort field to given value.

### HasSort

`func (o *PageWorkflowRunSummaryResponse) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetFirst

`func (o *PageWorkflowRunSummaryResponse) GetFirst() bool`

GetFirst returns the First field if non-nil, zero value otherwise.

### GetFirstOk

`func (o *PageWorkflowRunSummaryResponse) GetFirstOk() (*bool, bool)`

GetFirstOk returns a tuple with the First field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirst

`func (o *PageWorkflowRunSummaryResponse) SetFirst(v bool)`

SetFirst sets First field to given value.

### HasFirst

`func (o *PageWorkflowRunSummaryResponse) HasFirst() bool`

HasFirst returns a boolean if a field has been set.

### GetLast

`func (o *PageWorkflowRunSummaryResponse) GetLast() bool`

GetLast returns the Last field if non-nil, zero value otherwise.

### GetLastOk

`func (o *PageWorkflowRunSummaryResponse) GetLastOk() (*bool, bool)`

GetLastOk returns a tuple with the Last field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLast

`func (o *PageWorkflowRunSummaryResponse) SetLast(v bool)`

SetLast sets Last field to given value.

### HasLast

`func (o *PageWorkflowRunSummaryResponse) HasLast() bool`

HasLast returns a boolean if a field has been set.

### GetNumberOfElements

`func (o *PageWorkflowRunSummaryResponse) GetNumberOfElements() int32`

GetNumberOfElements returns the NumberOfElements field if non-nil, zero value otherwise.

### GetNumberOfElementsOk

`func (o *PageWorkflowRunSummaryResponse) GetNumberOfElementsOk() (*int32, bool)`

GetNumberOfElementsOk returns a tuple with the NumberOfElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfElements

`func (o *PageWorkflowRunSummaryResponse) SetNumberOfElements(v int32)`

SetNumberOfElements sets NumberOfElements field to given value.

### HasNumberOfElements

`func (o *PageWorkflowRunSummaryResponse) HasNumberOfElements() bool`

HasNumberOfElements returns a boolean if a field has been set.

### GetSize

`func (o *PageWorkflowRunSummaryResponse) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *PageWorkflowRunSummaryResponse) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *PageWorkflowRunSummaryResponse) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *PageWorkflowRunSummaryResponse) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetContent

`func (o *PageWorkflowRunSummaryResponse) GetContent() []WorkflowRunSummaryResponse`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *PageWorkflowRunSummaryResponse) GetContentOk() (*[]WorkflowRunSummaryResponse, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *PageWorkflowRunSummaryResponse) SetContent(v []WorkflowRunSummaryResponse)`

SetContent sets Content field to given value.

### HasContent

`func (o *PageWorkflowRunSummaryResponse) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetNumber

`func (o *PageWorkflowRunSummaryResponse) GetNumber() int32`

GetNumber returns the Number field if non-nil, zero value otherwise.

### GetNumberOk

`func (o *PageWorkflowRunSummaryResponse) GetNumberOk() (*int32, bool)`

GetNumberOk returns a tuple with the Number field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumber

`func (o *PageWorkflowRunSummaryResponse) SetNumber(v int32)`

SetNumber sets Number field to given value.

### HasNumber

`func (o *PageWorkflowRunSummaryResponse) HasNumber() bool`

HasNumber returns a boolean if a field has been set.

### GetEmpty

`func (o *PageWorkflowRunSummaryResponse) GetEmpty() bool`

GetEmpty returns the Empty field if non-nil, zero value otherwise.

### GetEmptyOk

`func (o *PageWorkflowRunSummaryResponse) GetEmptyOk() (*bool, bool)`

GetEmptyOk returns a tuple with the Empty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmpty

`func (o *PageWorkflowRunSummaryResponse) SetEmpty(v bool)`

SetEmpty sets Empty field to given value.

### HasEmpty

`func (o *PageWorkflowRunSummaryResponse) HasEmpty() bool`

HasEmpty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


