const AWS = require('aws-sdk')
//var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});

// Note that environment credentials are loaded by default,
// the following line is shown for clarity:
AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
// Now set temporary credentials seeded from the master credentials
AWS.config.credentials = new AWS.TemporaryCredentials();

var credentials = AWS.config.credentials; 

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

app.get('/credentials', function (req, res) {
  res.send(credentials);
});

app.listen(port);

var params = {
  Bucket: "ga-bucket-test",
  MaxKeys: 10
};

const s3 = new AWS.S3()

s3.listObjects(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else app.get('/data', function (req, res) {
    res.send(data);
  });;
});



console.log('todo list RESTful API server started on: ' + port);