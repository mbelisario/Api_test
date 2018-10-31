const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
var Request = require("request");
var http = require('http');
var o = require('odata')
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var filePath = "./message.txt";

//configuring the AWS environment
AWS.config.update({region: 'us-east-1'});

//configuring parameters
var params = {
  Bucket: 'ga-bucket-files',
  Body : fs.createReadStream(filePath),
  Key : "message.txt"
};

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.get('/file', function (req, res) {


  s3.upload(params, function (err, data) {
    //handle error
    if (err) {
      console.log("Error", err);
    }
  
    //success
    if (data) {
      console.log("Uploaded in:", data.Location);
      res.end("File Uploaded");
    }
  });
})

fs.writeFile("./test.txt", "Hey there!", function(err) {
  if(err) {
      return console.log(err);
  }
  /* console.log("The file was saved!"); */
}); 

app.get('/consume', function (req, res) {

  var optionsget = {
    host : 'http://itbrlnx61.grupoassa.com', // here only the domain name

    port : 50000,

    path: '/sap/opu/odata/OWM/ODATA_WS_PICKING_SRV/GR_hdr_dataSet(\'asd\')?$format=json',
    
    headers: {
     'Authorization': 'Basic ' + new Buffer('mbelisario'+ ':' + 'abapassa01').toString('base64')
    },
    method : 'GET' // do GET

};
}); 

app.get('/message/:msg', function (req, res) {

  // Create publish parameters
var params = {
  Message: req.params.msg, /* required */
  TopicArn: 'arn:aws:sns:us-east-1:930491370189:Low_Stock'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
    res.end("MessageID:    " + data.MessageId + "    Succesfull");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
}); 


console.log('todo list RESTful API server started on: ' + port);