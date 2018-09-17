var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Request = require('./api/models/iRequestModel'), //created model loading here
  Movement = require('./api/models/iMovementModel'); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DBtestAPI'); 

// API ROUTES -------------------
// we'll get to these in a second
app.get('/setup', function (req, res) {

    // create a sample Request
    var req = new Request({
        Company_code: 'cod01',
        Req_number: '540001',
        Class_type: 'StorageReq',
        Creation_user: 'mbelisario',
        Change_user: 'mbelisario',
        From: 'Plant01',
        To: 'Plant02',    
        Detail: [{
            Position: '0010',
            Material: '540001',
            Quantity: '10',
            Unit: '5'
        }] 
    });

    // save the sample Request
    req.save(function (err) {
        if (err) throw err;

        console.log('Request saved successfully');
        res.json({ success: true });
    });

    //Create Sample Movement
    var mov = new Movement({
        Company_code: 'cod01',
        Mov_number: '910001',
        Class_type: 'MI',
        Request_ref: req._id,
        Creation_user: 'mbelisario',
        Change_user: 'mbelisario',        
        From: 'Plant01',
        To: 'Plant02',    
        Detail: [{
            Position: '0010',
            Material: '540001',
            Quantity: '10',
            Unit: '5'
        }] 
    });

    // save the sample user
    mov.save(function (err) {
        if (err) throw err;

        console.log('Movement saved successfully');
        res.json({ success: true });
    });
});

app.listen(port);


console.log('DB API server started on: ' + port);