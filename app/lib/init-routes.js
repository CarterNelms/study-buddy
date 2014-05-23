'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var courses = traceur.require(__dirname + '/../routes/courses.js');


  app.get('/', dbg, home.index);
  app.get('/about', dbg, home.about);
  app.get('/portal', dbg, home.portal);
  app.get('/login', dbg, users.login);
  app.post('/signup', dbg, users.create);
  app.get('/courses', dbg, courses.index);
  app.get('/user/courses/new', dbg, courses.new);
  app.get('/user/courses', dbg, courses.user);
  app.post('/user/courses', dbg, courses.create);
  app.get('/user/courses/:courseId', dbg, courses.prepEdit);

  console.log('Routes Loaded');
  fn();
}
