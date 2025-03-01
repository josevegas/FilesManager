const {Expediente}=require('../../db');

const postExpedienteController=async (titulo,descripcion)=>{
    const uploadResult=await Expediente.create({
        titulo,
        descripcion
    })
    return uploadResult.dataValues;
};

module.exports={
    postExpedienteController
}