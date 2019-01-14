$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("health.feature");
formatter.feature({
  "line": 1,
  "name": "the health can be retrieved",
  "description": "",
  "id": "the-health-can-be-retrieved",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "client makes call to GET /health",
  "description": "",
  "id": "the-health-can-be-retrieved;client-makes-call-to-get-/health",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "the client calls /health",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "the client receives response status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.the_client_issues_GET_health()"
});
formatter.result({
  "duration": 945993834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "GetHealthStep.the_client_receives_status_code_of(int)"
});
formatter.result({
  "duration": 14382206,
  "status": "passed"
});
formatter.uri("version.feature");
formatter.feature({
  "line": 1,
  "name": "the version can be retrieved",
  "description": "",
  "id": "the-version-can-be-retrieved",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "client makes call to GET /version",
  "description": "",
  "id": "the-version-can-be-retrieved;client-makes-call-to-get-/version",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "the client calls /version",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "the client receives status code of 200",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "the client receives server version 1.0",
  "keyword": "And "
});
formatter.match({
  "location": "GetVersionStep.the_client_issues_GET_version()"
});
formatter.result({
  "duration": 27413781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "GetVersionStep.the_client_receives_status_code_of(int)"
});
formatter.result({
  "duration": 169375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.0",
      "offset": 35
    }
  ],
  "location": "GetVersionStep.the_client_receives_server_version_body(String)"
});
formatter.result({
  "duration": 2266727,
  "status": "passed"
});
});