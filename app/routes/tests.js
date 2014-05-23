'use strict';

exports.prepEdit = (req, res)=>{
  res.render('user/test', {title: 'Create a Test'});
};
exports.Edit = (req,res)=>{
  res.redirect('/user/courses/:coursesId');
};
