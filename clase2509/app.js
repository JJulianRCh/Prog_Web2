let frutas = [];

do {
    let fruta = prompt("Agrega la fruta");
    frutas.push(fruta);
} while (confirm("Deseas agregar otra fruta?"));

console.log("Estas son las frutas que agregaste");

frutas.forEach((fruta, index) => console.log(`${index + 1}: ${fruta}`));