const mongoose = require('mongoose')
const Schema = mongoose.Schema

const automovelSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    automovel:{
        type: String,
        required: true
    },

    placa:{
        type: String,
        required: true
    },
    
    cor:{
        type: String,
        required: true
    },

    marca:{
        type: String,
        required: true
    }

})

const automovelCollection = mongoose.model('automovel', automovelSchema)

module.exports = automovelCollection