const sequelize=require('sequelize')
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports= new sequelize(
    'Egyptian_League',
    'root',
    process.env.PASSWORD,
    {
        host:'localhost',
        dialect:'mysql'
    }
)