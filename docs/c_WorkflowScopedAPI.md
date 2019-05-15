Workflow
--------

The scoped Workflow API provides methods that can be used in an activity definition script.

There are no constructors for creating an instance of a scoped workflow object. Instead, use the global workflow object available in activity scripts. This workflow object is available in any script location inside a workflow.

#### inputs

Returns the workflow variables.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputs | Object | Workflow variables as name value pairs. |

Example

    var user = workflow.inputs.u_user;

Output

#### result

Returns the workflow's result.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| result | String | Workflow's results |

Example

    var wfResult = workflow.result;

Output

#### debug(String message, Object args)

Adds a debug message to the log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The message to add to the log. |
| args | Object | Arguments to add to the message. |

Return:

| Type | Description |
| --- | --- |
| String | The message added to the log. |

Example

    var loggedMessage = workflow.debug("All is well");

Output

#### error(String message, Object args)

Adds an error message to the log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The message to add to the log. |
| args | Object | Arguments to add to the message. |

Return:

| Type | Description |
| --- | --- |
| String | The logged message |

Example

    var loggedMessage = workflow.error("An error has occurred. ");

Output

#### getVariable(String name)

Returns the specified variable's value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The variable name |

Return:

| Type | Description |
| --- | --- |
| Object | The variable's value |

Example

    var value = workflow.getVariable("task");

Output

#### info(String message, Object args)

Adds an informational message to the log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The message to add to the log. |
| args | Object | Arguments to add to the message. |

Return:

| Type | Description |
| --- | --- |
| String | The message that is logged. |

Example

    var loggedMessage = workflow.info("All is well");

Output

#### name()

Returns the workflow name.

Return:

| Type | Description |
| --- | --- |
| String | The workflow name |

Example

    var name = workflow.name();

Output

#### removeVariable(String name)

Removes the specified variable from the workflow.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The variable name |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var value = workflow.removeVariable("task");

Output

#### scratchpad()

Returns the workflow's scratchpad object.

Return:

| Type | Description |
| --- | --- |
| Object | The scratchpad object. |

Example

    var scratchpad = workflow.scratchpad();

Output

#### setResult(String result)

Sets the workflow's result.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| result | String | The workflow's result |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    workflow.setResult("Success");

Output

#### setVariable(String name, Object value)

Sets the specified variable to the specified value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The variable name |
| value | Object | The value to be assigned to the variable. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    workflow.setVariable("task", "terrible");

Output

#### warn(String message, Object args)

Adds a warning message to the log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The message to add to the log. |
| args | Object | Arguments to add to the message. |

Return:

| Type | Description |
| --- | --- |
| String | The logged message |

Example

    var loggedMessage = workflow.warn("Check your permissions.");

Output