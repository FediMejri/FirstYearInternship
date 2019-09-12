const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UsersController = require('../controllers/users');

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'./userImages/');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString()+ file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/signup',upload.single('userImage'),(req,res,next)=>{
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if (user.length >= 1){
            return res.status(409).json({
                message: 'mail exists'
            })
        }else{
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                if (err){
                    return res.status(500).json({error: err});
                }else{
                    console.log(req.body.firstname);
                    const user = new User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        email: req.body.email,
                        age: req.body.age,
                        gender: req.body.gender,
                        profession: req.body.profession,
                        nationality: req.body.nationality,
                        password: hash
                    });
                    user.save()
                    .then(result =>{
                        const response={
                            username: result.username
                        }
                        res.status(201).json({
                            message: 'successful signup',
                            result: response
                        });
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({error: err});
                    })
                }
            });
        }
    })
});

router.post('/login',(req,res)=>{
    User.findOne({email: req.body.email})
    .then(result =>{
        if (!result){
            return res.json({
                message : 'no user found',
                Auth : false
            });
        }
        const crypt = bcrypt.compareSync(req.body.password,result.password);
        if(!crypt) return res.json({
            message: 'wrong password',
            Auth: false
        })
        const token= jwt.sign({
            email: req.body.email,
            userId: result._id
        },"secret",{expiresIn: "1h"});
        return res.json({
            message : 'logged in ',
            Auth : true,
            token: token   
        });
    })
    .catch(err =>{
        res.json(err);
    })
});

router.get('/', UsersController.users_get_all);

router.get('/:userId',UsersController.users_get_one );

router.delete('/:userId', UsersController.users_delete_one);

router.get('/:userId/objectifs',UsersController.get_goals);

module.exports=router;