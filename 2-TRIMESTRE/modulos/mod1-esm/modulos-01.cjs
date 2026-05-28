function somar(n1, n2){
    return `A soma de ${n1} e ${n2} é igual - ${n1+n2}`
}
function subtrair(n1, n2){
    return `A subtraçao de ${n1} e ${n2} é igual - ${n1-n2}`
}
function dividir(n1, n2){
    return `A divisao de ${n1} e ${n2} é igual - ${(n1/n2).toFixed(2)}`
}
function multiplicaçao(n1,n2){
    return `A multiplicaçao de ${n1} e ${n2} é igual - ${n1*n2}`
}
module.exports = {somar , subtrair, dividir, multiplicaçao}