'use strict';

exports.index = (req, res)=>{
  res.render('courses/index', {title: 'Available Courses'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};
