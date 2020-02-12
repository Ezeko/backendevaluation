const User = require('../models/User')
const Story = require('../models/Story')

const userPara = 
exports.getUsersStories = ((req, res, next)=>{
    let user = req.params.user;
    console.log(user);
       User.findOne({where: {id: user}}).then((detail)=>{
            //display list
            if(detail != null){
           Story.findAll({where: {owner: detail.username}}).then((stories)=>{
                console.log(stories)
              res.status(200).json({stories}); 
              res.end();
            })            
        }else{
             res.status(400).json({
                message: 'Not a valid Id'
            })
        
        }return;
        })
    
    })
 
