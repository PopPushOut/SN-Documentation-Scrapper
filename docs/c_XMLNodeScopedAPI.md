XMLNode
-------

The scoped XMLNode API allows you to query values from XML nodes. XMLNodes are extracted from XMLDocument2 objects, which contain XML strings.

There are no constructors for creating a stand alone instance of an XMLNode object. Instead, use the createElement() method of [XMLDocument2](app.do#!/api_doc?v=madrid#c_XMLDocument2ScopedAPI "XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string."), which adds a node to an existing document.

#### getAttribute(String attribute)

Gets the value of the attribute.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| attribute | String | Name of the attribute. |

Return:

| Type | Description |
| --- | --- |
| String | The attribute's value. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//two');
    gs.info(node.getAttribute('att'));

Output

xxx

#### getAttributes()

Returns an object containing the node's attributes as properties with values.

Return:

| Type | Description |
| --- | --- |
| Object | Contains name-value pairs where the name is the attribute and the value is the attribute's value. |

#### getChildNodeIterator()

Gets a XMLNodeIterator object that can be used to walk through the list of child nodes.

Return:

| Type | Description |
| --- | --- |
| XMLNodeIterator | The node iterator object. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');
    var iter= node.getChildNodeIterator();
    gs.info(iter.hasNext());

Output

#### getFirstChild()

Gets the node's first child node.

Return:

| Type | Description |
| --- | --- |
| XMLNode | The node's first child node. |

Example

    var xmlString = "<test>" +
                    "<one>" +
                    "<two att=\"xxx\">abcd1234</two>" +
                    "<three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "<two>another</two>" +
                    "</one>" +
                    "<number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');
    gs.info(node.getFirstChild());

Output

#### getLastChild()

Gets the node's last child node.

Return:

| Type | Description |
| --- | --- |
| XMLNode | The node's last child. |

Example

    var xmlString = "<test>" +
                    "<one>" +
                    "<two att=\"xxx\">abcd1234</two>" +
                    "<three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "<two>another</two>" +
                    "</one>" +
                    "<number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');
     
    gs.info(node.getLastChild());

Output

#### getNodeName()

Gets the node's name. A node's name is determined by the node type. A document-element node's name is #document. A text node's name is #text. An element node's name is the element's name.

Return:

| Type | Description |
| --- | --- |
| String | The node's name. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//two');
    gs.info(node.getNodeName());

Output

two

#### getNodeValue()

Gets the node's value. A node's value is determined by the node type. Element and document-element nodes return null.

Return:

| Type | Description |
| --- | --- |
| String | The node's value. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//two');
    gs.info(node.getNodeValue());

Output

null

#### getTextContent()

Gets the text content of the current node. The text content of a node consists of all the node's child text nodes

Return:

| Type | Description |
| --- | --- |
| String | The text content of the current node. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmldoc = new XMLDocument2();
    xmldoc.parseXML(xmlString);
    var node = xmldoc.getNode('//one/two');
    gs.info(node.getTextContent());

Output

abcd1234

#### hasAttribute(String attribute)

Determines if the node has the specified attribute.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| attribute | String | The name of the attribute to check. |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the node has the attribute. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//two');
    gs.info(node.hasAttribute('att'));

Output

true

#### toString()

Returns the string value of the current node.

Return:

| Type | Description |
| --- | --- |
| String | The string value of the current node. |

Example

    var xmlString = "<test>" +
                    "  <one>" +
                    "    <two att=\"xxx\">abcd1234</two>" +
                    "    <three boo=\"yah\" att=\"yyy\">1234abcd</three>" +
                    "    <two>another</two>" +
                    "  </one>" +
                    "  <number>1234</number>" +
                    "</test>";
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');
    gs.info(node.toString());

Output