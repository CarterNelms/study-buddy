'use strict';

exports.index = (req, res)=>{
  res.render('courses/index', {title: 'Available Courses'});
};
exports.new = (req,res)=>{
  res.render('courses/new', {title:'Create a New Course'});
};
