This is dedicated to mongoDB university

Asyncronous & Syncronous. 
mongo is Syncronous.. but the node is Asc...

var x = db.<collection name>.findOne();
printJSON(x);

>first we need to connect the mongoDB.. and then we have the callback 

npm
>this is a package manager for node.js
>the require statement is how we include an external libraries
>npm can automatically install the dependencies listed in the package.json (which is created using npm init)

What is mongoDB nodeJS driver...?
APP --(Node JS driver) <-- BSON --> Mongod


MongoDB is Schemaless
Schema? What is Schema?
------------------------
in mongo different document can have different schema in each document
this is the flexibility of mongoDB

JSON??
	arrays [] --> list of things
	dictionaries {} --> key and value pairs... seperated by commas
	> in the top level there should be dictionary... 
	> important JSON need to have the "" although it can be ommited in mongoDB
	>standard JSON information can be found here: www.json.org (more formal representation)

PROJECT:
	>this is the blog schema: 
			authors:
				author_id,
				name,
				email,
				password
			posts:
				post_id,
				author_id
				title,
				body,	
				publication_date

			comments:
				comment_id,
				name, 
				email,
				comment_text

			post_comments:
				post_id,
				comment_id
			tags
				tag_id
				name

			post_tags
				post_id
				tag_id
Modeling the Blog in MongoDB
	the collections:
		>post : { title, body, author, date, comment =[]} //in mongo we can simply embedded that in the documents. 

should I embed or not??
How do I know???
	> the post and comment just embed because you will access that at the same time.. 
	> you should choose the either to embed or not by "HOW YOU WILL access the data."
	> NOTE That: The embedded data  could NOT exceed the 16MB document limit within MongoDB.


Homework:
mongorestore command
	>download the file for the homework and then unzip it. 
	>mongorestore dump --> this will restore the database. 

	>homework 1.1 figure out what is in the collections. 


What is this   
crypto = require('crypto')