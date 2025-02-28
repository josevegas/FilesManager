import { DataTypes } from "sequelize";

export default (sequelize)=>{
    const Abogado = sequelize.define('abogado',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    });
    return Abogado
}