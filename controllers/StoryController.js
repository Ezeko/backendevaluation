const Story = require ('../models/Story');


exports.createStory = (async (req, res, next)=>{

         Story.create( {
        summary: req.body.summary,
        type: req.body.type,
        description: req.body.description,
        complexity: req.body.complexity,
        timeForCompletion: req.body.timeForCompletion,
        cost: req.body.cost,
        owner: req.body.owner
    }).then((story)=>{
            if(!(story)){
                throw new  Error("Story  not created")
            }
          res.status(C.Status.OK).json({
            message: "Story created"
        })

        return;
    }).catch((error)=>{
         res.sendStatus(400).json({
            error
        })
        return
    })

  
    
    next();
})