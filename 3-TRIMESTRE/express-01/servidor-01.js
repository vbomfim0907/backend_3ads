import express from 'express'

const app = express()
const porta = 3000

// Cria as rotas do servidor 
app.get('/', (req,res)=>{
    res.send('ola abacaxi!')
})

// Liberar porta do meu computador
app.listen(porta, () => {console.log('servidor esta vivo!')})

