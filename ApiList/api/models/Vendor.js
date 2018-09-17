'use strict';

var mongoose = require('mongoose');
require('mongoose-type-email');
var Schema = mongoose.Schema;

var VendorSchema = new Schema({
  Company_code: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Company',
    required: 'Company Code Required'
  },
  Company_Name: {
    type: String,
    required: 'Company name Required'
  },
  Vendor_Number: {
    type: String,
    required: 'Vendor Number Required'
  },
  Vendor_Country: {
    type: String,
  },
  Vendor_City: {
    type: String,
  },
  Vendor_Adress: {
    type: String,
  },
  Vendor_Email: {
    type: mongoose.SchemaTypes.Email
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

module.exports = mongoose.model('Vendor', VendorSchema);