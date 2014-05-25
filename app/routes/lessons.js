'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Lesson = traceur.require(__dirname + '/../models/lesson.js');

exports.new = (req,res)=>{
  var courseId = req.params.courseId;
  Course.getByCourseId(courseId, course=>
  {
    if(String(course.userId) === req.session.userId)
    {
      res.render('lessons/new', {course: course, title:'Create Lesson'});
    }
    else
    {
      res.redirect('/user');
    }
  });
};

exports.create = (req,res)=>{
  var courseId = req.params.courseId;
  Course.getByCourseId(courseId, course=>
  {
    if(String(course.userId) === req.session.userId)
    {
      var newLesson = new Lesson(req.body, course._id);
      newLesson.save(()=>res.redirect('/user/courses/'+course._id));
    }
    else
    {
      res.redirect('/user');
    }
  });  
};