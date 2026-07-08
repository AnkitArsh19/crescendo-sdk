# CreateTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Subject** | **string** |  | 
**HtmlBody** | **string** |  | 
**TextBody** | Pointer to **string** |  | [optional] 
**Variables** | Pointer to [**[]TemplateVariable**](TemplateVariable.md) |  | [optional] 

## Methods

### NewCreateTemplateRequest

`func NewCreateTemplateRequest(name string, subject string, htmlBody string, ) *CreateTemplateRequest`

NewCreateTemplateRequest instantiates a new CreateTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTemplateRequestWithDefaults

`func NewCreateTemplateRequestWithDefaults() *CreateTemplateRequest`

NewCreateTemplateRequestWithDefaults instantiates a new CreateTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateTemplateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateTemplateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateTemplateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetSubject

`func (o *CreateTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *CreateTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *CreateTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.


### GetHtmlBody

`func (o *CreateTemplateRequest) GetHtmlBody() string`

GetHtmlBody returns the HtmlBody field if non-nil, zero value otherwise.

### GetHtmlBodyOk

`func (o *CreateTemplateRequest) GetHtmlBodyOk() (*string, bool)`

GetHtmlBodyOk returns a tuple with the HtmlBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtmlBody

`func (o *CreateTemplateRequest) SetHtmlBody(v string)`

SetHtmlBody sets HtmlBody field to given value.


### GetTextBody

`func (o *CreateTemplateRequest) GetTextBody() string`

GetTextBody returns the TextBody field if non-nil, zero value otherwise.

### GetTextBodyOk

`func (o *CreateTemplateRequest) GetTextBodyOk() (*string, bool)`

GetTextBodyOk returns a tuple with the TextBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextBody

`func (o *CreateTemplateRequest) SetTextBody(v string)`

SetTextBody sets TextBody field to given value.

### HasTextBody

`func (o *CreateTemplateRequest) HasTextBody() bool`

HasTextBody returns a boolean if a field has been set.

### GetVariables

`func (o *CreateTemplateRequest) GetVariables() []TemplateVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *CreateTemplateRequest) GetVariablesOk() (*[]TemplateVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *CreateTemplateRequest) SetVariables(v []TemplateVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *CreateTemplateRequest) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


