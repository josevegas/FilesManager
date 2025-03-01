const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const Ubicacion=sequelize.define('ubicacion',{
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
},
{
    timestamps:false,
});

module.exports=Ubicacion;