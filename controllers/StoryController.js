const Story = require ('../models/Story');

exports.createStory = (async (req, res, next)=>{
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
            return res.status(201).json({
                Message: "Story Created Successfully"
            })
        }else{
            return res.status(400).json({
                Message: "Something Went Wrong!"
            })
        }
    }).catch((error)=>{
        return res.status(406).json(error)
    })
    
  next()
  });
  
 