const {Expediente}=require('../../db');

const putExpedienteController= async (id,titulo, descripcion)=>{
    let expedienteToUpdate=await Expediente.findByPk(id);
    if(expedienteToUpdate){
        const updateExpediente=await Expediente.update({
            titulo,
            descripcion
        },{
            where: {id}
        });
    }else{
        throw new Error('Expediente no encontrado');
    }
};

module.exports={
    putExpedienteController
};