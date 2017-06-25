var express = require('express');
  app = express();
  articles = require('./controllers/articles');
/*
    a post is going to look like this:
    {
      title: "",
      body: "",
      author: "",
      comments: []
    }

    a comment would look like
    {
      name: "foo",
      text: "askjsdlfjksd"
    }
*/

//CRUD
//Create Read Update Delete
var notImplemented = function(req, res){
    res.send(501)
}

//articles
app.get('/articles', notImplemented); // show them all blog posts
app.get('articles/:articleId', notImplemented); //reading one
app.get('articles/new', articles.new);
app.post('/articles', notImplemented); //making a new posts
app.put('article/:articleId', notImplemented); //updating one
app.del('article/:articleId', notImplemented); //deleting one

//Comments
app.post('articles/:articleId/comments', notImplemented);
app.del('articles/:articleId/comments/:commentId', notImplemented);

app. listen(3000, function(){
  console.log("Server is running...");
});
