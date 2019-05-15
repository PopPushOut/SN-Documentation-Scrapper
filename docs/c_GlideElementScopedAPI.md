GlideElement
------------

The Scoped GlideElement API provides a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord.

#### canCreate()

Determines if the user's role permits the creation of new records in this field.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the field can be created, false otherwise. |

#### canRead()

Indicates whether the user's role permits them to read the associated GlideRecord.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the field can be read, false otherwise. |

#### canWrite()

Determines whether the user's role permits them to write to the associated GlideRecord.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user can write to the field, false otherwise. |

#### changes()

Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the fields have been changed, false if the field has not. |

Example

    // This method is often used in business rules. The following example shows is from a business rule, 
    // if "assigned_to" field value is changed, create a event in the EventQueue. 
    if (!current.assigned_to.nil() && current.assigned_to.changes()) {
      gs.eventQueue('incident.assigned', current, current.assigned_to.getDisplayValue() , previous.assigned_to.getDisplayValue());
      }

Output

#### changesFrom(Object o)

Determines if the previous value of the current field matches the specified object.

Note: If the GlideRecord on which you are performing this method has only been initialized and read, and has not been written, the underlying before-and-after values are the same. In this case, the method returns "false", as there has been no change to the data store.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | An object value to check against the previous value of the current field. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the previous value matches, false if it does not. |

Example

    / The following example shows that in a business rule, if "active" field is changed from true, 
    // insert a event in the EventQueue.
    if (current.active.changesFrom(true)) {
      gs.eventQueue("incident.inactive", current, current.incident_state, previous.incident_state);
    }

Output

#### changesTo(Object o)

Determines if the new value of a field, after a change, matches the specified object.

Note: The changesTo() method is not supported within ACL scripts.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| o | Object | An object value to check against the new value of the current field. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the previous value matches, false if it does not. |

Example

    // The following example shows that in a business rule, if "active" field is changed to false, 
    // insert a event in the EventQueue.
    if (current.active.changesTo(false)) {
      gs.eventQueue("incident.inactive", current, current.incident_state, previous.incident_state);
    }

Output

#### getAttribute(String attributeName)

Returns the value of the specified attribute from the dictionary.

If the attribute is a boolean attribute, use getBooleanAttribute(String) to get the value as a boolean rather than as a string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| attributeName | String | Attribute name |

Return:

| Type | Description |
| --- | --- |
| String | Attribute value |

Example

    doit();
    function doit() {
      var gr = new GlideRecord('sys_user');
      gr.query("user_name","admin");
      if (gr.next()) {
        gs.print("we got one");
        gs.print(gr.location.getAttribute("tree_picker"));
      }
     
    }

Output

#### getBooleanAttribute(String attributeName)

Returns the Boolean value of the specified attribute from the dictionary.

To get the value as a string, use getAttribute(string).

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| attributeName | String | Attribute name |

Return:

| Type | Description |
| --- | --- |
| Boolean | Boolean value of the attribute. Returns false if the attribute does not exist. |

#### getChoices(String dependent)

Generates a choice list for a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| dependent | String | Optional: a dependent value |

Return:

| Type | Description |
| --- | --- |
| Array | An array list of choices. |

Example

    var glideRecord = new GlideRecord('incident'); 
    glideRecord.query('priority','1'); 
    glideRecord.next(); 
     
    // urgency has choice list: 1 - High, 2 - Medium, 3 - Low, with value: 1, 2, 3
    var choices = glideRecord.urgency.getChoices(); 
    gs.info(choices);

Output

#### getChoiceValue()

Returns the choice label for the current choice.

A choice has a value (number) and a label (string). This method returns the label.

Return:

| Type | Description |
| --- | --- |
| String | The selected choice's label. |

Example

    var glideRecord = new GlideRecord('incident'); 
    glideRecord.query('priority','1'); 
    glideRecord.next(); 
     
    // urgency has choice list: 1 - High, 2 - Medium, 3 - Low, with value: 1, 2, 3
    var choiceLabel = glideRecord.urgency.getChoiceValue(); 
    gs.info(choiceLabel);

Output

1 - High

#### getDecryptedValue()

Returns the clear text value for Password (2 way encrypted) fields in scoped applications.

Return:

| Type | Description |
| --- | --- |
| String | The clear text password. |

Example

    var tablename = 'x_scoped_app_table'
    var CI = new GlideRecord(tablename);  
    CI.addQuery('number', '0001002'); 
    CI.query(); 
    CI.next(); 
    
    var password = CI.password_field
    var decrypted = password.getDecryptedValue(); 
    gs.info(decrypted);

Output

#### getDisplayValue(Number maxCharacters)

Gets the formatted display value of the field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| maxCharacters | Number | Optional: Maximum characters desired |

Return:

| Type | Description |
| --- | --- |
| String | The display value of the field |

Example

    var glideRecord = new GlideRecord('incident');
    glideRecord.query('priority','1');
    glideRecord.next();
    gs.info(glideRecord.priority.getDisplayValue());

Output

#### getED()

Returns the field's element descriptor.

Return:

| Type | Description |
| --- | --- |
| Scoped GlideElementDescriptor | The field's element descriptor. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
     
    var field = grInc.getElement('priority');
    var ed = field.getED();

Output

#### getGlobalDisplayValue()

Returns the phone number in international format.

Return:

| Type | Description |
| --- | --- |
| String | The phone number in international format. |

#### getHTMLValue(Number maxChars)

Returns the HTML value of a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| maxChars | Number | Optional. Maximum number of characters to return. |

Return:

| Type | Description |
| --- | --- |
| String | HTML value for the field. |

Example

    var inccause = new GlideRecord("incident");
    inccause.short_description = current.short_description;
    inccause.comments = current.comments.getHTMLValue();
    inccause.insert();

Output

#### getJournalEntry(Number mostRecent)

Returns either the most recent journal entry or all journal entries.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| mostRecent | Number | If 1, returns the most recent entry. If -1, returns all journal entries. |

Return:

| Type | Description |
| --- | --- |
| String | 
For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.

For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\\n\\n".

 |

Example

    //gets all journal entries as a string where each entry is delimited by '\n\n'
    var notes = current.work_notes.getJournalEntry(-1); 
    //stores each entry into an array of strings
    var na = notes.split("\n\n");  
                          
    for (var i = 0; i < na.length; i++)                 
      gs.print(na[i]);

Output

#### getLabel()

Returns the object label.

Return:

| Type | Description |
| --- | --- |
| String | Object label |

Example

    var gr = new GlideRecord("sc_req_item");
    gr.addQuery("request", current.sysapproval);
    gr.query();
    while(gr.next()) {
        var nicePrice = gr.price.toString();
        if (nicePrice != ) {
            nicePrice = parseFloat(nicePrice);
            nicePrice = nicePrice.toFixed(2);
        }
        template.print(gr.number + ":  " + gr.quantity + " X " + gr.cat_item.getDisplayValue() + " at $" + nicePrice + " each \n");
        template.print("    Options:\n");
        var variables = gr.variables.getElements();    
        for (var index in variables) {
          var v = variables [key];
          if(v.getQuestion().getLabel() != ) {
             template.space(4);
             template.print('     ' +  v.getQuestion().getLabel() + " = " + v.getDisplayValue() + "\n");  
          }
        }
    }

Output

#### getName()

Returns the name of the field.

Return:

| Type | Description |
| --- | --- |
| String | Field name |

#### getReferenceTable()

Gets the table name for a reference element.

Return:

| Type | Description |
| --- | --- |
| String | The table name of the reference |

Example

    var grINC = new GlideRecord('incident');
    grINC.query('number','INC0010041'); // record assignment group assigned to "CAB Approval"
    if (grINC.next()) { 
      // Get the table name 
      var tableName = grINC.assignment_group.getReferenceTable();
      gs.info( tableName ); 
    }

Output

#### getRefRecord()

Returns a GlideRecord object for a given reference element.

Return:

| Type | Description |
| --- | --- |
| GlideRecord | A GlideRecord object |

Example

    
    var grINC = new GlideRecord('incident'); 
    grINC.notNullQuery('caller_id'); 
    grINC.query(); 
    if (grINC.next()) { 
    
    // Get a GlideRecord object for the referenced sys_user record 
    var grUSER = grINC.caller_id.getRefRecord(); 
    if (grUSER.isValidRecord()) 
      gs.print( grUSER.getValue('name') ); 
    
    } 

Output

#### getTableName()

Returns the name of the table on which the field resides.

Return:

| Type | Description |
| --- | --- |
| String | Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation. |

Example

    if (current.approver.getTableName() == "sysapproval_approver") {
      if (current.approver == email.from_sys_id)  {
         current.comments = "reply from: " + email.from + "\n\n" + email.body_text;
     
       // if it's been cancelled, it's cancelled.
      var doit = true;
      if (current.state=='cancelled')
          doit = false;
     
      if (email.body.state != undefined)
         current.state= email.body.state;
     
       if (doit)
          current.update();
    } else {
       gs.log("Approval for task ("+current.sysapproval.getDisplayValue()+") rejected because user sending 
               email( "+email.from+") does not match the approver ("+current.approver.getDisplayValue()+")");
    }
     
    }

Output

#### nil()

Determines if a field is null.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the field is null or an empty string, false if not. |

Example

    var glideRecord = new GlideRecord('incident'); 
    glideRecord.query('priority','1'); 
    glideRecord.next(); 
    gs.info(glideRecord.state.nil());

Output

#### setDateNumericValue(Number milliseconds)

Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.

When called, setDateNumericValue() automatically creates the necessary GlideDateTime/GlideDate/GlideDuration object, and then sets the element to the specified value.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | Number of milliseconds since 1/1/1970 |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord("incident");
    gr.initialize();
    gr.opened_at.setDateNumericValue(10000);

Output

#### setDisplayValue(Object value)

Sets the display value of the field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | Object | The value to set for the field. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var glideRecord = new GlideRecord('incident'); 
    glideRecord.query('priority','1'); 
    glideRecord.next();
     
    //change the urgency to 3 
    glideRecord.urgency.setDisplayValue('3 - Low');
    gs.info(glideRecord.urgency);

Output

#### setError(String errorMessage)

Adds an error message. Available in Fuji patch 3.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| errorMessage | String | The error message. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var glideRecord = new GlideRecord('incident');
    glideRecord.query('priority','1');
    glideRecord.next();
     
    glideRecord.short_description.setError('Error text');

Output

#### setPhoneNumber(Object phoneNumber, Boolean strict)

Sets the field to the specified phone number.

This method is only available on a phone number GlideElement.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| phoneNumber | Object | The phone number to set. This can be in either the international or local format. |
| strict | Boolean | When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the value was set. |

#### setValue(Object value)

Sets the value of a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | Object | Object value to set the field to. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var glideRecord = new GlideRecord('incident');
    glideRecord.query('priority','1');
    glideRecord.next();
    glideRecord.short_description.setValue('Network failure');
    gs.info(glideRecord.short_description);

Output

#### toString()

Converts the value to a string.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| value | Object | Object value to set the field to. |

Return:

| Type | Description |
| --- | --- |
| String | The value as a string |

Example

    var glideRecord = new GlideRecord('incident');
    glideRecord.query('priority','1');
    glideRecord.next();
    gs.info(glideRecord.opened_at.toString());

Output