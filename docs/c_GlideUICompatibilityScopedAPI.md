GlideUICompatibility
--------------------

The scoped GlideUICompatibility class provides the ability for scoped applications to define their own minimum browser versions. This is done by creating system properties for the scoped application.

You create the properties using the sys\_properties list and assign a version number. When you do this from the scoped application, the prefix is automatically added to the property name. The scoped application UI compatibility properties are:  
  

*   <scope-name>.ui.ie\_minimum
*   <scope-name>.ui.chrome\_minimum
*   <scope-name>.ui.firefox\_minimum
*   <scope-name>.ui.safari\_major\_version\_minimum

  
  
You can then use the scoped GlideUICompatibility class to determine if the current browser is supported.

#### GlideUICompatibility(String scopeName)

Creates a GlideUICompatibility object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| scopeName | String | The application's scope name |

#### getCompatibility()

Returns the terms "block" or "allow" based upon the browser version.

Return:

| Type | Description |
| --- | --- |
| String | Either block or allow |

Example

    UICompatibility = new GlideUICompatibility(gs.getCurrentScopeName());
    var blockOrAllow = UICompatibility.getCompatibility();
    gs.info(blockOrAllow);

Output

allow

#### isBlocked()

Determines if the browser is not supported.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the browser is not supported. |

Example

    UICompatibility = new GlideUICompatibility(gs.getCurrentScopeName());
    var blocked = UICompatibility.isBlocked();
    gs.info(blocked);

Output

false