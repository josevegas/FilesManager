const {DataTypes} = require('sequelize');
const sequelize=require('../config/database');

const Expediente=sequelize.define('expediente',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},
{
    timestamps:false,
});

module.exports=Expediente;