GlideTableHierarchy
-------------------

The Scoped GlideTableHierarchy API provides methods for handling information about table relationships.

#### GlideTableHierarchy(String tableName)

Instantiates a GlideTableHierarchy object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | The name of the table. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.getTables());

Output

#### getAllExtensions()

Returns an array of strings containing all tables that extend the current table and includes the current table.

Return:

| Type | Description |
| --- | --- |
| Array | An array of strings containing the tables in the hierarchy that includes the current table. |

Example

    var table = new GlideTableHierarchy("task"); 
    gs.info(table.getAllExtensions());

Output

task,sc\_task,problem\_task,change\_phase,sc\_req\_item,kb\_submission, release\_phase,problem,ticket,sm\_task,hr\_task,change\_task,change\_request, change\_request\_imac,incident,release\_task,vtb\_task,sm\_order,hr\_case, sysapproval\_group,sc\_request

#### getBase()

Returns the parent class.

Return:

| Type | Description |
| --- | --- |
| String | The parent class. |

Example

    var table = new GlideTableHierarchy("cmdb_ci_server"); 
    gs.info(table.getBase());

Output

#### getHierarchy()

Returns an array of strings containing all classes in the hierarchy of the current table.

Return:

| Type | Description |
| --- | --- |
| Array | An array of strings of the classes in the hierarchy. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.getHierarchy());

Output

#### getName()

Returns the table's name.

Return:

| Type | Description |
| --- | --- |
| String | The table's name. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.getName());

Output

#### getRoot()

Returns the top level class in the hierarchy.

Return:

| Type | Description |
| --- | --- |
| String | The root class. |

Example

    var table = new GlideTableHierarchy("cmdb_ci_server"); 
    gs.info(table.getRoot());

Output

#### getTableExtensions()

Returns an array of strings containing all tables that extend the current table.

Return:

| Type | Description |
| --- | --- |
| Array | An array of strings containing the tables that extend the current table. |

Example

    var table = new GlideTableHierarchy("task"); 
    gs.info(table.getTableExtensions());

Output

#### getTables()

Returns an array of strings of the table names in the hierarchy.

Return:

| Type | Description |
| --- | --- |
| Array | An array of strings containing the names of tables in the hierarchy. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.getTables());

Output

#### hasExtensions()

Returns true of this class has been extended.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current table has extensions. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.hasExtensions());

Output

#### isBaseClass()

Returns true if this is a base class.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current table has no parent and has extensions. |

Example

    var table = new GlideTableHierarchy("incident"); 
    gs.info(table.isBaseClass());

Output

#### isSoloClass()

Returns true if this table is not in a hierarchy.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the current table has no parent and no extensions. |

Example

    var table = new GlideTableHierarchy("sys_user"); 
    gs.info(table.isSoloClass());

Output