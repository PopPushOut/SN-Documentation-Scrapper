GlideDigest
-----------

The scoped GlideDigest class provides methods for creating a message digest from strings or input streams using MD5, SHA1, or SHA256 hash algorithms.

#### GlideDigest()

Creates an instance of scoped GlideDigest.

#### getMD5Base64(String source)

Create a message digest from a string using the MD5 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getMD5Base64(inputString));

Output

#### getMD5Base64FromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the MD5 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getMD5Base64FromInputStream(inputStream));

Output

#### getMD5Hex(String source)

Create a message digest from a string using the MD5 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getMD5Hex(inputString));

Output

#### getMD5HexFromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the MD5 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getMD5HexFromInputStream(inputStream));

Output

#### getSHA1Base64(String source)

Create a message digest from a string using the SHA1 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getSHA1Base64(inputString));

Output

#### getSHA1Base64FromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the SHA1 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getSHA1Base64FromInputStream(inputStream));

Output

#### getSHA1Hex(String source)

Create a message digest from a string using the SHA1 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getSHA1Hex(inputString));

Output

#### getSHA1HexFromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the SHA1 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getSHA1HexFromInputStream(inputStream));

Output

#### getSHA256Base64(String source)

Create a message digest from a string using the SHA256 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getSHA256Base64(inputString));

Output

#### getSHA256Base64FromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the SHA256 algorithm. The output string is in Base64.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getSHA256Base64FromInputStream(inputStream));

Output

#### getSHA256Hex(String source)

Create a message digest from a string using the SHA256 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The source string. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputString = "Her molasses flowed slowly down the hill.";
    var digest = new GlideDigest();
    gs.info(digest.getSHA256Hex(inputString));

Output

#### getSHA256HexFromInputStream( GlideScriptableInputStream inputStream)

Create a message digest from an input stream using the SHA256 algorithm. The output string is in hexadecimal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The source input stream. |

Return:

| Type | Description |
| --- | --- |
| String | The message digest. |

Example

    var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
    var digest = new GlideDigest();
    gs.info(digest.getSHA256HexFromInputStream(inputStream));

Output