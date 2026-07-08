# PublicPageDomainResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]DomainResponse**](DomainResponse.md) |  | [optional] 
**HasMore** | Pointer to **bool** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewPublicPageDomainResponse

`func NewPublicPageDomainResponse() *PublicPageDomainResponse`

NewPublicPageDomainResponse instantiates a new PublicPageDomainResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicPageDomainResponseWithDefaults

`func NewPublicPageDomainResponseWithDefaults() *PublicPageDomainResponse`

NewPublicPageDomainResponseWithDefaults instantiates a new PublicPageDomainResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PublicPageDomainResponse) GetData() []DomainResponse`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PublicPageDomainResponse) GetDataOk() (*[]DomainResponse, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PublicPageDomainResponse) SetData(v []DomainResponse)`

SetData sets Data field to given value.

### HasData

`func (o *PublicPageDomainResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetHasMore

`func (o *PublicPageDomainResponse) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *PublicPageDomainResponse) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *PublicPageDomainResponse) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *PublicPageDomainResponse) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetNextCursor

`func (o *PublicPageDomainResponse) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PublicPageDomainResponse) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PublicPageDomainResponse) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *PublicPageDomainResponse) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


