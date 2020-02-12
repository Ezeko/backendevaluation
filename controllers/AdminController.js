const User = require('../models/User')
const Story = require('../models/Story')


exports.getStories = (async(req, res, next)=>{
    let user = req.params.user;
     await User.findOne({where: {id: user}}).then((data)=>{
        console.log(data)
        if((data.isAdmin)){
            //display list
           try{ Story.findAll().then((stories)=>{
                console.log(stories)
                 res.status(200).json(stories)
            })}catch{((error)=>{
               return res.status(400).json({
                    error
                })
            })}

        }else{
           return res.status(400).send({
                Message: "You are not Authorized to view this"
            })
        }
    }).catch((error)=>{
      return  res.status(404).json({
            error
        })
    })
    
})


exports.deleteStory = (async(req, res)=>{
    let id = req.params.id
    await Story.destroy({where: {id}}).then(()=>{
        return res.status(200).json({
            Message: "Story Deleted"
        })
    }).catch((error)=>{
        return res.status(400).json({
            error
        })
    })

})


exports.updateStory = (async(req, res, next)=>{
    const data = req.body;
    let id = data.id
    await Story.update({data}, {where: {id} }).then(()=>{
        return res.status(200).json({
            Message: "Story Updated"
        })
    }).catch((error)=>{
        return res.status(400).json({
            error
        })
    })
    
})