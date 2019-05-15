GlideTime
---------

The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields.

#### GlideTime()

Instantiates a GlideTime object with the current time.

Example

    var gt = new GlideTime(); 
    gs.info(gt.getDisplayValue());

Output

#### GlideTime(Number milliseconds)

Instantiates a GlideTime object with the specified time.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | The datetime in milliseconds. |

Example

    var gt = new GlideTime(10000); 
    gs.info(gt.getDisplayValue());

Output

#### getByFormat(String format)

Gets the time in the specified format.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| format | String | The time format. |

Return:

| Type | Description |
| --- | --- |
| String | The time in the specified format. |

Example

    var gt = new GlideTime(); 
    gt.setValue('12:00:00');
    gs.info(gt.getByFormat("HH:mm"));

Output

#### getDisplayValue()

Gets the time in the current user's display format and time zone.

When designing business rules or script includes remember that this method may return values in different formats for different users.

Return:

| Type | Description |
| --- | --- |
| String | The time in the user's format and time zone. |

Example

    var gt = new GlideTime();
    gt.setDisplayValue("12:00:00"); // User Time Zone
    gs.info(gt.getDisplayValue()); // User Time Zone

Output

#### getDisplayValueInternal()

Gets the display value in the current user's time zone and the internal format (HH:mm:ss).

Return:

| Type | Description |
| --- | --- |
| String | The time value for the GlideTime object in the current user's time zone and the internal time format of HH:mm:ss. |

Example

    var gt = new GlideTime();
    gt.setValue("01:00:00"); //Internal Time Zone , UTC
    gs.info(gt.getDisplayValueInternal()); //User Time Zone

Output

#### getHourLocalTime()

Returns the hours part of the time using the local time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The hours using the local time zone. |

#### getHourOfDayLocalTime()

Returns the hours part of the time using the local time zone. The number of hours is based on a 24 hour clock.

Return:

| Type | Description |
| --- | --- |
| Number | The hours using the local time zone. The number of hours is based on a 24 hour clock. |

#### getHourOfDayUTC()

Returns the hours part of the time using the UTC time zone. The number of hours is based on a 24 hour clock.

Return:

| Type | Description |
| --- | --- |
| Number | The hours using the UTC time zone. The number of hours is based on a 24 hour clock. |

#### getHourUTC()

Returns the hours part of the time using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.

Return:

| Type | Description |
| --- | --- |
| Number | The hours using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12. |

#### getMinutesLocalTime()

Returns the number of minutes using the local time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The number of minutes using the local time zone. |

#### getMinutesUTC()

Returns the number of minutes in the hour based on the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The number of minutes in the hour using the UTC time zone. |

#### getSeconds()

Returns the number of seconds in the current minute.

Return:

| Type | Description |
| --- | --- |
| Number | The number of seconds in the minute. |

#### getValue()

Gets the time value stored in the database by the GlideTime object in the internal format, HH:mm:ss, and the system time zone.

Return:

| Type | Description |
| --- | --- |
| String | The time value in the internal fomat and system time zone. |

Example

    var gt = new GlideTime();
    gs.info(gt.getValue()); // Internal Time Zone, UTC

Output

#### setDisplayValue(String asDisplayed)

Sets a time value using the current user's display format and time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| asDisplayed | String | The time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as HH:mm:ss. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gt = new GlideTime();
    gt.setDisplayValue('01:00:00');   // User Time Zone
    gs.info(gt.getDisplayValueInternal()); // User Time Zone

Output

#### setValue(String o)

Sets the time of the GlideTime object in the internal time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | String | The time in hh:mm:ss format. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gt = new GlideTime();
    gt.setValue('01:00:00');  //Internal Time Zone, UTC
    gs.info("time is "+ gt.getByFormat('hh:mm:ss'));

Output

#### subtract(GlideTime startTime, GlideTime endTime)

Gets the duration difference between two GlideTime object values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| startTime | GlideTime | The start value. |
| endTime | GlideTime | The end value. |

Return:

| Type | Description |
| --- | --- |
| GlideDuration | The duration between the two values. |

Example

    var gd1 = new GlideTime(); 
    gd1.setDisplayValue("09:00:00"); 
    var gd2 = new GlideTime(); 
    gd2.setDisplayValue("09:10:00"); 
     
    var dur = GlideDate.subtract(gd1, gd2); //the difference between gdt1 and gdt2 
    gs.info(dur.getDisplayValue());

Output