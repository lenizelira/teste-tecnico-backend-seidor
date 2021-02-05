const express = require("express")
const app = express()
const cors = require('cors')



app.use(cors())
app.use(express.json())


const index = require("./routes/index")
//const motorista = require("./routes/motoristaRoute")
//const automovel = require("./routes/automovelRoute")
//const aluguel = require("./routes/aluguelRoute")


app.use("/", index)
//app.use("/", motorista)
//app.use("/", automovel)
//app.use("/", aluguel)

module.exports = app