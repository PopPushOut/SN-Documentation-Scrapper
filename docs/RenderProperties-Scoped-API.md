RenderProperties
----------------

The RenderProperties API provides methods about the current page and is available in Jelly scripts and in UI-action conditions and scripts.

Access RenderProperties methods using the static variable RP.

#### getEncodedQuery()

Returns the encoded query from the URL sent to the page.

Return:

| Type | Description |
| --- | --- |
| String | Returns the encoded query from the URL sent to the form. |

#### getListControl()

Returns the list control object for the page.

Return:

| Type | Description |
| --- | --- |
| ScopedSysListControl object | The list control object for the page. |

#### getParameterValue(String parameterName)

Returns the value of the specified URL parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| parameterName | String | Name of the parameter passed on the URL. |

Return:

| Type | Description |
| --- | --- |
| String | The parameter's value. |

#### getReferringURL()

Returns the URL where the request originated.

Return:

| Type | Description |
| --- | --- |
| String | The URL of the page where the request originated. |

#### getViewName()

Returns the name of the view in use.

Return:

| Type | Description |
| --- | --- |
| String | The name of the view being used. |

#### getWindowProperties()

Returns the window's properties.

Return:

| Type | Description |
| --- | --- |
| Object | The window's properties |

#### isInDevStudio()

Returns true if the page is part of Studio.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the page is part of Studio. |

#### isInteractive()

Returns true if this is an interactive session. An interactive session is when a user has logged in as opposed to a REST request.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if this is an interactive session. |

#### isManyToMany()

Returns true when the sysparm\_collection\_related\_file URL parameter is set.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true when the sysparm\_collection\_related\_file URL parameter is set. |

#### isRelatedList()

Returns true when the sys\_is\_related\_list URL-parameter is true. Returns false if the parameter is not present.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the URL parameter sys\_is\_related\_list is true. |