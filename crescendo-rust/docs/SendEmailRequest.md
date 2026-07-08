# SendEmailRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** |  | 
**to** | **String** |  | 
**subject** | **String** |  | 
**html_body** | Option<**String**> |  | [optional]
**text_body** | Option<**String**> |  | [optional]
**template_id** | Option<**uuid::Uuid**> |  | [optional]
**template_data** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**email_type** | **EmailType** |  (enum: TRANSACTIONAL, MARKETING) | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


