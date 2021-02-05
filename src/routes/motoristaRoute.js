const express = require("express")
const router = express.Router()
const controller = require("../controllers/motoristaController")

//@route POST
//@desc cadastrar um novo motorista
//@access Public
router.post("/cadastrar", controller.addMotorista)


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
//@desc listar os motoristas cadastrados. Deve ser possível filtrar a listagem dos motoristas por nome.
//@access Public 
//@endpoint http://localhost:8080
router.get('/motorista/nome', controller.getByName)



module.exports = router