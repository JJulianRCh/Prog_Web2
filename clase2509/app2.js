// Funcion declarativa
// function numAleatorio(min, max) {
//     return Math.floor(Math.random()* (max - min + 1) + min);
// }

// console.log(numAleatorio(5, 156));

//Funcion expresada

// let numero = function numAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// console.log(numero(5, 156));

// Funcion flecha
let numero = (max) => Math.floor(Math.random() * (max - 1) + 1);

console.log(numero(10));