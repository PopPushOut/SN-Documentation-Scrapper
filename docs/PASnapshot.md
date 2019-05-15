PASnapshot
----------

The PASnapshot API enables you to query information about Performance Analytics snapshots. Snapshots are the lists of records (sys\_ids) that are collected at the time that the scores for those records are collected. A snapshot is made only for indicators with Collect records selected.

You can query information about a snapshot at a certain date using the indicator sys\_id and date, and perform comparisons between snapshots for an indicator at different dates.

#### getCompareIDs(String sys\_id, Number date1, Number date2, String type)

Compare records in snapshots for a specified indicator at multiple dates, such as to identify records included in one snapshot but not the other.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | The indicator sys\_id. |
| date1 | Number | The date of the first snapshot, in the format yyyymmdd. |
| date2 | Number | The date of the second snapshot, in the format yyyymmdd. |
| type | String | Specifies what data to retrieve. Valid values are:
*   all1: all records in the first snapshot
*   all2: all records in the second snapshot
*   shared: records that are in both snapshots
*   movedin: records that are in the second snapshot, but not the first
*   movedout: records that are in the first snapshot, but not the second

 |

Return:

| Type | Description |
| --- | --- |
| String | A comma-separated list of sys\_id values. |

Example

    var snapshot2 = PASnapshot.getCompareIDs('fb007202d7130100b96d45a3ce6103b4', 20160430, 20160531, 'shared');
    gs.info(snapshot2);

Output

\*\*\* Script: 09c01200d7002100b81145a3ce6103ab,19c01200d7002100b81145a3ce6103e9,fcc01200d7002100b81145a3ce61035b,….

#### getCompareQuery(String sys\_id, Number date1, Number date2, String type)

Get the query used to compare records in snapshots for a specified indicator at multiple dates.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | The indicator sys\_id. |
| date1 | Number | The date of the first snapshot, in the format yyyymmdd. |
| date2 | Number | The date of the second snapshot, in the format yyyymmdd. |
| type | String | Specifies what data to retrieve. Valid values are:
*   all1: all records in the first snapshot
*   all2: all records in the second snapshot
*   shared: records that are in both snapshots
*   movedin: records that are in the second snapshot, but not the first
*   movedout: records that are in the first snapshot, but not the second

 |

Return:

| Type | Description |
| --- | --- |
| String | The table, view, and encoded query as a JSON string. |

Example

    var snapshot4 = PASnapshot.getCompareQuery('fb007202d7130100b96d45a3ce6103b4', 20160530, 20160531, 'all1');
    gs.info(snapshot4);
    

Output

\*\*\* Script: {"view":"","query":"sys\_idINjavascript:new PAUtils().getCompareSnapshotIDs(\\"fb007202d7130100b96d45a3ce6103b4\\",\\"20160530\\",\\"20160531\\",\\"all1\\")","table":"incident"}

#### getIDs(String sys\_id, Number date)

Get the sys\_id values for all records contained in the snapshot for a specified indicator at the specified date.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | The indicator sys\_id. |
| date | Number | The date when the snapshot was taken, in the format yyyymmdd. |

Return:

| Type | Description |
| --- | --- |
| String | A comma-separated list of sys\_id values. |

Example

    var snapshot1 = PASnapshot.getIDs('fb007202d7130100b96d45a3ce6103b4', 20160530);
    gs.info(snapshot1);

Output

\*\*\* Script: 09c01200d7002100b81145a3ce6103ab,19c01200d7002100b81145a3ce6103e9,fcc01200d7002100b81145a3ce61035b,….

#### getQuery(String sys\_id, Number date)

Get the query used to generate the snapshot for a specified indicator at the specified date.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| sys\_id | String | The indicator sys\_id. |
| date | Number | The date when the snapshot was taken, in the format yyyymmdd. |

Return:

| Type | Description |
| --- | --- |
| String | The table, view, and encoded query as a JSON string. |

Example

    var snapshot3 = PASnapshot.getQuery('fb007202d7130100b96d45a3ce6103b4', 20160530);
    gs.info(snapshot3);

Output

\*\*\* Script: {"view":"","query":"sys\_idINjavascript:new PAUtils().getSnapshotIDs(\\"fb007202d7130100b96d45a3ce6103b4\\",\\"20160530\\")","table":"incident"}