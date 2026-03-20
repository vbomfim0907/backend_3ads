// Um array é um grupo inedexado de valores 
// Podem ser homogeneos / heterogeneos
// Seus índices vão de "0"... "infinito"
// Possuem funções nativas (prontas)
// Podem ser Iterados e Checados

const time = ["Mark" , "Grayson" , true,     56]
     // indices  0        1          2        3
          time [55] // undefinied

   for (const jogador of time) {
     console.log ("jogador: "+jogador)
   }