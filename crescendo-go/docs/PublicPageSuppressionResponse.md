# PublicPageSuppressionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]SuppressionResponse**](SuppressionResponse.md) |  | [optional] 
**HasMore** | Pointer to **bool** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewPublicPageSuppressionResponse

`func NewPublicPageSuppressionResponse() *PublicPageSuppressionResponse`

NewPublicPageSuppressionResponse instantiates a new PublicPageSuppressionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicPageSuppressionResponseWithDefaults

`func NewPublicPageSuppressionResponseWithDefaults() *PublicPageSuppressionResponse`

NewPublicPageSuppressionResponseWithDefaults instantiates a new PublicPageSuppressionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PublicPageSuppressionResponse) GetData() []SuppressionResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PublicPageSuppressionResponse) GetDataOk() (*[]SuppressionResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PublicPageSuppressionResponse) SetData(v []SuppressionResponse)`

SetData sets Data field to given value.

### HasData

`func (o *PublicPageSuppressionResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetHasMore

`func (o *PublicPageSuppressionResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PublicPageSuppressionResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PublicPageSuppressionResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PublicPageSuppressionResponse) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetNextCursor

`func (o *PublicPageSuppressionResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PublicPageSuppressionResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PublicPageSuppressionResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *PublicPageSuppressionResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


