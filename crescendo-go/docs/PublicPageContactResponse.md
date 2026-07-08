# PublicPageContactResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]ContactResponse**](ContactResponse.md) |  | [optional] 
**HasMore** | Pointer to **bool** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewPublicPageContactResponse

`func NewPublicPageContactResponse() *PublicPageContactResponse`

NewPublicPageContactResponse instantiates a new PublicPageContactResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicPageContactResponseWithDefaults

`func NewPublicPageContactResponseWithDefaults() *PublicPageContactResponse`

NewPublicPageContactResponseWithDefaults instantiates a new PublicPageContactResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PublicPageContactResponse) GetData() []ContactResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PublicPageContactResponse) GetDataOk() (*[]ContactResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PublicPageContactResponse) SetData(v []ContactResponse)`

SetData sets Data field to given value.

### HasData

`func (o *PublicPageContactResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetHasMore

`func (o *PublicPageContactResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PublicPageContactResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PublicPageContactResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PublicPageContactResponse) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetNextCursor

`func (o *PublicPageContactResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PublicPageContactResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PublicPageContactResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *PublicPageContactResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


