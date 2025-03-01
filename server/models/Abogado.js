const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const Abogado=sequelize.define('abogado',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    timestamps:false,
});

module.exports=Abogado;