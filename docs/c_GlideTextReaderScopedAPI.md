GlideTextReader
---------------

Provides the ability to read single lines from an input stream. Because an input stream is used, it is not subject to the 5MB attachment size limit.

#### GlideTextReader( GlideScriptableInputStream inputStream)

Creates a scoped GlideTextReader object for the specified input stream.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The input stream to be read. |

#### getEncoding()

Returns the character encoding of the input stream.

Return:

| Type | Description |
| --- | --- |
| String | The character encoding of the input stream. |

#### readLine()

Returns a single line from the input stream and returns a string. Since this is working off of a stream, it is not subject to the 5MB size limit.

Return:

| Type | Description |
| --- | --- |
| String | A single line of input up to the carriage return. Does not include the carriage return. Returns null if there is no content. |

Example

    var is = new GlideSysAttachment().getContentStream(attachmentSysId);
    var reader = new GlideTextReader(is);
    var ln = ' ';
    while((ln = reader.readLine()) != null) {
      gs.info(ln);
    }

Output