const Goal = require('../models/goal');

exports.goals_get_all = (req,res,next)=>{
    Goal.find({owner: req.body.owner})
    .select('titre status').
    exec()
    .then(docs =>{
        const response={
            count : docs.length,
            goals : docs.map(doc =>{
                return{
                    id : doc._id,
                    goal : doc.titre,
                    status : doc.status,
                    comment : doc.comment
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err =>{
        res.status(200).json(err);
    })
}

exports.create_goal = (req,res,next)=>{
    const goal = new Goal({
        titre : req.body.titre,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        status : req.body.status,
        owner : req.body.owner
    });
    goal.save()
    .then(result =>{
        const response = {
            titre : result.titre,
            startDate : result.startDate,
            endDate : result.endDate,
            status : result.status,
            owner : result.owner
        };
        return res.status(200).json(response);
    })
    .catch(err =>{
        res.status(500).json({error : err});
    });
}

exports.goals_get_one = (req,res)=>{
    const id = req.params.goalId ;
    Goal.findById(id)
    .select('titre startDate endDate status owner')
    .exec()
    .then(doc =>{
        if(doc){
            res.status(200).json({goal : doc});
        }else {
            res.status(404).json({message : 'no valid entry for provided ID'});
        }
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.update_goal = (req,res,next)=>{
    const id = req.param.goalId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName]= ops.value;
    }
    Goal.update({_id: id},{ $set: updateOps})
    .exec()
    .then(result =>{
        res.status(200).json({
            message: 'Goal updated'
        });
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.delete_goal = (req,res,next)=>{
    const id = req.params.goalId;
    Goal.remove({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json({
            message : 'goal removed'
        });
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.post_comment = (req,res)=>{
    const userIdentity = req.params.userId;
    const goalIdentity = req.params.goalId;
    const commentaire = {
        content: req.body.content,
        userCreator: userIdentity
    }
    ===Goal.findByIdAndUpdate({_id: goalIdentity},{$push:{"comment":{commentaire}}} ,{safe:true,upsert: true, new: true})
    .exec()
    .then(result =>{
        if (!result) return res.status(409).json({message : 'no valid entry for provided id'});
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

exports.remove_comment = (req,res)=>{
    console.log('hello');
    const goalIdentity = req.params.goalId;
    const commentId = req.params.commentId;
    Goal.findByIdAndUpdate({_id: goalIdentity},{$pull:{"comment":{_id: commentId}}})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
};