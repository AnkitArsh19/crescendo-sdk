# WorkflowRunDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**String**> |  | [optional]
**workflow_id** | Option<**String**> |  | [optional]
**status** | Option<**String**> |  | [optional]
**trigger_data** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**error_message** | Option<**String**> |  | [optional]
**step_runs** | Option<[**Vec<models::StepRunResponse>**](StepRunResponse.md)> |  | [optional]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**completed_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


