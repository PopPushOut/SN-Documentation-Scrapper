GlideXMLUtil
------------

Provides methods to remove invalid characters from an XML string, and to validate an XML string.

Access these methods using the static object GlideXMLUtil. This class is available in scoped and global scripts.

#### removeInvalidChars(String xmlString)

Removes invalid characters from an XML string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xmlString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | A string with invalid characters removed. |

Example

    var test = "test\btab";
    var removedTest = GlideXMLUtil.removeInvalidChars(test);
    
    gs.info(removedTest);

Output

testtab

#### validateXML(String xmlString, Boolean nsAware, Boolean forgiveUnclosed)

Determines if the specified string is valid XML.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xmlString | String | The string to be validated. |
| nsAware | Boolean | When true, the validation is aware of name spaces. When false, the validation ignores name spaces. |
| forgiveUnclosed | Boolean | When true, the validation does not check for tags enclosing the string. |

Return:

| Type | Description |
| --- | --- |
| String | Returns null if the string is valid. Returns an error string describing the error if the specified string is not valid. |

Example

    var s = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><unload unload_date=\"2017-11-27 21:56:14\"><incident action=\"INSERT_OR_UPDATE\"><active>true</active></incident></unload>";
    var xml = GlideXMLUtil.validateXML(s,false, false);
    gs.info(xml);
    

Output

null