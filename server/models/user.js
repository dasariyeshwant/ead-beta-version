// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        fName        : String,
        lName        : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    profile          : {
        mobile_number: String,
        address      : String,
        education: [{school_name: String, passout_year: Number, degree: String, field_of_study: String, grade: String}],
        employement_history: [{company_name: String, duration_from: Number, duration_till: Number, title: String, location: String, description: String}],
        skills:[{skill_name: String}],
        ead_status: String,
        spouse_h1b_validity: Date,
        last_entry_date: Date,
        resume: String,
        reference: String
    }

});



// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);