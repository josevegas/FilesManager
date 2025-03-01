const {Expediente,Abogado}=require('../../db');

const getAsignacionByAbogadoIdController=async (abogado_id)=>{
    const asignacionByAbogadoIdRaw=await Abogado.findOne({
        where: {id:abogado_id},
        atributes:[],
        include: [{
            model: Expediente,
            through: {
                atributes: [],
            },
        }]
    });

    const asignacionByAbogadoIdClean=asignacionByAbogadoIdRaw.Expediente;
    return asignacionByAbogadoIdClean;
}

module.exports=getAsignacionByAbogadoIdController;