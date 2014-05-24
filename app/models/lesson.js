//_id
//name
//courseId
//description
//testTimer
//passingScore

var lessons = global.nss.db.collection('lessons');
var Mongo = require('mongodb');

class Lesson
{
  constructor(obj, courseId)
  {
    this.name = obj.name;
    this.courseId = Mongo.ObjectID(courseId);
    this.description = obj.description;
    this.testTimer = obj.testTimer;
    this.passingScore = obj.passingScore;
  }

  save(fn)
  {
    lessons.save(this, ()=>fn());
  }

  static getByCourseId(courseId, fn)
  {
    courseId = objectIDSafe(courseId);
    lessons.find({courseId: courseId}).toArray((e, lessons)=>
    {
      fn(lessons);
    });
  }
}

function objectIDSafe(id)
{
  'use strict';

  if(id.match(/^[0-9a-fA-F]{24}$/))
  {
    return Mongo.ObjectID(id);
  }
  return id;
}

module.exports = Lesson;