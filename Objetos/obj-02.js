// escolha um tema
// criar um objeto 
// deve ter 5 propriedades
// imprima no exemplo
// ex console.log("tipo de carne: " + carne. tipo)


const carro = {
    nome: "Volkswagen jetta",
    modelo: "TSI",
    ano: 2012 ,
    preço: "R$ 64.000",
    motor : "TSI 2.0" ,
    cambio: ("DSG 6 MARCHAS") ,
    velocidade : "238 KM/H" 
}
    console.log(carro)
    console.log(carro.nome)
    console.log(carro.modelo)
    console.log(carro.ano)
    console.log(carro.preço)
    console.log(carro.motor)
    console.log(carro.cambio)
    console.log(carro.velocidade)



const dadoscarro = "jetta TSI" + carro.nome + "especificaçoes" + carro.modelo + carro.motor + carro.preço + carro.cambio + carro.velocidade + carro.ano
console.log(dadoscarro)