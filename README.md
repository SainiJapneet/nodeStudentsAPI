﻿# nodeStudentsAPI
 To use this project follow the steps below:
1) Open the code in VS Code
2) In VS code terminal run the command "node index.js"
3) In the terminal you will get the information about the port on which the server is being hosted and the connection status of DataBase.
4) After a successful connection with the database, open the "Postman" application.
5) In Postman, create a new collection.
6) In the newly created collection add requests you want to use.
7) To add a student use the get method with "http://localhost:8080/api/students" as a request and in the body select raw and JSON-type text, then add the JSON data you want to add to the database.
8) Proceed similarly for updating, deletion, and retrieval by referring to the routes.
