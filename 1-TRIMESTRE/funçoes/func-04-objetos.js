



function fabricarCarro(marca, modelo, montadora, motor){
    return {
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor
    }
}
const carro02= {
    marca: 'Aston martin',
        modelo: 'DBS',
        montadora:'Aston UK',
        motor: 'V12',
}
const Jetta = fabricarCarro("Jetta", "Jetta TSI", "Volkswagen", "Stage 2")
const Aston = fabricarCarro(carro02.marca,carro02.modelo,carro02.montadora,carro02.motor)
console.log(Jetta)
console.log(Aston)