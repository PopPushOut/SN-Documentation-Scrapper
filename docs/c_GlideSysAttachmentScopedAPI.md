GlideSysAttachment
------------------

The GlideSysAttachment API provides a way to handle attachments.

Content is returned as a string, not as a byte array when getContent() is called.  
  
Content is returned as a GlideScriptableInputStream object when getContentStream() is called. The GlideScriptableInputStream contains the actual bytes not converted into a String.

#### GlideSysAttachment()

Creates an instance of the GlideSysAttachment class.

#### copy(String sourceTable, String sourceID, String targetTable, String targetID)

Copies attachments from the source record to the target record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceTable | String | Name of the table with the attachments to be copied. |
| sourceID | String | The source table's sysID. |
| targetTable | String | Name of the table to have the attachments added. |
| targetID | String | The target table's sysID. |

Return:

| Type | Description |
| --- | --- |
| String | Array of sysIDs of the attachments that were copied. |

#### deleteAttachment(String attachmentID)

Deletes the specified attachment.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| attachmentID | String | The attachment's sysID. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getContent(GlideRecord sysAttachment)

Returns the attachment content as a string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysAttachment | GlideRecord | The attachment record. |

Return:

| Type | Description |
| --- | --- |
| String | The attachment contents as a string. Returns up to 5 MB of data. |

#### getContentBase64( GlideRecord sysAttachment)

Returns the attachment content as a string with base64 encoding.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysAttachment | GlideRecord | The attachment record. |

Return:

| Type | Description |
| --- | --- |
| String | The attachment contents as a string with base64 encoding. Returns up to 5 MB of data. |

#### getContentStream( String sysID)

Returns a GlideScriptableInputStream object given the sysID of an attachment.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysID | String | The attachment sysID. |

Return:

| Type | Description |
| --- | --- |
| GlideScriptableInputStream | A stream that contains the attachment content. |

#### write(GlideRecord record, String fileName, String contentType, String content)

Inserts an attachment for the specified record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| record | GlideRecord | The record to which the attachment is to be attached. |
| fileName | String | The attachment's file name. |
| contentType | String | The attachment's content type. |
| content | String | The attachment content. |

Return:

| Type | Description |
| --- | --- |
| String | The attachment's sysID. Returns null if the attachment was not added. |

#### writeBase64( GlideRecord gr, String fileName, String contentType, String content\_base64Encoded)

Inserts an attachment for the specified record using base64 encoded content.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The record to which the attachment is to be attached. |
| fileName | String | The attachment's file name. |
| contentType | String | The attachment's content type. |
| content | String | The attachment content in base64 format. |

Return:

| Type | Description |
| --- | --- |
| String | The sysID of the attachment created. |

#### writeContentStream(GlideRecord gr, String fileName, String contentType, GlideScriptableInputStream inputStream)

Inserts an attachment using the input stream.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The record to which the attachment is to be attached. |
| fileName | String | The attachment's file name. |
| contentType | String | The attachment's content type. |
| content | GlideScriptableInputStream | The attachment content. |

Return:

| Type | Description |
| --- | --- |
| String | The sysID of the attachment created. |