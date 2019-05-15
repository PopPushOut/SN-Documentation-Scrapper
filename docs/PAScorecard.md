PAScorecard
-----------

The PAScorecard API enables you to fetch data about indicators and their associated records, such as breakdowns.

#### addParam(String parameter, String value)

Add a query parameter to filter the returned scores.

Call this method multiple times on the same PAScorecard object to pass multiple parameters, such as the indicator sys\_id and a breakdown sys\_id. After specifying all parameters, call query() to run the query.

If you query a PAScorecard object with no parameters, the API returns a list of all indicators that are displayed on the Analytics Hub, with their scores.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| uuid | String | Enter a colon-separated list of sys\_id values to specify which indicators, breakdowns, aggregates, and domains to query. The parameter follows this format:
<indicator sys\_id>:<breakdown sys\_id>:<element sys\_id>:<lvl-2 breakdown sys\_id>:<lvl-2 element sys\_id>:<aggregate sys\_id>:<domain\_sys\_id>

The parameter must begin with the sys\_id of an indicator record. Optionally, you can append the sys\_id values of a breakdown and breakdown element to group the response based on the breakdown, and the sys\_id of an aggregate to apply that aggregate. You can use a breakdown with an aggregate, or use only one.

For information about obtaining the sys\_id values of records, see [Unique record identifier (sys\_id)](https://docs.servicenow.com?context=platform_unique-record-id&version=madrid).

Note: If an indicator is configured to use a Default time series, all Analytics Hubs for that indicator use the selected aggregate.

 |
| breakdown | String | Enter the sys\_id of a breakdown to return chart information organized as defined by the breakdown. For example, enter the sys\_id of a priority breakdown to return separate task chart information for each priority value, such as Number of open incidents / Priority / 2 - High. |
| breakdown\_relation | String | Specify the sys\_id of a breakdown relation to break down the returned data using that relation. You can view available breakdown relations by setting the include\_available\_breakdowns parameter to true. |
| elements\_filter | String | Specify the sys\_id of an elements filter to apply that filter to the returned data. |
| display | String | Set to true to return only indicators that are displayed on the Analytics Hub. Set this parameter to all to return all indicators. This parameter is true by default. |
| favorites | String | Set to true to return only indicators that are favorites of the querying user. |
| key | String | Set to true to return results only for key indicators. |
| target | String | Set to true to return results only for indicators that have a target set on the Analytics Hub. |
| contains | String | Enter a comma-separated list of names or descriptions to return results only from indicators with a matching value. |
| tags | String | Enter an indicator group sys\_id to return the indicators in that group. Do not use uuid with this parameter. |
| per\_page | String | Enter the maximum number of indicators each query can return on a page. By default this value is 10, and the maximum is 100. |
| page | String | Specify the page number. For example, when querying 20 Analytics Hubs with the default per\_page value (10), specify a page value of 2 to retrieve Analytics Hubs 11-20. |
| sortby | String | Specify the value to use when sorting results. Valid values for this parameter are value, change, changeperc, gap, gapperc, duedate, name, order, default, group, indicator\_group, frequency, target, date, trend, bullet, and direction. By default, queries sort records by value. |
| sortdir | String | Specify the sort direction, ascending or descending. By default, queries sort records in descending order. Set this parameter to asc to sort in ascending order. |
| display\_value | String | Data retrieval operation for reference and choice fields.

Based on this value, the display value and/or the actual value in the database are retrieved.

*   true returns display values for all of the fields.
*   false returns actual values from the database. If a value is not specified, this parameter defaults to false.
*   all returns both actual and display values.



 |
| exclude\_reference\_link | String | Set to true to hide additional information provided for reference fields, such as the URI to the reference resource. |
| include\_scores | String | Set to true to return indicator scores for the entire time range selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only the most recent score value.

To constrain the date range of the scores that are returned, combine this parameter with the from and to parameters.

 |
| from | String | Specify the earliest date to return scores from. Only scores from this date or later are returned. The date format must match the ISO-8601 standard.

This parameter requires that include\_scores is set to true.

 |
| to | String | Specify the latest date to return scores from. Only scores from this date or earlier are returned. The date format must match the ISO-8601 standard.

This parameter requires that include\_scores is set to true.

 |
| step | String | Specify a numeric value to skip scores, based on the indicator frequency. For example, specify a value of 3 to return only scores from every third day for a daily indicator, or from every third week for a weekly indicator. |
| limit | String | Specify the maximum number of scores to return. |
| include\_available\_breakdowns | String | Set to true to return all available breakdowns for an indicator. If a value is not specified, this parameter defaults to false and returns no breakdowns. |
| include\_available\_aggregates | String | Set to true to return all possible aggregates for an indicator, including aggregates that have already been applied. If a value is not specified, this parameter defaults to false and returns no aggregates. |
| include\_realtime | String | Set this parameter to true to return the realtime\_enabled element which indicates if real-time scores are enabled for the indicator, and the realtime\_value element which contains the real-time score value. This parameter is not supported for formula indicators. |
| include\_target\_color\_scheme | String | Set this parameter to true to return the target\_color\_scheme element that contains the minimum and maximum values, and the color of each section of the target color scheme for the Analytics Hub. |
| include\_forecast\_scores | String | Set this parameter to true to return the forecast\_scores element that contains an array of date-value pairs that define the forecast data for the Analytics Hub.

This paramater requires that the include\_scores parameter is also set to true.

 |
| include\_trendline\_scores | String | Set this parameter to true to return the trendline\_scores element that contains an array of date-value pairs that define the Analytics Hub trendline.

This paramater requires that the include\_scores parameter is also set to true.

 |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

In this example, the uuid parameter specifies the Number of open incidents indicator, and the breakdown parameter specifies the Priority breakdown. Both parameters have the sys\_id of the respective records as their values. The query() function returns the results as an object.

    var sc = new SNC.PAScorecard(); //in a scoped app, do not use the SNC namespace
    sc.addParam('uuid', 'fb007202d7130100b96d45a3ce6103b4');       // Number of open incidents
    sc.addParam('breakdown', '0df47e02d7130100b96d45a3ce610399');  // by Priority
    var result = sc.query();  // Query results, which are returned as an object
    for (var i = 0; i < result.length; i++)
    gs.info(result[i].name + ': ' + result[i].value + ' ' + result[i].unit.display_value);
    

Output

#### query()

Perform a query based on the specified parameters and return the results as an object.

Before calling this method, configure parameters for the PAScorecard object by calling addParam(String parameter, String value).

Return:

| Type | Description |
| --- | --- |
| Object | The PAScorecard object. |

#### result()

Get the last query result as an object.

This method does not perform a query. To perform a query before returning the result, use query().

This function cannot run in a scope other than global.

Return:

| Type | Description |
| --- | --- |
| Object | The results from the last query, returned as a JS object. |