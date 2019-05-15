GlideSecurityUtils
------------------

Provides methods to work with URLs.

Access these methods using the static object GlideSecurityUtils. This class is available in scoped and global scripts.

#### cleanURL(String url)

Removes suspicious encoding to prevent reflected or DOM based cross site scripting.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | The URL to be checked. |

Return:

| Type | Description |
| --- | --- |
| String | The URL stripped of problem elements. |

Example

    myurl='javascript%3Aalert(1)';
    var clean=GlideSecurityUtils.cleanURL(myurl);
    gs.info(clean);

Output

null

#### enforceRelativeURL(String url)

Removes the domain address from the URL, which leaves the page name and parameters.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | The URL to be turned into a relative URL. |

Return:

| Type | Description |
| --- | --- |
| String | A relative URL. |

Example

    myurl='http://evildomain.com/test.do';
    relativeURL=GlideSecurityUtils.enforceRelativeURL(myurl);
    gs.info(relativeURL);

Output

test.do

#### escapeScript(String script)

Add escape characters to a script.

Adding escape characters to a script helps prevent cross-site scripting.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| script | String | The script to have escape characters added. |

Return:

| Type | Description |
| --- | --- |
| String | The script with escape characters added. |

Example

    theScript="<script> alert(1)</script>";
    var escapedScript=GlideSecurityUtils.escapeScript(theScript);
    gs.info(escapedScript);

Output

&lt;script&gt; alert(1)&lt;/script&gt;

#### isURLWhiteListed(String url)

Check the specified URL against the system defined white list.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | The URL to be checked against the URL white list. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the specified URL is in the white list. |

Example

    myURL="http://evil.com/badscript.do";
    isWhitelisted=GlideSecurityUtils.isURLWhiteListed(myURL);
    gs.info(isWhitelisted);

Output

false