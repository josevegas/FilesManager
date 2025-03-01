const {Expediente}=require('../../db');

const getAllExpedientesController=async ()=>{
    const allExpedientes=await Expediente.findAll();
    return allExpedientes;
}

module.exports={
    getAllExpedientesController
}