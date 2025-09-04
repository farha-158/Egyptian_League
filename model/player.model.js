const {DataTypes}=require('sequelize')

const sequelize=require('../config/database')

const player= sequelize.define('player',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    salary:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    state:{
        type:DataTypes.ENUM("Active", "Retired"),
        allowNull: false,
    }},
{
    timestamps: false,
})

module.exports=player