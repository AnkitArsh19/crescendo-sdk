

# SendEmailRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**from** | **String** |  |  |
|**to** | **String** |  |  |
|**subject** | **String** |  |  |
|**htmlBody** | **String** |  |  [optional] |
|**textBody** | **String** |  |  [optional] |
|**templateId** | **UUID** |  |  [optional] |
|**templateData** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**emailType** | [**EmailTypeEnum**](#EmailTypeEnum) |  |  |



## Enum: EmailTypeEnum

| Name | Value |
|---- | -----|
| TRANSACTIONAL | &quot;TRANSACTIONAL&quot; |
| MARKETING | &quot;MARKETING&quot; |



