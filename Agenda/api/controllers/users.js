const User = require('../models/user');
const Goal = require('../models/goal');

exports.users_get_all = (req,res,next) => {
    User.find()
    .select('username email _id age profession nationality')
    .exec()
    .then(docs =>{
        const response = {
            count : docs.length,
            users : docs.map(doc => {
                return {
                    username : doc.username,
                    email: doc.email,
                    age: doc.age,
                    profession : doc.profession,
                    nationality : doc.nationality,
                    id: doc._id
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err =>{
        res.status(500).json({error : err});
    }) 
 }

 exports.users_get_one = (req,res)=>{
    const id = req.params.userId;
    User.findById(id).select('username email age gender profession nationality image')
    .exec()
    .then(doc =>{
        if (doc){
            res.status(200).json({user : doc});
        }else {
            res.status(404).json({message : 'no valid user for provided ID'});
        }
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.users_delete_one = (req,res)=>{
    const id = req.params.userId;
    User.remove({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json({message : 'user deleted'});
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.get_goals = (req,res)=>{
    const id = req.params.userId;
    Goal.find({owner: id})
    .select('owner')
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(200).json({error : err});
    })
}