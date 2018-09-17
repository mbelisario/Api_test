'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Request = mongoose.model('Request'),
  Movement = mongoose.model('Movement');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Request successfully deleted' });
  });
};

exports.list_all_requests = function(req, res) {
  Request.find({}, function(err, request)  {
    if (err)
      res.send(err);
    res.json(request);
  });
};

exports.create_request = function(req, res) {  
  var new_task = new Request(req.body);
  new_task.save(function(err, request) {
    if (err)
      res.send(err);
    res.json(request);
  });
};

exports.read_request = function(req, res) {
  Request.find({Req_number: req.params.Req_number}, function(err, request) {
    if (err)
      res.send(err);
    res.json(request);
  }); 
};

exports.update_request = function(req, res) {
  Request.findOneAndUpdate({_id: req.params.Req_number}, req.body, {new: true}, function(err, request) {
    if (err)
      res.send(err);
    res.json(request);
  });
};

exports.delete_request= function(req, res) {
  Request.remove({
    _id: req.params.taskId
  }, function(err, request) {
    if (err)
      res.send(err);
    res.json({ message: 'Request successfully deleted' });
  });
};

exports.list_all_movement = function(req, res) {
  Movement.find({}, function(err, movement)  {
    if (err)
      res.send(err);
    res.json(movement);
  });
};

exports.create_movement = function(req, res) {  
  var new_task = new Movement(req.body);
  new_task.save(function(err, movement) {
    if (err)
      res.send(err);
    res.json(movement);
  });
};

exports.read_movement = function(req, res) {
  Movement.find({Mov_number: req.params.Mov_number}, function(err, movement) {
    if (err)
      res.send(err);
    res.json(movement);
  }); 
};

exports.update_movement = function(req, res) {
  Movement.findOneAndUpdate({_id: req.params.Mov_number}, req.body, {new: true}, function(err, request) {
    if (err)
      res.send(err);
    res.json(movement);
  });
};

exports.delete_movement = function(req, res) {
  Movement.remove({
    _id: req.params.taskId
  }, function(err, movement) {
    if (err)
      res.send(err);
    res.json({ message: 'Movement successfully deleted' });
  });
};