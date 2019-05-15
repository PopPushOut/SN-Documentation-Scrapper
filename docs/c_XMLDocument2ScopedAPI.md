XMLDocument2
------------

XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string.

Use this JavaScript class to create an object from an XML string, usually a return value from a web-service invocation, or the XML payload of ECC Queue. Using the XMLDocument2 object in a JavaScript business rule lets you query values from the XML elements and attributes directly.  
  
An XML string has a tree structure, and the parts of the structure are called nodes. An XMLDocument2 object deals with two node types, element, and document element. An element node is a node with a name and possibly attributes and child nodes. A document-element node is the root node of the XML tree. It is the only node without a parent node.

#### XMLDocument2( GlideScriptableInputStream inputStream)

Creates an XMLDocument2 object from an attachment stream.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The input stream the XMLDocument2 object encapsulates. |

#### XMLDocument2()

Creates an XMLDocument2 object.

#### createElement(String name)

Creates and adds an element node to the current node. The element name is the string passed in as a parameter. The new element has no text child nodes.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The new element's name. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

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
    xmlDoc.createElement("new2"); 
     
    gs.info(xmlDoc);

Output

#### createElementWithTextValue(String name, String value)

Creates and adds an element node with a text child node to the current node.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | Name of the element to be added. |
| value | String | The added element's text value. |

Return:

| Type | Description |
| --- | --- |
| XMLNode | The current node. |

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
    xmlDoc.createElementWithTextValue("new", "test");
    gs.info(xmlDoc);

Output

#### getDocumentElement()

Gets the document element node of the XMLdocument2 object. The document element node is the root node.

Return:

| Type | Description |
| --- | --- |
| XMLNode | The document element. |

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
    //returns the root node of the document tree.
    var rootNode = xmlDoc.getDocumentElement();
    gs.info(rootNode.getTextContent());

Output

#### getFirstNode(String xPath)

Gets the first node in the specified XPATH.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xPath | String | The XPATH. |

Return:

| Type | Description |
| --- | --- |
| XMLNode | The first node. |

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
    var foo = xmlDoc.getFirstNode('/test/one/two');
    gs.info(foo.getTextContent());

Output

#### getNextNode(Object current)

Gets the node after the specified node.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| current | Object | The current node. |

Return:

| Type | Description |
| --- | --- |
| XMLNode | The next node. |

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
    var foo = xmlDoc. getFirstNode('/test/one/two');
    var foo2 = xmlDoc.getNextNode(foo);
    gs.info(foo.getTextContent());
    gs.info(foo2.getTextContent());

Output

#### getNode(String xPath)

Gets the node specified in the xpath.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xPath | String | The xpath |

Return:

| Type | Description |
| --- | --- |
| XMLNode | The current node. |

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
    var node = xmlDoc.getNode("/test/one/two");
    gs.info(node);

Output

#### getNodeText(String xPath)

Gets all the text child nodes from the node referenced in the xpath.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xPath | String | the xpath. |

Return:

| Type | Description |
| --- | --- |
| XMLNode | The text children in the xpath. |

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
    gs.info(xmlDoc.getNodeText("//two"));

Output

abcd1234

#### parseXML(String xmlDoc)

Parses the XML string and loads it into the XMLDocument2 object.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| xmlDoc | String | The document to parse. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

This example parses the xmlString and loads it into the xmlDocument2 object.

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
    var rootNode = xmlDoc.getDocumentElement();

Output

#### setCurrentElement(XMLNode element)

Makes the node passed in as a parameter the current node.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| element | XMLNode | The element node to set as the current node. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

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
    //returns the root node of the document tree.
    var rootNode = xmlDoc.getDocumentElement(); //returns org.w3c.dom.Element
    // sets the root node as the current element
    xmlDoc.setCurrentElement(rootNode);

Output

#### setNamespaceAware(Boolean aware)

When set to true, the XMLDocument2 object processes the document with XML namespaces.

If you don't set this, an XML document with namespaces won't be enumerated correctly, and an XPath search would fail. 

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| aware | Boolean | When true, the XMLDocument2 object processes the document with XML namespaces. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### toString()

Returns a string containing the XML.

Return:

| Type | Description |
| --- | --- |
| String | A string containing the XML. |

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
    gs.info(xmlDoc.toString());

Output