

# DomainResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**domainName** | **String** |  |  [optional] |
|**status** | **String** |  |  [optional] |
|**requiredDnsRecords** | [**List&lt;DnsRecord&gt;**](DnsRecord.md) |  |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] |
|**verifiedAt** | **OffsetDateTime** |  |  [optional] |
|**spfVerified** | **Boolean** |  |  [optional] |
|**dkimVerified** | **Boolean** |  |  [optional] |
|**dmarcVerified** | **Boolean** |  |  [optional] |
|**dailySendCap** | **Integer** |  |  [optional] |
|**warmingStatus** | **String** |  |  [optional] |
|**sendReadiness** | **String** |  |  [optional] |
|**allowedEmailType** | **String** |  |  [optional] |
|**credentialSource** | **String** |  |  [optional] |
|**emailProviderConnectionId** | **UUID** |  |  [optional] |
|**healthStatus** | **String** |  |  [optional] |
|**warnings** | **List&lt;String&gt;** |  |  [optional] |
|**trackingEnabled** | **Boolean** |  |  [optional] |
|**unsubscribeLogoUrl** | **String** |  |  [optional] |
|**unsubscribePrimaryColor** | **String** |  |  [optional] |
|**unsubscribeCopy** | **String** |  |  [optional] |
|**bimiLogoUrl** | **String** |  |  [optional] |
|**bimiVmcUrl** | **String** |  |  [optional] |



