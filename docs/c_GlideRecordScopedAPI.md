GlideRecord
-----------

Scoped GlideRecord is used for database operations.

A GlideRecord contains both records and fields. For information about GlideRecordSecure, which is a class inherited from GlideRecord that performs the same functions as GlideRecord, and also enforces ACLs, see the [GlideServer APIs](https://docs.servicenow.com/bundle/madrid-application-development/page/script/glide-server-apis/topic/p_GlideServerAPIs.html) .  
  
Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.  
  
You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

#### addActiveQuery()

Adds a filter to return active records.

Return:

| Type | Description |
| --- | --- |
| QueryCondition | Filter to return active records. |

Example

    var inc = new GlideRecord('incident');
    inc.addActiveQuery();
    inc.query();

Output

#### addEncodedQuery(String query)

Adds an encoded query to other queries that may have been set.

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| query | String | An [encoded query string](https://docs.servicenow.com/bundle/madrid-platform-user-interface/page/use/using-lists/concept/c_EncodedQueryStrings.html) . |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var queryString = "priority=1^ORpriority=2";
    var gr = new GlideRecord('incident');
    gr.addEncodedQuery(queryString);
    gr.query();
    while (gr.next()) {
      gs.addInfoMessage(gr.number);
    }

Output

#### addFunction(Object function)

Applies a pre-defined GlideDBFunctionBuilder object to a record.

Use the GlideDBFunctionBuilder scoped class to define a function. After the function is defined, use the addFunction(Object function) method to apply the function to a record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| function | Object | A GlideDBFunctionBuilder object that defines a SQL operation. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myAddingFunction = functionBuilder.add();
    myAddingFunction = functionBuilder.field('order');
    myAddingFunction = functionBuilder.field('priority');
    myAddingFunction = functionBuilder.build();
    
    var gr = new GlideRecord('incident');
    gr.addFunction(myAddingFunction);
    gr.addQuery(myAddingFunction, '<', 5);
    gr.query();
    while(gr.next())
    gs.log(gr.getValue(myAddingFunction));
    

Output

\*\*\* Script: 1 \*\*\* Script: 4 \*\*\* Script: 3 \*\*\* Script: 1 \*\*\* Script: 1 \*\*\* Script: 2 \*\*\* Script: 1 \*\*\* Script: 1

#### GlideRecord(String tableName)

Creates an instance of the GlideRecord class for the specified table.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | The table to be used. |

Example

    var gr = new GlideRecord('incident');

Output

#### addJoinQuery(String joinTable, Object primaryField, Object joinTableField)

Adds a filter to return records based on a relationship in a related table.

You can use this method to find all the users that are in the database group via the \[sys\_user\_grmember\] table, or to find all problems that have an assigned incident via the incident.problem\_id relationship.

This is not a true database join; rather, addJoinQuery adds a subquery. So, while the result set is limited based on the join, the only fields that you have access to are those on the base table (those which are in the table with which the GlideRecord was initialized).

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| joinTable | String | Table name |
| primaryField | Object | (Optional) If other than sys\_id, the primary field |
| joinTableField | Object | (Optional) If other than sys\_id, the field that joins the tables. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | A filter that lists records where the relationships match. |

Example

Find problems that have an incident attached. This example returns problems that have associated incidents. However, it won't pull values from the incidents that are returned as a part of the query.

    var prob = new GlideRecord('problem');
    prob.addJoinQuery('incident');
    prob.query();

Output

Example

Find inactive problems with associated incidents

    // Look for Problem records that have associated Incident records
    var gr = new GlideRecord('problem');
    var grSQ = gr.addJoinQuery('incident');
     
    // Where the Problem records are "active=false"
    gr.addQuery('active', 'false');
     
    // And the Incident records are "active=true"
    grSQ.addCondition('active', 'true');
     
    // Query
    gr.query();
     
    // Iterate and output results
    while (gr.next()) {
        gs.info(gr.getValue('number'));
    }

Output

Example

Find problems that have incidents associated where the incident caller\_id field value matches that of the problem opened\_by field.

    var gr = new GlideRecord('problem'); 
    gr.addJoinQuery('incident', 'opened_by', 'caller_id'); 
    gr.query();

Output

#### addNotNullQuery(String fieldName)

A filter that specifies records where the value of the field passed in the parameter is not null.

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | The name of the field to be checked. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | A filter that specifies records where the value of the field passed in the parameter is not null. |

Example

    var target = new GlideRecord('incident'); 
    target.addNotNullQuery('short_description');
    target.query();   // Issue the query to the database to get all records where short_description is not null
    while (target.next()) {   
         // add code here to process the incident record
    }

Output

#### addNullQuery(String fieldName)

Adds a filter to return records where the value of the specified field is null.

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | The name of the field to be checked. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The query condition added to the GlideRecord. |

Example

    var target = new GlideRecord('incident'); 
    target.addNullQuery('short_description');
    target.query();   // Issue the query to the database to get all records where short_description is null
    while (target.next()) {   
       // add code here to process the incident record
    }

Output

#### addQuery(String name, Object value)

Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.

If you are familiar with SQL, this method is similar to the "where" clause. One or more addQuery() calls can be made in a single query; in this case the queries are AND'ed. If any of the query statements need to be OR'ed, use the GlideQueryCondition method [addOrCondition()](https://developer.servicenow.com/go_to_api.do?ID=r_ScopedGlideQueryConditionOrAddCondition_String_name_String_oper_Object_value&v=madrid).

When addQuery() is called with only two parameters, table field and comparison value, such as myObj.addQuery('category','Hardware');, the operator in this case is assumed to be "equal to".

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Table field name. |
| value | Object | Value on which to query (not case-sensitive). |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The query condition added to the GlideRecord. |

Example

    var rec = new GlideRecord('incident');
    rec.addQuery('active', true);
    rec.query();
    while (rec.next()) { 
      rec.active = false;
      gs.info('Active incident ' + rec.number + ' closed');
      rec.update();
    }

Output

#### addQuery(String name, String operator, Object value)

Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.

If you are familiar with SQL, this method is similar to the "where" clause. One or more addQuery() calls can be made in a single query; in this case the queries are AND'ed. If any of the query statements need to be OR'ed, use the GlideQueryCondition method [addOrCondition()](app.do#!/api_doc?v=madrid#r_ScopedGlideQueryConditionOrAddCondition_String_name_String_oper_Object_value "Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.").

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Table field name. |
| operator | String | Query operator. The available values are dependent on the data type of the value parameter.
Numbers:

*   \=
*   !=
*   \>
*   \>=
*   <
*   <=

Strings (must be in upper case):

*   \=
*   !=
*   IN
*   NOT IN
*   STARTSWITH
*   ENDSWITH
*   CONTAINS
*   DOES NOT CONTAIN
*   INSTANCEOF



 |
| value | Object | Value on which to query (not case-sensitive). |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The query condition that was added to the GlideRecord. |

Example

    var rec = new GlideRecord('incident');
    rec.addQuery('active',true);
    rec.addQuery('sys_created_on', ">", "2010-01-19 04:05:00");
    rec.query();
    while (rec.next()) { 
      rec.active = false;
      gs.info('Active incident ' + rec.number + ' closed');
      rec.update();
    }

Output

Example

Using the IN operator.

    var gr = new GlideRecord('incident');
    gr.addQuery('number','IN','INC00001,INC00002');
    gr.query();
    while(gr.next()) {
      //do something....
    }

Output

#### addQuery(String query)

Adds a filter to return records using an encoded query string.

Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.

You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| query | String | An [encoded query string](https://docs.servicenow.com/bundle/madrid-platform-administration/page/use/using-lists/concept/c_EncodedQueryStrings.html) . |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The query condition added to the GlideRecord. |

Example

    var rec = new GlideRecord('incident');
    rec.addQuery('active=true');
    rec.query();
    while (rec.next()) { 
      rec.active = false;
      gs.info('Active incident ' + rec.number + ' closed');
      rec.update();
    }

Output

#### canCreate()

Determines if the Access Control Rules, which include the user's roles, permit inserting new records in this table.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user's roles permit creation of new records in this table. |

Example

    var gr = new GlideRecord('incident');
    gs.info(gr.canCreate());

Output

#### canDelete()

Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user's roles permit deletions of records in this table. |

Example

    var att = new GlideRecord('sys_attachment');
    gs.info(att.canDelete());

Output

#### canRead()

Determines if the Access Control Rules, which include the user's roles, permit reading records in this table.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user's roles permit reading records from this table. |

Example

    var gr = new GlideRecord('incident');
    gs.info(gr.canRead());

Output

#### canWrite()

Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user's roles permit writing to records from this table. |

Example

    var gr = new GlideRecord('incident');
    gs.info(gr.canWrite());

Output

#### chooseWindow(Number firstRow, Number lastRow, Boolean forceCount)

Sets a range of rows to be returned by subsequent queries.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| firstRow | Number | The first row to include. |
| lastRow | Number | The last row to include. |
| forceCount | Boolean | If true, the getRowCount() method will return all possible records. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord('incident');
    gr.orderBy('number');
    gr.chooseWindow(2, 4);
    gr.query();
    if (gr.next()) { 
      gs.info(gr.number + ' is within window');
    }

Output

#### dateNumericValue()

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.

Return:

| Type | Description |
| --- | --- |
| Number | Number of milliseconds since January 1, 1970, 00:00:00 GMT. |

Example

    var inc = new GlideRecord('incident');
    inc.get('17c90efb13418700cc36b1422244b05d');
    gs.info(inc.calendar_duration.dateNumericValue());

Output

98000

#### deleteMultiple()

Deletes multiple records that satisfy the query condition.

This method does not delete attachments.

Do not use deleteMultiple() on tables with currency fields. Always delete each record individually. Also, do not use this method with the chooseWindow() or setLimit() methods when working with large tables.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord('incident')
    gr.addQuery('active','false'); //to delete all inactive incidents
    gr.deleteMultiple();

Output

#### deleteRecord()

Deletes the current record.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the record was deleted; false if no record was found to delete. |

Example

    var gr = new GlideRecord('incident')
    //to delete one record
    if (gr.get('99ebb4156fa831005be8883e6b3ee4b9'))
        gr.deleteRecord();
    }

Output

#### get(Object name, Object value)

Returns the specified record in an instantiated GlideRecord object.

If multiple records are found, use next() to access the additional records.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | Object | Optional. Name of the instantiated GlideRecord column to search for the specified value parameter. If only a single parameter is passed in, the method assumes that this parameter is sys\_id. |
| value | Object | Value to match. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Indicates whether the requested record was located:
*   true: record was found
*   false: record was not found

 |

Example

    var grIncident = new GlideRecord('incident');
    var returnValue = grIncident.get('99ebb4156fa831005be8883e6b3ee4b9');
    gs.info(returnValue); // logs true or false
    gs.info(grIncident.number); // logs Incident Number

Output

Example

    var grIncident = new GlideRecord('incident');
    var returnValue = grIncident.get('caller_id.name','Sylivia Wayland');
    gs.info(returnValue); // logs true or false
    gs.info(grIncident.number); // logs Incident Number

Output

#### getAttribute(String fieldName)

Returns the dictionary attributes for the specified field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | Field name for which to return the dictionary attributes |

Return:

| Type | Description |
| --- | --- |
| String | Dictionary attributes |

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

#### getClassDisplayValue()

Returns the table's label.

Return:

| Type | Description |
| --- | --- |
| String | Table's label |

#### getDisplayValue()

Retrieves the display value for the current record.

Return:

| Type | Description |
| --- | --- |
| String | The display value for the current record. |

Example

    var gr = new GlideRecord('incident');
    gr.get('sys_id','ef43c6d40a0a0b5700c77f9bf387afe3');
    gs.info(gr.getDisplayValue());

Output

#### getED()

Returns the element's descriptor.

Return:

| Type | Description |
| --- | --- |
| GlideElementDescriptor | Element's descriptor |

Example

    var totalCritical  = 0;
    var filledCritical = 0;
    var fields         = current.getFields();
     
    gs.print(fields);
     
    for (var num = 0; num < fields.size(); num++) {
     
    	gs.print("RUNNING ARRAY VALUE " + num);
     
    	var ed = fields.get(num).getED();
     
    	if(ed.hasAttribute("tiaa_critical")) {
    		gs.print("CRITICAL FIELD FOUND");
    		totalCritical ++;
     
    		if (!fields.get(num).isNil()) {
    			filledCritical ++;
    		}
    	}
     
    }
     
    var answer = 0;
    gs.print("TOTAL - " + totalCritical);
    gs.print("FILLED - " + filledCritical);
     
    if (filledCritical > 0 && totalCritical > 0) {
     
    	var pcnt = (filledCritical/totalCritical)*100;
    	answer = pcnt.toFixed(2);;
     
    }
     
    answer;

Output

#### getElement(String columnName)

Retrieves the GlideElement object for the specified field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| columnName | String | Name of the column to get the element from. |

Return:

| Type | Description |
| --- | --- |
| GlideElement | The GlideElement for the specified column of the current record. |

Example

    var elementName = 'short_description'; 
    var gr = new GlideRecord('incident'); 
    gr.initialize(); 
    gr.setValue(elementName, "My DB is not working");
    gr.insert();
    gs.info(gr.getElement('short_description'));

Output

#### getEncodedQuery()

Retrieves the query condition of the current result set as an encoded query string.

Return:

| Type | Description |
| --- | --- |
| String | The encoded query as a string. |

Example

    var gr = new GlideRecord('incident'); 
    gr.addQuery('active', true);
    gr.addQuery('priority', 1); 
    gr.query(); 
    var encodedQuery = gr.getEncodedQuery(); 
    gs.info(encodedQuery);

Output

active=true^priority=1

#### getLabel()

Returns the field's label.

Return:

| Type | Description |
| --- | --- |
| String | Field's label |

Example

    template.print("Summary of Requested items:\n");  
    var gr = new GlideRecord("sc_req_item");
    gr.addQuery("request", current.sysapproval);
    gr.query();
    while(gr.next()) {
        var nicePrice = gr.price.toString();
        if (nicePrice != '') {
            nicePrice = parseFloat(nicePrice);
            nicePrice = nicePrice.toFixed(2);
        }
        template.print(gr.number + ":  " + gr.quantity + " X " + gr.cat_item.getDisplayValue() 
                         + " at $" + nicePrice + " each \n");
        template.print("    Options:\n");
        for (key in gr.variables) {
          var v = gr.variables[key];
          if(v.getGlideObject().getQuestion().getLabel() != '') {
             template.space(4);
             template.print('     ' +  v.getGlideObject().getQuestion().getLabel() + " = " 
                         + v.getDisplayValue() + "\n");  
          }
        }
    }

Output

#### getLastErrorMessage()

Retrieves the last error message. If there is no last error message, null is returned.

Return:

| Type | Description |
| --- | --- |
| String | The last error message as a string. |

Example

    // Setup a data policy where short_description field in incident is mandatory
    var gr = new GlideRecord('incident');
    gr.insert(); // insert without data in mandatory field
    var errormessage = gr.getLastErrorMessage(); 
    gs.info(errormessage);

Output

Data Policy Exception: Short description is mandatory

#### getLink(Boolean noStack)

Retrieves a link to the current record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| noStack | Boolean | If true, the sysparm\_stack parameter is not appended to the link. The parameter sysparm\_stack specifies the page to visit after closing the current link. |

Return:

| Type | Description |
| --- | --- |
| String | A link to the current record as a string. |

Example

    gr = new GlideRecord('incident');
    gr.addActiveQuery();
    gr.addQuery("priority", 1);
    gr.query();
    gr.next()
    gs.info(gs.getProperty('glide.servlet.uri') + gr.getLink(false));

Output

/incident.do?sys\_id=9d385017c611228701d22104cc95c371&sysparm\_stack=incident\_list.do?sysparm\_query=active=true

#### getRecordClassName()

Retrieves the class name for the current record.

Return:

| Type | Description |
| --- | --- |
| String | The class name. |

Example

    var gr = new GlideRecord('incident'); 
    var recordClassName = gr.getRecordClassName(); 
    gs.info(recordClassName);

Output

incident

#### getRowCount()

Retrieves the number of rows in the query result.

Return:

| Type | Description |
| --- | --- |
| Number | The number of rows. |

Example

    var gr = new GlideRecord('incident')
    gr.query();
    gs.info("Records in incident table: " + gr.getRowCount());

Output

#### getTableName()

Retrieves the name of the table associated with the GlideRecord.

Return:

| Type | Description |
| --- | --- |
| String | The table name |

Example

    var gr = new GlideRecord('incident');
    gs.info(gr.getTableName());

Output

#### getUniqueValue()

Gets the primary key of the record, which is usually the sys\_id unless otherwise specified.

Return:

| Type | Description |
| --- | --- |
| String | The unique primary key as a String, or null if the key is null. |

Example

    var gr = new GlideRecord('kb_knowledge');
    gr.query();
    gr.next();
    var uniqueid = gr.getUniqueValue();
    gs.info(uniqueid);

Output

#### getValue(String name)

Retrieves the string value of an underlying element in a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the field to get the value from. |

Return:

| Type | Description |
| --- | --- |
| String | The value of the field. |

Example

    var gr = new GlideRecord('incident'); 
    gr.orderBy('number');
    gr.query('active','true'); 
    gr.next() ; 
    gs.info(gr.getValue('number'));

Output

#### hasNext()

Determines if there are any more records in the GlideRecord object.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if there are more records in the query result set. |

Example

    var rec = new GlideRecord('incident'); 
    rec.query(); 
    if (rec.hasNext()) { 
      gs.info("Table is not empty"); 
    }

Output

#### initialize()

Creates an empty record suitable for population before an insert.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord('incident');
    gr.initialize(); 
    gr.name='New Incident'; 
    gr.description='Incident description'; 
    gr.insert();

Output

#### insert()

Inserts a new record using the field values that have been set for the current record.

Return:

| Type | Description |
| --- | --- |
| String | Unique ID of the inserted record, or null if the record is not inserted. |

Example

    var gr = new GlideRecord('incident');
    gr.initialize(); 
    gr.name = 'New Incident'; 
    gr.description = 'Incident description'; 
    gr.insert();

Output

#### isActionAborted()

Checks to see if the current database action is to be aborted.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current database action is to be aborted |

Example

    var gr = new GlideRecord('incident');
     
    gs.info(gr.isActionAborted());

Output

false

#### isEncodedQueryValid(String query)

Verifies whether the specified encoded query is valid.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| query | String | Encoded query to validate. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Indicates whether the specified encoded query is valid.
*   true: passed-in encoded query is valid
*   false: passed-in encoded query is not valid

 |

Example

    var gr = new GlideRecord('incident_sla');
    var isValidQuery = gr.isEncodedQueryValid('inc_impact=1^taskslatable_active=true');
    if (isValidQuery) {
           gr.addEncodedQuery('inc_impact=1^taskslatable_active=true');
           gr.query();
           .
           .
           .
    }

Output

#### isNewRecord()

Checks if the current record is a new record that has not yet been inserted into the database.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the record is new and has not been inserted into the database. |

Example

    var gr = new GlideRecord("x_app_table"); 
    gr.newRecord(); // create a new record and populate it with default values
    gs.info(gr.isNewRecord());

Output

#### isValid()

Determines if the table exists.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if table is valid or if record was successfully retrieved. False if table is invalid or record was not successfully retrieved. |

Example

    var gr = new GlideRecord('incident');
    gs.info(gr.isValid());
     
    var anotherGr = new GlideRecord('wrong_table_name');
    gs.info(anotherGr.isValid());

Output

true false

#### isValidField(String columnName)

Determines if the specified field is defined in the current table.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| columnName | String | The name of the the field. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the field is defined for the current table. |

Example

    var gr = new GlideRecord('incident'); 
    gr.initialize(); 
    gs.info(gr.isValidField("short_description"));

Output

#### isValidRecord()

Determines if current record is a valid record.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current record is valid. False if past the end of the record set. |

Example

    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) { 
      gs.info(rec.number + ' exists');
    }
    gs.info(rec.isValidRecord());

Output

#### newRecord()

Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique ID to the record.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord("x_app_table"); 
    gr.newRecord(); 
    gs.info(gr.isNewRecord());

Output

true

#### next()

Moves to the next record in the GlideRecord object.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if moving to the next record is successful. False if there are no more records in the result set. |

Example

    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) { 
      gs.info(rec.number + ' exists');
    }

Output

#### operation()

Retrieves the current operation being performed, such as insert, update, or delete.

Return:

| Type | Description |
| --- | --- |
| String | The current operation. |

Example

    //Commonly used in a business rule, returns insert if the current operation is insert
    gs.info("current operation " + current.operation());

Output

#### orderBy(String name)

Specifies an orderBy column.

Call this method more than once to order by multiple columns. Results are arranged in ascending order, see orderByDesc(String name) to arrange records in descending order.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The column name used to order the records in this GlideRecord object. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var queryString = "priority=2"; 
    var gr = new GlideRecord('incident'); 
    gr.orderBy('short_description'); // Ascending Order
    gr.addEncodedQuery(queryString); 
    gr.query(); 
    while (gr.next()) { 
        gs.info(gr.short_description); 
    }

Output

#### orderByDesc(String name)

Specifies a decending orderBy column.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The column name to be used to order the records in a GlideRecord object. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var queryString = "priority=2"; 
    var gr = new GlideRecord('incident'); 
    gr.orderByDesc('short_description'); //Descending Order
    gr.addEncodedQuery(queryString); 
    gr.query(); 
    while (gr.next()) { 
        gs.info(gr.short_description); 
    }

Output

#### query(Object field, Object value)

Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.

This queries the GlideRecord table as well as any references of the table. Usually this is performed without arguments. If name/value pair is specified, "name=value" condition is added to the query.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| field | Object | The column name to query on. |
| value | Object | The value to query for. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) { 
      gs.info(rec.number + ' exists');
    }

Output

#### setAbortAction(Boolean b)

Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted. This is often used in business rules.

Use in an onBefore business rule to prevent the database action from being done. The business rule continues to run after setAbortAction() is called. Calling setAbortAction() does not stop subsequent business rules from executing. Calling this method only prevents the database action from occurring.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| b | Boolean | True to abort the next action. False if the action is to be allowed. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    // Often used in business rule to check whether the current operation should be aborted.
    if (current.size > 16) {
      current.setAbortAction(true);
    }

Output

#### setDateNumericValue(Number milliseconds)

Sets the duration field to a number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | Number | Number of milliseconds spanned by the duration. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var inc = new GlideRecord('incident');
    inc.get('17c90efb13418700cc36b1422244b05d');
    var timems = inc.calendar_duration.dateNumericValue();
    timems = timems + 11*1000; 
    inc.calendar_duration.setDateNumericValue(timems)
    gs.info(inc.calendar_duration.getValue());

Output

1970-01-01 00:01:38

#### setLimit(Number maxNumRecords)

Sets the limit for number of records are fetched by the GlideRecord query.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| maxNumRecords | Number | The maximum number of records to fetch. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var gr = new GlideRecord('incident');
    gr.orderByDesc('sys_created_on');
    gr.setLimit(10);
    gr.query(); // this retrieves latest 10 incident records created

Output

#### setNewGuidValue(String guid)

Sets sys\_id value for the current record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| guid | String | The GUID to be assigned to the current record. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    ar gr = new GlideRecord('incident');
    gr.short_description='The third floor printer is broken';
    gr.setNewGuidValue('eb4636ca6f6d31005be8883e6b3ee333');
    gr.insert();
    gs.info(gr.sys_id);

Output

#### setValue(String name, Object value)

Sets the value of the field with the specified name to the specified value.

Normally the script does a gr.category = value. However, if the element name is itself a variable then gr.setValue(elementName, value) can be used. When setting a value, ensure the data type of the field matches the data type of the value you enter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the field. |
| value | Object | The value to assign to the field. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var elementName = 'short_description'; 
    var gr = new GlideRecord('incident'); 
    gr.initialize(); 
    gr.setValue(elementName, "My DB is not working");
    gr.insert();

Output

#### setWorkflow(Boolean enable)

Enables or disables the running of business rules, script engines, and audit.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| enable | Boolean | If true (default), enables business rules. If false, disables business rules. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    //Enable business rules, scripts engines for x_app_table
    var gr = new GlideRecord("x_app_table"); 
    gr.setWorkflow(true);

Output

#### update(String reason)

Updates the GlideRecord with any changes that have been made. If the record does not already exist, it is inserted.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| reason (Optional) | String | The reason for the update. The reason is displayed in the audit record. |

Return:

| Type | Description |
| --- | --- |
| String | Unique ID of the new or updated record. Returns null if the update fails. |

Example

    var gr = new GlideRecord('incident')
    gr.get('99ebb4156fa831005be8883e6b3ee4b9');
    gr.short_description='Update the short description';
    gr.update();
    gs.info(gr.getElement('short_description'));

Output

#### updateMultiple()

Updates each GlideRecord in the list with any changes that have been made.

When changing field values, use setValue() instead of directly setting the field (field = something). When using updateMultiple(), directly setting the field (gr. state = 4) results in all records in the table being updated instead of just the records returned by the query.

Do not use this method with the chooseWindow() or setLimit() methods when working with large tables.

This method sets new values and does not clear existing values.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    // update the state of all active incidents to 4 - "Awaiting User Info"
    var gr = new GlideRecord('incident')
    gr.addQuery('active', true);
    gr.query();
    gr.setValue('state',  4);
    gr.updateMultiple();

Output

#### \_next()

Moves to the next record in the GlideRecord. Provides the same functionality as next(), it is intended to be used in cases where the GlideRecord has a column named next.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if there are more records in the query set. |

Example

    var rec = new GlideRecord('sys_template');
    rec.query();
    while (rec._next()) { 
      gs.print(rec.number + ' exists');
    }

Output

#### \_query(Object field, Object value)

Identical to query(). This method is intended to be used on tables where there is a column named query, which would interfere with using the query() method.

Runs the query against the table based on the filters specified by the addQuery() and addEncodedQuery() methods. This method queries the GlideRecord table as well as any references of the table. Typically this method is called without arguments. If a name/value pair is specified, the "name=value" condition is added to the query.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | Object | Column name on which to query |
| value | Object | Value for which to query |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var rec = new GlideRecord('sys_app_module');
    rec._query();
    while (rec.next()) { 
     gs.print(rec.number + ' exists');
    }

Output