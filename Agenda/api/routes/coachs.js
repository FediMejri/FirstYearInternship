const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const CoachController = require('../controllers/coachs');

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'./coachresume/');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString()+ file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/signup',upload.single('coachResume'),(req,res,next)=>{
    Coach.find({email:req.body.email})
    .exec()
    .then(coach =>{
        if (coach.length >=1){
            return res.status(409).json({
                message : 'mail exists'
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if (err){
                    return res.status(500).json({error : err})
                }else{
                    const coach = new Coach({
                        firstname : req.body.firstname,
                        lastname : req.body.lastname,
                        coachname: req.body.coachname,
                        email : req.body.email,
                        age : req.body.age,   
                        users: req.body.users,
                        password : hash
                    });
                    coach.save()
                    .then(result =>{
                        const response = {
                            coachname : result.coachname
                        };
                        res.status(200).json({
                            message : 'successful signup',
                            result :   response
                        });
                    })
                    .catch(err =>{
                        res.status(500).json({error : err});
                    })
                }
            })
        }
    })
})

router.post('/login',(req,res,next)=>{
    Coach.findOne({email: req.body.email})
    .then(result=>{
        if (!result){
            res.json({
                message: 'no user found',
                Auth: false
            });
        }
        const crypt=bcrypt.compareSync(req.body.password,result.password);
        if(!crypt) return res.json({
            message : 'wrong password',
            Auth: false
        });
        const token=jwt.sign({
            email: req.body.email,
            coachId: result._id
        },"secret",{expiresIn: "1h"});
        return res.json({
            message : 'logged in',
            Auth : true,
            token : token
        });
    })
    .catch(err=>{
        res.json({error : err});
    })
});

router.get('/',CoachController.coachs_get_all);

router.get('/:coachId',CoachController.coachs_get_one);

router.delete('/:coachId',CoachController.delete_coach);

router.get('/:coachId/utilisateurs',CoachController.get_list_of_users);

module.exports=router;