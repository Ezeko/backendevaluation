const User = require('../models/User')
const Story = require('../models/Story')


exports.getStories = ((req, res, next)=>{
    const user = req.param.user;
    User.findOne({where: user}).then((data)=>{
        if((data.length)> 0){
            //display list
            Story.find({where: {owner: user}}).then((stories)=>{
                res.status(200).json(stories)
            }).catch((error)=>{
                res.status(400).json({
                    error
                })
            })

        }else{
            res.status(200).send({
                "Message": "You are not Authorized to view this"
            })
        }
    }).catch((error)=>{
        res.status(404).send({
            error
        })
    })
    next()
})