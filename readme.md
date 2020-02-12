Backend evaluation

Introduction
What does the API do?

It allow you to create a User Story(i.e ticket or card) which contains information about what kind of task needs to be performed and then the admin will review the User Story, make changes if required. Admin can approve or reject the User story created by the user.


Overview
This API was built with Node It work well with any language

It is assumed that users are already registered on the platform.

Language
<b>GET</b> /api/users/stories/:user

/users/stories/:user

Get users story created by the User. The user parameter is the id of the user.

PATH VARIABLES
user

Example Request
Default
curl --location --request GET '/users/stories/:user' \
--data-raw ''


<b>GET</b> /api/admin/stories/:user

/admin/stories/:user
This route allows admin to see the list of stories created

PATH VARIABLES
user = the user id of the admin

Example Request
Default
curl --location --request GET '/admin/stories/:user' \
--data-raw ''


<b>POST</b> /api/create
/create
This route allows user to create new story with the following parameters - summary: STRING, type: STRING, description: STRING, complexity: STRING, timeForCompletion: DATE, cost: Integer, owner: STRING, status: STRING



Example Request
Default
<b> curl --location --request POST '/create' \</b>
--data-raw ''


<b>PUT</b> /api/admin/stories/update

/admin/stories/update
Where admin updates stories. All the parameters should be sent with the form including the stoty id
 
Assumption is that it is only admin that can have access to the delete button



<b>Example Request</b>
Default
<b>curl --location --request PUT '/admin/stories/update' \</b>
--data-raw ''


<b>DEL</b> /api/admin/stories/delete/:id

/admin/stories/delete/:id
Route to delete story by admin

Assumption is that it is only admin that can have access to the delete button

PATH VARIABLES
id

Example Request
Default
<b>curl --location --request DELETE '/admin/stories/delete/:id' \</b>
--data-raw ''