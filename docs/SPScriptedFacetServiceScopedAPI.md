SPScriptedFacetService
----------------------

Generates a multi choice or single choice facets object for an advanced search source.

The SPScriptedFacetService API can only be used in a facet generation script in a Service Portal search source. The facet generation script is only visible when Is scripted source is selected.  
  
There is no constructor for this class. Instead, use the createFacet() or createMultiChoiceFacet() methods to generate a facets object.

#### createFacet(String label, String id)

Creates a single choice facets object.

After creating the facets object, add facet items or mapped queries to the facet using the addFacetItem() method of the SPScriptedFacet class.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| label | String | Label for the facet. |
| id | String | ID for the facet. |

Return:

| Type | Description |
| --- | --- |
| Object | Single choice facets object. Returns an error when:
*   A duplicate label or ID is found.
*   A label or ID is not defined.

 |

Example

Can only be used in a facet generation script in a Service Portal advanced search source.

    var stateFacet = facetService.createFacet("State", "state");

Output

#### createMultiChoiceFacet(String label, String id)

Creates a multi choice facets object.

After creating the facets object, add facet items or mapped queries to the facet using the addFacetItem() method of the SPScriptedFacet class.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| label | String | Label for the facet. |
| id | String | ID for the facet. |

Return:

| Type | Description |
| --- | --- |
| Object | Multi choice facets object. Returns an error when:
*   A duplicate label or ID is found.
*   A label or ID is not defined.

 |

Example

Can only be used in a facet generation script in a Service Portal advanced search source.

    var stateFacet = facetService.createMultiChoiceFacet("State", "state");

Output