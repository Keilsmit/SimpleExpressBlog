var express = require('express');
var app = express();
var articles = require('./controllers/articles');
var bodyParser = require('body-parser');

/*
    a comment would look like
    {
      name: "foo",
      text: "askjsdlfjksd"
    }
*/

//CRUD
//Create Read Update Delete

// app.use(express.logger());
app.use(bodyParser.urlencoded({ extended: false }));
var notImplemented = function(req, res){
    res.send(501)
};

//articles
app.get('/articles', notImplemented); // show them all blog posts
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented); //reading one
app.post('/articles', articles.create); //making a new posts
app.put('/article/:articleId', notImplemented); //updating one
app.del('/article/:articleId', notImplemented); //deleting one

//Comments
app.post('articles/:articleId/comments', notImplemented);
app.del('articles/:articleId/comments/:commentId', notImplemented);

//server on port 3000
app. listen(3000, function(){
  console.log("Server is running...");
});
