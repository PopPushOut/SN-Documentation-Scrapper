GlideElementDescriptor
----------------------

The scoped GlideElementDescriptor API provides information about individual fields.

There is no constructor for this class. Use the GlideElement getED() method to obtain a GlideElementDescriptor object.

#### getAttachmentEncryptionType()

Returns the encryption type used for attachments on the element's table.

This method is for use with the Edge Encryption plugin.

Return:

| Type | Description |
| --- | --- |
| String | The encryption type used on attachments. Returns null if attachments on the element's table are not being encrypted. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    var isEdge = ed.getAttachmentEncryptionType();
    gs.info(isEdge);
    

Output

null

#### getEncryptionType()

Returns the element's encryption type.

This method is for use with the Edge Encryption plugin.

Return:

| Type | Description |
| --- | --- |
| String | The element's encryption type. Returns null if the element is not encrypted. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    sEdge = ed.getEncryptionType();
    gs.info(isEdge);

Output

null

#### getInternalType()

Returns the element's internal data type.

Return:

| Type | Description |
| --- | --- |
| String | The element's internal data type. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
     
    var field = grInc.getElement('priority');
    var ed = field.getED();
     
    var isEdge = ed.getInternalType();
    gs.info(isEdge);

Output

#### getLabel()

Returns the element's label.

Return:

| Type | Description |
| --- | --- |
| String | The element's label. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
     
    var field = grInc.getElement('priority');
    var ed = field.getED();
     
    var isEdge = ed.getLabel();
    gs.info(isEdge);

Output

Priority

#### getLength()

Returns the element's length.

Return:

| Type | Description |
| --- | --- |
| Number | The element's size. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
     
    var field = grInc.getElement('priority');
    var ed = field.getED();
     
    var isEdge = ed.getLength();
    gs.info(isEdge);

Output

40

#### getName()

Returns the element's name.

Return:

| Type | Description |
| --- | --- |
| String | The element's name. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
     
    var field = grInc.getElement('priority');
    var ed = field.getED();
     
    var isEdge = ed.getName();
    gs.info(isEdge);

Output

priority

#### getPlural()

Returns the element's plural label.

Return:

| Type | Description |
| --- | --- |
| String | The element's plural label. |

Example

    var gr = new GlideRecord('incident');
    gr.query();
    var ed = gr.getED();
    gs.info(ed.getPlural());

Output

Incidents

#### hasAttachmentsEncrypted()

Returns true if an encrypted attachment has been added to the table.

This method is for use with the Edge Encryption plugin.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if an encrypted attachment has been added to the table. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    var isEdge = ed.hasAttachmentsEncrypted();
    gs.info(isEdge);

Output

false

#### isAutoOrSysID()

Returns true if the element is an automatically generated or system field.

Automatically generated and system fields cannot be encrypted. This method is for use with the Edge Encryption plugin.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the element is automatically generated or a system field. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    isEdge = ed.isAutoOrSysID();
    gs.info(isEdge);
    

Output

false

#### isChoiceTable()

Returns true if the element is defined as a dropdown choice in its dictionary definition.

Choice fields cannnot be encrypted.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the element is defined as a dropdown choice. Returns true even if there are no entries defined in the choice table. The last choice type, suggestion, does not return true. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    var isChoiceTable = ed.isChoiceTable();
    gs.info(isChoiceTable);

Output

true

#### isEdgeEncrypted()

Returns true if an element is encrypted.

This method is for use with the Edge Encryption plugin.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the element is encrypted, false otherwise. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    var isEdge = ed.isEdgeEncrypted();
    gs.info(isEdge)

Output

false

#### isVirtual()

Returns true if the element is a virtual element.

A virtual element is a calculated field as set by the dictionary definition of the field. Virtual fields cannot be encrypted.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the element is a virtual element. |

Example

    var grInc = new GlideRecord('incident');
    grInc.query('priority', '1');
    
    var field = grInc.getElement('priority');
    var ed = field.getED();
    
    var isVirtual = ed.isVirtual();
    gs.info(isVirtual);

Output

false