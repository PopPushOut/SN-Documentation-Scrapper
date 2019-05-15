GlideAggregate
--------------

GlideAggregate enables you to easily create database aggregation queries.

The scoped GlideAggregate class is an extension of GlideRecord and provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries. This functionality can be helpful when creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields.  
  
When you use GlideAggregate on currency or price fields, you are working with the reference currency value. Be sure to convert the aggregate values to the user's session currency for display. Because the conversion rate between the currency or price value (displayed value) and its reference [currency](https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/currency/concept/currency.html) value (aggregation value) might change, the result may not be what the user expects.  
  

Note: When using an on-premise system, the database server time zone must be set to GMT/UTC for this class to work properly.

#### GlideAggregate(String tableName)

Creates a GlideAggregate object on the specified table.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | Name of the table. |

Example

    var count = new GlideAggregate('incident');

Output

#### addAggregate(String agg, String name)

Adds an aggregate.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| agg | String | Name of the aggregate to add, for example, COUNT, MIN, or MAX |
| name | String | (Optional) Name of the column to aggregate. Null is the default. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('COUNT');
    count.query();
    var incidents = 0;
    if (count.next()) {
       incidents = count.getAggregate('COUNT');
    }
    //Number of incidents varies depending on the current state
    //of the incident table
    gs.info('Number of incidents: ' + incidents);

Output

#### addEncodedQuery(String query)

Adds an encoded query to the other queries that may have been set for this aggregate.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| query | String | An encoded query to add to the aggregate. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    //Number of incidents varies depending on the current state
    //of the incident table
    var count = new GlideAggregate('incident');
    count.addEncodedQuery('active=true');
    count.addAggregate('COUNT');
    count.query();
    var incidents = 0;
    if (count.next())
       incidents = count.getAggregate('COUNT');
    gs.info(incidents);

Output

#### addNotNullQuery(String fieldName)

Adds a not null query to the aggregate.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldname | String | The name of the field. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The scoped query condition. |

Example

    var count = new GlideAggregate('incident');
      count.addNotNullQuery('short_description');
      count.query();   // Issue the query to the database to get all records
      while (count.next()) {   
         // add code here to process the aggregate
      }

Output

#### addNullQuery(String fieldName)

Adds a null query to the aggregate.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | The name of the field. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The scoped query condition. |

Example

    var count = new GlideAggregate('incident');
      count.addNullQuery('short_description');
      count.query();   // Issue the query to the database to get all records
      while (count.next()) {   
         // add code here to process the aggregate
      }

Output

#### addQuery(String name, String operator, String value)

Adds a query to the aggregate.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The query to add. |
| operator | String | The operator for the query. |
| value | String | The list of values to include in the query. |

Return:

| Type | Description |
| --- | --- |
| GlideQueryCondition | The query condition. |

Example

    //Number of incidents varies depending on the current state
    //of the incident table
    var count = new GlideAggregate('incident');
    count.addQuery('active', '=','true');
    count.addAggregate('COUNT', 'category');
    count.query();  
    while (count.next()) {
       var category = count.category;
       var categoryCount = count.getAggregate('COUNT', 'category');
       gs.info("There are currently " + categoryCount + " incidents with a category of " + category);
    }

Output

#### addTrend(String fieldName, String timeInterval)

Adds a trend for a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | The name of the field for which trending should occur. |
| timeInterval | String | The time interval for the trend. The following choices are available: Year, Quarter, Date, Week, DayOfWeek, Hour, Value. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getAggregate(String agg, String name)

Gets the value of an aggregate from the current record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| agg | String | The type of the aggregate, for example, SUM or Count. |
| name | String | Name of the field to get the aggregate from. |

Return:

| Type | Description |
| --- | --- |
| String | The value of the aggregate. |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('COUNT');
    count.query();
    var incidents = 0;
    if (count.next()) {
       incidents = count.getAggregate('COUNT');
    }
    //Number of incidents varies depending on the current state
    //of the incident table
    gs.info('Number of incidents: ' + incidents);

Output

Number of incidents: 63

#### getAggregateEncodedQuery()

Gets the query necessary to return the current aggregate.

Return:

| Type | Description |
| --- | --- |
| String | The encoded query to get the aggregate. |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('MIN', 'sys_mod_count');
    count.groupBy('category');
    count.query();  
    while (count.next()) {
        gs.info(count.getAggregateEncodedQuery());
    }

Output

#### getEncodedQuery()

Retrieves the encoded query.

Return:

| Type | Description |
| --- | --- |
| String | The encoded query. |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('MIN', 'sys_mod_count');
    count.addAggregate('MAX', 'sys_mod_count');
    count.addAggregate('AVG', 'sys_mod_count');
    count.groupBy('category');
    count.query();
    gs.info(count.getEncodedQuery());

Output

#### getRowCount()

Retrieves the number of rows in the GlideAggregate object.

Return:

| Type | Description |
| --- | --- |
| Number | The number of rows in the GlideAggregate object. |

Example

    var count = new GlideAggregate('incident');
      count.addAggregate('MIN', 'sys_mod_count');
      count.addAggregate('MAX', 'sys_mod_count');
      count.addAggregate('AVG', 'sys_mod_count');
      count.groupBy('category');
      count.query();
      gs.info(count.getRowCount());
      while (count.next()) {  
         var min = count.getAggregate('MIN', 'sys_mod_count');
         var max = count.getAggregate('MAX', 'sys_mod_count');
         var avg = count.getAggregate('AVG', 'sys_mod_count');
         var category = count.category.getDisplayValue();
         gs.info(category + " Update counts: MIN = " + min + " MAX = " + max + " AVG = " + avg);
      }

Output

#### getTableName()

Retrieves the table name associated with this GlideAggregate object.

Return:

| Type | Description |
| --- | --- |
| String | The table name. |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('MIN', 'sys_mod_count');
    count.addAggregate('MAX', 'sys_mod_count');
    count.addAggregate('AVG', 'sys_mod_count');
    count.groupBy('category');
    count.query();
    gs.info(count.getTableName());

Output

#### getValue(String name)

Gets the value of a field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the field. |

Return:

| Type | Description |
| --- | --- |
| String | The value of the field. |

Example

    var count = new GlideAggregate('incident');
      count.addAggregate('MIN', 'sys_mod_count');
      count.addAggregate('MAX', 'sys_mod_count');
      count.addAggregate('AVG', 'sys_mod_count');
      count.groupBy('category');
      count.query();   
      while (count.next()) {  
         var min = count.getAggregate('MIN', 'sys_mod_count');
         var max = count.getAggregate('MAX', 'sys_mod_count');
         var avg = count.getAggregate('AVG', 'sys_mod_count');
         var category = count.category.getDisplayValue();
      }
    gs.info("Current category is: " + count.getValue('category'));

Output

Current category is: software

#### groupBy(String name)

Provides the name of a field to use in grouping the aggregates.

May be called numerous times to set multiple group fields.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the field. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('MIN', 'sys_mod_count');
    count.addAggregate('MAX', 'sys_mod_count');
    count.addAggregate('AVG', 'sys_mod_count');
    count.groupBy('category');
    count.query();   
    while (count.next()) {  
         var min = count.getAggregate('MIN', 'sys_mod_count');
         var max = count.getAggregate('MAX', 'sys_mod_count');
         var avg = count.getAggregate('AVG', 'sys_mod_count');
         var category = count.category.getDisplayValue();
         gs.info(category + " Update counts: MIN = " + min + " MAX = " + max + " AVG = " + avg);
    }

Output

#### hasNext()

Determines if there are any more records in the GlideAggregate object.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if there are more results in the query set. |

Example

    var agg = new GlideAggregate('incident');
    agg.addAggregate('AVG', 'sys_mod_count');
    agg.groupBy('category');
    agg.query();
    while (agg.hasNext()) {
        agg.next();
        var avg = agg.getAggregate('AVG', 'sys_mod_count');
        var category = agg.category.getDisplayValue();
        gs.info(category + ': AVG = ' + avg);
    }

Output

#### next()

Moves to the next record in the GlideAggregate.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if there are more records in the query set; otherwise, false. |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('COUNT');
    count.query();
    var incidents = 0;
    if (count.next()) {
       incidents = count.getAggregate('COUNT');
       gs.info(incidents);
    }

Output

#### orderBy(String name)

Orders the aggregates using the value of the specified field. The field will also be added to the group-by list.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the field to order the aggregates by. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var agg = new GlideAggregate('incident');
    agg.addAggregate('count', 'category'); 
    agg.orderBy('category'); 
    agg.query(); 
    while (agg.next()) { 
      var category = agg.category;
      var count = agg.getAggregate('count', 'category');
      var agg2 = new GlideAggregate('incident');   
      agg2.addAggregate('count', 'category');
      agg2.orderBy('category');
      gs.info(category + ": Current number of incidents:" + count);
    }

Output

#### orderByAggregate(String agg, String fieldName)

Orders the aggregates based on the specified aggregate and field.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| agg | String | Type of aggregation. |
| fieldName | String | Name of the field to aggregate. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    ga.addAggregate(‘COUNT’, ‘category’);
     
    ga.orderByAggregate('count', 'category');
     
    ga.query();
     
    while(ga.next()) {
      gs.info(‘Category ’ + ga.category + ‘ ‘ + ga.getAggregate(‘COUNT’, ‘category’));
      }

Output

Category inquiry 18 Category software 11 Category hardware 7 Category network 5 Category request 5 Category 4 Category database 2

#### orderByDesc(String name)

Sorts the aggregates in descending order based on the specified field. The field will also be added to the group-by list.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the field. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var agg = new GlideAggregate('incident');
    agg.addAggregate('count', 'category'); 
    agg.orderByDesc('category'); 
    agg.query(); 
    while (agg.next()) { 
      var category = agg.category;
      var count = agg.getAggregate('count', 'category');
      var agg2 = new GlideAggregate('incident');   
      agg2.addAggregate('count', 'category');
      agg2.orderBy('category');
      gs.info(category + ": Current number of incidents:" + count);
    }

Output

#### query()

Issues the query and gets the results.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var count = new GlideAggregate('incident');
    count.addAggregate('COUNT');
    count.query();
    var incidents = 0;
    if (count.next()) {
       incidents = count.getAggregate('COUNT');
    }
    gs.info('Number of incidents: ' + incidents);

Output

#### setGroup(Boolean b)

Sets whether the results are to be grouped.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| b | Boolean | When true the results are grouped. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var ga = new GlideAggregate('incident');
    ga.addAggregate('COUNT', 'category');
     
    ga.setGroup(true);
    ga.groupBy("category");
     
    ga.query();
     
    while(ga.next()) {
      gs.info('Category ' + ga.category + ' ' + ga.getAggregate('COUNT', 'category'));
      }

Output

Category database 2 Category hardware 7 Category inquiry 18 Category network 5 Category request 5 Category software 11