const Story = require ('../models/Story');


exports.createStory = (async (req, res, next)=>{

     const story =  Story.create( {
        summary: req.body.summary,
        type: req.body.type,
        description: req.body.description,
        complexity: req.body.complexity,
        timeForCompletion: req.body.timeForCompletion,
        cost: req.body.cost,
        owner: req.body.owner
    }).then(()=>{

       return  res.status(201).json({
            message: "Story created"
        })
    }).catch((error)=>{
        return res.status(404).json({
            error
        })
    })
    
    next();
})