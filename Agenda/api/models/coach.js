const mongoose = require('mongoose');
const User = require ('../models/user');

const coachSchema= mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    coachname: {type: String, required: true},
    email : {
        type : String,
        required : true, 
        unique : true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    age: {type: Number, required: true},
    password: {type : String, required: true},
    resume: {type: String, require: true},
    users : [{type : mongoose.Schema.Types.ObjectId, ref: 'User'}],
    isActivated : {type : Boolean}
});

module.exports = mongoose.model('Coach', coachSchema);