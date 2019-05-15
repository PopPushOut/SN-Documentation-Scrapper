GlideSysListControl
-------------------

The scoped GlideSysListControl class allows you to determine if the New or Edit buttons are displayed.

#### GlideSysListControl(String tableName)

Instantiates a GlideSysListControl object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| tableName | String | Name of the table |

#### getControlID()

Returns the sys\_id for the control.

Return:

| Type | Description |
| --- | --- |
| String | sys\_id of the control |

Example

    var sysListCtrl = new GlideSysListControl("incident");
    var controlID = sysListCtrl.getControlID();
    gs.info(controlID);

Output

91a807a60a0a3c74012113e28b47ca2e

#### isOmitEditButton()

Returns true if the edit button is not displayed.

Return:

| Type | Description |
| --- | --- |
| Boolean | True when the edit button is not displayed. |

Example

    var sysListCtrl = new GlideSysListControl("incident");
    var isOmitted = sysListCtrl.isOmitEditButton();
    gs.info(isOmitted);

Output

false

#### isOmitNewButton()

Returns true when the New button is not displayed.

Return:

| Type | Description |
| --- | --- |
| Boolean | True when the new button is not displayed. |

Example

    var sysListCtrl = new GlideSysListControl("incident");
    var isOmitted = sysListCtrl.isOmitNewButton();
    gs.info(isOmitted);

Output

false