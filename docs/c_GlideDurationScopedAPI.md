GlideDuration
-------------

The scoped GlideDuration class provides methods for working with spans of time or durations.

GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the scoped GlideDateTime object for parameters and return values.

#### add(GlideDuration duration)

Add the specified duration to the object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| duration | GlideDuration | The value to add to the object. |

Return:

| Type | Description |
| --- | --- |
| GlideDuration | The sum of the current and the added duration. |

Example

    var duration = new GlideDuration('3 12:00:00');
    var duration2 = new GlideDuration('3:00:00');
    var answer = duration.add(duration2);
    gs.info(answer.getDisplayValue());

Output

#### GlideDuration()

Instantiates a GlideDuration object.

#### GlideDuration(GlideDuration another)

Instantiates a GlideDuration object by cloning the value of another GlideDuration object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| another | GlideDuration | Another scoped GlideDuration object. |

#### GlideDuration(Number milliseconds)

Instantiates a GlideDuration object with the specified duration.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | The duration value in milliseconds. |

#### GlideDuration(String displayValue)

Instantiates a GlideDuration object with the specified display value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| displayValue | String | The display value. |

#### getByFormat(String format)

Gets the duration in the specified format.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| format | String | The duration format. |

Return:

| Type | Description |
| --- | --- |
| String | The current duration in the specified format. |

Example

    var dur = new GlideDuration('3 22:00:00');
    gs.info(dur.getByFormat('HH:mm'));

Output

#### getDayPart()

Gets the number of days.

Return:

| Type | Description |
| --- | --- |
| Number | The number of days. |

Example

    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDayPart());

Output

#### getDisplayValue()

Gets the display value of the duration in number of days, hours, and minutes.

Return:

| Type | Description |
| --- | --- |
| String | The number of days, hours, and minutes. |

Example

    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDisplayValue());

Output

#### getDurationValue()

Gets the duration value in "d HH:mm:ss" format.

Return:

| Type | Description |
| --- | --- |
| String | The duration value. |

Example

    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDurationValue());

Output

#### getRoundedDayPart()

Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.

Return:

| Type | Description |
| --- | --- |
| Number | The day part, rounded. |

Example

    var dur = new GlideDuration('3 11:00:00');
    gs.info(dur.getRoundedDayPart());

Output

#### getValue()

Gets the internal value of the GlideDuration object.

GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00.

Return:

| Type | Description |
| --- | --- |
| String | The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00. |

Example

    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getValue());

Output

#### setDisplayValue(String asDisplayed)

Sets the display value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| asDisplayed | String | The duration in "d HH:mm:ss" format. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var dur = new GlideDuration(); 
    dur.setDisplayValue('3 08:00:00');
    gs.info(dur.getDisplayValue());

Output

#### setValue(Object o)

Sets the internal value of the GlideDuration object.

GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var dur = new GlideDuration();
    dur.setValue('1970-01-05 08:00:00'); // sets internal DateTime value. The String will be parsed into a GlideDateTime object.
    gs.info(dur.getDisplayValue());

Output

#### subtract(GlideDuration duration)

Subtracts the specified duration from the current duration.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| duration | GlideDuration | The duration to subtract. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var duration = new GlideDuration('3 12:00:00');
    var duration2 = new GlideDuration('3:00:00');
    var answer = duration.subtract(duration2);
    gs.info(answer.getDisplayValue());

Output