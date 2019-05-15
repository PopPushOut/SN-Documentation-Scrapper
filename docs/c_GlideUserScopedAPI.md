GlideUser
---------

The scoped GlideUser API provides access to information about the current user and current user roles. Using the scoped GlideUser API avoids the need to use the slower GlideRecord queries to get user information.

#### getCompanyID()

Returns the current user's company sys\_id.

Return:

| Type | Description |
| --- | --- |
| String | Company sys\_id |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getCompanyID());

Output

#### getDisplayName()

Returns the current user's display name.

Return:

| Type | Description |
| --- | --- |
| String | User's display name |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getDisplayName());

Output

#### getDomainID()

Returns the identifier of the user's current session domain.

The identifier that is returned depends on the domain type and the instantiation of that domain.

Return:

| Type | Description |
| --- | --- |
| String | Domain identifier |

Example

    var domain = new GlideRecord('domain');
    domain.get(gs.getUser().getDomainID());
    gs.info(domain.name);

Output

#### getEmail()

Returns the user's email address.

Return:

| Type | Description |
| --- | --- |
| String | User's email address |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getEmail());

Output

#### getFirstName()

Returns the user's first name.

Return:

| Type | Description |
| --- | --- |
| String | User's first name |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getFirstName());

Output

#### getID()

Gets the sys\_id of the current user.

Return:

| Type | Description |
| --- | --- |
| String | User's sys\_id |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getID());

Output

#### getLastName()

Returns the user's last name.

Return:

| Type | Description |
| --- | --- |
| String | User's last name |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getLastName());

Output

#### getName()

Returns the user ID, or login name, of the current user.

Return:

| Type | Description |
| --- | --- |
| String | User ID |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getName());

Output

#### getPreference(String name)

Gets the specified user preference value for the current user.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the preference. |

Return:

| Type | Description |
| --- | --- |
| String | The preference value. |

Example

    var currentUser = gs.getUser(); 
    currentUser.savePreference(­'myPref','red'); 
    gs.info(currentUser.getPreference(­'myPref'));

Output

#### getRoles()

Returns a list of roles that includes explicitly granted roles, inherited roles, and roles acquired by group membership.

Return:

| Type | Description |
| --- | --- |
| Array | List of all roles available to the user |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getRoles());

Output

#### getUserRoles()

Returns the list of roles explicitly granted to the user.

Unlike the getRoles() method, this method does not return roles the user inherits or roles acquired from group membership.

Return:

| Type | Description |
| --- | --- |
| Array | List of roles explicitly assigned to the user |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.getUserRoles());

Output

#### hasRole(String role)

Determines if the current user has the specified role.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| role | String | Role to check |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user has the role. |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.hasRole('admin'));

Output

#### isMemberOf(String group)

Determines if the current user is a member of the specified group.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| group | String | Group to check |

Return:

| Type | Description |
| --- | --- |
| Boolean | True if the user is a member of the group. |

Example

    var currentUser = gs.getUser(); 
    gs.info(currentUser.isMemberOf(­'Capacity Mgmt'));

Output

#### savePreference(String name, String value)

Saves a user preference value to the database.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| name | String | The preference to save. |
| value | String | The preference value. |

Return:

| Type | Description |
| --- | --- |
| void | Method does not return a value |

Example

    var currentUser = gs.getUser(); 
    currentUser.savePreference('myPref','red'); 
    gs.info(currentUser.getPreference('myPref'));

Output