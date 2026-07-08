# UpdateTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**HtmlBody** | Pointer to **string** |  | [optional] 
**TextBody** | Pointer to **string** |  | [optional] 
**Variables** | Pointer to [**[]TemplateVariable**](TemplateVariable.md) |  | [optional] 

## Methods

### NewUpdateTemplateRequest

`func NewUpdateTemplateRequest() *UpdateTemplateRequest`

NewUpdateTemplateRequest instantiates a new UpdateTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateTemplateRequestWithDefaults

`func NewUpdateTemplateRequestWithDefaults() *UpdateTemplateRequest`

NewUpdateTemplateRequestWithDefaults instantiates a new UpdateTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateTemplateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateTemplateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateTemplateRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateTemplateRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSubject

`func (o *UpdateTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *UpdateTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *UpdateTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *UpdateTemplateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetHtmlBody

`func (o *UpdateTemplateRequest) GetHtmlBody() string`

GetHtmlBody returns the HtmlBody field if non-nil, zero value otherwise.

### GetHtmlBodyOk

`func (o *UpdateTemplateRequest) GetHtmlBodyOk() (*string, bool)`

GetHtmlBodyOk returns a tuple with the HtmlBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtmlBody

`func (o *UpdateTemplateRequest) SetHtmlBody(v string)`

SetHtmlBody sets HtmlBody field to given value.

### HasHtmlBody

`func (o *UpdateTemplateRequest) HasHtmlBody() bool`

HasHtmlBody returns a boolean if a field has been set.

### GetTextBody

`func (o *UpdateTemplateRequest) GetTextBody() string`

GetTextBody returns the TextBody field if non-nil, zero value otherwise.

### GetTextBodyOk

`func (o *UpdateTemplateRequest) GetTextBodyOk() (*string, bool)`

GetTextBodyOk returns a tuple with the TextBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextBody

`func (o *UpdateTemplateRequest) SetTextBody(v string)`

SetTextBody sets TextBody field to given value.

### HasTextBody

`func (o *UpdateTemplateRequest) HasTextBody() bool`

HasTextBody returns a boolean if a field has been set.

### GetVariables

`func (o *UpdateTemplateRequest) GetVariables() []TemplateVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *UpdateTemplateRequest) GetVariablesOk() (*[]TemplateVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *UpdateTemplateRequest) SetVariables(v []TemplateVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *UpdateTemplateRequest) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


