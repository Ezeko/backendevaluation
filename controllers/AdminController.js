const User = require('../models/User')
const Story = require('../models/Story')


exports.getStories = ((req, res, next)=>{
    const user = req.param.user;
    User.findOne({where: user}).then((data)=>{
        if((data.isAdmin)== true){
            //display list
            Story.findAll().then((stories)=>{
                return res.status(200).json(stories)
            }).catch((error)=>{
               return res.status(400).json({
                    error
                })
            })

        }else{
           return res.status(200).send({
                "Message": "You are not Authorized to view this"
            })
        }
    }).catch((error)=>{
      return  res.status(404).send({
            error
        })
    })
    next()
})


exports.deleteStory = (async(req, res, next)=>{
    Story.delete({where: req.params.id}).then(()=>{
        return res.status(200).send({
            "Message": "Story Deleted"
        })
    }).catch((error)=>{
        return res.status(400).send({
            error
        })
    })
})


exports.updateStory = (async(req, res, next)=>{
    const data = req.body;
    Story.update({data, where: data.id }).then(()=>{
        return res.status(200).json({
            "Message": "Story Updated"
        })
    }).catch((error)=>{
        return res.status(400).json({
            error
        })
    })
})