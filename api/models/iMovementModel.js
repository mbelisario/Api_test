'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovementSchema = new Schema({
  Company_code: {
    type: String,
    required: 'Company Code Required'
  },
  Mov_number: {
    type: String,
    required: 'Request Number Required'
  },
  Mov_type: {
    type: String,
  },
  Request_ref: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Request'
  },
  Creation_user: {
    type: String,
  },
  Creation_date: {
    type: Date,
    default: Date.now
  },
  Change_user: {
    type: String,
  },
  Change_date: {
    type: Date,
    default: Date.now
  },
  From: {
    type: String,
  },
  To: {
    type: String,
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  Detail: [{
    Position: {
      type: Number,    
    },
    Material: {
      type: String,
    },
    Quantity: {
      type: Number,
    },
    Mat_Unit: {
      type: String,
    }
  }]
});

module.exports = mongoose.model('Movement',MovementSchema);