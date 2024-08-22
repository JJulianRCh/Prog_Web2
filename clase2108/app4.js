let rnd = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let entrada;
let vidas = 3;
let mnj;

while(vidas > 0) {
    entrada = parseInt(prompt("Adivina el numero    &d"));
    if (entrada === rnd) {
        break;
    } else {
        console.log("Te equivocaste")
        vidas--;
    }
}

mnj = (vidas > 0) ? "Ganaste" : "Perdiste";
document.write(mnj)