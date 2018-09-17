var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/ListModel'), //created model loading here
  Request = require('./api/models/iRequestModel'), //created model loading here
  Movement = require('./api/models/iMovementModel'), //created model loading here
  bodyParser = require('body-parser');
  const fileUpload = require('express-fileupload');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DBtestAPI'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());// default options

var routes = require('./api/routes/ListRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);