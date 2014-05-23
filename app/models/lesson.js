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
    courseId = Mongo.ObjectID(courseId);
    lessons.find({courseId: courseId}).toArray((e, lessons)=>
    {
      fn(lessons);
    });
  }
}

module.exports = Lesson;