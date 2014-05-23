'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.index = (req, res)=>{
  res.render('courses/index', {title: 'Available Courses'});
};

exports.new = (req,res)=>{
  res.render('courses/new', {title:'Create a New Course'});
};

exports.create = (req, res)=>{
  Course.getByUserId(req.session.userId, courses=>
  {
    var newCourseParams = req.body;
    if(courses.length)
    {
      var isUsedName = courses.filter(course=>course.name === newCourseParams.name).length ? true : false;
      if(!isUsedName)
      {
        createCourse();
      }
      else
      {
        console.log('NAME IN USE');
      }
    }
    else
    {
      createCourse();
    }

    function createCourse()
    {
      var newCourse = new Course(newCourseParams);
      newCourse.save(()=>
      {
        res.redirect('/user/courses');
      });
    }
  });
};

exports.user = (req,res)=>{
  var userId = req.session.userId;
  Course.getByUserId(userId, courses=>
  {
    res.render('user/courses', {courses: courses, title: 'My Courses'});
  });
};