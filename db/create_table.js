const Story = require('../models/Story')
const User = require('../models/User')

const create_stories_table = () =>{

Story.sync({force: true}).then(()=>{
    
    console.log('stories table created')
}).catch(err=>{
    console.log(err)
})
}

const create_users_table = ()=>{
    User.sync({force: true}).then(()=>{
    
    console.log('table created')
}).catch(err=>{
    console.log(err)
})
}

//create_stories_table();
//create_users_table();