# SendBatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Emails** | Pointer to [**[]SendEmailResponse**](SendEmailResponse.md) |  | [optional] 

## Methods

### NewSendBatchResponse

`func NewSendBatchResponse() *SendBatchResponse`

NewSendBatchResponse instantiates a new SendBatchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendBatchResponseWithDefaults

`func NewSendBatchResponseWithDefaults() *SendBatchResponse`

NewSendBatchResponseWithDefaults instantiates a new SendBatchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmails

`func (o *SendBatchResponse) GetEmails() []SendEmailResponse`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *SendBatchResponse) GetEmailsOk() (*[]SendEmailResponse, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *SendBatchResponse) SetEmails(v []SendEmailResponse)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *SendBatchResponse) HasEmails() bool`

HasEmails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


