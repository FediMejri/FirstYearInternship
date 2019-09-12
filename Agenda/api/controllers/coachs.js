const Coach = require('../models/coach');

exports.coachs_get_all = (req,res,next)=>{
    Coach.find()
    .select('coachname age email resume users')
    .exec()
    .then(docs =>{
        const response = {
            count :docs.length,
            coachs : docs.map(doc=>{
                return{
                    id : doc._id,
                    coachname : doc.coachname,
                    email : doc.email,
                    age : doc.age,
                    resume : doc.resume,
                    users : doc.users
                }
            }) 
        };
        res.status(200).json(response);
    })
    .catch(err=>{
        res.status(500).json({error : err});
    })
}

exports.coachs_get_one = (req,res)=>{
    const id = req.params.coachId ;
    Coach.findById(id)
    .select('coachname email age resume')
    .exec()
    .then(doc =>{
        if (doc){
            res.status(200).json({
                coach : doc
            });
        }else {
            res.status(404).json({message : 'No valid entry found for provided ID'});
        }
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.delete_coach = (req,res)=>{
    const id = req.params.coachId;
    Coach.remove({_id : id})
    .exec()
    .then(result=>{
        res.status(200).json({message : 'coach deleted'});
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.get_list_of_users = (req,res)=>{
    const id = req.params.coachId;
    Coach.findOne({_id: id})
    .populate('users')
    .exec()
    .then(result =>{
       res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}