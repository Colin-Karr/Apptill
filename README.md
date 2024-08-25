# Apptill
This is an information app to practise node.js for backend server development. I would practise: installation of 3rd party software such as ejs, express, lodash, mongoose and morgan using npm.  Additionally, I would deploy the mongo database.  Moreover, I would utilize a modular design such as models, views and controllers (MVC) and routes. Furthermore, I would create an init file to track all dependencies of the project. Finally, I would create a public folder to treat with static pages such as images and css.

Note that typically the node_modules folder is not uploaded on Github.  Thus, if one downloads an app from Github without the node_modules folder, an err not finding the packages will be created. To solve this issue, run "npm install" which will cause node to look in the json package for all the dependencies and download them.

Express is a framework that makes writing server logic code much easier. Raw node can be used but express is much faster.

Ejs is a library that facilitates the use of dynamic data into static html files. It is accommodated well by Express which is another advantage for using the Express framework.

Morgan is a 3rd party logger facility. It can be installed with the command: "npm install morgan" 

Mongoose is an Object Document Mapping (ODM) library that makes it easier to connect to and communicate with the Mongo database by wrapping the standard Mongo db API. It is intalled by this command: "npm install mongoose"