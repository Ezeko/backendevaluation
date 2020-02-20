const Story = require ('../models/Story');

/**
 * Let user create a story
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */

exports.createStory = (async(req, res)=>{
    let story = await Story.build({
        summary: req.body.summary,
        type: req.body.type, 
        description:  req.body.description, 
        complexity:  req.body.complexity,
        timeForCompletion: req.body.timeForCompletion,
        cost:  req.body.cost, 
        owner: req.body.owner,
        status: "PENDING"

    });
     await story.save().then((saved)=>{
        if(saved){
             res.status(201).json({
                Message: "Story Created Successfully"
            })
        }else{
             res.status(400).json({
                Message: "Something Went Wrong!"
            })
        }
    }).catch((error)=>{
         res.status(404).json(error)
    })
    
  });
  
 