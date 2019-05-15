GlideSession
------------

The scoped GlideSession API provides a way to find information about the current session.

There are no constructors for creating an instance of a scoped GlideSession object. Instead, use the getSession() method of the scoped GlideSystem API.

#### getClientData(String paramName)

Retrieves a session client value previously set with putClientData().

This method is used in a client script to retrieve data values that were set by a server script that used the putClientData() method.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| paramName | String | Name of the client data to retrieve. |

Return:

| Type | Description |
| --- | --- |
| String | The client data as a string. |

Example

    var session = gs.getSession();
    session.putClientData('test1', 'Harry');
    var clientData = session.getClientData('test1');
    gs.info(clientData);

Output

Harry

#### getClientIP()

Returns the client IP address.

Return:

| Type | Description |
| --- | --- |
| String | The IP address. |

Example

    var session = gs.getSession();
    var addr = session.getClientIP();
    gs.info(addr);

Output

50.59.164.97

#### getCurrentApplicationId()

Returns the application currently selected in the application picker.

This method requires admin privileges.

Return:

| Type | Description |
| --- | --- |
| String | The currently selected application. |

Example

    var session = gs.getSession();
    var appID = session.getCurrentApplicationId();
    gs.info(appID);

Output

ce05b9f32b840200c5244f74b4da1501

#### getLanguage()

Returns the session's language code.

Return:

| Type | Description |
| --- | --- |
| String | The session's language code. |

Example

    var session = gs.getSession();
    var language = session.getLanguage();
    gs.info(language);

Output

en

#### getSessionToken()

Returns the session token.

Return:

| Type | Description |
| --- | --- |
| String | The session token. |

Example

    var session = gs.getSession();
    var token = session.getSessionToken();
    gs.info(token);

Output

4284b5372b840200c5244f74b4da15f2c3476cf7fcb6572afa4ef9d5e6d307a5fd9e1da7

#### getTimeZoneName()

Returns the name of the session's time zone.

Return:

| Type | Description |
| --- | --- |
| String | The name of the session's time zone. |

Example

    var session = gs.getSession();
    var zoneName = session.getTimeZoneName();
    gs.info(zoneName);

Output

US/Pacific

#### getUrlOnStack()

Returns the URL on the stack. Returns null if the stack is empty.

Return:

| Type | Description |
| --- | --- |
| String | The URL. Returns null if the stack is empty. |

Example

    var session = gs.getSession();
    var URL = session.getUrlOnStack();
    gs.info(URL);

Output

sys\_app.do?sys\_id=ce05b9f32b840200c5244f74b4da1501&sysparm\_goto\_url=sys\_app.do %3Fsys\_id%3Dce05b9f32b840200c5244f74b4da1501

#### isImpersonating()

Returns true if the user is impersonating another user.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the user is impersonating another user; otherwise, returns false. |

Example

    var isImpersonator = gs.getSession().isImpersonating();
    gs.info(isImpersonator);

Output

#### isInteractive()

Returns true if the session is interactive.

An interactive session is one that involves an end-user interacting with a user interface that then retrieves information from a server. An example of this type of session is when a user logs in using the log-in screen or uses a form to query a data store. A non-interactive session is one that only involves programmatic interaction with a server such as a SOAP request to retrieve data.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the session is interactive. |

Example

    var interActive = gs.getSession().isInteractive();
    gs.info(interActive);

Output

#### isLoggedIn()

Returns true if the user is logged in.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user is logged in. |

Example

    var session = gs.getSession();
    var loggedIn = session.isLoggedIn();
    gs.info(loggedIn);

Output

true

#### putClientData(String paramName, String paramValue)

Sets a session client value that can be retrieved with getClientData(). This method is used in a server side script that runs when a form is created.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| paramName | String | Name of the client data to set. |
| paramValue | String | Value of the client data. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var session = gs.getSession();
    session.putClientData('test1', 'Harry');
    var clientData = session.getClientData('test1');
    gs.info(clientData);

Output

Harry