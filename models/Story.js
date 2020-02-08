const Sequelize = require('sequelize');
const dbConn = require('../db/connect')
   

const Story =  dbConn.define('Story',{
    summary: Sequelize.STRING,
    type: Sequelize.STRING, 
    description:  Sequelize.STRING, 
    complexity:  Sequelize.STRING,
    timeForCompletion: Sequelize.DATE,
    cost:  Sequelize.STRING, 
    owner: Sequelize.STRING,
    status: Sequelize.STRING
})

//story belongs to owner


module.exports = Story;
