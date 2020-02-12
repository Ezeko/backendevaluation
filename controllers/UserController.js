const User = require('../models/User')
const Story = require('../models/Story')


exports.getUsersStories = (async(req, res, next)=>{
    let user = req.params.user;
    console.log(user);
      await User.findOne({where: {id: user}}).then((detail)=>{
            //display list
           Story.findAll({where: {owner: detail.username}}).then((stories)=>{
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
 
