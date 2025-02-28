import { DataTypes } from "sequelize";
import Expediente from "./Expediente";

export default (sequelize)=>{
    const Estado= sequelize.define('estados',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true
        }
    });
    Estado.hasMany(Expediente,{foreignKey:'estado_id'});
    return Estado;
}