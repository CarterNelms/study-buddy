'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
// var Lesson = traceur.require(__dirname + '/../models/lesson.js');

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.new = (req,res)=>{
  var courseId = req.params.courseId;
  Course.getByCourseId(courseId, course=>
  {
    res.render('lessons/new', {course: course, title:'Create Course'});
  });
};