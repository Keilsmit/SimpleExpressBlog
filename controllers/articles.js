

var articles = [];
//create action
module.exports.create = function(req, res){
    req.body.comments = [];
    articles.push(req.body);
    res.redirect('/articles');
};

//display all posts
module.exports.index = function(req, res){
  res.json(articles);
};

/*
a post is going to look like this:
{
  title: "",
  body: "",
  author: "",
  comments: []
}
*/


//rendering an html form to let user create post
module.exports.new =  function(req, res){
  res.render('index', articles);
};
