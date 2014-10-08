
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'To - Do Application' });
};

exports.add = function (req, res){
    res.render('add', { title: 'Add New Note' });
};