const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const scheme = new Schema({

    ticket: {
        type: String,
        required: true,
        trim: true
    },
    historico: {
        type: String,
        required: true,
        trim: true
    },
    idAtendente: {
        type: Number,
        required: true
    },
    motivoAtend: {
        type: String,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model('Registro', scheme)