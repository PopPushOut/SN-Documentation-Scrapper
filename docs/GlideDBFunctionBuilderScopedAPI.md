GlideDBFunctionBuilder
----------------------

Build functions to perform SQL operations in the database.

The GlideDBFunctionBuilder methods provide a way to build Relational Database Management System (RDBMS) functions to perform SQL operations on record data. These methods can be used in both scoped and global server scripts.  
  
To use platform functions:

*   Construct a function using the GlideDBFunctionBuilder constructor and associated methods.
*   After building a function, you can apply the function to the current record using the addFunction() method of the GlideRecord class.
*   Add the function to a query using the addQuery() method of the GlideRecord class.
*   Retrieve the results of the function using the existing GlideRecord API methods such as getValue() and getElement().

#### add()

Adds the values of two or more integer fields.

Use the field(String field) method to define fields on which the operation is performed.

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

Output

#### GlideDBFunctionBuilder()

Instantiates a GlideDBFunctionBuilder object.

Example

    var builder = new GlideDBFunctionBuilder();
    

Output

#### build()

Builds the database function defined by the GlideDBFunctionBuilder object.

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
    gs.print(myAddingFunction);

Output

#### concat()

Concatenates the values of two or more fields.

Use the field(String field) method to define fields on which the operation is performed.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myConcatFunction = functionBuilder.concat();
    myConcatFunction = functionBuilder.field('short_description');
    myConcatFunction = functionBuilder.field('caller_id.name');
    myConcatFunction = functionBuilder.build();

Output

#### constant(String constant)

Defines a constant value to use in the function. If used with the dayofweek() method, the string defines whether to use Sunday or Monday as the first day of the week.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| constant | String | A constant value used in a function.
When used with the dayofweek() method, the value defines whether the week starts on a Sunday or Monday.

*   1: Week begins on Sunday.
*   2: Week begins on Monday.

This definition enables the dayofweek() method to return the correct day of the week from a given date. If a value other than 1 or 2 is provided, the dayofweek() method uses Sunday as the first day of the week.

 |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### datediff()

Determines the duration using a given start date/time and end date/time.

Use the field(String field) method to define start and end date/time fields.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myDateDiffFunction = functionBuilder.datediff();
    myDateDiffFunction = functionBuilder.field('sys_updated_on');
    myDateDiffFunction = functionBuilder.field('opened_at');
    myDateDiffFunction = functionBuilder.build();

Output

#### dayofweek()

Returns an integer representing the day of the week for a given date.

Use the field(String field) method to define the given date/time. Use the constant(String constant) method to define whether the week starts on a Sunday or Monday.

This method can be used with MySQL, Oracle, and Microsoft SQL Server databases only. If using an Oracle database, the NLS\_TERRITORY setting must be set to a territory with Sunday as the first day of the week.

Return:

| Type | Description |
| --- | --- |
| Integer | 
If the first day of the week is set to Sunday in the constant(String constant) method, return values are associated with the following days of the week:

*   1: Sunday
*   2: Monday
*   3: Tuesday
*   4: Wednesday
*   5: Thursday
*   6: Friday
*   7: Saturday

If the first day of the week is set to Monday:

*   1: Monday
*   2: Tuesday
*   3: Wednesday
*   4: Thursday
*   5: Friday
*   6: Saturday
*   7: Sunday

If a value other than 1 or 2 is provided in the constant(String constant) method, the dayofweek() method uses Sunday as the first day of the week.

 |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var dayOfWeekFunction = functionBuilder.dayofweek();
    dayOfWeekFunction = functionBuilder.field('opened_at');
    dayOfWeekFunction = functionBuilder.constant('2');
    dayOfWeekFunction = functionBuilder.build();
    
    var gr = new GlideRecord('incident');
    gr.addFunction(dayOfWeekFunction);
    gr.query();
    while(gr.next())
    gs.log(gr.getValue(dayOfWeekFunction));
    

Output

#### divide()

Divides the value of one integer field by another.

Use the field(String field) method to define fields on which the operation is performed.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myDivideFunction = functionBuilder.divide();
    myDivideFunction = functionBuilder.field('order');
    myDivideFunction = functionBuilder.field('priority');
    myDivideFunction = functionBuilder.build();

Output

#### field(String field)

Defines a field on which a SQL operation is performed.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| field | String | The field on which you are performing the SQL operation. |

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

Output

#### length()

Determines the number of code units in a field.

Use the field(String field) method to define fields on which the operation is performed.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myLengthFunction = functionBuilder.length();
    myLengthFunction = functionBuilder.field('short_description');
    myLengthFunction = functionBuilder.build();
    

Output

#### multiply()

Multiplies the values of two integer fields.

Use the field(String field) method to define fields on which the operation is performed.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var myMultiplyFunction = functionBuilder.multiply();
    myMultiplyFunction = functionBuilder.field('order');
    myMultiplyFunction = functionBuilder.field('priority');
    myMultiplyFunction = functionBuilder.build();

Output

#### subtract()

Subtracts the value of one integer field from another.

Use the field(String field) method to define fields on which the operation is performed.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var functionBuilder = new GlideDBFunctionBuilder();
    var mySubtractFunction = functionBuilder.subtract();
    mySubtractFunction = functionBuilder.field('order');
    mySubtractFunction = functionBuilder.field('priority');
    mySubtractFunction = functionBuilder.build();

Output