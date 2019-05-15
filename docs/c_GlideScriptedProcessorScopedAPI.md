GlideScriptedProcessor
----------------------

ServiceNow processors are equivalent to Java servlets.

Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideScriptedProcessor APIs are used in processor scripts to access the the processor (servlet) capabilities. There are no constructors for the GlideScriptedProcessor APIs. The methods are called using the global variable g\_processor.  
  
A useful global variable, g\_target, is available in processor scripts. It contains the table name extracted from the URL.  
  
The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form.

#### redirect(String url)

Redirects to the specified URL.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | the destination URL |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    //Do whatever processing you need and redirect to the homepage
    g_processor.redirect("/navpage.do")

Output

#### writeJSON(Object o)

Encodes an object as a JSON string and writes it to the current URL.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | The object to encode to a JSON string. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var map = {"key1":"value1","key2":"value2"};
    g_processor.writeJSON(map);

Output

#### writeOutput(String contentType, String s)

Writes the specified string to the current URL in the specified character-encoding.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| contentType | String | Sets the content type of the response sent to the client, if the response has not been committed, and may include a character-encoding specification. |
| s | String | The string to write. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var name = g_request.getParameter("name");
    g_processor.writeOutput("text/plain", "Hello " + name);

Output

#### writeOutput(String s)

Writes the specified string to the current URL.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| s | String | The string to write. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var name = g_request.getParameter("name");
    g_processor.writeOutput("Hello " + name);

Output