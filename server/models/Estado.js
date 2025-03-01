const {DataTypes}= require('sequelize');
const sequelize=require('../config/database');

const Estado=sequelize.define('estado',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    color:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    timestamps:false,
});

module.exports=Estado;