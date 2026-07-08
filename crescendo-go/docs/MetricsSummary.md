# MetricsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int64** |  | [optional] 
**Pending** | Pointer to **int64** |  | [optional] 
**Sent** | Pointer to **int64** |  | [optional] 
**Delivered** | Pointer to **int64** |  | [optional] 
**Failed** | Pointer to **int64** |  | [optional] 
**Bounced** | Pointer to **int64** |  | [optional] 
**Suppressed** | Pointer to **int64** |  | [optional] 
**TotalOpens** | Pointer to **int64** |  | [optional] 
**TotalClicks** | Pointer to **int64** |  | [optional] 

## Methods

### NewMetricsSummary

`func NewMetricsSummary() *MetricsSummary`

NewMetricsSummary instantiates a new MetricsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricsSummaryWithDefaults

`func NewMetricsSummaryWithDefaults() *MetricsSummary`

NewMetricsSummaryWithDefaults instantiates a new MetricsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *MetricsSummary) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *MetricsSummary) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *MetricsSummary) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *MetricsSummary) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetPending

`func (o *MetricsSummary) GetPending() int64`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *MetricsSummary) GetPendingOk() (*int64, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *MetricsSummary) SetPending(v int64)`

SetPending sets Pending field to given value.

### HasPending

`func (o *MetricsSummary) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetSent

`func (o *MetricsSummary) GetSent() int64`

GetSent returns the Sent field if non-nil, zero value otherwise.

### GetSentOk

`func (o *MetricsSummary) GetSentOk() (*int64, bool)`

GetSentOk returns a tuple with the Sent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSent

`func (o *MetricsSummary) SetSent(v int64)`

SetSent sets Sent field to given value.

### HasSent

`func (o *MetricsSummary) HasSent() bool`

HasSent returns a boolean if a field has been set.

### GetDelivered

`func (o *MetricsSummary) GetDelivered() int64`

GetDelivered returns the Delivered field if non-nil, zero value otherwise.

### GetDeliveredOk

`func (o *MetricsSummary) GetDeliveredOk() (*int64, bool)`

GetDeliveredOk returns a tuple with the Delivered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivered

`func (o *MetricsSummary) SetDelivered(v int64)`

SetDelivered sets Delivered field to given value.

### HasDelivered

`func (o *MetricsSummary) HasDelivered() bool`

HasDelivered returns a boolean if a field has been set.

### GetFailed

`func (o *MetricsSummary) GetFailed() int64`

GetFailed returns the Failed field if non-nil, zero value otherwise.

### GetFailedOk

`func (o *MetricsSummary) GetFailedOk() (*int64, bool)`

GetFailedOk returns a tuple with the Failed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailed

`func (o *MetricsSummary) SetFailed(v int64)`

SetFailed sets Failed field to given value.

### HasFailed

`func (o *MetricsSummary) HasFailed() bool`

HasFailed returns a boolean if a field has been set.

### GetBounced

`func (o *MetricsSummary) GetBounced() int64`

GetBounced returns the Bounced field if non-nil, zero value otherwise.

### GetBouncedOk

`func (o *MetricsSummary) GetBouncedOk() (*int64, bool)`

GetBouncedOk returns a tuple with the Bounced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBounced

`func (o *MetricsSummary) SetBounced(v int64)`

SetBounced sets Bounced field to given value.

### HasBounced

`func (o *MetricsSummary) HasBounced() bool`

HasBounced returns a boolean if a field has been set.

### GetSuppressed

`func (o *MetricsSummary) GetSuppressed() int64`

GetSuppressed returns the Suppressed field if non-nil, zero value otherwise.

### GetSuppressedOk

`func (o *MetricsSummary) GetSuppressedOk() (*int64, bool)`

GetSuppressedOk returns a tuple with the Suppressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressed

`func (o *MetricsSummary) SetSuppressed(v int64)`

SetSuppressed sets Suppressed field to given value.

### HasSuppressed

`func (o *MetricsSummary) HasSuppressed() bool`

HasSuppressed returns a boolean if a field has been set.

### GetTotalOpens

`func (o *MetricsSummary) GetTotalOpens() int64`

GetTotalOpens returns the TotalOpens field if non-nil, zero value otherwise.

### GetTotalOpensOk

`func (o *MetricsSummary) GetTotalOpensOk() (*int64, bool)`

GetTotalOpensOk returns a tuple with the TotalOpens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalOpens

`func (o *MetricsSummary) SetTotalOpens(v int64)`

SetTotalOpens sets TotalOpens field to given value.

### HasTotalOpens

`func (o *MetricsSummary) HasTotalOpens() bool`

HasTotalOpens returns a boolean if a field has been set.

### GetTotalClicks

`func (o *MetricsSummary) GetTotalClicks() int64`

GetTotalClicks returns the TotalClicks field if non-nil, zero value otherwise.

### GetTotalClicksOk

`func (o *MetricsSummary) GetTotalClicksOk() (*int64, bool)`

GetTotalClicksOk returns a tuple with the TotalClicks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalClicks

`func (o *MetricsSummary) SetTotalClicks(v int64)`

SetTotalClicks sets TotalClicks field to given value.

### HasTotalClicks

`func (o *MetricsSummary) HasTotalClicks() bool`

HasTotalClicks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


