# DomainResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional]
**domain_name** | **string** |  | [optional]
**status** | **string** |  | [optional]
**required_dns_records** | [**\Crescendo\Model\DnsRecord[]**](DnsRecord.md) |  | [optional]
**created_at** | **\DateTime** |  | [optional]
**verified_at** | **\DateTime** |  | [optional]
**spf_verified** | **bool** |  | [optional]
**dkim_verified** | **bool** |  | [optional]
**dmarc_verified** | **bool** |  | [optional]
**daily_send_cap** | **int** |  | [optional]
**warming_status** | **string** |  | [optional]
**send_readiness** | **string** |  | [optional]
**allowed_email_type** | **string** |  | [optional]
**credential_source** | **string** |  | [optional]
**email_provider_connection_id** | **string** |  | [optional]
**health_status** | **string** |  | [optional]
**warnings** | **string[]** |  | [optional]
**tracking_enabled** | **bool** |  | [optional]
**unsubscribe_logo_url** | **string** |  | [optional]
**unsubscribe_primary_color** | **string** |  | [optional]
**unsubscribe_copy** | **string** |  | [optional]
**bimi_logo_url** | **string** |  | [optional]
**bimi_vmc_url** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
