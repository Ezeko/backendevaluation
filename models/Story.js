const Sequelize = require('sequelize');
const dbConn = require('../db/connect')
   

const Story =  dbConn.define('Story',{
    summary: Sequelize.STRING,
    type: Sequelize.STRING, 
    description:  Sequelize.STRING, 
    complexity:  Sequelize.STRING,
    timeForCompletion: Sequelize.STRING,
    cost:  Sequelize.STRING, 
    owner: Sequelize.STRING
})
/*Story.sync().then(()=>{
    
    console.log('table created')
}).catch(err=>{
    console.log(err)
})*/
//story belongs to owner


module.exports = Story;
