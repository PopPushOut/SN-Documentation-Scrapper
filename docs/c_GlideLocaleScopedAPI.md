GlideLocale
-----------

GlideLocale provides information about display information for the local instance.

There is no constructor for a GlideLocale object. Use the get() method to get a GlideLocale object.

#### get()

Returns the GlideLocale object.

Return:

| Type | Description |
| --- | --- |
| GlideLocale | The GlideLocale object. |

Example

    var locale = GlideLocale.get();

Output

#### getDecimalSeparator()

Returns the decimal separator.

Return:

| Type | Description |
| --- | --- |
| String | The decimal separator. |

Example

    var locale = GlideLocale.get();
    var decimalSeparator = locale.getDecimalSeparator();
    gs.info( "The decimal separator is " + decimalSeparator);

Output

The decimal separator is .

#### getGroupingSeparator()

Returns the grouping separator.

Return:

| Type | Description |
| --- | --- |
| String | The grouping separator. |

Example

    var locale = GlideLocale.get();var groupingSeparator = locale.getGroupingSeparator();
    gs.info( "The grouping separator is " + groupingSeparator);

Output

The grouping separator is ,