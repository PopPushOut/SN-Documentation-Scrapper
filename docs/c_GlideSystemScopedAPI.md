GlideSystem
-----------

The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.

Many of the GlideSystem methods facilitate the easy inclusion of dates in query ranges, and are most often used in filters and reporting.

#### addErrorMessage(Object message)

Adds an error message for the current session.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | Object | The message to add. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.include("PrototypeServer");
      var ValidatePasswordStronger = Class.create();
      ValidatePasswordStronger.prototype = {
           process : function() {
              var user_password = request.getParameter("user_password");
              var min_len = 8;
              var rules = "Password must be at least " + min_len + 
                 " characters long and contain a digit, an uppercase letter, and a lowercase letter.";
              if (user_password.length() < min_len) {
                 gs.addErrorMessage("TOO SHORT: " + rules);
                 return false;
              }
              var digit_pattern = new RegExp("[0-9]", "g");
              if (!digit_pattern.test(user_password)) {
                 gs.addErrorMessage("DIGIT MISSING: " + rules);
                 return false;
              }
              var upper_pattern = new RegExp("[A-Z]", "g");
              if (!upper_pattern.test(user_password)) {
                 gs.addErrorMessage("UPPERCASE MISSING: " + rules);
                 return false;
              }
              var lower_pattern = new RegExp("[a-z]", "g");
              if (!lower_pattern.test(user_password)) {
                 gs.addErrorMessage("LOWERCASE MISSING: " + rules);
                 return false;
              }
              return true; // password is OK
           }
      }

Output

#### addInfoMessage(Object message)

Adds an info message for the current session. This method is not supported for asynchronous business rules.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | Object | An info message object. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    if ((!current.u_date1.nil()) && (!current.u_date2.nil())) {
      var start = current.u_date1.getGlideObject().getNumericValue();
      var end = current.u_date2.getGlideObject().getNumericValue();
      if (start > end) {
        gs.addInfoMessage('start must be before end');
        current.u_date1.setError('start must be before end');
        current.setAbortAction(true);
      }
    }

Output

#### base64Decode(String source)

Returns an ASCII string from the specified base64 string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | A base64 encoded string. |

Return:

| Type | Description |
| --- | --- |
| String | The decoded string. |

#### base64Encode(String source)

Creates a base64 string from the specified string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| source | String | The string to be encoded. |

Return:

| Type | Description |
| --- | --- |
| String | The base64 string. |

#### beginningOfLastMonth()

Returns the date and time for the beginning of last month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of last month, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfLastWeek()

Returns the date and time for the beginning of last week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of last week, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfNextMonth()

Returns the date and time for the beginning of next month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of next month, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfNextWeek()

Returns the date and time for the beginning of next week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | The GMT beginning of next week, in the format yyyy-mm-dd hh:mm:ss. |

#### beginningOfNextYear()

Returns the date and time for the beginning of next year in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of next year, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfThisMonth()

Returns the date and time for the beginning of this month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of this month, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfThisQuarter()

Returns the date and time for the beginning of this quarter in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of this quarter, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfThisWeek()

Returns the date and time for the beginning of this week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of this week, in the format yyyy-mm-dd hh:mm:ss |

#### beginningOfThisYear()

Returns the date and time for the beginning of this year in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of this year, in the format yyyy-mm-dd hh:mm:ss |

#### dateGenerate(String date, String range)

Generates a date and time for the specified date in GMT.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| date | String | Format: yyyy-mm-dd |
| range | String | Start, end, or a time in the 24 hour format hh:mm:ss. |

Return:

| Type | Description |
| --- | --- |
| String | A date and time in the format yyyy-mm-dd hh:mm:ss. If range is start, the returned value is yyyy-mm-dd 00:00:00; If range is end the return value is yyyy-mm-dd 23:59:59. |

#### daysAgo(Number days)

Returns the date and time for a specified number of days ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| days | Number | Integer number of days |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

Example

    function contractNoticeDue() {
        var gr = new GlideRecord("contract");
        gr.addQuery("u_contract_status", "Active");
        gr.query();
        while (gr.next()) {
            if ((gr.u_termination_date <= gs.daysAgo(-90)) && (gr.u_contract_duration == "Long")) {
                gr.u_contract_status = "In review";
            } 
            else if ((gr.u_termination_date <= gs.daysAgo(-50)) && (gr.u_contract_duration == "Medium")) {
                gr.u_contract_status = "In review";
            } 
            else if ((gr.u_termination_date <= gs.daysAgo(-10)) && (gr.u_contract_duration == "Short")) {
                gr.u_contract_status = "In review";
            }
        }
        gr.update();
    }

Output

#### daysAgoEnd(Number days)

Returns the date and time for the end of the day a specified number of days ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| days | Number | Integer number of days |

Return:

| Type | Description |
| --- | --- |
| String | GMT end of the day in the format yyyy-mm-dd hh:mm:ss |

#### daysAgoStart(Number days)

Returns the date and time for the beginning of the day a specified number of days ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| days | String | Integer number of days |

Return:

| Type | Description |
| --- | --- |
| String | GMT start of the day in the format yyyy-mm-dd hh:mm:ss |

Example

    var gr = new GlideRecord('sysapproval_approver');
    gr.addQuery('state', 'requested');
    gr.addQuery('sys_updated_on', '<', gs.daysAgoStart(5));
    gr.query();

Output

#### debug(String message, Object parm1, Object parm2, Object parm3, Object parm4, Object parm5)

Writes a debug message to the system log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The log message with place holders for any variable arguments. |
| param1 | Object | (Optional) First variable argument. |
| param2 | Object | (Optional) Second variable argument. |
| param3 | Object | (Optional) Third variable argument. |
| param4 | Object | (Optional) Fourth variable argument. |
| param5 | Object | (Optional) Fifth variable argument. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.debug("This is a debug message");
    var myFirstName = "Abel";
    var myLastName = "Tuter";
    gs.debug("This is a debug message from {0}.{1}", myFirstName, myLastName);

Output

#### endOfLastMonth()

Returns the date and time for the end of last month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT end of last month, in the format yyyy-mm-dd hh:mm:ss |

#### endOfLastWeek()

Returns the date and time for the end of last week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT end of last week, in the format yyyy-mm-dd hh:mm:ss |

#### endOfLastYear()

Returns the date and time for the end of last year in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in format yyyy-mm-dd hh:mm:ss |

#### endOfNextMonth()

Returns the date and time for the end of next month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfNextWeek()

Returns the date and time for the end of next week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfNextYear()

Returns the date and time for the end of next year in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfThisMonth()

Returns the date and time for the end of this month in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfThisQuarter()

Returns the date and time for the end of this quarter in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfThisWeek()

Returns the date and time for the end of this week in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### endOfThisYear()

Returns the date and time for the end of this year in GMT.

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### error(String message, Object parm1, Object parm2, Object parm3, Object parm4, Object parm5)

Writes an error message to the system log.

This method accepts up to five variable arguments (varargs) in the message using the Java MessageFormat placeholder replacement pattern.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The log message with place holders for any variable arguments. |
| param1 | Object | (Optional) First variable argument. |
| param2 | Object | (Optional) Second variable argument. |
| param3 | Object | (Optional) Third variable argument. |
| param4 | Object | (Optional) Fourth variable argument. |
| param5 | Object | (Optional) Fifth variable argument. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.error("This is an error message");
    var myFirstName = "Abel";
    var myLastName = "Tuter";
    gs.error("This is an error message from {0}.{1}", myFirstName, myLastName);

Output

#### eventQueue(String name, Object instance, String parm1, String parm2, String queue)

Queues an event for the event manager.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the event being queued. |
| instance | Object | GlideRecord object, such as "current". |
| parm1 | String | (Optional) Saved with the instance if specified. |
| parm2 | String | (Optional) Saved with the instance if specified. |
| queue | String | Name of the queue. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    if (current.operation() != 'insert' && current.comments.changes()) {
        gs.eventQueue('incident.commented', current, gs.getUserID(), gs.getUserName());
    }

Output

#### eventQueueScheduled(String name, Object instance, String parm1, String parm2, Object expiration)

Queues an event for the event manager at a specified date and time.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the event being queued. |
| instance | Object | GlideRecord object, such as "current". |
| parm1 | String | (Optional) Saved with the instance if specified. |
| parm2 | String | (Optional) Saved with the instance if specified. |
| expiration | Object | Date and time to process this event.. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### executeNow(GlideRecord job)

Executes a job for a scoped application.

You can only use this method on a job in the same application as the script calling this method.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| job | GlideRecord | The job to be run. |

Return:

| Type | Description |
| --- | --- |
| String | Returns the sysID of the scheduled job. Returns null if the job is global. |

#### generateGUID()

Generates a GUID that can be used when a unique identifier is required.

Return:

| Type | Description |
| --- | --- |
| String | A 32-character hexadecimal GUID. |

Example

    personalId = gs.generateGUID();
    gs.info(personalId);

Output

af770511ff013100e04bfffffffffff6

#### getCallerScopeName()

Gets the caller scope name; returns null if there is no caller.

Return:

| Type | Description |
| --- | --- |
| String | The caller's scope name, or null if there is no caller. |

Example

This example shows two script includes that are set to Accessible from all application scopes. One script include is created within app\_scope\_a.

    var Scopea = Class.create(); 
     
    Scopea.prototype = { 
        initialize: function() { 
        }, 
     
        callerScope: function() { 
            var scopeb = new app_scope_b.Scopeb(); 
            return scopeb.callerscope(); 
        }, 
     
        type: 'Scopea' 
    }

Output

Example

This example shoes another script include created within app\_scope\_b.

    var Scopeb = Class.create(); 
     
    Scopeb.prototype = { 
        initialize: function() { 
            this._constructorCallerScope = gs.getCallerScopeName(); 
        }, 
     
        callerscope: function() { 
            return gs.getCallerScopeName(); 
        }, 
     
        getConstructorCallerScope: function() { 
            return this._constructorCallerScope; 
        }, 
     
        type: 'Scopeb' 
    }

Output

Example

This script can be used within scope app\_scope\_a to get the scope name of the caller—in this case app\_scope\_b.

    gs.info(new Scopea().getCallerScopeName());

Output

#### getCssCacheVersionString()

Gets a string representing the cache version for a CSS file.

Return:

| Type | Description |
| --- | --- |
| String | The CSS cache version. |

Example

    var verStr = gs.getCssCacheVersionString();
    gs.info(verStr);

Output

\_d82979516f0171005be8883e6b3ee4cf&theme=

#### getCurrentApplicationId()

Gets the ID of the current application as set using the Application Picker.

Return:

| Type | Description |
| --- | --- |
| String | The current application's sys\_id, or global in none is set. |

Example

    var currentId = gs.getCurrentApplicationId();
    gs.info(currentId);

Output

04936cb16f30b1005be8883e6b3ee4e0

#### getCurrentScopeName()

Gets the name of the current scope.

Return:

| Type | Description |
| --- | --- |
| String | The current scope name. |

Example

    var currentScope = gs.getCurrentScopeName();
    gs.info(currentScope);

Output

#### getErrorMessages()

Returns the list of error messages for the session that were added by addErrorMessage().

Return:

| Type | Description |
| --- | --- |
| String | List of error messages |

#### getEscapedMessage(String id, Array args)

Retrieves a message from UI messages with HTML special characters replaced with escape sequences, for example, & becomes &amp;.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| id | String | The ID of the message. |
| args | Array | (Optional) a list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users. |

Return:

| Type | Description |
| --- | --- |
| String | The UI message with HTML special characters replaced with escape sequences. |

Example

    var myMessage = gs.geEscapedMessage("Hello {0}", ["mom"]);

Output

#### getMessage(String id, Array args)

Retrieves a message from UI messages.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| id | String | The ID of the message. |
| args | Array | (Optional) a list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users. |

Return:

| Type | Description |
| --- | --- |
| String | The UI message. |

Example

    var my_message = '${gs.getMessage("This is a message.")}'; 
    alert(my_message);

Output

#### getProperty(String key, Object alt)

Gets the value of a Glide property. If the property is not found, returns an alternate value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| key | String | The key for the property whose value should be returned. |
| alt | Object | (Optional) Alternate object to return if the property is not found. |

Return:

| Type | Description |
| --- | --- |
| String | The value of the Glide property, or the alternate object defined above. |

Example

    var attachment_link = gs.getProperty('glide.servlet.uri');
    gs.info(attachment_link);

Output

https://instance.service-now.com/

#### getSession()

Gets a reference to the current Glide session.

Return:

| Type | Description |
| --- | --- |
| String | A reference for the current session. |

Example

    if (!gs.hasRole("admin") && !gs.hasRole("user_admin") && gs.getSession().isInteractive()) {
      current.addQuery("active", "true");
    }

Output

#### getSessionID()

Retrieves the GlideSession session ID.

Return:

| Type | Description |
| --- | --- |
| String | The session ID. |

Example

    var myUserObject = gs.getSessionID();
    gs.info(myUserObject);

Output

#### getSessionToken()

This method is no longer available. Instead, use gs.getSession().getSessionToken().

Return:

| Type | Description |
| --- | --- |
| String | The session token. |

#### getTimeZoneName()

Returns the name of the time zone associated with the current user.

Return:

| Type | Description |
| --- | --- |
| String | The time zone name. |

Example

    gs.info(gs.getTimeZoneName());

Output

#### getUrlOnStack()

Gets the current URI for the session.

Return:

| Type | Description |
| --- | --- |
| String | The URI. |

Example

    gs.info(gs.getUrlOnStack());

Output

#### getUser()

Returns a reference to the scoped GlideUser object for the current user.

Return:

| Type | Description |
| --- | --- |
| GlideUser | Reference to a scoped user object. |

Example

    var myUserObject = gs.getUser();

Output

#### getUserDisplayName()

Gets the display name of the current user.

Return:

| Type | Description |
| --- | --- |
| String | The name field of the current user. Returns Abel Tuter, as opposed to abel.tuter. |

Example

    gs.info(gs.getUserDisplayName());

Output

#### getUserID()

Gets the sys\_id of the current user.

Return:

| Type | Description |
| --- | --- |
| String | The sys\_id of the current user. |

Example

    gs.info(gs.getUserID());

Output

#### getUserName()

Gets the user name, or user id, of the current user.

Return:

| Type | Description |
| --- | --- |
| String | The user name of the current user. |

Example

    gs.info(gs.getUserName());

Output

#### hasRole(Object role)

Determines if the current user has the specified role.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| role | Object | The role to check. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user had the role. Returns true for users with the administrator role. |

Example

    if (!gs.hasRole("admin") && !gs.hasRole("groups_admin")  && gs.getSession().isInteractive()) {
      var qc = current.addQuery("u_hidden", "!=", "true"); //cannot see hidden groups... 
      qc.addOrCondition("sys_id", "javascript:getMyGroups()"); //...unless in the hidden group
      gs.info("User has admin and groups admin roles");
    }
    else {
      gs.info("User does not have both admin and groups admin roles");
    }

Output

#### hoursAgo(Number hours)

Returns the date and time for a specified number of hours ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| hours | Number | Integer number of hours |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

Example

    if (current.operation() == 'insert') {
     // If no due date was specified, calculate a default
     if (current.due_date == '') {
     
      if (current.urgency == '1') {
       // Set due date to 4 hours ahead of current time
       current.due_date = gs.hoursAgo(-4);
      }
     
      if (current.urgency == '2') {
       // Set due date to 2 days ahead of current time
       current.due_date = gs.daysAgo(-2);
      }
     
      if (current.urgency == '3') {
       // Set due date to 7 days ahead of current time
       current.due_date = gs.daysAgo(-7);
      }
     }
    }

Output

#### hoursAgoEnd(Number hours)

Returns the date and time for the end of the hour a specified number of hours ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| hours | Number | Integer number of hours |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### hoursAgoStart(Number hours)

Returns the date and time for the start of the hour a specified number of hours ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| hours | Number | Integer number of hours |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### include(String name)

Provides a safe way to call from the sandbox, allowing only trusted scripts to be included.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name fo the script to include. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the include worked. |

Example

This example gets the PrototypeServer in the current script context.

    gs.include("PrototypeServer");

Output

#### info(String message, Object parm1, Object parm2, Object parm3, Object parm4, Object parm5)

Writes an info message to the system log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The log message with place holders for any variable arguments. |
| param1 | Object | (Optional) First variable argument. |
| param2 | Object | (Optional) Second variable argument. |
| param3 | Object | (Optional) Third variable argument. |
| param4 | Object | (Optional) Fourth variable argument. |
| param5 | Object | (Optional) Fifth variable argument. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.info("This is an info message");
    var myFirstName = "Abel";
    var myLastName = "Tuter";
    gs.info("This is an info message from {0}.{1}", myFirstName, myLastName);

Output

#### isDebugging()

Determines if debugging is active for a specific scope.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if either session debugging is active or the log level is set to debug for the specified scope. |

Example

    gs.debug("This is a log message");
    var myFirstName = "Abel";
    var myLastName = "Tuter";
    gs.debug("This is a log message from {0}.{1}", myFirstName, myLastName);
    gs.info(gs.isDebugging());

Output

#### isInteractive()

Checks if the current session is interactive. An example of an interactive session is when a user logs in normally. An example of a non-interactive session is using a SOAP request to retrieve data.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the session is interactive. |

Example

    if (!gs.hasRole("admin") && gs.getSession().isInteractive()) {
        var qc1 = current.addQuery('u_group',"");
        var gra = new GlideRecord('sys_user_grmember');
        gra.addQuery('user', gs.getUserID());
        gra.query();
        while (gra.next()) {
            qc1.addOrCondition('u_group', gra.group);
        }
    }

Output

#### isLoggedIn()

Determines if the current user is currently logged in.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current user is logged in. |

Example

    gs.info(gs.isLoggedIn());

Output

#### isMobile()

You can determine if a request comes from a mobile device.

This method can be used in UI action conditions and business rules.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the request comes from a mobile device; otherwise, false. |

Example

    if (gs.isMobile())
      gs.info("submitted from mobile UI");
     else 
       gs.info("NOT submitted from mobile UI");

Output

#### minutesAgoEnd(Number minutes)

Returns the date and time for the end of the minute a specified number of minutes ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| minutes | Number | Integer number of minutes |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### minutesAgoStart(Number minutes)

Returns the date and time for the start of the minute a specified number of minutes ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| minutes | Number | Integer number of minutes |

Return:

| Type | Description |
| --- | --- |
| String | GMT in the format yyyy-mm-dd hh:mm:ss |

#### monthsAgo(Number months)

Returns the date and time for a specified number of months ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| months | Number | Integer number of months |

Return:

| Type | Description |
| --- | --- |
| String | GMT on today's date of the specified month, in the format yyyy-mm-dd hh:mm:ss |

#### monthsAgoStart(Number months)

Returns the date and time for the start of the month a specified number of months ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| months | Number | Integer number of months |

Return:

| Type | Description |
| --- | --- |
| String | GMT start of the month the specified number of months ago, in the format yyyy-mm-dd hh:mm:ss |

#### nil(Object o)

Queries an object and returns true if the object is null, undefined, or contains an empty string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | The object to be checked. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the object is null, undefined, or contains an empty string; otherwise, returns false. |

Example

    var gr = new GlideRecord();
    gs.info(gs.nil(gr));

Output

#### quartersAgoEnd(Number quarters)

Returns the date and time for the last day of the quarter for a specified number of quarters ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| quarters | Number | Integer number of quarters |

Return:

| Type | Description |
| --- | --- |
| String | GMT end of the quarter that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss |

#### quartersAgoStart(Number quarters)

Returns the date and time for the first day of the quarter for a specified number of quarters ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| quarters | Number | Integer number of quarters |

Return:

| Type | Description |
| --- | --- |
| String | GMT end of the month that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss |

#### setProperty(String key, String value, String description)

Sets the specified key to the specified value if the property is within the script's scope.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| key | String | The key for the property to be set. |
| value | String | The value of the property to be set. |
| description | String | A description of the property. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.setProperty("glide.foo","bar","foo");
    gs.info(gs.getProperty("glide.foo"));

Output

bar

#### setRedirect(Object o)

Sets the redirect URI for this transaction, which then determines the next page the user will see.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | URI object or URI string to set as the redirect |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.setRedirect("com.glideapp.servicecatalog_cat_item_view.do?sysparm_id=d41ce5bac611227a0167f4bf8109bf70&sysparm_user=" 
    + current.sys_id + "&sysparm_email=" + current.email)

Output

#### tableExists(String name)

Determines if a database table exists.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the table to check for existence. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the table exists. False if the table was not found. |

Example

    gs.info(gs.tableExists('incident'));

Output

#### urlDecode(String url)

Replaces UTF-8 encoded characters with ASCII characters.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | A string with UTF-8 percent (%) encoded characters. |

Return:

| Type | Description |
| --- | --- |
| String | A string with encoded characters replaced with ASCII characters. |

#### urlEncode(String url)

Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | The string to be encoded. |

Return:

| Type | Description |
| --- | --- |
| String | A string with non-ASCII characters, unsafe ASCII characters, and spaces encoded. |

#### warn(String message, Object parm1, Object parm2, Object parm3, Object parm4, Object parm5)

Writes a warning message to the system log.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| message | String | The log message with place holders for any variable arguments. |
| param1 | Object | (Optional) First variable argument. |
| param2 | Object | (Optional) Second variable argument. |
| param3 | Object | (Optional) Third variable argument. |
| param4 | Object | (Optional) Fourth variable argument. |
| param5 | Object | (Optional) Fifth variable argument. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    gs.warn("This is a warning");
    var myFirstName = "Abel";
    var myLastName = "Tuter";
    gs.warn("This is a warning from {0}.{1}", myFirstName, myLastName);

Output

#### xmlToJSON(String xmlString)

Takes an XML string and returns a JSON object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xmlString | String | The XML string to be converted. |

Return:

| Type | Description |
| --- | --- |
| Object | A JSON object representing the XML string. Null if unable to process the XML string. |

Example

    var jsonObject = gs.xmlToJSON(xmlString);

Output

#### yearsAgo(Number years)

Returns a date and time for a certain number of years ago.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| years | Number | An integer number of years |

Return:

| Type | Description |
| --- | --- |
| String | GMT beginning of the year that is the specified number of years ago, in the format yyyy-mm-dd hh:mm:ss. |

#### yesterday()

Returns yesterday's time (24 hours ago).

Return:

| Type | Description |
| --- | --- |
| String | GMT for 24 hours ago, in the format yyyy-mm-dd hh:mm:ss |