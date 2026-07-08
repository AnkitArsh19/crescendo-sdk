

# AddDomainRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**domainName** | **String** |  |  |
|**allowedEmailType** | [**AllowedEmailTypeEnum**](#AllowedEmailTypeEnum) |  |  [optional] |
|**credentialSource** | [**CredentialSourceEnum**](#CredentialSourceEnum) |  |  [optional] |
|**emailProviderConnectionId** | **UUID** |  |  [optional] |



## Enum: AllowedEmailTypeEnum

| Name | Value |
|---- | -----|
| TRANSACTIONAL_ONLY | &quot;TRANSACTIONAL_ONLY&quot; |
| MARKETING_AND_BULK | &quot;MARKETING_AND_BULK&quot; |
| BOTH | &quot;BOTH&quot; |



## Enum: CredentialSourceEnum

| Name | Value |
|---- | -----|
| PERSONAL | &quot;PERSONAL&quot; |
| PLATFORM | &quot;PLATFORM&quot; |



