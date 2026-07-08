# FireCustomEventRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelationKey** | Pointer to **string** |  | [optional] 
**Payload** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewFireCustomEventRequest

`func NewFireCustomEventRequest() *FireCustomEventRequest`

NewFireCustomEventRequest instantiates a new FireCustomEventRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFireCustomEventRequestWithDefaults

`func NewFireCustomEventRequestWithDefaults() *FireCustomEventRequest`

NewFireCustomEventRequestWithDefaults instantiates a new FireCustomEventRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelationKey

`func (o *FireCustomEventRequest) GetCorrelationKey() string`

GetCorrelationKey returns the CorrelationKey field if non-nil, zero value otherwise.

### GetCorrelationKeyOk

`func (o *FireCustomEventRequest) GetCorrelationKeyOk() (*string, bool)`

GetCorrelationKeyOk returns a tuple with the CorrelationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationKey

`func (o *FireCustomEventRequest) SetCorrelationKey(v string)`

SetCorrelationKey sets CorrelationKey field to given value.

### HasCorrelationKey

`func (o *FireCustomEventRequest) HasCorrelationKey() bool`

HasCorrelationKey returns a boolean if a field has been set.

### GetPayload

`func (o *FireCustomEventRequest) GetPayload() map[string]interface{}`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *FireCustomEventRequest) GetPayloadOk() (*map[string]interface{}, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *FireCustomEventRequest) SetPayload(v map[string]interface{})`

SetPayload sets Payload field to given value.

### HasPayload

`func (o *FireCustomEventRequest) HasPayload() bool`

HasPayload returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


