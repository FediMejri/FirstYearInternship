const mongoose= require('mongoose');
const Goal = require ('../models/goal');

const userSchema = mongoose.Schema({
    firstname:{type:String, required: true},
    lastname: {type: String, required: true},
    username: {type:String, required: true},
    email : {
        type : String,
        required : true, 
        unique : true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    age: {type: Number, required: false},
    gender: {type: String, required: true},
    profession: {type: String, required: true},
    nationality: String,
    password: {type : String, required: true},
    image : String,
    coach : String,
    goals : [{type : mongoose.Schema.Types.ObjectId, ref: 'Goal'}],
    isActivated: Boolean
});

module.exports = mongoose.model('User', userSchema);