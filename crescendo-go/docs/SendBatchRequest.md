# SendBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** |  | 
**Subject** | **string** |  | 
**HtmlBody** | Pointer to **string** |  | [optional] 
**TextBody** | Pointer to **string** |  | [optional] 
**TemplateId** | Pointer to **string** |  | [optional] 
**TemplateData** | Pointer to **map[string]interface{}** |  | [optional] 
**EmailType** | Pointer to **string** |  | [optional] 
**To** | **[]string** |  | 

## Methods

### NewSendBatchRequest

`func NewSendBatchRequest(from string, subject string, to []string, ) *SendBatchRequest`

NewSendBatchRequest instantiates a new SendBatchRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendBatchRequestWithDefaults

`func NewSendBatchRequestWithDefaults() *SendBatchRequest`

NewSendBatchRequestWithDefaults instantiates a new SendBatchRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *SendBatchRequest) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SendBatchRequest) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SendBatchRequest) SetFrom(v string)`

SetFrom sets From field to given value.


### GetSubject

`func (o *SendBatchRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *SendBatchRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *SendBatchRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.


### GetHtmlBody

`func (o *SendBatchRequest) GetHtmlBody() string`

GetHtmlBody returns the HtmlBody field if non-nil, zero value otherwise.

### GetHtmlBodyOk

`func (o *SendBatchRequest) GetHtmlBodyOk() (*string, bool)`

GetHtmlBodyOk returns a tuple with the HtmlBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtmlBody

`func (o *SendBatchRequest) SetHtmlBody(v string)`

SetHtmlBody sets HtmlBody field to given value.

### HasHtmlBody

`func (o *SendBatchRequest) HasHtmlBody() bool`

HasHtmlBody returns a boolean if a field has been set.

### GetTextBody

`func (o *SendBatchRequest) GetTextBody() string`

GetTextBody returns the TextBody field if non-nil, zero value otherwise.

### GetTextBodyOk

`func (o *SendBatchRequest) GetTextBodyOk() (*string, bool)`

GetTextBodyOk returns a tuple with the TextBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextBody

`func (o *SendBatchRequest) SetTextBody(v string)`

SetTextBody sets TextBody field to given value.

### HasTextBody

`func (o *SendBatchRequest) HasTextBody() bool`

HasTextBody returns a boolean if a field has been set.

### GetTemplateId

`func (o *SendBatchRequest) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *SendBatchRequest) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *SendBatchRequest) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *SendBatchRequest) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetTemplateData

`func (o *SendBatchRequest) GetTemplateData() map[string]interface{}`

GetTemplateData returns the TemplateData field if non-nil, zero value otherwise.

### GetTemplateDataOk

`func (o *SendBatchRequest) GetTemplateDataOk() (*map[string]interface{}, bool)`

GetTemplateDataOk returns a tuple with the TemplateData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateData

`func (o *SendBatchRequest) SetTemplateData(v map[string]interface{})`

SetTemplateData sets TemplateData field to given value.

### HasTemplateData

`func (o *SendBatchRequest) HasTemplateData() bool`

HasTemplateData returns a boolean if a field has been set.

### GetEmailType

`func (o *SendBatchRequest) GetEmailType() string`

GetEmailType returns the EmailType field if non-nil, zero value otherwise.

### GetEmailTypeOk

`func (o *SendBatchRequest) GetEmailTypeOk() (*string, bool)`

GetEmailTypeOk returns a tuple with the EmailType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailType

`func (o *SendBatchRequest) SetEmailType(v string)`

SetEmailType sets EmailType field to given value.

### HasEmailType

`func (o *SendBatchRequest) HasEmailType() bool`

HasEmailType returns a boolean if a field has been set.

### GetTo

`func (o *SendBatchRequest) GetTo() []string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SendBatchRequest) GetToOk() (*[]string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SendBatchRequest) SetTo(v []string)`

SetTo sets To field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


