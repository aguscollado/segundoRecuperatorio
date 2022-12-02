import express from 'express'
import { RouterClientes } from './router/clientes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/app', new RouterClientes().start())


const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express conectado, escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
