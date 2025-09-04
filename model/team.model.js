const {DataTypes}=require('sequelize')

const sequelize=require('../config/database')

const team= sequelize.define('team',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    tShrit_Color:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    city:{
        type:DataTypes.STRING,
        allowNull: false,
    }
    },
{
    timestamps: false,
})

module.exports=team