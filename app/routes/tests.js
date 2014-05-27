'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Lesson = traceur.require(__dirname + '/../models/lesson.js');
var Question = traceur.require(__dirname + '/../models/question.js');
var _ = require('lodash');

exports.new = (req, res)=>{
  var lessonId = req.params.lessonId;
  Question.getByLessonId(lessonId, questions=>
  {
    res.render('tests/new', {questions: questions, lessonId: lessonId, title: 'Add Test Question'});
  });
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
          res.redirect('/user/courses/lessons/'+lessonId);
        });
      }
      else
      {
        res.redirect('/user');
      }
    });
  });
};

exports.destroy = (req, res)=>
{
  var questionId = req.params.questionId;
  Question.getByQuestionId(questionId, question=>
  {
    Lesson.getByLessonId(question.lessonId, lesson=>
    {
      Course.getByCourseId(lesson.courseId, course=>
      {
        if(req.session.userId === String(course.userId))
        {
          question = _.create(Question.prototype, question);
          question.destroy(()=>
          {
            res.redirect('/user/courses/lessons/'+lesson._id+'/test');
          });
        }
        else
        {
          res.redirect('/user');
        }
      });
    });
  });
};

exports.prepEdit = (req, res)=>{
  var userId = req.session.userId;
  res.render('tests/edit', {userId: userId, title: 'Edit a Test'});
};

exports.Edit = (req,res)=>{
  res.redirect('/user/courses/:coursesId');
};

exports.index = (req, res)=>{
  var lessonId = req.params.lessonId;
  Lesson.getByLessonId(lessonId, lesson=>{
    Question.getByLessonId(lessonId, questions=>
    {
      questions = _.shuffle(questions);
      questions.forEach(question=>
      {
        question.answers = _.shuffle(question.answers);
      });
      var userId= req.session.userId;
      res.render('tests/index', {questions: questions, userId: userId, lesson:lesson, title: 'Take a Test'});
    });
  });
};
