const express = require("express")
const router = express.Router()
const controller = require("../controllers/aluguelController")




//@route POST
//@desc criar um registro que represente a utilização de um automóvel por um motorista, com uma data de início e um texto do motivo de utilização.
//@access Public
router.post("/criar", controller.addAluguel)


//@route PUT
//@desc atualizar um motorista cadastrado
//@access public
//@endpoint http://localhost:8080
router.put("/atualizar", controller.UpdateMotorista)


 //@route DELETE
 //@desc excluir um motorista cadastrado pelo id
 //@access Public
 //@endpoint http://localhost:8080
router.delete('/apagar/:id', controller.deleteMotorista)


//@route GET
//@desc recuperar um motorista cadastrado pelo seu identificador id: identificador
//@access Public 
//@endpoint http://localhost:8080
router.get('/motorista/:id', controller.getById)


//@route GET
//@desc listar os registros de utilização cadastrados no sistema com o nome do motorista e as informações do automóvel utilizado.
//@access Public 
//@endpoint http://localhost:8080
router.get('/motorista/nome', controller.getByName)



module.exports = router

/* 

Finalizar a utilização de um automóvel por um motorista guardando a data de
finalização

o Listar os registros de utilização cadastrados no sistema com o nome do motorista
e as informações do automóvel utilizado */