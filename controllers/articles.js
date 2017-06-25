module.exports.create = function(){};

//rendering an html form to let user create post
module.exports.new =  function(req, res){
  res.send(<form method='post' action='/articles'>\
            <input type='text' placeholder='name'\
            </form>);
};
