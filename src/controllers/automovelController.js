const automovelCollection = require("../models/automovelSchema")



const addAutomovel = (request, response) => {
    //console.log(request.url)
    const automovelDoBody = request.body //pegando o que o usuário digitou
    const automovel = new automovelCollection(automovelDoBody) //criando um novo dado com o body

    automovel.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'Automóvel cadastrado com sucesso',
                automovel
            })
        }
    })
}

module.exports = {
    addAutomovel
}