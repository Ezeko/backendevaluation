const User = require('../models/User')
const Story = require('../models/Story')


/**
 * Let user get the story created by them
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
exports.getUsersStories = ((req, res)=>{
    let user = req.params.user;
    //console.log(user);
       User.findOne({where: {id: user}}).then((detail)=>{
            //display list
            if(detail != null){
           Story.findAll({where: {owner: detail.username}}).then((stories)=>{
                //console.log(stories)
              res.status(200).json({stories}); 
              res.end();
            })            
        }else{
             res.status(400).json({
                message: 'Something went wrong'
            })
        
        }
        })
    
    })
 
