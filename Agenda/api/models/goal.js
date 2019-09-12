const mongoose = require('mongoose');
const User = require ('../models/user');
const Coach = require('../models/coach');

const commentSchema = mongoose.Schema({
    content: {type: String, required: true},
    userCreator : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    coachCreator : {type: mongoose.Schema.Types.ObjectId, ref:'Coach'}
});

const goalSchema = mongoose.Schema({
    titre: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type:String, required: true},
    status: {type: Boolean, required: true},
    owner: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    isActivated: Boolean,
    comment : [{type: commentSchema}]
});

module.exports = mongoose.model('Goal', goalSchema);