const Sequelize = require('sequelize');
const dbConn = require('../db/connect')
 

const User =  dbConn.define('User',{
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    isAdmin:  Sequelize.BOOLEAN
})


//User.hasMany(Story);

module.exports =  User;