# transport-nsw-assessment-calendar
An online assessment from Transport NSW for the role Web Developer to build a calendar for displaying incidents and alerts.

## Introduction
This is an Angular 10 app, which uses RxJS and NgRx.


## Future Features
- pre-fetch previous month and next month data, to avoid waiting
- set environments for dev and production
- ServiceWorker
- PWA


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Issues
When tried to access API data from Angular app, it kept throwing 500 Internal Serer Error like below. Cannot find out the root of it. Header has set Authorization: apikey xxxx and this can run through Postman.
```
<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Body>
        <soapenv:Fault>
            <faultcode>soapenv:Server</faultcode>
            <faultstring>Policy Falsified</faultstring>
            <faultactor>https://api.transport.nsw.gov.au/v1/tp/add_info?outputFormat=rapidJSON&amp;version=10.2.1.42&amp;filterPublicationStatus=current&amp;filterMOTType=5&amp;filterDateValid=10-6-2021</faultactor>
            <detail>
                <l7:policyResult status="Assertion Falsified" xmlns:l7="http://www.layer7tech.com/ws/policy/fault"/>
            </detail>
        </soapenv:Fault>
    </soapenv:Body>
</soapenv:Envelope>
```
