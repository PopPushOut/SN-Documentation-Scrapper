GlideServletResponse
--------------------

The GlideServletResponse API is used in processor scripts.

ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideServletResponse API is used in processor scripts to access the [HttpServletResponse](http://docs.oracle.com/javaee/1.4/api/javax/servlet/http/HttpServletResponse.html) object. The GlideServletResponse object provides a subset of the HttpServletResponse APIs. The methods are called using the global variable g\_response.  
  
A useful global variable, g\_target, is available in processor scripts. It contains the table name extracted from the URL.  
  
The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form.

#### sendRedirect(String location)

Sends a temporary redirect to the client.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| location | String | The URL to receive the response. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### setContentType(String type)

Sets the MIME type of the response

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| type | String | The MIME type. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    g_response.setContentType('text/html;charset=UTF-8');

Output

#### setHeader(String key, String value)

Sets a response header to the specified value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| key | String | Specifies the header. |
| value | String | The value to be assigned to the header. If the header exists, it is over written. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    g_response.setHeader("host", "demonightlyus.service-now.com");

Output

#### setStatus(Number status)

Sets the status code for the response.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| status | Number | The status to be set. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    // set the status to okay
    g_response.setStatus(200);

Output