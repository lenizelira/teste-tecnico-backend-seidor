const mongoose = require('mongoose')
const Schema = mongoose.Schema

const motoristaSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    nome:{
        type: String,
        required: true
    }

})

const motoristaCollection = mongoose.model('motorista', motoristaSchema)

module.exports = motoristaCollection