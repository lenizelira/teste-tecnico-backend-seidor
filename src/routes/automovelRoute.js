const express = require("express")
const router = express.Router()
const controller = require("../controllers/automovelController")

//@route POST
//@desc cadastrar um novo automóvel
//@access Public
router.post("/cadastrar", controller.addAutomovel)


//@route PUT
//@desc atualizar um automóvel cadastrado
//@access public
//@endpoint http://localhost:8080
router.put("/atualizar", controller.updateAutomovel)


 //@route DELETE
 //@desc excluir um automóvel cadastrado pelo id
 //@access Public
 //@endpoint http://localhost:8080
router.delete('/apagar/:id', controller.deleteAutomovel)


//@route GET
//@desc recuperar um automóvel cadastrado pelo seu identificador id: identificador
//@access Public 
//@endpoint http://localhost:8080
router.get('/automovel/:id', controller.getById)


//@route GET 
//@desc listar os automóveis cadastrados. Deve ser possível filtrar a listagem dos automóveis por cor e marca.
//@access Public 
//@endpoint http://localhost:8080
router.get('/automovel/cor', controller.getByCor)


module.exports = router