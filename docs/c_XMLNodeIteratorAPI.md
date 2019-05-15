XMLNodeIterator
---------------

The scoped XMLNodeIterator class allows you to iterate through a node of a XML document.

There are no constructors for creating a stand alone instance of a XMLNodeIterator object. To create a XMLNodeIterator object use the getChildNodeIterator() method of the XMLNode object.

#### hasNext()

Returns true if the iteration has more elements.

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the iteration has more elements. |

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

#### next()

Gets the next element in the iteration. The returned element may be a #text node for the spaces/tabs if XML is "pretty formatted".

Return:

| Type | Description |
| --- | --- |
| XMLNode | The next element in the iteration. |

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
    while(iter.hasNext()) {
       var n = iter.next();
       gs.info('Node name: ' +  n.getNodeName());
       gs.info('Node value: ' +  n.getNodeValue());
    }

Output