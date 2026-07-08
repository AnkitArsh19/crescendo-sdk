# MetricsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Summary** | Pointer to [**MetricsSummary**](MetricsSummary.md) |  | [optional] 
**Daily** | Pointer to [**[]DailyCount**](DailyCount.md) |  | [optional] 

## Methods

### NewMetricsResponse

`func NewMetricsResponse() *MetricsResponse`

NewMetricsResponse instantiates a new MetricsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricsResponseWithDefaults

`func NewMetricsResponseWithDefaults() *MetricsResponse`

NewMetricsResponseWithDefaults instantiates a new MetricsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSummary

`func (o *MetricsResponse) GetSummary() MetricsSummary`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *MetricsResponse) GetSummaryOk() (*MetricsSummary, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *MetricsResponse) SetSummary(v MetricsSummary)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *MetricsResponse) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetDaily

`func (o *MetricsResponse) GetDaily() []DailyCount`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *MetricsResponse) GetDailyOk() (*[]DailyCount, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *MetricsResponse) SetDaily(v []DailyCount)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *MetricsResponse) HasDaily() bool`

HasDaily returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


