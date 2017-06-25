

var articles = [];

module.exports.create = function(req, res){
    console.log(req.body);
    res.json(req.body);
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
  res.send("<form method='post' action='/articles'>\
            <input type='text' placeholder='title' name='title'/>\
            <input type='text' placeholder='author' name='author'/>\
            <textarea placeholder='post' name'body'> </textarea>\
            <button type='submit'>Post!</button>\
            </form>");
};
