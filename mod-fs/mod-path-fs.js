const fs = require('fs')
const path = require('node:path')

try {
    // resultado ler arquivo caminho pasta arquivo codificador
    //const arquivo = fs.readFileSync(path.join(__dirname,"/README.MD"),"utf-8")
    const arquivo = fs.readFileSync(path.join(__dirname,"/README.MD"),"utf-8")
    console.log(arquivo)
} catch (error) {
    console.error('Deu merda...')
    console.error(error.message)
} 