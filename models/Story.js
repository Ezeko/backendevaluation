const Sequelize = require('sequelize');


const Story =  sequelize.define('User',{
    summary:{type: Sequelize.STRING, required: true},
    type: {type: Sequelize.STRING, required: true},
    description: {type: Sequelize.STRING, required: true},
    complexity: {type: Sequelize.STRING, required: true},
    timeForCompletion: {type: Sequelize.STRING, required: true},
    cost: {type: Sequelize.INTEGER, required: true},
    belongsTo: {User: {user_id: {type: Sequelize.INTEGER},username: {type: Sequelize.STRING}, required: true}}
})

exports.module = Story;
