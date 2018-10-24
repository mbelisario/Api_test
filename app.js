const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

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

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});