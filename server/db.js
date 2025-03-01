require('dotenv').config();
const {Sequelize}=require('sequelize');
const AbogadoFunction=require('./models/Abogado.js');
const EstadoFunction=require('./models/Estado.js');
const ExpedienteFunction=require('./models/Expediente.js');
const UbicacionFunction=require('./models/Ubicacion.js');

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,PORT}=process.env;
const sequelize=new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,{
    logging:false,
    native:false,
});

AbogadoFunction(sequelize);
EstadoFunction(sequelize);
ExpedienteFunction(sequelize);
UbicacionFunction(sequelize);

//Asociaciones
const {Abogado,Estado,Expediente,Ubicacion}=sequelize.models;
Abogado.belongsToMany(Expediente,{through: 'Asignacion'});
Expediente.belongsToMany(Abogado,{through: 'Asignacion'})
Estado.hasMany(Expediente)
Expediente.belongsTo(Estado)
Ubicacion.hasMany(Expediente)
Expediente.belongsTo(Ubicacion)


module.exports={sequelize, ...sequelize.models};