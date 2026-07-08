# EmailLogResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional]
**to** | Option<**String**> |  | [optional]
**from** | Option<**String**> |  | [optional]
**subject** | Option<**String**> |  | [optional]
**status** | Option<**String**> |  | [optional]
**provider** | Option<**String**> |  | [optional]
**provider_message_id** | Option<**String**> |  | [optional]
**error** | Option<**String**> |  | [optional]
**template_id** | Option<**uuid::Uuid**> |  | [optional]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**sent_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**opened_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**open_count** | Option<**i32**> |  | [optional]
**click_count** | Option<**i32**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


