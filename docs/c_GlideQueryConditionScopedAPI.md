GlideQueryCondition
-------------------

The scoped GlideQueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries.

Build complex queries such as:

    category='hardware' OR category='software' AND priority='2' AND priority='1'

  
  
In the case of addCondition(), an implied AND is added.  
  
This class has no constructor. A GlideQueryCondition object is returned by the following methods:

*   addActiveQuery()
*   addInactiveQuery()
*   addJoinQuery()
*   addNotNullQuery()
*   addNullQuery()
*   addQuery()

  
  
If there is a complicated set of AND and OR queries, a single encoded query containing all conditions simplifies the query creation. To simplify the query creation, create a query in a list view, right-click the query, and select Copy query. It creates a single encoded query string to return your result set. Use that string as a parameter in an addEncodedQuery() call.  
  
Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.  
  
You can set the glide.invalid\_query.returns\_no\_rows system property to true to have queries with invalid encoded queries return no records.

#### addCondition(String name, String oper, Object value)

Adds an AND condition to the current condition.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of a field. |
| oper | String | (Optional) The operator for the query. If you do not specify an operator, the condition uses an equals operator. |
| value | Object | The value to query on. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | A reference to a GlideQueryConditon that was added to the GlideRecord. |

Example

    var gr = new GlideRecord('incident');
    var qc = gr.addQuery('category', 'Hardware');
    qc.addCondition('category', 'Network');
    gr.addQuery('number','INC0000003');
    gr.next();
    gr.number;
    gs.info(gr.getEncodedQuery());

Output

#### addOrCondition(String name, String oper, Object value)

Appends a 2-or-3 parameter OR condition to an existing GlideQueryCondition.

addOrCondition() works in conjunction with any of the [addQuery()](https://developer.servicenow.com/go_to_api.do?ID=r_ScopedGlideRecordAddQuery_String_String_Object&v=madrid) methods to OR the specified query parameters to the query previously constructed using addQuery().

addOrCondition() is typically called with three parameters; table field, operator, and comparison value. It can be called with only two parameters, table field and comparison value, such as qc.addOrCondition('category', 'software');. The operator in this case is assumed to be "equal to".

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Field name |
| oper | String | (Optional) Query operator. The available values are dependent on the data type of the value parameter.
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
*   STARTSWITH
*   ENDSWITH
*   CONTAINS
*   DOESNOTCONTAIN



 |
| value | Object | Value on which to query (not case-sensitive).

Note: All passed in arrays must contain a minimum of two elements. Single element arrays are not supported.

 |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | A reference to a GlideQueryConditon that was added to the GlideRecord. |

Example

    var gr = new GlideRecord('incident');
    var qc = gr.addQuery('category', 'Hardware');
    qc.addOrCondition('category', 'Network');
    gr.addQuery('number','INC0000003');
    gr.next();
    gr.number;
    gs.info(gr.getEncodedQuery());
    

Output

Example

To group AND/OR statements to make complex queries, such as "All incidents with a (state less than 3 OR greater than 5) AND (priority is 1 OR priority is 5)

    var myObj = new GlideRecord('incident');
    var q1 = myObj.addQuery('state', '<', 3);
    q1.addOrCondition('state', '>', 5);
    var q2 = myObj.addQuery('priority', 1);
    q2.addOrCondition('priority', 5);
    myObj.query();

Output