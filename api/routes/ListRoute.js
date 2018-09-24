'use strict';
module.exports = function(app) {
  var apiList = require('../controllers/ListController');
  var path = require('path');

  // apiList Routes
  
  app.get('/', function (req, res){
    res
    .status(200)     
    .sendFile(path.join(__dirname, "index.html"));
    console.log(res);
    });

  app.route('/tasks')
    .get(apiList.list_all_tasks)
    .post(apiList.create_a_task);

  app.route('/tasks/:taskId')
    .get(apiList.read_a_task)
    .put(apiList.update_a_task)
    .delete(apiList.delete_a_task);

  app.route('/request')
    .get(apiList.list_all_requests)
    .post(apiList.create_request);

  app.route('/request/:Req_number')
    .get(apiList.read_request)
    .put(apiList.update_request)
    .delete(apiList.delete_request);

    app.route('/movement')
    .get(apiList.list_all_movement)
    .post(apiList.create_movement);

  app.route('/request/:Mov_number')
    .get(apiList.read_movement)
    .delete(apiList.delete_movement);
};
