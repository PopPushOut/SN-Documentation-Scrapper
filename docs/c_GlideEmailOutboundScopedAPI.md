GlideEmailOutbound
------------------

The scoped GlideEmailOutbound class implements the email object for scoped applications. You can use the GlideEmailOutbound methods with the email global object available in mail scripts. The email object behaves identically for global and scoped applications.

#### addAddress( String type, String address)

Adds the address to either the cc or bcc list.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| type | String | Either cc or bcc, determines the list to which the address is added. |
| address | String | The recipient's email address. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.addAddress('cc', 'joe.employee@something.com');

Output

#### addAddress(String type, String address, String displayName)

Adds the recipient to either the cc or bcc list, but uses the display name instead of the address when showing the recipient.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| type | String | Either cc or bcc, determines the list to which the address is added. |
| address | String | The recipient's email address. |
| displayName | String | The name to be shown instead of the email address. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.addAddress('bcc', 'joe.employee@something.com', 'dudley rocks');

Output

#### GlideEmailOutbound()

Instantiates a scoped GlideEmailOutbound object.

#### getSubject()

Returns the email's subject line.

Return:

| Type | Description |
| --- | --- |
| String | The email's subject line. |

#### getWatermark()

Returns the email's watermark.

Return:

| Type | Description |
| --- | --- |
| String | The email's watermark. |

Example

    var watermark = email.getWatermark();

Output

#### setBody(String bodyText)

Sets the body of the email.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| bodyText | String | The body of the email. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.setBody('Dear Sir, ...');

Output

#### setFrom(String address)

Sets the sender's address.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| address | String | The sender's email address. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.setFrom('joe.employee@something.com');

Output

#### setReplyTo(String address)

Sets the reply to address.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| address | String | The reply to email address. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.setReplyTo('joe.employee@something.com');

Output

#### setSubject(String subject)

Sets the email's subject line.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| subject | String | Text for the subject line. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    email.setSubject('Important Issues to discuss');

Output