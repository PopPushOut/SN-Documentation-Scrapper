GlideDate
---------

The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields.

#### GlideDate()

Creates a GlideDate object with the current date time.

#### getByFormat(String format)

Gets the date in the specified date format.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| format | String | the desired date format |

Return:

| Type | Description |
| --- | --- |
| String | the date in the specified format |

Example

    var gd = new GlideDate(); 
    gd.setValue('2015-01-01');
    gs.info(gd.getByFormat("dd-MM-yyyy"));

Output

01-01-2015

#### getDayOfMonthNoTZ()

Gets the day of the month stored by the GlideDate object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The day of the month in the UTC time zone, from 1 to 31. |

Example

    //Today's date is 2016-05-13 
    var gd =new GlideDate();
    gs.info(gd.getDayOfMonthNoTZ());

Output

13

#### getDisplayValue()

Gets the date in the current user's display format and time zone.

Return:

| Type | Description |
| --- | --- |
| String | The date in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users. |

Example

    var gd =new GlideDate(); 
    gd.setValue('2015-01-01');
    gs.info(gd.getDisplayValue());

Output

2015-01-01

#### getDisplayValueInternal()

Gets the display value in the internal format (yyyy-MM-dd).

Return:

| Type | Description |
| --- | --- |
| String | The date values for the GlideDate object in the current user's time zone and the internal time format of yyyy-MM-dd. |

Example

    var gd =new GlideDate(); 
    gs.info(gd.getDisplayValueInternal());

Output

2014-10-22

#### getMonthNoTZ()

Gets the month stored by the GlideDate object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The numerical value of the month from 1 to 12. |

Example

    //Today's date is 2016-05-13
    var gd =new GlideDate();
    gs.info(gd.getMonthNoTZ());

Output

5

#### getValue()

Gets the date value stored in the database by the GlideDate object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.

Return:

| Type | Description |
| --- | --- |
| String | The date value in the internal format and system time zone. |

Example

    var gd =new GlideDate();
    gd.setValue('2015-01-01');
    gs.info(gd.getValue());

Output

2015-01-01

#### getYearNoTZ()

Gets the year stored by the GlideDate object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The numerical value of the year. |

Example

    //Today's date is 2016-05-13
    var gd =new GlideDate();
    gs.info(gd.getYearNoTZ());

Output

2016

#### setDisplayValue(String asDisplayed)

Sets a date value using the current user's display format and time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| asDisplayed | String | The date in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gd =new GlideDate();
    gd.setDisplayValue("2011-01-01");
    gs.info(gd.getValue());

Output

2011-01-01

#### setValue(String o)

Sets the date of the GlideDate object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | String | The date and time to use. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gd = new GlideDate(); 
    gd.setValue('2015-01-01');
    gs.info(gd.getValue());

Output

2015-01-01

#### subtract(GlideDate start, GlideDate end)

Gets the duration difference between two GlideDate values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| start | GlideDate | The start value. |
| end | GlideDate | The end value. |

Return:

| Type | Description |
| --- | --- |
| GlideDuration | The duration between the two values. |

Example

    var sgd1 = new GlideDate(); 
    sgd1.setDisplayValue('2014-07-18'); 
    var sgd2 = new GlideDate(); 
    sgd2.setDisplayValue('2014-07-19'); 
     
    duration= GlideDate.subtract(sgd1, sgd2); 
    gs.info(duration.getDisplayValue());

Output

1 Day