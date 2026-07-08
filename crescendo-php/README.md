# OpenAPIClient-php

The Crescendo API powers workflow automation and transactional email at scale. Authenticate with a Bearer API key (prefix: `re_...`) obtained from the dashboard.

For more information, please visit [https://crescendo.run/docs](https://crescendo.run/docs).

## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');




$apiInstance = new Crescendo\Api\AppCatalogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$app_key = 'app_key_example'; // string

try {
    $result = $apiInstance->getApp($app_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AppCatalogApi->getApp: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.crescendo.run*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AppCatalogApi* | [**getApp**](docs/Api/AppCatalogApi.md#getapp) | **GET** /api/v1/apps/{appKey} | Get app details
*AppCatalogApi* | [**listApps**](docs/Api/AppCatalogApi.md#listapps) | **GET** /api/v1/apps | List apps
*AudiencesContactsApi* | [**createContact**](docs/Api/AudiencesContactsApi.md#createcontact) | **POST** /api/v1/audiences | Create a contact
*AudiencesContactsApi* | [**deleteContact**](docs/Api/AudiencesContactsApi.md#deletecontact) | **DELETE** /api/v1/audiences/{contactId} | Delete contact
*AudiencesContactsApi* | [**getContact**](docs/Api/AudiencesContactsApi.md#getcontact) | **GET** /api/v1/audiences/{contactId} | Get contact details
*AudiencesContactsApi* | [**listContacts**](docs/Api/AudiencesContactsApi.md#listcontacts) | **GET** /api/v1/audiences | List contacts
*AudiencesContactsApi* | [**updateContact**](docs/Api/AudiencesContactsApi.md#updatecontact) | **PATCH** /api/v1/audiences/{contactId} | Update contact
*ConnectionsApi* | [**createConnection**](docs/Api/ConnectionsApi.md#createconnection) | **POST** /api/v1/connections | Create connection
*ConnectionsApi* | [**deleteConnection**](docs/Api/ConnectionsApi.md#deleteconnection) | **DELETE** /api/v1/connections/{connectionId} | Delete connection
*ConnectionsApi* | [**getConnection**](docs/Api/ConnectionsApi.md#getconnection) | **GET** /api/v1/connections/{connectionId} | Get connection details
*ConnectionsApi* | [**listConnections**](docs/Api/ConnectionsApi.md#listconnections) | **GET** /api/v1/connections | List connections
*ConnectionsApi* | [**updateConnection**](docs/Api/ConnectionsApi.md#updateconnection) | **PATCH** /api/v1/connections/{connectionId} | Update connection
*CustomEventsApi* | [**createEvent**](docs/Api/CustomEventsApi.md#createevent) | **POST** /api/v1/email/custom-events | Create a custom event
*CustomEventsApi* | [**deleteEvent**](docs/Api/CustomEventsApi.md#deleteevent) | **DELETE** /api/v1/email/custom-events/{name} | Delete a custom event
*CustomEventsApi* | [**fireEvent**](docs/Api/CustomEventsApi.md#fireevent) | **POST** /api/v1/email/custom-events/{name}/fire | Fire a custom event
*CustomEventsApi* | [**listEvents**](docs/Api/CustomEventsApi.md#listevents) | **GET** /api/v1/email/custom-events | List custom events
*DomainsApi* | [**addDomain**](docs/Api/DomainsApi.md#adddomain) | **POST** /api/v1/domains | Add a domain
*DomainsApi* | [**deleteDomain**](docs/Api/DomainsApi.md#deletedomain) | **DELETE** /api/v1/domains/{domainId} | Delete domain
*DomainsApi* | [**getDomain**](docs/Api/DomainsApi.md#getdomain) | **GET** /api/v1/domains/{domainId} | Get domain details
*DomainsApi* | [**listDomains**](docs/Api/DomainsApi.md#listdomains) | **GET** /api/v1/domains | List domains
*DomainsApi* | [**verifyDomain**](docs/Api/DomainsApi.md#verifydomain) | **POST** /api/v1/domains/{domainId}/verify | Verify domain DNS
*EmailsApi* | [**getEmail**](docs/Api/EmailsApi.md#getemail) | **GET** /api/v1/emails/{emailId} | Get email details
*EmailsApi* | [**listEmails**](docs/Api/EmailsApi.md#listemails) | **GET** /api/v1/emails | List emails
*EmailsApi* | [**searchEmails**](docs/Api/EmailsApi.md#searchemails) | **GET** /api/v1/emails/search | Search emails
*EmailsApi* | [**sendBatch**](docs/Api/EmailsApi.md#sendbatch) | **POST** /api/v1/emails/batch | 
*EmailsApi* | [**sendEmail**](docs/Api/EmailsApi.md#sendemail) | **POST** /api/v1/emails | 
*EmailsApi* | [**sendTemplated**](docs/Api/EmailsApi.md#sendtemplated) | **POST** /api/v1/emails/templated | 
*MetricsApi* | [**getMetrics**](docs/Api/MetricsApi.md#getmetrics) | **GET** /api/v1/metrics | 
*SuppressionsApi* | [**addSuppression**](docs/Api/SuppressionsApi.md#addsuppression) | **POST** /api/v1/suppressions | Add a suppression
*SuppressionsApi* | [**importSuppressions**](docs/Api/SuppressionsApi.md#importsuppressions) | **POST** /api/v1/suppressions/import | Bulk import suppressions
*SuppressionsApi* | [**listSuppressions**](docs/Api/SuppressionsApi.md#listsuppressions) | **GET** /api/v1/suppressions | List suppressions
*SuppressionsApi* | [**removeSuppression**](docs/Api/SuppressionsApi.md#removesuppression) | **DELETE** /api/v1/suppressions/{suppressionId} | Delete a suppression
*TemplatesApi* | [**cloneFromBroadcast**](docs/Api/TemplatesApi.md#clonefrombroadcast) | **POST** /api/v1/templates/clone-from-broadcast/{broadcastId} | 
*TemplatesApi* | [**createTemplate**](docs/Api/TemplatesApi.md#createtemplate) | **POST** /api/v1/templates | 
*TemplatesApi* | [**deleteTemplate**](docs/Api/TemplatesApi.md#deletetemplate) | **DELETE** /api/v1/templates/{templateId} | 
*TemplatesApi* | [**getTemplate**](docs/Api/TemplatesApi.md#gettemplate) | **GET** /api/v1/templates/{templateId} | 
*TemplatesApi* | [**listTemplates**](docs/Api/TemplatesApi.md#listtemplates) | **GET** /api/v1/templates | 
*TemplatesApi* | [**publishTemplate**](docs/Api/TemplatesApi.md#publishtemplate) | **POST** /api/v1/templates/{templateId}/publish | 
*TemplatesApi* | [**testSend**](docs/Api/TemplatesApi.md#testsend) | **POST** /api/v1/templates/{templateId}/test | 
*TemplatesApi* | [**updateTemplate**](docs/Api/TemplatesApi.md#updatetemplate) | **PATCH** /api/v1/templates/{templateId} | 
*WebhooksApi* | [**createSubscription**](docs/Api/WebhooksApi.md#createsubscription) | **POST** /api/v1/webhooks | 
*WebhooksApi* | [**deleteSubscription**](docs/Api/WebhooksApi.md#deletesubscription) | **DELETE** /api/v1/webhooks/{id} | 
*WebhooksApi* | [**listSubscriptions**](docs/Api/WebhooksApi.md#listsubscriptions) | **GET** /api/v1/webhooks | 
*WorkflowRunsApi* | [**cancelRun**](docs/Api/WorkflowRunsApi.md#cancelrun) | **POST** /api/v1/workflows/{workflowId}/runs/{runId}/cancel | Cancel workflow run
*WorkflowRunsApi* | [**getRunDetail**](docs/Api/WorkflowRunsApi.md#getrundetail) | **GET** /api/v1/workflows/{workflowId}/runs/{runId} | Get run details
*WorkflowRunsApi* | [**getRunStats**](docs/Api/WorkflowRunsApi.md#getrunstats) | **GET** /api/v1/workflows/{workflowId}/runs/stats | Get run statistics
*WorkflowRunsApi* | [**getStepRun**](docs/Api/WorkflowRunsApi.md#getsteprun) | **GET** /api/v1/runs/{runId}/steps/{stepRunId} | Get step run details
*WorkflowRunsApi* | [**listAllRuns**](docs/Api/WorkflowRunsApi.md#listallruns) | **GET** /api/v1/runs | List all runs
*WorkflowRunsApi* | [**listRuns**](docs/Api/WorkflowRunsApi.md#listruns) | **GET** /api/v1/workflows/{workflowId}/runs | List workflow runs
*WorkflowRunsApi* | [**listStepRuns**](docs/Api/WorkflowRunsApi.md#liststepruns) | **GET** /api/v1/runs/{runId}/steps | List step runs
*WorkflowsApi* | [**activateWorkflow**](docs/Api/WorkflowsApi.md#activateworkflow) | **POST** /api/v1/workflows/{workflowId}/activate | Activate workflow
*WorkflowsApi* | [**createWorkflow**](docs/Api/WorkflowsApi.md#createworkflow) | **POST** /api/v1/workflows | Create workflow
*WorkflowsApi* | [**deactivateWorkflow**](docs/Api/WorkflowsApi.md#deactivateworkflow) | **POST** /api/v1/workflows/{workflowId}/deactivate | Deactivate workflow
*WorkflowsApi* | [**deleteWorkflow**](docs/Api/WorkflowsApi.md#deleteworkflow) | **DELETE** /api/v1/workflows/{workflowId} | Delete workflow
*WorkflowsApi* | [**getWorkflow**](docs/Api/WorkflowsApi.md#getworkflow) | **GET** /api/v1/workflows/{workflowId} | Get workflow details
*WorkflowsApi* | [**listWorkflows**](docs/Api/WorkflowsApi.md#listworkflows) | **GET** /api/v1/workflows | List workflows
*WorkflowsApi* | [**triggerWorkflow**](docs/Api/WorkflowsApi.md#triggerworkflow) | **POST** /api/v1/workflows/{workflowId}/trigger | Trigger workflow
*WorkflowsApi* | [**updateWorkflow**](docs/Api/WorkflowsApi.md#updateworkflow) | **PATCH** /api/v1/workflows/{workflowId} | Update workflow

## Models

- [AddDomainRequest](docs/Model/AddDomainRequest.md)
- [AddSuppressionRequest](docs/Model/AddSuppressionRequest.md)
- [AppDetailResponse](docs/Model/AppDetailResponse.md)
- [AppSummaryResponse](docs/Model/AppSummaryResponse.md)
- [ConnectionResponse](docs/Model/ConnectionResponse.md)
- [ContactResponse](docs/Model/ContactResponse.md)
- [CreateConnectionRequest](docs/Model/CreateConnectionRequest.md)
- [CreateContactRequest](docs/Model/CreateContactRequest.md)
- [CreateCustomEventRequest](docs/Model/CreateCustomEventRequest.md)
- [CreateTemplateRequest](docs/Model/CreateTemplateRequest.md)
- [CreateWebhookRequest](docs/Model/CreateWebhookRequest.md)
- [CreateWorkflowRequest](docs/Model/CreateWorkflowRequest.md)
- [CustomEvent](docs/Model/CustomEvent.md)
- [DailyCount](docs/Model/DailyCount.md)
- [DnsRecord](docs/Model/DnsRecord.md)
- [DomainResponse](docs/Model/DomainResponse.md)
- [EmailLogResponse](docs/Model/EmailLogResponse.md)
- [FireCustomEventRequest](docs/Model/FireCustomEventRequest.md)
- [ImportSuppressionsRequest](docs/Model/ImportSuppressionsRequest.md)
- [MetricsResponse](docs/Model/MetricsResponse.md)
- [MetricsSummary](docs/Model/MetricsSummary.md)
- [PageWorkflowRunSummaryResponse](docs/Model/PageWorkflowRunSummaryResponse.md)
- [PageableObject](docs/Model/PageableObject.md)
- [PublicPageContactResponse](docs/Model/PublicPageContactResponse.md)
- [PublicPageDomainResponse](docs/Model/PublicPageDomainResponse.md)
- [PublicPageSuppressionResponse](docs/Model/PublicPageSuppressionResponse.md)
- [PublicTemplateResponse](docs/Model/PublicTemplateResponse.md)
- [PublicTestSendResponse](docs/Model/PublicTestSendResponse.md)
- [PublicWebhookListResponse](docs/Model/PublicWebhookListResponse.md)
- [PublicWebhookResponse](docs/Model/PublicWebhookResponse.md)
- [SendBatchRequest](docs/Model/SendBatchRequest.md)
- [SendBatchResponse](docs/Model/SendBatchResponse.md)
- [SendEmailRequest](docs/Model/SendEmailRequest.md)
- [SendEmailResponse](docs/Model/SendEmailResponse.md)
- [SendTemplatedRequest](docs/Model/SendTemplatedRequest.md)
- [SortObject](docs/Model/SortObject.md)
- [StepResponse](docs/Model/StepResponse.md)
- [StepRunResponse](docs/Model/StepRunResponse.md)
- [SuppressionResponse](docs/Model/SuppressionResponse.md)
- [TemplateVariable](docs/Model/TemplateVariable.md)
- [TestSendRequest](docs/Model/TestSendRequest.md)
- [UpdateConnectionRequest](docs/Model/UpdateConnectionRequest.md)
- [UpdateContactRequest](docs/Model/UpdateContactRequest.md)
- [UpdateTemplateRequest](docs/Model/UpdateTemplateRequest.md)
- [UpdateWorkflowRequest](docs/Model/UpdateWorkflowRequest.md)
- [WorkflowDetailResponse](docs/Model/WorkflowDetailResponse.md)
- [WorkflowListResponse](docs/Model/WorkflowListResponse.md)
- [WorkflowRunDetailResponse](docs/Model/WorkflowRunDetailResponse.md)
- [WorkflowRunStatsResponse](docs/Model/WorkflowRunStatsResponse.md)
- [WorkflowRunSummaryResponse](docs/Model/WorkflowRunSummaryResponse.md)
- [WorkflowSummaryResponse](docs/Model/WorkflowSummaryResponse.md)

## Authorization

Authentication schemes defined for the API:
### ApiKeyAuth

- **Type**: Bearer authentication (API Key)

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `v1`
    - Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
