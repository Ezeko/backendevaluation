const User = require('../models/User')
const Story = require('../models/Story')


exports.getStories = (async(req, res, next)=>{
    let user = req.params.user;
     await  User.findOne({where: {username: user}}).then(()=>{
            //display list
           Story.findAll({where: {owner: user}}).then((stories)=>{
                console.log(stories)
              return  res.status(200).json(stories)
            }).catch((error)=>{
             return   res.status(400).json({
                    error
                })
            })
        })
        next()
    })
 
