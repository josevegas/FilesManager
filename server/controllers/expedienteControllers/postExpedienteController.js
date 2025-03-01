const {Expediente}=require('../../db');

const postExpedienteController=async (titulo,descripcion)=>{
    const postExpedienteController=await Expediente.create({
        titulo,
        descripcion
    })
    return postExpedienteController;
};

module.exports={
    postExpedienteController
}