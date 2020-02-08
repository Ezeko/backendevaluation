require('custom-env').env();
const Sequelize = require('sequelize')

const path = process.env.DB_URL;
const dbConn = new Sequelize(path);
dbConn.authenticate().then(()=>{
    console.log('Connected to database')
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    dbConn.close();
}
)

module.exports = dbConn;