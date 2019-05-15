GlideStringUtil
---------------

Provides string handling methods.

Access these methods using the static object GlideStringUtil. This class is available in scoped and global scripts.

#### dotToUnderBar(String sourceString)

Replaces periods with underscore characters.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with periods replaced with underscores. |

Example

    var filename="../../../../../../etc/passwd";
    cleanFilename=GlideStringUtil.dotToUnderBar(filename);
    gs.info(cleanFilename);

Output

\_\_/\_\_/\_\_/\_\_/\_\_/\_\_/etc/passwd

#### escapeAllQuotes(String sourceString)

Remove quotes from a string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with quotes removed. |

Example

    mystring="let's escape some quotes";
    escapeQuote=GlideStringUtil.escapeAllQuotes(mystring);
    gs.info(escapeQuote);

Output

lets escape some quotes

#### escapeForHomePage(String sourceString)

Use for home pages to replace problem characters with escape characters.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | A string with problem characters replaced with escape characters. |

Example

    mystring="<test> string \n to escape";
    escapedString=GlideStringUtil.escapeForHomePage(mystring);
    gs.info(escapedString);

Output

%3ctest%3e string \\n to escape

#### escapeHTML(String htmlString)

Use to replace illegal characters with their escape codes.

Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| htmlString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with illegal characters replaced with their escape codes. |

Example

    mydata='"<>&';
    mydata=GlideStringUtil.escapeHTML(mydata);
    gs.info(mydata);

Output

&quot;&lt;&gt;&amp;

#### escapeNonPrintable(String sourceString)

Replaces non-printable characters with their printable notation.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with non-printable characters replaced with printable notation. |

Example

    mystring="test \x09 non \x00 printable \x07 chars";
    escapedString=GlideStringUtil.escapeNonPrintable(mystring);
    gs.info(escapedString);

Output

test \\t non \\u0000 printable \\u0007 chars

#### escapeQueryTermSeparator(String sourceString)

Replaces query term separators "^" with their escape sequence "^^".

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | A string with query term separators replaced with the escape characters. |

Example

    myquery="test^Test";
    escapedQuery=GlideStringUtil.escapeQueryTermSeparator(myquery);
    gs.info(escapedQuery);

Output

test^^Test

#### escapeTicks(String sourceString)

Replace quotes with escape characters by adding a backslash before each quote.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with backslashes added before quotes. |

Example

    mystring="let's try escapeTicks";
    escaped=GlideStringUtil.escapeTicks(mystring);
    gs.info(escaped); 

Output

let\\'s try escapeTicks

#### getHTMLValue(String sourceString)

Use to replace illegal HTML characters into HTML notation.

Using this method removes illegal characters that might cause the UI to render improperly, or trigger a client side attack such as JavaScript or HTML injection.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with illegal characters replaced with HTML notation. |

Example

    mydata='&';
    htmlvalue=GlideStringUtil.getHTMLValue(mydata);
    gs.info(htmlvalue);

Output

&amp;

#### getNumeric(String sourceString)

Extract numeric characters from a string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | A string containing only numeric characters. |

Example

    mystring='123 test 456 String 789 cleaning';
    onlyNumeric=GlideStringUtil.getNumeric(mystring);
    gs.info(onlyNumeric); 

Output

123456789

#### isBase64(String sourceString)

Returns true if the specified string is a valid base64 string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the specified string is in valid base64 format. |

Example

    //(adding a "*" to corrupt the base64 format)
    base64="GethdTYehdtshetB*";
    isValid=GlideStringUtil.isBase64(base64);
    gs.info(isValid);

Output

false

#### isEligibleSysID(String sourceString)

Returns true if the specified string is in valid sys ID format.

The sys ID format is a sequence of 32 hexadecimal characters where all the characters are in the range \[0-9, a-f, A-F\].

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True when the specified string is in the valid sys ID format. |

Example

    sysID="62826bf03710200044e0bfc8bcbe5df1";
    isElig=GlideStringUtil.isEligibleSysID(sysID);
    gs.info(isElig);

Output

true

#### newLinesToBreaks(String sourceString)

Replaces the new line character, "/n", with a break code "  
".

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with new line characters replaced with HTML break code. |

Example

    mystring="new line break \n, this is after the break";
    replaceNewLine=GlideStringUtil.newLinesToBreaks(mystring);
    gs.info(replaceNewLine); 

Output

new line break <br/>, this is after the break

#### normalizeWhitespace(String sourceString)

Replaces carriage returns, line feeds, and tabs with spaces, and then removes leading, trailing, and duplicate spaces.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sourceString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | The string with carriage returns, line feeds, and tabs replaced with spaces, and then leading, trailing, and duplicate spaces removed. |

Example

    mystring="test with \n (new line) and \t (tabulation)";
    normalizedString=GlideStringUtil.normalizeWhitespace(mystring);
    gs.info(normalizedString);

Output

test with (new line) and (tabulation)

#### unescapeHTML(String htmlString)

Use to replace escape characters with their respective character.

This method replaces these escape characters, &lt; &gt: &nbsp; &amp; &quote;.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| htmlString | String | The string to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | A string with the escape characters replaced. |

Example

    mydata='&quot;&lt;&gt;&amp;';
    unescaped=GlideStringUtil.unescapeHTML(mydata);
    gs.info(unescaped);

Output

"<>&