//_id
//userId
//name
//subject
//description

class Course
{
  constructor(obj)
  {
    this.userId = obj.userId;
    this.name = obj.name;
    this.subject = obj.subject;
    this.description = obj.description;
  }
}

module.exports = Course;