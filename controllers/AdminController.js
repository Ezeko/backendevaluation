const User = require('../models/User')
const Story = require('../models/Story')


exports.getStories = ((req, res, next)=>{
    let user = req.params.user;
    User.findOne({where: {username: user}}).then((data)=>{
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
           return res.status(400).send({
                "Message": "You are not Authorized to view this"
            })
        }
    }).catch((error)=>{
      return  res.status(404).json({
            error
        })
    })
    next()
})


exports.deleteStory = (async(req, res, next)=>{
    var id = req.params.id
    Story.destroy({where: {id}}).then(()=>{
        return res.status(200).json({
            "Message": "Story Deleted"
        })
    }).catch((error)=>{
        return res.status(400).json({
            error
        })
    })
    next()
})


exports.updateStory = (async(req, res, next)=>{
    const data = req.body;
    var id = data.id
    Story.update({data}, {where: {id} }).then(()=>{
        return res.status(200).json({
            "Message": "Story Updated"
        })
    }).catch((error)=>{
        return res.status(400).json({
            error
        })
    })
    next()
})