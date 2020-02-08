const Sequelize = require('sequelize');


let User =  sequelize.define('User',{
    username:{type: Sequelize.STRING, required: true},
    isAdmin: {type: Sequelize.BOOLEAN, required: true},
    hasMany: {stories: {type: Sequelize.STRING}}

})

exports.module = User;