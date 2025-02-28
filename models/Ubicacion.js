import { DataTypes } from "sequelize";
import Expediente from "./Expediente";

export default (sequelize)=>{
    const Ubicacion=sequelize.define("ubicaciones",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        describcion:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        }
    });
    Ubicacion.hasMany(Expediente,{foreignKe:'ubicacion_id'})
    return Ubicacion;
}