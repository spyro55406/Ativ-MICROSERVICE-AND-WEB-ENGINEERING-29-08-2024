const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const scheme = new Schema({

    idpessoa:{
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    telefone:{
        type: String,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model('Ticket', scheme)