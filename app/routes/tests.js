'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Lesson = traceur.require(__dirname + '/../models/lesson.js');
var Question = traceur.require(__dirname + '/../models/question.js');

exports.new = (req, res)=>{
  res.render('tests/new', {lessonId: req.params.lessonId, title: 'Add Test Question'});
};

exports.create = (req, res)=>
{
  var lessonId = req.params.lessonId;
  Lesson.getByLessonId(lessonId, lesson=>
  {
    console.log('LESSON');
    console.log(lesson);
    Course.getByCourseId(lesson.courseId, course=>
    {
    console.log('COURSE');
    console.log(course);
      if(req.session.userId === String(course.userId))
      {
        var question = new Question(req.body, lessonId);
        question.save(()=>
        {
          res.redirect('/user/courses/lesson/'+lessonId);
        });
      }
      else
      {
        res.redirect('/user');
      }
    });
  });
};

exports.prepEdit = (req, res)=>{
  var userId = req.session.userId;
  res.render('user/test', {userId: userId, title: 'Create a Test'});
};
exports.Edit = (req,res)=>{
  res.redirect('/user/courses/:coursesId');
};
