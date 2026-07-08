# DomainResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**DomainName** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**RequiredDnsRecords** | Pointer to [**[]DnsRecord**](DnsRecord.md) |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**VerifiedAt** | Pointer to **time.Time** |  | [optional] 
**SpfVerified** | Pointer to **bool** |  | [optional] 
**DkimVerified** | Pointer to **bool** |  | [optional] 
**DmarcVerified** | Pointer to **bool** |  | [optional] 
**DailySendCap** | Pointer to **int32** |  | [optional] 
**WarmingStatus** | Pointer to **string** |  | [optional] 
**SendReadiness** | Pointer to **string** |  | [optional] 
**AllowedEmailType** | Pointer to **string** |  | [optional] 
**CredentialSource** | Pointer to **string** |  | [optional] 
**EmailProviderConnectionId** | Pointer to **string** |  | [optional] 
**HealthStatus** | Pointer to **string** |  | [optional] 
**Warnings** | Pointer to **[]string** |  | [optional] 
**TrackingEnabled** | Pointer to **bool** |  | [optional] 
**UnsubscribeLogoUrl** | Pointer to **string** |  | [optional] 
**UnsubscribePrimaryColor** | Pointer to **string** |  | [optional] 
**UnsubscribeCopy** | Pointer to **string** |  | [optional] 
**BimiLogoUrl** | Pointer to **string** |  | [optional] 
**BimiVmcUrl** | Pointer to **string** |  | [optional] 

## Methods

### NewDomainResponse

`func NewDomainResponse() *DomainResponse`

NewDomainResponse instantiates a new DomainResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainResponseWithDefaults

`func NewDomainResponseWithDefaults() *DomainResponse`

NewDomainResponseWithDefaults instantiates a new DomainResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DomainResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DomainResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DomainResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DomainResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDomainName

`func (o *DomainResponse) GetDomainName() string`

GetDomainName returns the DomainName field if non-nil, zero value otherwise.

### GetDomainNameOk

`func (o *DomainResponse) GetDomainNameOk() (*string, bool)`

GetDomainNameOk returns a tuple with the DomainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainName

`func (o *DomainResponse) SetDomainName(v string)`

SetDomainName sets DomainName field to given value.

### HasDomainName

`func (o *DomainResponse) HasDomainName() bool`

HasDomainName returns a boolean if a field has been set.

### GetStatus

`func (o *DomainResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DomainResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DomainResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DomainResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRequiredDnsRecords

`func (o *DomainResponse) GetRequiredDnsRecords() []DnsRecord`

GetRequiredDnsRecords returns the RequiredDnsRecords field if non-nil, zero value otherwise.

### GetRequiredDnsRecordsOk

`func (o *DomainResponse) GetRequiredDnsRecordsOk() (*[]DnsRecord, bool)`

GetRequiredDnsRecordsOk returns a tuple with the RequiredDnsRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredDnsRecords

`func (o *DomainResponse) SetRequiredDnsRecords(v []DnsRecord)`

SetRequiredDnsRecords sets RequiredDnsRecords field to given value.

### HasRequiredDnsRecords

`func (o *DomainResponse) HasRequiredDnsRecords() bool`

HasRequiredDnsRecords returns a boolean if a field has been set.

### GetCreatedAt

`func (o *DomainResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DomainResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DomainResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DomainResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetVerifiedAt

`func (o *DomainResponse) GetVerifiedAt() time.Time`

GetVerifiedAt returns the VerifiedAt field if non-nil, zero value otherwise.

### GetVerifiedAtOk

`func (o *DomainResponse) GetVerifiedAtOk() (*time.Time, bool)`

GetVerifiedAtOk returns a tuple with the VerifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifiedAt

`func (o *DomainResponse) SetVerifiedAt(v time.Time)`

SetVerifiedAt sets VerifiedAt field to given value.

### HasVerifiedAt

`func (o *DomainResponse) HasVerifiedAt() bool`

HasVerifiedAt returns a boolean if a field has been set.

### GetSpfVerified

`func (o *DomainResponse) GetSpfVerified() bool`

GetSpfVerified returns the SpfVerified field if non-nil, zero value otherwise.

### GetSpfVerifiedOk

`func (o *DomainResponse) GetSpfVerifiedOk() (*bool, bool)`

GetSpfVerifiedOk returns a tuple with the SpfVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpfVerified

`func (o *DomainResponse) SetSpfVerified(v bool)`

SetSpfVerified sets SpfVerified field to given value.

### HasSpfVerified

`func (o *DomainResponse) HasSpfVerified() bool`

HasSpfVerified returns a boolean if a field has been set.

### GetDkimVerified

`func (o *DomainResponse) GetDkimVerified() bool`

GetDkimVerified returns the DkimVerified field if non-nil, zero value otherwise.

### GetDkimVerifiedOk

`func (o *DomainResponse) GetDkimVerifiedOk() (*bool, bool)`

GetDkimVerifiedOk returns a tuple with the DkimVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimVerified

`func (o *DomainResponse) SetDkimVerified(v bool)`

SetDkimVerified sets DkimVerified field to given value.

### HasDkimVerified

`func (o *DomainResponse) HasDkimVerified() bool`

HasDkimVerified returns a boolean if a field has been set.

### GetDmarcVerified

`func (o *DomainResponse) GetDmarcVerified() bool`

GetDmarcVerified returns the DmarcVerified field if non-nil, zero value otherwise.

### GetDmarcVerifiedOk

`func (o *DomainResponse) GetDmarcVerifiedOk() (*bool, bool)`

GetDmarcVerifiedOk returns a tuple with the DmarcVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDmarcVerified

`func (o *DomainResponse) SetDmarcVerified(v bool)`

SetDmarcVerified sets DmarcVerified field to given value.

### HasDmarcVerified

`func (o *DomainResponse) HasDmarcVerified() bool`

HasDmarcVerified returns a boolean if a field has been set.

### GetDailySendCap

`func (o *DomainResponse) GetDailySendCap() int32`

GetDailySendCap returns the DailySendCap field if non-nil, zero value otherwise.

### GetDailySendCapOk

`func (o *DomainResponse) GetDailySendCapOk() (*int32, bool)`

GetDailySendCapOk returns a tuple with the DailySendCap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailySendCap

`func (o *DomainResponse) SetDailySendCap(v int32)`

SetDailySendCap sets DailySendCap field to given value.

### HasDailySendCap

`func (o *DomainResponse) HasDailySendCap() bool`

HasDailySendCap returns a boolean if a field has been set.

### GetWarmingStatus

`func (o *DomainResponse) GetWarmingStatus() string`

GetWarmingStatus returns the WarmingStatus field if non-nil, zero value otherwise.

### GetWarmingStatusOk

`func (o *DomainResponse) GetWarmingStatusOk() (*string, bool)`

GetWarmingStatusOk returns a tuple with the WarmingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarmingStatus

`func (o *DomainResponse) SetWarmingStatus(v string)`

SetWarmingStatus sets WarmingStatus field to given value.

### HasWarmingStatus

`func (o *DomainResponse) HasWarmingStatus() bool`

HasWarmingStatus returns a boolean if a field has been set.

### GetSendReadiness

`func (o *DomainResponse) GetSendReadiness() string`

GetSendReadiness returns the SendReadiness field if non-nil, zero value otherwise.

### GetSendReadinessOk

`func (o *DomainResponse) GetSendReadinessOk() (*string, bool)`

GetSendReadinessOk returns a tuple with the SendReadiness field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendReadiness

`func (o *DomainResponse) SetSendReadiness(v string)`

SetSendReadiness sets SendReadiness field to given value.

### HasSendReadiness

`func (o *DomainResponse) HasSendReadiness() bool`

HasSendReadiness returns a boolean if a field has been set.

### GetAllowedEmailType

`func (o *DomainResponse) GetAllowedEmailType() string`

GetAllowedEmailType returns the AllowedEmailType field if non-nil, zero value otherwise.

### GetAllowedEmailTypeOk

`func (o *DomainResponse) GetAllowedEmailTypeOk() (*string, bool)`

GetAllowedEmailTypeOk returns a tuple with the AllowedEmailType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedEmailType

`func (o *DomainResponse) SetAllowedEmailType(v string)`

SetAllowedEmailType sets AllowedEmailType field to given value.

### HasAllowedEmailType

`func (o *DomainResponse) HasAllowedEmailType() bool`

HasAllowedEmailType returns a boolean if a field has been set.

### GetCredentialSource

`func (o *DomainResponse) GetCredentialSource() string`

GetCredentialSource returns the CredentialSource field if non-nil, zero value otherwise.

### GetCredentialSourceOk

`func (o *DomainResponse) GetCredentialSourceOk() (*string, bool)`

GetCredentialSourceOk returns a tuple with the CredentialSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialSource

`func (o *DomainResponse) SetCredentialSource(v string)`

SetCredentialSource sets CredentialSource field to given value.

### HasCredentialSource

`func (o *DomainResponse) HasCredentialSource() bool`

HasCredentialSource returns a boolean if a field has been set.

### GetEmailProviderConnectionId

`func (o *DomainResponse) GetEmailProviderConnectionId() string`

GetEmailProviderConnectionId returns the EmailProviderConnectionId field if non-nil, zero value otherwise.

### GetEmailProviderConnectionIdOk

`func (o *DomainResponse) GetEmailProviderConnectionIdOk() (*string, bool)`

GetEmailProviderConnectionIdOk returns a tuple with the EmailProviderConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailProviderConnectionId

`func (o *DomainResponse) SetEmailProviderConnectionId(v string)`

SetEmailProviderConnectionId sets EmailProviderConnectionId field to given value.

### HasEmailProviderConnectionId

`func (o *DomainResponse) HasEmailProviderConnectionId() bool`

HasEmailProviderConnectionId returns a boolean if a field has been set.

### GetHealthStatus

`func (o *DomainResponse) GetHealthStatus() string`

GetHealthStatus returns the HealthStatus field if non-nil, zero value otherwise.

### GetHealthStatusOk

`func (o *DomainResponse) GetHealthStatusOk() (*string, bool)`

GetHealthStatusOk returns a tuple with the HealthStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthStatus

`func (o *DomainResponse) SetHealthStatus(v string)`

SetHealthStatus sets HealthStatus field to given value.

### HasHealthStatus

`func (o *DomainResponse) HasHealthStatus() bool`

HasHealthStatus returns a boolean if a field has been set.

### GetWarnings

`func (o *DomainResponse) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DomainResponse) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DomainResponse) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DomainResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetTrackingEnabled

`func (o *DomainResponse) GetTrackingEnabled() bool`

GetTrackingEnabled returns the TrackingEnabled field if non-nil, zero value otherwise.

### GetTrackingEnabledOk

`func (o *DomainResponse) GetTrackingEnabledOk() (*bool, bool)`

GetTrackingEnabledOk returns a tuple with the TrackingEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingEnabled

`func (o *DomainResponse) SetTrackingEnabled(v bool)`

SetTrackingEnabled sets TrackingEnabled field to given value.

### HasTrackingEnabled

`func (o *DomainResponse) HasTrackingEnabled() bool`

HasTrackingEnabled returns a boolean if a field has been set.

### GetUnsubscribeLogoUrl

`func (o *DomainResponse) GetUnsubscribeLogoUrl() string`

GetUnsubscribeLogoUrl returns the UnsubscribeLogoUrl field if non-nil, zero value otherwise.

### GetUnsubscribeLogoUrlOk

`func (o *DomainResponse) GetUnsubscribeLogoUrlOk() (*string, bool)`

GetUnsubscribeLogoUrlOk returns a tuple with the UnsubscribeLogoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsubscribeLogoUrl

`func (o *DomainResponse) SetUnsubscribeLogoUrl(v string)`

SetUnsubscribeLogoUrl sets UnsubscribeLogoUrl field to given value.

### HasUnsubscribeLogoUrl

`func (o *DomainResponse) HasUnsubscribeLogoUrl() bool`

HasUnsubscribeLogoUrl returns a boolean if a field has been set.

### GetUnsubscribePrimaryColor

`func (o *DomainResponse) GetUnsubscribePrimaryColor() string`

GetUnsubscribePrimaryColor returns the UnsubscribePrimaryColor field if non-nil, zero value otherwise.

### GetUnsubscribePrimaryColorOk

`func (o *DomainResponse) GetUnsubscribePrimaryColorOk() (*string, bool)`

GetUnsubscribePrimaryColorOk returns a tuple with the UnsubscribePrimaryColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsubscribePrimaryColor

`func (o *DomainResponse) SetUnsubscribePrimaryColor(v string)`

SetUnsubscribePrimaryColor sets UnsubscribePrimaryColor field to given value.

### HasUnsubscribePrimaryColor

`func (o *DomainResponse) HasUnsubscribePrimaryColor() bool`

HasUnsubscribePrimaryColor returns a boolean if a field has been set.

### GetUnsubscribeCopy

`func (o *DomainResponse) GetUnsubscribeCopy() string`

GetUnsubscribeCopy returns the UnsubscribeCopy field if non-nil, zero value otherwise.

### GetUnsubscribeCopyOk

`func (o *DomainResponse) GetUnsubscribeCopyOk() (*string, bool)`

GetUnsubscribeCopyOk returns a tuple with the UnsubscribeCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsubscribeCopy

`func (o *DomainResponse) SetUnsubscribeCopy(v string)`

SetUnsubscribeCopy sets UnsubscribeCopy field to given value.

### HasUnsubscribeCopy

`func (o *DomainResponse) HasUnsubscribeCopy() bool`

HasUnsubscribeCopy returns a boolean if a field has been set.

### GetBimiLogoUrl

`func (o *DomainResponse) GetBimiLogoUrl() string`

GetBimiLogoUrl returns the BimiLogoUrl field if non-nil, zero value otherwise.

### GetBimiLogoUrlOk

`func (o *DomainResponse) GetBimiLogoUrlOk() (*string, bool)`

GetBimiLogoUrlOk returns a tuple with the BimiLogoUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBimiLogoUrl

`func (o *DomainResponse) SetBimiLogoUrl(v string)`

SetBimiLogoUrl sets BimiLogoUrl field to given value.

### HasBimiLogoUrl

`func (o *DomainResponse) HasBimiLogoUrl() bool`

HasBimiLogoUrl returns a boolean if a field has been set.

### GetBimiVmcUrl

`func (o *DomainResponse) GetBimiVmcUrl() string`

GetBimiVmcUrl returns the BimiVmcUrl field if non-nil, zero value otherwise.

### GetBimiVmcUrlOk

`func (o *DomainResponse) GetBimiVmcUrlOk() (*string, bool)`

GetBimiVmcUrlOk returns a tuple with the BimiVmcUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBimiVmcUrl

`func (o *DomainResponse) SetBimiVmcUrl(v string)`

SetBimiVmcUrl sets BimiVmcUrl field to given value.

### HasBimiVmcUrl

`func (o *DomainResponse) HasBimiVmcUrl() bool`

HasBimiVmcUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


