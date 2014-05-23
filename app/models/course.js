//_id
//userId
//name
//subject
//description

var courses = global.nss.collection('courses');
var Mongo = require('mongodb');

class Course
{
  constructor(obj, userId)
  {
    this.userId = Mongo.ObjectID(userId);
    this.name = obj.name;
    this.subject = obj.subject;
    this.description = obj.description;
  }

  save(fn)
  {
    courses.save(this, ()=>fn());
  }

  static getByUserId(userId, fn)
  {
    userId = Mongo.ObjectID(userId);
    courses.find({userId: userId}).toArray((e, courses)=>
    {
      fn(courses);
    });
  }
}

module.exports = Course;