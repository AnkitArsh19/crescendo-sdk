# SendTemplatedRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** |  | 
**To** | **string** |  | 
**TemplateId** | **string** |  | 
**TemplateData** | Pointer to **map[string]interface{}** |  | [optional] 
**EmailType** | Pointer to **string** |  | [optional] 

## Methods

### NewSendTemplatedRequest

`func NewSendTemplatedRequest(from string, to string, templateId string, ) *SendTemplatedRequest`

NewSendTemplatedRequest instantiates a new SendTemplatedRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendTemplatedRequestWithDefaults

`func NewSendTemplatedRequestWithDefaults() *SendTemplatedRequest`

NewSendTemplatedRequestWithDefaults instantiates a new SendTemplatedRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *SendTemplatedRequest) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SendTemplatedRequest) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SendTemplatedRequest) SetFrom(v string)`

SetFrom sets From field to given value.


### GetTo

`func (o *SendTemplatedRequest) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SendTemplatedRequest) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SendTemplatedRequest) SetTo(v string)`

SetTo sets To field to given value.


### GetTemplateId

`func (o *SendTemplatedRequest) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *SendTemplatedRequest) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *SendTemplatedRequest) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.


### GetTemplateData

`func (o *SendTemplatedRequest) GetTemplateData() map[string]interface{}`

GetTemplateData returns the TemplateData field if non-nil, zero value otherwise.

### GetTemplateDataOk

`func (o *SendTemplatedRequest) GetTemplateDataOk() (*map[string]interface{}, bool)`

GetTemplateDataOk returns a tuple with the TemplateData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateData

`func (o *SendTemplatedRequest) SetTemplateData(v map[string]interface{})`

SetTemplateData sets TemplateData field to given value.

### HasTemplateData

`func (o *SendTemplatedRequest) HasTemplateData() bool`

HasTemplateData returns a boolean if a field has been set.

### GetEmailType

`func (o *SendTemplatedRequest) GetEmailType() string`

GetEmailType returns the EmailType field if non-nil, zero value otherwise.

### GetEmailTypeOk

`func (o *SendTemplatedRequest) GetEmailTypeOk() (*string, bool)`

GetEmailTypeOk returns a tuple with the EmailType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailType

`func (o *SendTemplatedRequest) SetEmailType(v string)`

SetEmailType sets EmailType field to given value.

### HasEmailType

`func (o *SendTemplatedRequest) HasEmailType() bool`

HasEmailType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


