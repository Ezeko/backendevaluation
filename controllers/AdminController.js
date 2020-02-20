const User = require('../models/User')
const Story = require('../models/Story')

/**
 * Let admin get users story
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.getStories = ((req, res)=>{
    let adminId = req.params.user;
      User.findOne({where: {id: adminId}}).then((data)=>{
        console.log(data)
        if((data.isAdmin)){
            //display list
           try{ Story.findAll().

                then((stories)=>{
                    console.log(stories)
                    res.status(200).json(stories)
                    
                })}
            catch{((error)=>{
                 res.status(400).json({
                        error
                    })
            })}

        }else{
                res.status(401).send({
                Message: "You are not Authorized to view this"
            })
        }
    }).catch((error)=>{
            res.status(404).json({
            error
        })
    })
    
})


/**
 * Let admin delete users story
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.deleteStory = ((req, res)=>{
    let storyId = req.params.id
     Story.destroy({where: {id: storyId}})
     .then(()=>{
            res.status(200).json({
            Message: "Story Deleted"}
        )
    })
    .catch((error)=>{
         res.status(400).json({
            error
        })
    })

})

/**
 * Let admin update user's story
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
exports.updateStory = ((req, res)=>{
    const data = req.body;
    let storyId = data.id
     Story.update({data}, {where: {id: storyId} }).then(()=>{
         res.status(200).json({
            Message: "Story Updated"
        })
    }).catch((error)=>{
         res.status(400).json({
            error
        })
    })
    
})