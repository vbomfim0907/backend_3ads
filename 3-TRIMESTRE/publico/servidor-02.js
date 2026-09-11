import express from 'express'
import path from 'path'

const app = express()
const porta = 3000
//Usando middleware (software intermediario)TODOS OS ARQ ESTATICOS
app.use(express.static(path.join(import.meta.dirname,'publico')))

//Criar as rotas do servidor
app.get('/',(req, res) => {
    res.sendFile('/paginas/index.html',{root: import.meta.dirname})
})
