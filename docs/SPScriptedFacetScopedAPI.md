SPScriptedFacet
---------------

Defines facet items, filters, or mapped queries for a facets object.

The SPScriptedFacet API can only be used in a facet generation script in a Service Portal search source. The facet generation script is only visible when Is scripted source is selected.  
  
There is no constructor for this class. Instead, use the createFacet() or createMultiChoiceFacet() methods of the SPScriptedFacetService class to generate a facets object.

#### addFacetItem(String label, Object valueObj)

Adds facet items or mapped queries to a facets object.

Before adding facet items to a facets object, create the facets object using the createFacet() or createMultiChoiceFacet() methods of the SPScriptedFacetService class.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| label | String | The display label for the facet item or mapped query. |
| valueObj | Object | The facet item or mapped query for the facet. Can only contain types String, Number, Boolean, and Double. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

Can only be used in a facet generation script in a Service Portal advanced search source.

    (function(query, facetService, searchResults, facets) {
    	/* Calculate your facets here using facetService */
    	/* var stateFacet = facetService.createFacet('State', 'state'); */
    	/* stateFacet.addFacetItem('Facet Item Label', '123'); */
    
    	createCreatedFacet();
    	
    	function createCreatedFacet() {
    		if (!facets.created && searchResults.length == 0)
    			return;
    		
    		var gr = new GlideAggregate("incident");
    		gr.addQuery("123TEXTQUERY321", query);
    		if (facets.created) {
    			if (facets.created == "today") {	
    gr.addEncodedQuery("sys_created_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()");
    			}
    			if (facets.created == "before") {
    				gr.addEncodedQuery("sys_created_on<javascript:gs.beginningOfToday()");
    			}
    		}
    		gr.query();
    		
    		var queryMap = {
    			today: "Today",
    			before: "Before Today"
    		};
    
    		var createdFacet = facetService.createFacet("Created", "created");
    		if (facets.created) {
    			createdFacet.addFacetItem(queryMap[facets.created], facets.created);
    		} else {
    			createdFacet.addFacetItem(queryMap.today, "today");
    			createdFacet.addFacetItem(queryMap.before, "before");
    		}
    	}
    	
    })(query, facetService, searchResults, facets);
    

Output