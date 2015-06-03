var mongoose = require('mongoose');

module.exports = mongoose.model('Employee', {
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  mobile_number: Number,
  address: String,
  education: [{school_name: String, passout_year: Number, degree: String, field_of_study: String, grade: String}],
  employement_history: [{company_name: String, duration_from: Number, duration_till: Number, title: String, location: String, description: String}],
  skills:[{skill_name: String}],
  ead_status: String,
  spouse_h1b_validity: Date,
  last_entry_date: Date,
  resume: String,
  reference: String
});