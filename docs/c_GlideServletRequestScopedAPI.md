GlideServletRequest
-------------------

The GlideServletRequest API is used in processor scripts.

ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side JavaScript code and produce output such as TEXT, JSON, or HTML. The GlideServletRequest API is used in processor scripts to access the [HttpServletRequest](http://docs.oracle.com/javaee/1.4/api/javax/servlet/http/HttpServletRequest.html) object. The GlideServletRequest object provides a subset of the HttpServletRequest APIs. The methods are called using the global variable g\_request.  
  
A useful global variable, g\_target, is available in processor scripts. It contains the table name extracted from the URL.  
  
The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form.

#### getContentType()

Returns the MIME type of the body of the request.

Return:

| Type | Description |
| --- | --- |
| String | The content type, returns null if the content type is not known. |

Example

    var contentType = g_request.getContentType();

Output

#### getHeader(String name)

Returns the header value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the header to be retrieved. |

Return:

| Type | Description |
| --- | --- |
| String | The header. |

Example

    var headerValue = g_request.getHeader("host");

Output

demonightlyus.service-now.com

#### getHeaderNames()

Returns a comma-separated list of header names.

Return:

| Type | Description |
| --- | --- |
| String | A comma-separated list of header names. |

Example

    var headerList = g_request.getHeaderNames();

Output

host,connection,cache-control,authorization,accept,user-agent,accept-encoding,accept-language, cookie,x-forwarded-proto,x-forwarded-host,x-forwarded-for

#### getHeaders(String name)

Returns the header values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Names of the headers to be retrieved. |

Return:

| Type | Description |
| --- | --- |
| String | The header values. |

Example

    var headerValue = g_request.getHeaders("host");

Output

demonightlyus.service-now.com

#### getParameter(String name)

Returns the value of the parameter contained in the request URL.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the parameter to be retrieved. This can be the parameter endpoint from the processor form. |

Return:

| Type | Description |
| --- | --- |
| Strings | The parameter value. Returns null if the parameter is not found. |

Example

    var name = g_request.getParameter("x_snc_custom_x_snc_name");

Output

#### getParameterNames()

Returns a list of the parameter names found in the request URL.

Return:

| Type | Description |
| --- | --- |
| String | A comma-separated list of parameter names. |

Example

    var paramList = g_request.getParameterNames();

Output

#### getQueryString()

Returns the query string from the request.

Return:

| Type | Description |
| --- | --- |
| String | The query string. |

Example

The code snippet is:

    var daString = g_request.getQueryString();
    g_processor.writeOutput("The query string is: " + daString);

Output