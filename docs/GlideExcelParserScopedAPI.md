GlideExcelParser
----------------

You can parse .xlsx formatted Excel files.

The GlideExcelParser methods can be used in global and scoped scripts. The API name space identifier "sn\_impex" must be used when creating a GlideExcelParser object.

#### GlideExcelParser()

Creates an instance of GlideExcelParser.

The API name space identifier "sn\_impex" must be used when creating a GlideExcelParser object.

Example

    var parser = new sn_impex.GlideExcelParser(); 
    var attachment = new GlideSysAttachment();
    // use attachment sys id of an excel file
    var attachmentStream = attachment.getContentStream(<attachment sys id>);
    
    parser.parse(attachmentStream); 
    
    //retrieve the column headers
    var headers = parser.getColumnHeaders();  
    var header1 = headers[0]; 
    var header2 = headers[1]; 
    
    //print headers
    gs.print(header1 + " " + header2); 
    
    while(parser.next()) { 
      var row = parser.getRow(); 
      //print row value for both columns   
      gs.print(row[header1] + ' ' + row[header2]) 
    }

Output

#### close()

Close the connection to the input stream and release the document.

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### getColumnHeaders()

Returns a list of column headers from the parsed document.

Return:

| Type | Description |
| --- | --- |
| Array | An array of strings of column headers from the parsed document. |

#### getErrorMessage()

Returns the error message when the parse() method fails.

Return:

| Type | Description |
| --- | --- |
| String | The error message. |

#### getRow()

Get the current row values and headers.

Return:

| Type | Description |
| --- | --- |
| Object | The row headers are property names and the row values are property values. |

#### next()

Moves to the next row.

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if there is a next row, otherwise, returns false. |

#### parse(GlideScriptableInputStream inputStream)

Parse an XLSX formatted Excel document.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| inputStream | GlideScriptableInputStream | The Excel document to be parsed. |

Return:

| Type | Description |
| --- | --- |
| Boolean | Returns true if the parse was successful, otherwise, returns false. |

Example

from a scripted REST API script where the Excel file is sent in the request payload.

    var parser = new sn_impex.GlideExcelParser();
    parser.parse(request.body.dataStream); 

Output

#### setHeaderRowNumber(Number headerRowNumber)

Set the number of the header row to be retrieved.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| headerRowNumber | Number | The header row to be retrieved. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### setNullToEmpty(Boolean empty)

Return an empty value instead of null when an Excel cell is not present.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| empty | Boolean | When true, cells that are not present return an empty value. When false, cells that are not present return null. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### setSheetName(String sheetName)

Set the name of the sheet to be retrieved.

If both setSheetNumber() and setSheetName() are set, setSheetName() is used.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sheetName | String | The name of the sheet to be retrieved. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

#### setSheetNumber(Number sheetNumber)

Set the number of the Excel sheet to be retrieved.

If both setSheetNumber() and setSheetName() are set, setSheetNumber() is ignored.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sheetNumber | Number | The Excel sheet number to retrieve. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |