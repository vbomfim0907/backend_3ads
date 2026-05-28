// Funçoes de retorno exigem o termo "return"
// Permitem tornar disponiveis os dados processados 
// Reaproveitamento e açoes sequenciais 
// Podemos armazenar as funçoes de retorno 
// a variaveis, funçoes, arrays, etc.

function meuSalário (salário) {
    const contaLuz = 145.0
    const aluguel = 1350.0
    const restoSalario = salário - (contaLuz+aluguel)
    //console.log(restoSalário) // nao serve p/ usuario
    return `o resto do seu salário é R$ ${ restoSalario.toFixed(2).replace(".",",")}`
}
const resto = meuSalário(500000.0)
console.log(resto)