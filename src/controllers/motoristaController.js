const { response } = require("express")
const motoristaCollection = require("../models/motoristaSchema")

const addMotorista = (request, response) => {
    //console.log(request.url)
    const motoristaDoBody = request.body //pegando o que o usuário digitou
    const motorista = new motoristaCollection(motoristaDoBody) //criando um novo dado com o body

    motorista.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'Motorista cadastrado com sucesso',
                motorista
            })
        }
    })
}

module.exports = {
    addMotorista
}