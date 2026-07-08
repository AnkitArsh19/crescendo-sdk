# PublicWebhookListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**SubscribedEvents** | Pointer to **[]string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPublicWebhookListResponse

`func NewPublicWebhookListResponse() *PublicWebhookListResponse`

NewPublicWebhookListResponse instantiates a new PublicWebhookListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicWebhookListResponseWithDefaults

`func NewPublicWebhookListResponseWithDefaults() *PublicWebhookListResponse`

NewPublicWebhookListResponseWithDefaults instantiates a new PublicWebhookListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicWebhookListResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicWebhookListResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicWebhookListResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PublicWebhookListResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUrl

`func (o *PublicWebhookListResponse) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *PublicWebhookListResponse) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *PublicWebhookListResponse) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *PublicWebhookListResponse) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetSubscribedEvents

`func (o *PublicWebhookListResponse) GetSubscribedEvents() []string`

GetSubscribedEvents returns the SubscribedEvents field if non-nil, zero value otherwise.

### GetSubscribedEventsOk

`func (o *PublicWebhookListResponse) GetSubscribedEventsOk() (*[]string, bool)`

GetSubscribedEventsOk returns a tuple with the SubscribedEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscribedEvents

`func (o *PublicWebhookListResponse) SetSubscribedEvents(v []string)`

SetSubscribedEvents sets SubscribedEvents field to given value.

### HasSubscribedEvents

`func (o *PublicWebhookListResponse) HasSubscribedEvents() bool`

HasSubscribedEvents returns a boolean if a field has been set.

### GetCreatedAt

`func (o *PublicWebhookListResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PublicWebhookListResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PublicWebhookListResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *PublicWebhookListResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


