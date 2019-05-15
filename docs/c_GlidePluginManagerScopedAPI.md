GlidePluginManager
------------------

The scoped GlidePluginManager API provides a method for determining if a plugin has been activated.

#### isActive(String pluginID)

Determines if the specified plugin has been activated.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| pluginID | String | The plugin ID |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the plugin has been activated. |

Example

    var gr = new GlideRecord('sys_plugins');
    var queryString = "active=0^ORactive=1";
    gr.addEncodedQuery(queryString);
    gr.query();
    pMgr = new GlidePluginManager();
     
    while (gr.next()) {
       var name = gr.getValue('name');
       var pID = gr.getValue('source');
       isActive = pMgr.isActive(pID);
       if (isActive) 
           gs.info('The plugin ' + name + " is  active"  );
    }

Output

The plugin Country Lookup Data is active The plugin Database Replication is active The plugin REST API Provider is active The plugin Ten Cool Things is active ...