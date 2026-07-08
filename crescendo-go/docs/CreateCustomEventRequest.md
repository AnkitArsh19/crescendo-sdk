# CreateCustomEventRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**JsonSchema** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewCreateCustomEventRequest

`func NewCreateCustomEventRequest() *CreateCustomEventRequest`

NewCreateCustomEventRequest instantiates a new CreateCustomEventRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateCustomEventRequestWithDefaults

`func NewCreateCustomEventRequestWithDefaults() *CreateCustomEventRequest`

NewCreateCustomEventRequestWithDefaults instantiates a new CreateCustomEventRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateCustomEventRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateCustomEventRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateCustomEventRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateCustomEventRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetJsonSchema

`func (o *CreateCustomEventRequest) GetJsonSchema() map[string]interface{}`

GetJsonSchema returns the JsonSchema field if non-nil, zero value otherwise.

### GetJsonSchemaOk

`func (o *CreateCustomEventRequest) GetJsonSchemaOk() (*map[string]interface{}, bool)`

GetJsonSchemaOk returns a tuple with the JsonSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonSchema

`func (o *CreateCustomEventRequest) SetJsonSchema(v map[string]interface{})`

SetJsonSchema sets JsonSchema field to given value.

### HasJsonSchema

`func (o *CreateCustomEventRequest) HasJsonSchema() bool`

HasJsonSchema returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


