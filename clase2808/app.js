function sumar(a, b) {
    return a + b;
}

let a = parseInt(prompt("Escriba un numero"));
let b = parseInt(prompt("Escriba otro numero"));
let resultado = sumar(a, b);
console.log('La suma de %d mas %d es %d', a, b, resultado);