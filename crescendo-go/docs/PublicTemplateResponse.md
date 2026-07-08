# PublicTemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**HtmlBody** | Pointer to **string** |  | [optional] 
**TextBody** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Variables** | Pointer to [**[]TemplateVariable**](TemplateVariable.md) |  | [optional] 
**HasPublishedSnapshot** | Pointer to **bool** |  | [optional] 
**PublishedAt** | Pointer to **time.Time** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPublicTemplateResponse

`func NewPublicTemplateResponse() *PublicTemplateResponse`

NewPublicTemplateResponse instantiates a new PublicTemplateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublicTemplateResponseWithDefaults

`func NewPublicTemplateResponseWithDefaults() *PublicTemplateResponse`

NewPublicTemplateResponseWithDefaults instantiates a new PublicTemplateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PublicTemplateResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PublicTemplateResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PublicTemplateResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PublicTemplateResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PublicTemplateResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PublicTemplateResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PublicTemplateResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PublicTemplateResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSubject

`func (o *PublicTemplateResponse) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *PublicTemplateResponse) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *PublicTemplateResponse) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *PublicTemplateResponse) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetHtmlBody

`func (o *PublicTemplateResponse) GetHtmlBody() string`

GetHtmlBody returns the HtmlBody field if non-nil, zero value otherwise.

### GetHtmlBodyOk

`func (o *PublicTemplateResponse) GetHtmlBodyOk() (*string, bool)`

GetHtmlBodyOk returns a tuple with the HtmlBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtmlBody

`func (o *PublicTemplateResponse) SetHtmlBody(v string)`

SetHtmlBody sets HtmlBody field to given value.

### HasHtmlBody

`func (o *PublicTemplateResponse) HasHtmlBody() bool`

HasHtmlBody returns a boolean if a field has been set.

### GetTextBody

`func (o *PublicTemplateResponse) GetTextBody() string`

GetTextBody returns the TextBody field if non-nil, zero value otherwise.

### GetTextBodyOk

`func (o *PublicTemplateResponse) GetTextBodyOk() (*string, bool)`

GetTextBodyOk returns a tuple with the TextBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextBody

`func (o *PublicTemplateResponse) SetTextBody(v string)`

SetTextBody sets TextBody field to given value.

### HasTextBody

`func (o *PublicTemplateResponse) HasTextBody() bool`

HasTextBody returns a boolean if a field has been set.

### GetStatus

`func (o *PublicTemplateResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PublicTemplateResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PublicTemplateResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PublicTemplateResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetVariables

`func (o *PublicTemplateResponse) GetVariables() []TemplateVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *PublicTemplateResponse) GetVariablesOk() (*[]TemplateVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *PublicTemplateResponse) SetVariables(v []TemplateVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *PublicTemplateResponse) HasVariables() bool`

HasVariables returns a boolean if a field has been set.

### GetHasPublishedSnapshot

`func (o *PublicTemplateResponse) GetHasPublishedSnapshot() bool`

GetHasPublishedSnapshot returns the HasPublishedSnapshot field if non-nil, zero value otherwise.

### GetHasPublishedSnapshotOk

`func (o *PublicTemplateResponse) GetHasPublishedSnapshotOk() (*bool, bool)`

GetHasPublishedSnapshotOk returns a tuple with the HasPublishedSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPublishedSnapshot

`func (o *PublicTemplateResponse) SetHasPublishedSnapshot(v bool)`

SetHasPublishedSnapshot sets HasPublishedSnapshot field to given value.

### HasHasPublishedSnapshot

`func (o *PublicTemplateResponse) HasHasPublishedSnapshot() bool`

HasHasPublishedSnapshot returns a boolean if a field has been set.

### GetPublishedAt

`func (o *PublicTemplateResponse) GetPublishedAt() time.Time`

GetPublishedAt returns the PublishedAt field if non-nil, zero value otherwise.

### GetPublishedAtOk

`func (o *PublicTemplateResponse) GetPublishedAtOk() (*time.Time, bool)`

GetPublishedAtOk returns a tuple with the PublishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedAt

`func (o *PublicTemplateResponse) SetPublishedAt(v time.Time)`

SetPublishedAt sets PublishedAt field to given value.

### HasPublishedAt

`func (o *PublicTemplateResponse) HasPublishedAt() bool`

HasPublishedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *PublicTemplateResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PublicTemplateResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PublicTemplateResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *PublicTemplateResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *PublicTemplateResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PublicTemplateResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PublicTemplateResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *PublicTemplateResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


