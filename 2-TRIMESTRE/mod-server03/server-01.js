// importar modulos 
const http = require('node:http')
const porta = 8001                         

//criar um servidor e rotas
const server = http.createServer( (req, res) => {
    //rotas e conteúdos
})


//liberar porta no meu pc
server.listen(porta, () => {
    console.log(`servidor rodando em http://localhost:${porta}`)
})