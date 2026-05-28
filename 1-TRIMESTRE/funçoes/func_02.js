// a partir da funçao abaixo,
// crie as variaçoes:
// (Adiçao , subtraçao, multiplicaçao, divisao)

function divisao(n1,n2){
    if(n2 !=0){
       console.log (" A divisao de " + n1 + " por " + n2 + " é = "+n1/n2)
    } else {
     console.error("impossivel dividir por ZERO!")
    }
}
divisao(12,2)
divisao(12,0)

function multiplicaçao (n1,n2){
        console.log (" A multiplicação de " +n1+ " por " + n2+ " é = "+n1*n2)
    }
    multiplicaçao(6,4)

    function soma (n1,n2){
        console.log ("A soma de " +n1+ " por " + n2 + " é = "+(n1+n2))
    }
    soma(5,5)

    function subtraçao (n1,n2){
        console.log (" A subtração de " +n1+ " por " +n2+ " é = "+(n1-n2))
    }
    subtraçao (24,3)