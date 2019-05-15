GlideDateTime
-------------

The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide\_date\_time fields.

Use the GlideDateTime methods to perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.

#### add(GlideTime gd)

Adds a GlideTime object to the current GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gd | GlideTime | The GlideTime object to add. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    var gtime1 = new GlideTime();
    gtime1.setValue("00:00:20");
    gdt.add(gtime1);
    var gtime2 = gdt.getTime();
    gs.info(gtime2.getByFormat('hh:mm:ss'));

Output

#### add(Number milliseconds)

Adds the specified number of milliseconds to the current GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | The number of milliseconds to add. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.getNumericValue());
    gdt.add(10);
    gs.info(gdt.getNumericValue());

Output

1314777600000 1314777600010

#### GlideDateTime()

Instantiates a new GlideDateTime object with the current date and time in Greenwich Mean Time (GMT).

Example

    var gdt = new GlideDateTime();

Output

#### GlideDateTime(GlideDateTime g)

Instantiates a new GlideDateTime object set to the time of the GlideDateTime object passed in the parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| g | GlideDateTime | The GlideDateTime object to use for setting the time of the new object. |

Example

    var start = new GlideDateTime("2011-01-01 12:00:00");
    var end = new GlideDateTime(start);
    gs.info(end);

Output

#### GlideDateTime(String value)

Instantiates a new GlideDateTime object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | String | A UTC date and time using the internal format yyyy-MM-dd HH:mm:ss. |

Example

    var gdt = new GlideDateTime("2011-01-01 12:00:00");

Output

#### addDaysLocalTime(Number days)

Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the local date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| days | Number | The number of days to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addDaysLocalTime(-1);
    gs.info(gdt.getLocalDate());

Output

2011-08-30

#### addDaysUTC(Number days)

Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| days | Number | The number of days to add. Use a negative number to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addDaysUTC(-1);
    gs.info(gdt.getDate());

Output

2011-08-30

#### addMonthsLocalTime(Number months)

Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the local date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| months | Number | The number of months to add. use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addMonthsLocalTime(2);
    gs.info(gdt.getDate());

Output

2011-10-31

#### addMonthsUTC(Number months)

Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| months | Number | The number of months to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addMonthsUTC(2);
    gs.info(gdt.getDate());

Output

#### addSeconds(Number seconds)

Adds the specified number of seconds to the current GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| seconds | Number | The number of seconds to add. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-12-07 08:00:00");
    gdt.addSeconds(1000);
    gs.info(gdt.getValue());

Output

2011-12-07 08:16:40

#### addWeeksLocalTime(Number weeks)

Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| weeks | Number | The number of weeks to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addWeeksLocalTime(-1);
    gs.info(gdt.getDate());

Output

2011-08-24

#### addWeeksUTC(Number weeks)

Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| weeks | Number | The number of weeks to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gdt.addWeeksUTC(-1);
    gs.info(gdt.getDate());

Output

2011-08-24

#### addYearsLocalTime(Number years)

Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts years using the local date and time values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| years | Number | The number of years to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2010-08-31 08:00:00");
    gdt.addYearsLocalTime(1);
    gs.info(gdt.getDate());

Output

2011-08-31

#### addYearsUTC(Number years)

Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted as being in the UTC time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| years | Number | The number of years to add. Use a negative value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2010-08-31 08:00:00");
    gdt.addYearsUTC(1);
    gs.info(gdt.getDate());

Output

2011-08-31

#### after(GlideDateTime gdt)

Determines if the GlideDateTime object occurs after the specified GlideDateTime.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gdt | GlideDateTime | The time to check against. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the GlideDateTime object's time is after the time specified by the parameter. |

Example

    var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
    var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
    gs.info(gdt1.after(gdt2)); 

Output

False

#### before(GlideDateTime gdt)

Determines if the GlideDateTime object occurs before the specified GlideDateTime.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gdt | GlideDateTime | The time to check against. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the GlideDateTime object's time is before the time specified by the parameter. |

Example

    var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
    var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
    gs.info(gdt1.before(gdt2));  

Output

True

#### compareTo(Object o)

Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | Date and time object in GlideDateTime format |

Return:

| Type | Description |
| --- | --- |
| Number | 
*   0 = Dates are equal
*   1 = The object's date is after the date specified in the parameter
*   \-1 = The object's date is before the date specified in the parameter

 |

Example

    var initDate = new GlideDateTime("2011-08-01 12:00:00");
    var compDate1 = new GlideDateTime("2011-08-01 12:00:00");
    var compDate2 = new GlideDateTime("2011-07-31 12:00:00");
    var compDate3 = new GlideDateTime("2011-08-04 16:00:00");
     
    gs.info(initDate.compareTo(compDate1)); // Equals (0)
    gs.info(initDate.compareTo(compDate2)); // initDate is after compDate2 (1)
    gs.info(initDate.compareTo(compDate3)); // initDate is before compDate3 (-1)

Output

#### equals(Object dateTime)

Compares a datetime with an existing value for equality.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| dateTime | GlideDateTime object or String | The datetime to compare. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if they are equal; otherwise, false. |

Example

    var gdt = new GlideDateTime("2011-08-31 00:00:00");
    gs.info(gdt.equals("2011-09-30 00:12:01"));

Output

false

#### getDate()

Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.

Return:

| Type | Description |
| --- | --- |
| GlideDate | The date in the system time zone. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.getDate());

Output

#### getDayOfMonthLocalTime()

Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The day of the month in the user's time zone, from 1 to 31. |

Example

    var gdt = new GlideDateTime("2011-12-02 12:00:00");
    gs.info(gdt.getDayOfMonthLocalTime());

Output

#### getDayOfMonthUTC()

Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The day of the month in the UTC time zone, from 1 to 31. |

Example

    var gdt = new GlideDateTime("2011-12-02 12:00:00");
    gs.info(gdt.getDayOfMonthUTC());

Output

02

#### getDayOfWeekLocalTime()

Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The day of week value, in the user's time zone, from 1 to 7. Monday equals 1, Sunday equals 7. |

Example

    var gdt = new GlideDateTime("2011-12-01 12:00:00");//Thursday
    gs.info(gdt.getDayOfWeekLocalTime());

Output

#### getDayOfWeekUTC()

Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The day of week value from 1 to 7. Monday equals 1, Sunday equals 7. |

Example

    var gdt = new GlideDateTime("2011-12-01 12:00:00");//Thursday
    gs.info(gdt.getDayOfWeekLocalTime());

Output

#### getDaysInMonthLocalTime()

Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The number of days in the current month in the user's time zone. |

Example

    var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
    gs.info(gdt.getDaysInMonthLocalTime());

Output

#### getDaysInMonthUTC()

Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone. |

Example

    var gdt = new GlideDateTime("2011-11-02 12:00:00"); //November
    gs.info(gdt.getDaysInMonthUTC());

Output

#### getDisplayValue()

Gets the date and time value in the current user's display format and time zone.

Return:

| Type | Description |
| --- | --- |
| String | The date and time in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.getDisplayValue()); //uses current user session time zone (US/Pacific)

Output

#### getDisplayValueInternal()

Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).

Return:

| Type | Description |
| --- | --- |
| String | The date and time values for the GlideDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00"); 
    gs.info(gdt.getDisplayValueInternal()); //uses current user session time zone (US/Pacific)

Output

#### getDSTOffset()

Gets the amount of time that daylight saving time is offset.

Return:

| Type | Description |
| --- | --- |
| Number | Amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time. |

Example

    var gdt = new GlideDateTime("2014-08-31 08:00:00"); 
    gs.info(gdt.getDSTOffset()); //uses current user session time zone (US/Pacific)

Output

#### getErrorMsg()

Gets the current error message.

Return:

| Type | Description |
| --- | --- |
| String | The error message. |

Example

    var gdt = new GlideDateTime(); 
    gdt.setDisplayValue("2011-aa-01 00:00:00"); 
    gs.info(gdt.getErrorMsg());

Output

Could not parse DateTime: 2011-aa-01 00:00:00

#### getInternalFormattedLocalTime()

Returns the object's time in the local time zone and in the internal format.

Return:

| Type | Description |
| --- | --- |
| String | The object's time in the local time zone and the internal format. |

#### getLocalDate()

Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.

Return:

| Type | Description |
| --- | --- |
| GlideDate | The date in the user's time zone. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.getLocalDate());

Output

#### getLocalTime()

Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone.

Return:

| Type | Description |
| --- | --- |
| GlideTime | The time in the user's time zone. |

Example

    var gdt = new GlideDateTime("2014-08-31 08:00:00");
    gt = gdt.getLocalTime();
    gs.info("local time is " + gt.getByFormat('hh:mm:ss'));

Output

#### getMonthLocalTime()

Gets the month stored by the GlideDateTime object, expressed in the current user's time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The numerical value of the month. |

Example

    var gdt = new GlideDateTime("2011-11-02 12:00:00"); //November
    gs.info(gdt.getMonthLocalTime());

Output

#### getMonthUTC()

Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | The numerical value of the month. |

Example

    var gdt = new GlideDateTime("2011-11-02 12:00:00"); //November
    gs.info(gdt.getMonthUTC());

Output

#### getNumericValue()

Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.

Return:

| Type | Description |
| --- | --- |
| Number | The number of milliseconds since January 1, 1970, 00:00:00 GMT. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.getNumericValue());

Output

#### getTime()

Returns a GlideTime object that represents the time portion of the GlideDateTime object.

Return:

| Type | Description |
| --- | --- |
| GlideTime | The Unix duration stamp in system format based on GMT time. |

Example

    var gdt = new GlideDateTime("2014-08-31 08:00:00");
    gt = gdt.getTime();
    gs.info(gt.getByFormat('hh:mm:ss'));

Output

#### getTZOffset()

Gets the time zone offset in milliseconds.

Return:

| Type | Description |
| --- | --- |
| Number | The number of milliseconds of time zone offset. |

Example

    var gdt = new GlideDateTime();
    gdt.getLocalTime(); // PST local time
    gs.info(gdt.getTZOffset());

Output

25200000

#### getUserFormattedLocalTime()

Returns the object's time in the local time zone and in the user's format.

Return:

| Type | Description |
| --- | --- |
| String | The object's time in the local time zone and in the user's format. |

#### getValue()

Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.

Return:

| Type | Description |
| --- | --- |
| String | The date and time value in the internal format and system time zone. |

Example

    var gdt = new GlideDateTime("2014-08-31 08:00:00");
    gs.info(gdt.getValue());

Output

#### getWeekOfYearLocalTime()

Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.

Return:

| Type | Description |
| --- | --- |
| Number | The number of the current week in local time. The highest week number in a year is either 52 or 53. |

Example

    var gdt = new GlideDateTime("2011-12-01 12:00:00");//49th week, 1st week in december 
    gs.info(gdt.getWeekOfYearLocalTime());

Output

#### getWeekOfYearUTC()

Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.

Return:

| Type | Description |
| --- | --- |
| Number | The number of the current week in UTC time. The highest week number in a year is either 52 or 53. |

Example

    var gdt = new GlideDateTime("2011-12-01 12:00:00");//49th week, 1st week in december 
    gs.info(gdt.getWeekOfYearUTC());

Output

#### getYearLocalTime()

Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.

Return:

| Type | Description |
| --- | --- |
| Number | Four-digit year value in the user's time zone. |

Example

    var gdt = new GlideDateTime("2011-11-02 12:00:00");
    gs.info(gdt.getYearLocalTime());

Output

#### getYearUTC()

Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.

Return:

| Type | Description |
| --- | --- |
| Number | 4-digit year value in the UTC time zone. |

Example

    var gdt = new GlideDateTime("2011-11-02 12:00:00"); 
    gs.info(gdt.getYearUTC());

Output

#### hasDate()

Determines if an object's date is set.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the object date is set; otherwise, returns false. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.hasDate());

Output

#### isDST()

Determines if an object's time uses a daylight saving offset.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the time is daylight saving; otherwise, returns false. |

Example

    var gdt = new GlideDateTime("2014-08-31 00:00:00");
    gs.info(gdt.isDST()); //true

Output

#### isValid()

Determines if a value is a valid date and time.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if value is valid; otherwise, returns false. |

Example

    var gdt = new GlideDateTime(); 
    gdt.setDisplayValue("2011-aa-01 00:00:00"); 
    gs.info(gdt.isValid());

Output

false

#### onOrAfter(GlideDateTime gdt)

Determines if the GlideDateTime object occurs on or after the specified GlideDateTime.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gdt | GlideDateTime | The time to check against. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the GlideDateTime object's time is on or after the time specified by the parameter. |

Example

    var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
    var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
    gs.info(gdt1.onOrAfter(gdt2));   

Output

False

#### onOrBefore(GlideDateTime gdt)

Determines if the GlideDateTime object occurs on or before the specified GlideDateTime.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gdt | GlideDateTime | The time to check against. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the GlideDateTime object's time is on or before the time specified by the parameter. |

Example

    var gdt1 = new GlideDateTime("2016-05-09 10:11:12");
    var gdt2 = new GlideDateTime("2017-06-12 15:11:12");
    gs.info(gdt1.onOrBefore(gdt2));   

Output

True

#### setDayOfMonthLocalTime(Number day)

Sets the day of the month to a specified value in the current user's time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| day | Number | The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setDayOfMonthLocalTime(9);
    gs.info(gdt.getDayOfMonthLocalTime());

Output

#### setDayOfMonthUTC(Number day)

Sets the day of the month to a specified value in the UTC time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| day | Number | The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setDayOfMonthUTC(9);
    gs.info(gdt.getDayOfMonthUTC());

Output

#### setDisplayValue(String asDisplayed)

Sets a date and time value using the current user's display format and time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| asDisplayed | String | The date and time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a workflow script, use variable.setDisplayValue(gs.nowDateTime);. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2014-02-02 12:00:00");
    gdt.setDisplayValue("2014-01-01 12:00:00");//uses current user session time zone (US/Pacific) 
    gs.info(gdt.getValue());

Output

#### setDisplayValue(String value, String format)

Sets a date and time value using the current user's time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the value parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | String | The date and time in the current user's time zone. |
| format | String | The date and time format to use to parse the value parameter. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-02-02 12:00:00");
    gdt.setDisplayValue("20-5-2011 12:00:00", "dd-MM-yyyy HH:mm:ss"); //uses current user session time zone (US/Pacific)
    gs.info(gdt.getValue());

Output

#### setDisplayValueInternal(String value)

Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | String | The date and time in internal format. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2014-02-02 12:00:00");
    gdt.setDisplayValueInternal("2014-01-01 12:00:00"); //uses current user session time zone (US/Pacific)
    gs.info(gdt.getValue());

Output

#### setGlideDateTime(GlideDateTime g)

Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| g | GlideDateTime | The object to use for setting the datetime value. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var dt1 = new GlideDateTime("2011-01-01 12:00:00");
    var dt2 = new GlideDateTime("2011-02-02 08:00:00");
    dt1.setGlideDateTime(dt2);
    gs.info(dt1.getValue());

Output

#### setMonthLocalTime(Number month)

Sets the month stored by the GlideDateTime object to the specified value using the current user's time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| month | Number | The month to change to. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setMonthLocalTime(1);
    gs.info(gdt.getMonthLocalTime());

Output

1

#### setMonthUTC(Number month)

Sets the month stored by the GlideDateTime object to the specified value using the UTC time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| month | Number | The month to change to. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setMonthUTC(1);
    gs.info(gdt.getMonthUTC());

Output

1

#### setValue(String o)

Sets the date and time of the GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | String | The date and time to use. This parameter may be one of several types:
*   A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss. Sets the value of the object to the specified date and time. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(String value) constructor. If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats. Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format, use etValueUTC(String dt, String format) instead.
*   A GlideDateTime object. Sets the value of the object to the date and time stored by the GlideDateTime passed in the parameter. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(GlideDateTime g) constructor.
*   A JavaScript Number. Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT.

 |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-01-01 12:00:00");
    gdt.setValue("2011-02-02 08:00:00");  // value set =  2011-02-02 08:00:00
    gs.info(gdt.getValue());

Output

#### setValueUTC(String dt, String format)

Sets a date and time value using the UTC time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the dt parameter does not match the format parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| dt | String | The date and time to use. |
| format | String | The date and time format to use. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-01-01 12:00:00");
    gdt.setValueUTC("15-02-2011 08:00:00", "dd-MM-yyyy HH:mm:ss");
    gs.info(gdt.getValue());

Output

#### setYearLocalTime(Number year)

Sets the year stored by the GlideDateTime object to the specified value using the current user's time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| year | Number | The year to change to. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setYearLocalTime(2013);
    gs.info(gdt.getYearLocalTime());

Output

2013

#### setYearUTC(Number year)

Sets the year stored by the GlideDateTime object to the specified value using the UTC time zone.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| year | Number | The year to change to. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime();
    gdt.setYearUTC(2013);
    gs.info(gdt.getYearUTC());

Output

2013

#### subtract(GlideDateTime start, GlideDateTime end)

Gets the duration difference between two GlideDateTime values.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| Start | GlideDateTime | The start value. |
| End | GlideDateTime | The end value. |

Return:

| Type | Description |
| --- | --- |
| GlideDuration | The duration between the two values. |

Example

    var gdt1 = new GlideDateTime("2011-08-28 09:00:00");
    var gdt2 = new GlideDateTime("2011-08-31 08:00:00");
     
    var dur = GlideDateTime.subtract(gdt1, gdt2); //the difference between gdt1 and gdt2
    gs.info(dur.getDisplayValue());

Output

2 Days 23 Hours

#### subtract(GlideTime time)

Subtracts a specified amount of time from the current GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| time | GlideTime | The time value to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    var gtime1 = new GlideTime();
    gtime1.setValue("00:00:20");
    gdt.subtract(gtime1);
    var gtime2 = gdt.getTime();
    gs.info(gtime2.getByFormat('hh:mm:ss'));

Output

07:59:40

#### subtract(Number milliseconds)

Subtracts the specified number of milliseconds from the GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | The number of milliseconds to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gdt = new GlideDateTime("2011-12-07 08:00:00");
    gdt.subtract(1000);
    gs.info(gdt.getValue());

Output

2011-12-07 07:59:59

#### toString()

Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to getValue().

Return:

| Type | Description |
| --- | --- |
| String | The date and time stored by the GlideDateTime object in the system time zone and format. |

Example

    var gdt = new GlideDateTime("2011-08-31 08:00:00");
    gs.info(gdt.toString());

Output