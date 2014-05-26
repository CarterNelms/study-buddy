'use strict';

exports.prepEdit = (req, res)=>{
  var userId = req.session.userId;
  res.render('user/test', {userId: userId, title: 'Create a Test'});
};
exports.Edit = (req,res)=>{
  res.redirect('/user/courses/:coursesId');
};
