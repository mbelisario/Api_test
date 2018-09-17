'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  Company_code: {
    type: String,
    required: 'Company Code Required'
  },
  Company_Name: {
    type: String,
    required: 'Request Number Required'
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
  }  
});

module.exports = mongoose.model('Company', CompanySchema);