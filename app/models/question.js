//_id
//lessonId
//question
//answers[{text:'String', isCorrect:Boolean}]

var questions = global.nss.db.collection('questions');
var Mongo = require('mongodb');

class Question
{
  constructor(obj, lessonId)
  {
    this.lessonId = objectIDSafe(lessonId);
    this.question = obj.question;
    this.answers = [
      {answer: obj.A, isCorrect: obj.correct === 'A'},
      {answer: obj.B, isCorrect: obj.correct === 'B'},
      {answer: obj.C, isCorrect: obj.correct === 'C'},
      {answer: obj.D, isCorrect: obj.correct === 'D'}
    ];
  }

  save(fn)
  {
    questions.save(this, ()=>fn());
  }
}

function objectIDSafe(id)
{
  'use strict';

  id = String(id);
  if(id.match(/^[0-9a-fA-F]{24}$/))
  {
    return Mongo.ObjectID(id);
  }
  return id;
}

module.exports = Question;