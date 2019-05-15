GlideSchedule
-------------

The scoped GlideSchedule API provides methods for performing operations on GlideSchedule objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone.

#### add(GlideDateTime startDate, GlideDuration offSet)

Adds a new schedule segment to the current schedule.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| startDate | GlideDateTime | The starting date of the new schedule segment. |
| offSet | GlideDuration | The time offset of the new schedule segment. |

Return:

| Type | Description |
| --- | --- |
| GlideDateTime | The schedule updated with the new schedule segment. |

Example

    var startDate = new GlideDateTime('2014-01-02');
    var days = 2;
    var dur = new GlideDuration(60 * 60 * 24 * 1000 * days);
    var schedule = new GlideSchedule();
    var end = schedule.add(startDate, dur);
    gs.info(end);

Output

#### GlideSchedule()

Instantiates an empty GlideSchedule object.

#### GlideSchedule(String sysID, String timeZone)

Instantiates a GlideSchedule object and loads the schedule information. If a timezone is not specified or is nil, the current session timezone is used.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysID | String | The system ID for the schedule. |
| timeZone | String | The time zone. (Optional) |

Example

    var schedule = new GlideSchedule('090eecae0a0a0b260077e1dfa71da828', 'US/Pacific');

Output

#### duration(GlideDateTime startDate, GlideDateTime endDate)

Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| startDate | GlideDateTime | The starting datetime. |
| endDate | GlideDateTime | The ending datetime. |

Return:

| Type | Description |
| --- | --- |
| GlideDuration | The difference between the starting and ending datetime. |

Example

    var startDate = new GlideDateTime('2014-10-16 02:00:00');
    var endDate = new GlideDateTime('2014-10-18 04:00:00');
    var schedule = new GlideSchedule();
     
    schedule.load('090eecae0a0a0b260077e1dfa71da828'); // loads "8-5 weekdays excluding holidays" schedule
    var duration = schedule.duration(startDate, endDate);
    gs.info(duration.getDurationValue()); // gets the elapsed time in schedule

Output

#### getName()

Retrieves the schedule name.

Return:

| Type | Description |
| --- | --- |
| String | The name of the current schedule. |

Example

    sys_id ='04e664654a36232701a2247dcd8fc4cf'; // sys_id for "Application" schedule record
    var sched = new GlideSchedule(sys_id);
    gs.info(sched.getName());

Output

#### isInSchedule(GlideDateTime time)

Determines if the given datetime is within the current schedule.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| time | GlideDateTime | The datetime value to check. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the specified datetime is within the schedule; otherwise, false. |

Example

    var g = new GlideRecord('cmn_schedule');
    g.addQuery('type', 'blackout');
    g.query();
    if (g.next()) {
       var sched = new GlideSchedule(g.sys_id);
       var d = new GlideDateTime();
       d.setDisplayValue("2007-09-18 12:00:00");
       if (sched.isInSchedule(d)) 
          gs.info("Is in the schedule");
       else
          gs.info("Is NOT in the schedule");
    }

Output

#### isValid()

Determines if the current schedule is valid. A schedule is valid if it has at least one schedule span.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the schedule is valid. |

Example

    var g = new GlideRecord('cmn_schedule');
    g.addQuery('type', 'blackout');
    g.query();
    if (g.next()) {
       var sched = new GlideSchedule(g.sys_id);
       var d = new GlideDateTime();
       d.setDisplayValue("2007-09-18 12:00:00");
       if (sched.isValid()) 
          gs.info("Is valid");
     
       else
          gs.info("Is not valid");
    }

Output

#### load(String sysID, String timeZone, String excludeSpanID)

Loads a schedule with the schedule information.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysID | String | The system ID of the schedule. |
| timeZone | String | (Optional) The timezone. If a timezone is not specified, or is nil, the current session timezone is used for the schedule. |
| excludeSpanID | String | Any span to exclude. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var x = new GlideSchedule();
    x.load('08fcd0830a0a0b2600079f56b1adb9ae');

Output

#### setTimeZone(String timeZone)

Sets the timezone for the current schedule.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| timeZone | String | The timezone. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

This example sets the timezone for the schedule to US/Pacific.

    var schedule = new GlideSchedule();
    schedule.setTimeZone('US/Pacific');

Output

#### whenNext(GlideDateTime time, String timeZone)

Determines how much time (in milliseconds) until start time of the next schedule item.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| time | GlideDateTime | The time to be evaluated. |
| timeZone | String | The timezone. |

Return:

| Type | Description |
| --- | --- |
| Number | The number of milliseconds until the start time of the next schedule item. Returns -1 if never. |

Example

    var startDate = new GlideDateTime('2014-10-25 08:00:00');
    var glideSchedule = new GlideSchedule('08fcd0830a0a0b2600079f56b1adb9ae', 'UTC');
    gs.info(glideSchedule.whenNext(startDate));

Output