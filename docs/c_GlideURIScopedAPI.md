GlideURI
--------

The GlideURI class is a utility class for handling the URI parameter. The GlideURI class is available in scoped and global scripts.

#### GlideURI()

Instantiates a GlideURI object.

#### get(String name)

Returns the specified parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The parameter name. |

Return:

| Type | Description |
| --- | --- |
| String | The URI for the specified parameter. |

Example

    var gURI = new GlideURI();
    gURI.set('sysparm_query', 'priority=2^active=true' );
    var fileString = gURI.get('sysparm_query');
    gs.info(fileString);

Output

priority=2^active=true

#### getFileFromPath()

Returns the file name portion of the URI.

Return:

| Type | Description |
| --- | --- |
| String | The file name portion of the URI. |

Example

    var gURI = new GlideURI();
     
    var fileString = gURI.getFileFromPath();
    gs.info(fileString);

Output

#### set(String name, String value)

Sets the specified parameter to the specified value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The parameter name. |
| value | String | The value. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gURI = new GlideURI();
    gURI.set('sysparm_query', 'priority=2^active=true' );
    var fileString = gURI.get('sysparm_query');
    gs.info(fileString);

Output

priority=2^active=true

#### toString(String path)

Reconstructs the URI string and performs the proper URL encoding by converting non-valid characters to their URL code. For example, converting & to '%26'.

Parameters set with the set method are encoded with the URI as well.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| path | String | The base portion of the system URL to which the URI is appended. |

Return:

| Type | Description |
| --- | --- |
| String | The URL. |

Example

    fileString = gURI.toString('https://<your instance>.service-now.com/navpage.do');

Output