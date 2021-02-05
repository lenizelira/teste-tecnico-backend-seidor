const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aluguelSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    dataInicial:{
        type: Date,
        required: true
    },

    dataFinal:{
        type: Date,
        required: true
    },

    nomeMotorista:{
        type: String,
        required: true
    },

    modeloAutomovel:{
        type: String,
        required: true
    },

    motivoDaUtilizacao:{
        type: String,
        required: true
    }

})


const aluguelCollection = mongoose.model('aluguel', aluguelSchema)

module.exports = aluguelCollection