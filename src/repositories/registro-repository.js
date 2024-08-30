const mongoose = require('mongoose')
const Registro = mongoose.model('Registro')

exports.get  = async() => {
    const result = await Registro.find({})
    return result
}

exports.create = async(data) =>{
    const registro = Registro(data)
    await registro.save()
}

exports.update = async(id, data) =>{
    await Registro.findByIdAndUpdate(id, {
        $set:{
            ticket: data.ticket,
            historico: data.historico,
            idAtendente: data.idAtendente,
            motivoAtend: data.motivoAtend
        }
    })
}