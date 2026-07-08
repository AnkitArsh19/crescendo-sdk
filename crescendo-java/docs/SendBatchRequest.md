

# SendBatchRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**from** | **String** |  |  |
|**subject** | **String** |  |  |
|**htmlBody** | **String** |  |  [optional] |
|**textBody** | **String** |  |  [optional] |
|**templateId** | **UUID** |  |  [optional] |
|**templateData** | **Map&lt;String, Object&gt;** |  |  [optional] |
|**emailType** | [**EmailTypeEnum**](#EmailTypeEnum) |  |  [optional] |
|**to** | **List&lt;String&gt;** |  |  |



## Enum: EmailTypeEnum

| Name | Value |
|---- | -----|
| TRANSACTIONAL | &quot;TRANSACTIONAL&quot; |
| MARKETING | &quot;MARKETING&quot; |



