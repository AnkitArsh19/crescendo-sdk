# DomainResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional]
**domain_name** | Option<**String**> |  | [optional]
**status** | Option<**String**> |  | [optional]
**required_dns_records** | Option<[**Vec<models::DnsRecord>**](DnsRecord.md)> |  | [optional]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**verified_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional]
**spf_verified** | Option<**bool**> |  | [optional]
**dkim_verified** | Option<**bool**> |  | [optional]
**dmarc_verified** | Option<**bool**> |  | [optional]
**daily_send_cap** | Option<**i32**> |  | [optional]
**warming_status** | Option<**String**> |  | [optional]
**send_readiness** | Option<**String**> |  | [optional]
**allowed_email_type** | Option<**String**> |  | [optional]
**credential_source** | Option<**String**> |  | [optional]
**email_provider_connection_id** | Option<**uuid::Uuid**> |  | [optional]
**health_status** | Option<**String**> |  | [optional]
**warnings** | Option<**Vec<String>**> |  | [optional]
**tracking_enabled** | Option<**bool**> |  | [optional]
**unsubscribe_logo_url** | Option<**String**> |  | [optional]
**unsubscribe_primary_color** | Option<**String**> |  | [optional]
**unsubscribe_copy** | Option<**String**> |  | [optional]
**bimi_logo_url** | Option<**String**> |  | [optional]
**bimi_vmc_url** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


