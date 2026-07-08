# SendBatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** |  | 
**subject** | **String** |  | 
**html_body** | Option<**String**> |  | [optional]
**text_body** | Option<**String**> |  | [optional]
**template_id** | Option<**uuid::Uuid**> |  | [optional]
**template_data** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**email_type** | Option<**EmailType**> |  (enum: TRANSACTIONAL, MARKETING) | [optional]
**to** | **Vec<String>** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


