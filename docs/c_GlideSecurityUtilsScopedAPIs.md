GlideSecureRandomUtil
---------------------

The scoped GlideSecureRandomUtil API provides methods for generating integers, long values, and strings.

There is no constructor for this class. Methods are accessed through the static object GlideSecureRandomUtil. The GlideSecureRandomUtil class is available in both global and scoped applications.

#### getSecureRandomInt()

Generates a pseudo-random integer.

Return:

| Type | Description |
| --- | --- |
| Number | The pseudo-randomly generated integer. |

Example

    gs.info(GlideSecureRandomUtil.getSecureRandomInt());
    

Output

#### getSecureRandomIntBound(Number bound)

Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value that you pass into the method.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| bound | Number | The bound value. |

Return:

| Type | Description |
| --- | --- |
| Number | The pseudo-randomly generated integer. |

Example

    gs.info(GlideSecureRandomUtil.getSecureRandomIntBound(100));

Output

#### getSecureRandomLong()

Generates pseudo-random long value.

Return:

| Type | Description |
| --- | --- |
| Number | The pseudo-randomly generated 64-bit integer. |

Example

    gs.info(GlideSecureRandomUtil.getSecureRandomLong());
    

Output

#### getSecureRandomString(Number length)

Generates a random alpha-numeric String with the specified length.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| length | Number | The length of the string in number of characters. |

Return:

| Type | Description |
| --- | --- |
| String | The randomly generated string. |

Example

    gs.info(GlideSecureRandomUtil.getSecureRandomString(12));

Output