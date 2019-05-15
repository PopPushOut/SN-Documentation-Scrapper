TemplatePrinter
---------------

Scoped TemplatePrinter handles printing from a mail script to the email message.

There is no constructor for the scoped TemplatePrinter API. The methods are called in mail scripts using the template global variable.

#### print(String string)

Prints the string to the email body.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| string | String | The string to print |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    template.print("Incident number - " + current.number + "\n");

Output

#### space(Number spaces)

Adds non-breaking spaces to the email body.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| spaces | Number | The number of non-breaking spaces to output to the email body. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    template.space(4);

Output