const express=require('express');
const app=express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const goalRoutes = require('./api/routes/goals');
const coachRoutes = require('./api//routes/coachs');
const adminRoutes = require('./api/routes/admin');

mongoose.connect('mongodb+srv://mohamedfedi:abcdefg1234!@cluster0-5q2tv.mongodb.net/test?retryWrites=true&w=majority', 
{
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    if (req.method==='OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/users',userRoutes);
app.use('/goals',goalRoutes);
app.use('/coachs',coachRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next) => {
    const error=new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message 
        }
    });
});

module.exports=app;