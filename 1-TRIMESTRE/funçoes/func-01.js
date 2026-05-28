// Funçoes podem ou não receber parametros
// Sao blocos reaproveitaveis

function dizOla (){
    console.log("Olá!")

}
function dizOlapessoa(nome){
    if(typeof nome !=="string"){
        console.error("Por favor, digite um valor de texto!")
    } else {
    console.log(nome + ", diz olá!")
    }
}
dizOla()
dizOlapessoa("Pedro")
dizOlapessoa("Mariah")

dizOlapessoa(8)