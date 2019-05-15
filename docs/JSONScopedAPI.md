JSON - Scoped
-------------

Provides scoped methods to create JSON objects from a string, and to turn JSON objects into strings.

For scoped applications, the JSON API uses static methods that call the JavaScript ES5 native JSON object.

#### parse(String str)

Creates an object or primitive type from a JSON formatted string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| str | String | A JSON formatted string. |

Return:

| Type | Description |
| --- | --- |
| Object | An object created from the specified string. |

Example

    var str = '{"name":"George","lastname":"Washington"}';
    var obj = JSON.parse(str);
    gs.info('The first name is' + obj.name);

Output

The first name is George

#### stringify(Object jsonObject)

Creates a string from a JSON object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| jsonObject | Object | The JSON object to be turned into a string. |

Return:

| Type | Description |
| --- | --- |
| String | A JSON formatted string. |

Example

    var obj = {"name":"George","lastname":"Washington"};
    var str =  JSON.stringify(obj);
    gs.info('The object' + str);
    

Output

The object {"name":"George","lastname":"Washington"}