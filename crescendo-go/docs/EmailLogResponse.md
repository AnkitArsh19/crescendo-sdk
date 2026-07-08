# EmailLogResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**To** | Pointer to **string** |  | [optional] 
**From** | Pointer to **string** |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Provider** | Pointer to **string** |  | [optional] 
**ProviderMessageId** | Pointer to **string** |  | [optional] 
**Error** | Pointer to **string** |  | [optional] 
**TemplateId** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**SentAt** | Pointer to **time.Time** |  | [optional] 
**OpenedAt** | Pointer to **time.Time** |  | [optional] 
**OpenCount** | Pointer to **int32** |  | [optional] 
**ClickCount** | Pointer to **int32** |  | [optional] 

## Methods

### NewEmailLogResponse

`func NewEmailLogResponse() *EmailLogResponse`

NewEmailLogResponse instantiates a new EmailLogResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailLogResponseWithDefaults

`func NewEmailLogResponseWithDefaults() *EmailLogResponse`

NewEmailLogResponseWithDefaults instantiates a new EmailLogResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EmailLogResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EmailLogResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EmailLogResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EmailLogResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTo

`func (o *EmailLogResponse) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *EmailLogResponse) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *EmailLogResponse) SetTo(v string)`

SetTo sets To field to given value.

### HasTo

`func (o *EmailLogResponse) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetFrom

`func (o *EmailLogResponse) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *EmailLogResponse) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *EmailLogResponse) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *EmailLogResponse) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetSubject

`func (o *EmailLogResponse) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *EmailLogResponse) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *EmailLogResponse) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *EmailLogResponse) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetStatus

`func (o *EmailLogResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *EmailLogResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *EmailLogResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *EmailLogResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetProvider

`func (o *EmailLogResponse) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *EmailLogResponse) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *EmailLogResponse) SetProvider(v string)`

SetProvider sets Provider field to given value.

### HasProvider

`func (o *EmailLogResponse) HasProvider() bool`

HasProvider returns a boolean if a field has been set.

### GetProviderMessageId

`func (o *EmailLogResponse) GetProviderMessageId() string`

GetProviderMessageId returns the ProviderMessageId field if non-nil, zero value otherwise.

### GetProviderMessageIdOk

`func (o *EmailLogResponse) GetProviderMessageIdOk() (*string, bool)`

GetProviderMessageIdOk returns a tuple with the ProviderMessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProviderMessageId

`func (o *EmailLogResponse) SetProviderMessageId(v string)`

SetProviderMessageId sets ProviderMessageId field to given value.

### HasProviderMessageId

`func (o *EmailLogResponse) HasProviderMessageId() bool`

HasProviderMessageId returns a boolean if a field has been set.

### GetError

`func (o *EmailLogResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *EmailLogResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *EmailLogResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *EmailLogResponse) HasError() bool`

HasError returns a boolean if a field has been set.

### GetTemplateId

`func (o *EmailLogResponse) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *EmailLogResponse) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *EmailLogResponse) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *EmailLogResponse) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *EmailLogResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *EmailLogResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *EmailLogResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *EmailLogResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetSentAt

`func (o *EmailLogResponse) GetSentAt() time.Time`

GetSentAt returns the SentAt field if non-nil, zero value otherwise.

### GetSentAtOk

`func (o *EmailLogResponse) GetSentAtOk() (*time.Time, bool)`

GetSentAtOk returns a tuple with the SentAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSentAt

`func (o *EmailLogResponse) SetSentAt(v time.Time)`

SetSentAt sets SentAt field to given value.

### HasSentAt

`func (o *EmailLogResponse) HasSentAt() bool`

HasSentAt returns a boolean if a field has been set.

### GetOpenedAt

`func (o *EmailLogResponse) GetOpenedAt() time.Time`

GetOpenedAt returns the OpenedAt field if non-nil, zero value otherwise.

### GetOpenedAtOk

`func (o *EmailLogResponse) GetOpenedAtOk() (*time.Time, bool)`

GetOpenedAtOk returns a tuple with the OpenedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenedAt

`func (o *EmailLogResponse) SetOpenedAt(v time.Time)`

SetOpenedAt sets OpenedAt field to given value.

### HasOpenedAt

`func (o *EmailLogResponse) HasOpenedAt() bool`

HasOpenedAt returns a boolean if a field has been set.

### GetOpenCount

`func (o *EmailLogResponse) GetOpenCount() int32`

GetOpenCount returns the OpenCount field if non-nil, zero value otherwise.

### GetOpenCountOk

`func (o *EmailLogResponse) GetOpenCountOk() (*int32, bool)`

GetOpenCountOk returns a tuple with the OpenCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpenCount

`func (o *EmailLogResponse) SetOpenCount(v int32)`

SetOpenCount sets OpenCount field to given value.

### HasOpenCount

`func (o *EmailLogResponse) HasOpenCount() bool`

HasOpenCount returns a boolean if a field has been set.

### GetClickCount

`func (o *EmailLogResponse) GetClickCount() int32`

GetClickCount returns the ClickCount field if non-nil, zero value otherwise.

### GetClickCountOk

`func (o *EmailLogResponse) GetClickCountOk() (*int32, bool)`

GetClickCountOk returns a tuple with the ClickCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClickCount

`func (o *EmailLogResponse) SetClickCount(v int32)`

SetClickCount sets ClickCount field to given value.

### HasClickCount

`func (o *EmailLogResponse) HasClickCount() bool`

HasClickCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


