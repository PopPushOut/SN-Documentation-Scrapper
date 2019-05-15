GlideSPScriptable
-----------------

The GlideSPScriptable API provides a set of methods for use in Service Portal Widgets.

You access GlideSPScriptable methods by using the global $sp object.

#### canReadRecord(GlideRecord gr)

Returns true if the user can read the specified GlideRecord.

If the record type is kb\_knowledge, sc\_cat\_item, or sc\_category, the method checks if the user can view the item.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The GlideRecord to check. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the record is valid and readable. |

Example

Server script

    //Server script
    data.items = [];
    data.userName = gs.getUserDisplayName();
    var gr = new GlideRecord("sc_cat_item");
    gr.query();
    while(gr.next() && data.items.length < 10) {
        if ($sp.canReadRecord(gr)) {
            data.items.push(gr.getDisplayValue("name"));
        }
    }
    
    //HTML template
    <div class="panel panel-default">
        <div class="panel-heading">Hi, {{c.data.userName}}!</div>
        <div class="panel-body">
            Here are some things you can order:
            <ul><li ng-repeat="item in c.data.items">{{item}}</li></ul>
        </div>
    </div>

Output

#### canReadRecord(String table, String sysId)

Returns true if the user can read the specified GlideRecord.

If the record type is kb\_knowledge, sc\_cat\_item, or sc\_category, the method checks if the user can view the item.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| table | String | Name of the table to query. |
| sysId | String | Sys\_id of the record to query. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the record is valid and readable. |

#### getCatalogItem(String sysId)

Returns a model and view model for a sc\_cat\_item or sc\_cat\_item\_guide.

This method is deprecated. Use the getCatalogItem(String sysId, Boolean isOrdering) method instead. This method calls the getCatalogItem(String sysId, Boolean isOrdering) method with the isOrdering parameter set to false, which means that write roles security checking is done.

This method is a quick way to get the data necessary to render and order a catalog item using <sp-model />. If you just need to get a catalog item to show its picture or name, use GlideRecord to query the sc\_cat\_item table.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysId | String | The sys\_id of the catalog item (sc\_cat\_item) or order guide (sc\_cat\_item\_guide). |

Return:

| Type | Description |
| --- | --- |
| Object | An object containing the catalog item variable model, view, sections, pricing, and client scripts. |

Example

    // Server script
    (function() {
        var sys_id = $sp.getParameter("sys_id")
        data.catItem = $sp.getCatalogItem(sys_id);
    })();
    
    // Client script
    function($http, spUtil) {
        var c = this;
        var submitting = false;
        c.getIt = function() {
            if (submitting) return;
            $http.post(spUtil.getURL('sc_cat_item'), c.data.catItem).success(function(response) {
                if (response.answer) {
                    c.req = response.answer;
                    c.req.page = c.req.table == 'sc_request' ? 'sc_request' : 'ticket';
                }
            });
        }
    }
    
    //SCSS
    .img-bg {
        padding: 5px;
        background-color: $brand-primary;
    }
    
    .img-responsive {
        margin: 0 auto;
    }
    
    .cat-icon {
        display: block;
        margin: -40px auto 0;
    }
    
    // HTML template
    <div class="col-sm-4">
      <div class="panel panel-default">
        <div class="img-bg">
          <img ng-src="{{::data.catItem.picture}}" class="img-responsive" />
        </div>
        <span class="cat-icon fa fa-stack fa-lg fa-3x hidden-xs">
          <i class="fa fa-circle fa-stack-2x text-success"></i>
          <i class="fa fa-desktop fa-stack-1x fa-inverse"></i>
        </span>
        <div class="panel-body">
          <p class="lead text-center">{{::data.catItem.name}}</p>
          <ul class="list-unstyled">
            <li class="text-center" ng-if="::data.catItem.price">${Price}: {{::data.catItem.price}}</li>
          </ul>
          <sp-model form-model="::data.catItem" mandatory="mandatory"></sp-model>
          <p ng-if="c.req" class="text-center text-success">
            ${Request created!} <a href="?id={{c.req.page}}&table={{c.req.table}}&sys_id={{c.req.sys_id}}">{{c.req.number}}</a>
          </p>
          <button ng-if="!c.req" class="btn btn-default btn-block" ng-click="c.getIt()">${Get it}</button>
        </div>
      </div>
    </div>

Output

#### getCatalogItem(String sysId, Boolean isOrdering)

Returns a model and view model for a sc\_cat\_item or sc\_cat\_item\_guide.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysId | String | The sys\_id of the catalog item (sc\_cat\_item) or order guide (sc\_cat\_item\_guide). |
| isOrdering | Boolean | When true, uses create roles security check. When false, uses write roles security check.
When users are ordering an item or have it in their cart, check using the create roles.

If users are not ordering, for example, somebody is looking at a requested item to see the variables associated with that item, then check using the write roles.

 |

Return:

| Type | Description |
| --- | --- |
| Object | An object containing the catalog item variable model, view, sections, pricing, and client scripts. |

#### getDisplayValue(String fieldName)

Returns the display value of the specified field (if it exists and has a value) from either the widget's sp\_instance or the sp\_portal record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| fieldName | String | Name of the field |

Return:

| Type | Description |
| --- | --- |
| String | The display value from either the sp\_instance or sp\_portal record. |

Example

    //Server script
    (function() {
        data.title = $sp.getDisplayValue("title");
        data.catalog = $sp.getDisplayValue("sc_catalog");
    })();
    
    //HTML template
    <div>
        <h1>sp_instance.title: {{::data.title}}</h1>
        <h1>sp_portal.sc_catalog: {{::data.catalog}}</h1>
    </div>

Output

#### getField(GlideRecord gr, String fieldName)

Returns information about the specified field in the specified GlideRecord.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The GlideRecord to check |
| fieldName | String | The field to find information for |

Return:

| Type | Description |
| --- | --- |
| Object | An object containing the field's label, value, displayValue, and type. Returns null if the GlideRecord of field name are not valid, or if the field is not readable. |

#### getFields(GlideRecord gr, String fieldNames)

Checks the specified list of field names, and returns an array of valid field names.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The GlideRecord to check |
| field Names | String | A comma separated list of field names. |

Return:

| Type | Description |
| --- | --- |
| Array | An array of valid fields. |

#### getFieldsObject(GlideRecord gr, String fieldNames)

Checks the specified list of field names and returns an object of valid field names.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The GlideRecord to check |
| field Names | String | A comma separated list of field names. |

Return:

| Type | Description |
| --- | --- |
| Object | An object containing valid field names. |

#### getForm(String tableName, String sysId)

Return the form.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | The name of the table |
| sysId | String | The form's sys\_id |

Return:

| Type | Description |
| --- | --- |
| Object | The form |

#### getKBCategoryArticles(String sys\_id, Number limit)

Returns KB articles in the specified category and its subcategories.

To avoid performance issues, do not use this method to return articles in large categories or articles with inline images. Instead, use getKBArticleSummaries().

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | Sys\_id of the KB article category. |
| limit | Number | Maximum number of KB articles returned. |

Return:

| Type | Description |
| --- | --- |
| Array | The articles within the category and its subcategories with:
*   A workflow\_state of published.
*   A valid\_to date greater than or equal to the current date.

 |

Example

    //Server script 
    (function() {
        data.kbs = $sp.getKBCategoryArticles("0ac1bf8bff0221009b20ffffffffffec", 5);
    })();
    
    //HTML template
    <div>
    articles: {{::data.kbs}}
    </div>
    

Output

#### getKBCategoryArticleSummaries(String sys\_id, Number limit, Number maxChars)

Returns Knowledge Base article summaries in the specified category and its subcategories.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | Sys\_id of the KB article category. |
| limit | Number | Maximum number of KB articles returned. |
| maxChars | Number | Maximum number of characters to return from the article text. For full article text, set the value to \-1. |

Return:

| Type | Description |
| --- | --- |
| Array | The articles within the category and its subcategories with:
*   A workflow\_state of published.
*   A valid\_to date greater than or equal to the current date.

 |

Example

    //Server script 
    (function() {
        data.summary = $sp.getKBCategoryArticleSummaries("0ac1bf8bff0221009b20ffffffffffec", 5, 200);
    })();
    
    //HTML template
    <div>
    articles: {{::data.summary}}
    </div>
    

Output

#### getKBCount(String sys\_id)

Returns the number of articles in the defined Knowledge Base.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | Sys\_id of a Knowledge Base record. |

Return:

| Type | Description |
| --- | --- |
| Number | Number of knowledge articles in the defined Knowledge Base with:
*   A workflow\_state of published.
*   A valid\_to date greater than or equal to the current date.

 |

Example

    //Server script 
    (function() {
        data.count = $sp.getKBCount("a7e8a78bff0221009b20ffffffffff17");
    })();
    
    //HTML template
    <div>
    articles: {{::data.count}}
    </div>
    

Output

#### getListColumns(String tableName, String view)

Returns a list of the specified table's columns in the specified view.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | Name of the table |
| view | String | The view by which to filter the columns |

Return:

| Type | Description |
| --- | --- |
| Object | An object containing the column names. |

#### getMenuHREF(GlideRecord page)

Returns the (?id=) portion of the URL based on the sp\_menu type.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| page | GlideRecord | The page |

Return:

| Type | Description |
| --- | --- |
| String | The href portion of the URL. |

#### getMenuItems(String sysId)

Returns an array of menu items for the specified instance.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysId | String | sysId of the instance |

Return:

| Type | Description |
| --- | --- |
| Array | Menu items for the specified instance |

#### getParameter(String name)

Returns the value of the specified parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the key from the query string or post body. |

Return:

| Type | Description |
| --- | --- |
| Object | Returns the specified parameter as an object. Returns null if there is no request, JSON request, or widget. |

#### getPortalRecord()

Returns the portal GlideRecord from the Service Portals \[sp\_portal\] table.

Return:

| Type | Description |
| --- | --- |
| GlideRecord | The portal record. |

Example

    //Server script
    (function() {
        var portalGr = $sp.getPortalRecord();
        data.logo = portalGr.getDisplayValue("logo");
        data.homepage = portalGr.getDisplayValue("homepage.id");
    })();
    
    //HTML template
    <div>
        <img ng-src="{{::c.data.logo}}" />
        <a href="?id={{::c.data.homepage}}">Click here to go home</a>
    </div>

Output

#### getRecord()

Returns the current portal context.

Return:

| Type | Description |
| --- | --- |
| GlideRecord | The sp\_portal record of the current portal context or null. Returns null if the widget is embedded by another widget. |

Example

    //Server script 
    (function(){ 
    var gr = $sp.getRecord(); 
    data.tableLabel = gr.getLabel(); 
    })(); 
    
    //HTML template 
    <div class="panel-heading"> 
    <h4 class="panel-title">${{{data.tableLabel}} details}</h4> 
    </div>

Output

#### getRecordDisplayValues(Object data, GlideRecord from, String names)

Copies display values for the specified fields into the data parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| data | Object | The display values for the specified fields are copied to this object. |
| from | GlideRecord | The GlideRecord to process. |
| names | String | A comma-separated list of field names. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getRecordElements(Object data, GlideRecord from, String names)

For the specified fields, copies the element's name, display value, and value into the data parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| data | Object | The element's name, display value, and value for the specified fields are copied to this object. |
| from | GlideRecord | The GlideRecord to process. |
| names | String | A comma-separated list of field names. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getRecordValues(Object data, GlideRecord from, String names)

Copies values for the specified field names from the GlideRecord into the data parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| data | Object | The value for the specified fields are copied to this object. |
| from | GlideRecord | The GlideRecord to process. |
| names | String | A comma-separated list of field names. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getRecordVariablesArray(GlideRecord gr, Boolean includeNilResponses)

Returns an array of Service Catalog variables associated with a record.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| gr | GlideRecord | The record to retrieve Service Catalog variables for. Must be a record with Service Catalog variables defined, such as a requested item \[sc\_req\_item\] record or an incident submitted through a record producer. |
| includeNilResponses | Boolean | Optional parameter. If true, variables with no user-defined value are included in the array. |

Return:

| Type | Description |
| --- | --- |
| Object | Array of Service Catalog variables associated with the record. |

Example

    //Server script 
    (function() {
    var itemsGR = new GlideRecord("sc_req_item");
    itemsGR.get('585d1bc44f4f13008a959a211310c77d');
    	
    data.scVars = $sp.getRecordVariablesArray(itemsGR);
    
    })();
    
    //HTML template
    <div>
    Requested item variables: {{::data.scVars}}
    </div>

Output

#### getStream(String table, String sysId)

Gets the activity stream for the specified record. This method works on tables that extend the task table.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| table | String | The table name |
| sysID | String | The sys\_id of the record |

Return:

| Type | Description |
| --- | --- |
| Object | If a table extending the task table is specified, contains the display\_value, sys\_id, short\_description,number, entries, user\_sys\_id, user\_full\_name, user\_login, label, table, and journal\_fields properties; otherwise contains the table and sys\_id properties.
Note: The user\_login property contains the User ID of the current user. The user\_sys\_id and iser\_full\_name properties reference the creator of the queried record.

 |

#### getUserInitials()

Returns the user's initials.

Return:

| Type | Description |
| --- | --- |
| String | The user's initials |

#### getValue(String name)

Returns the named value of the JSON request, instance, or portal.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the parameter |

Return:

| Type | Description |
| --- | --- |
| Object | Value of the specified parameter. Null if the request does not exist or has no such parameter, the rectangle does not exist or has no such parameter, or the portal is null or has no such parameter. |

Example

    //Server script
    (function() {
        data.title = $sp.getValue("title");
        data.catalog = $sp.getValue("sc_catalog");
    })();
    
    //HTML templage
    <div>
        <h1>sp_instance.title: {{::data.title}}</h1>
        <h1>sp_portal.sc_catalog: {{::data.catalog}}</h1>
    </div>

Output

#### getValues(Object data, String names)

Copies values from the request or instance to the data parameter.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| data | Object | Receives the parameter values. |
| names | String | Comma-separated string of field names. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getWidget(String sysID, Object options)

Gets a widget by id or sys\_id, executes that widget's server script using the provided options, then returns the widget model.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sysID | String | The widget sys\_id or widget\_id |
| options | Object | An object to pass to the widget's server script. Refer to this object as options in your server script.
Note: Any options passed into this function will only be available in the embedded widget's server script on the first execution of that script. Any subsequent calls into the server script from the embedded widget will not contain the object properties passed in.

 |

Return:

| Type | Description |
| --- | --- |
| Object | A widget model to be used with sp-widget. |

Example

    //Server script
    data.myWidget = $sp.getWidget('widget_id', {p1: param1, p2: param2});
    
    //HTML
    <sp-widget widget="c.data.myWidget"></sp-widget>

Output

#### mapUrlToSPUrl(String url)

Transforms a URL requesting a list or form in the platform UI into the URL of the corresponding id=list or id=form Service Portal page.

Use this method to perform tasks such as redirecting a user after login to the correct Service Portal page when they request a platform UI form or list URL. Note that the id=list and id=form page targets are not customizable.

Note: Table, sys\_id, and sysparm\_query values are preserved from the original URL; sysparm\_view is not.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| url | String | Platform UI URL |

Return:

| Type | Description |
| --- | --- |
| String | Transformed Service Portal URL.
If the passed-in URL does not request a list or a form in the platform UI, a null value is returned.

 |

Example

List example

    GlideSPScriptable().mapUrlToSPUrl("http://demo.service-now.com/task_list.do?sysparm_userpref_module=1523b8d4c611227b00be8216ec331b9a&sysparm_query=assigned_to=javascript:getMyAssignments()&sysparm_clear_stack=true"))

Output

id=list&table=task&filter=assigned\_to=javascript:getMyAssignments()&sys\_id=&v=

Example

Form example

    GlideSPScriptable().mapUrlToSPUrl("incident.do?sys_id=12bc12bc12bc12bc12bc12bc12bc12bc")

Output

id=form&table=incident&filter=&sys\_id=12bc12bc12bc12bc12bc12bc12bc12bc&v=