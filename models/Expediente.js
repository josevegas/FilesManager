import { DataTypes } from 'sequelize';
import Estado from './Estado';
import Ubicacion from './Ubicacion';

export default (sequelize)=>{
    const Expediente= sequelize.define('expediente',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descripcion:{
            type:DataTypes.STRING,
            allowNull:false
        },
        estado_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        ubicacion_id:{
            type:DataTypes.UUID,
            allowNull:false
        }
    },
    {
        timestamps:false
    }
)
Expediente.belongsTo(Estado,{
    foreignKey:'estado_id'
})
Expediente.belongsTo(Ubicacion,{
    foreignKey:'ubicacion_id'
})
return Expediente
}