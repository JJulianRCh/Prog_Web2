function saludar() {
    let endT1 = 1;
    let begT2 = 16, endT2 = 25;
    let begT3 = 31, endT3 = 40;
    let begT4 = 55;
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 55; j++) {
            if (j <= endT1 || (j >= begT2 && j <= endT2) || (j >= begT3 && j <= endT3) || j >= begT4) {
                resultado += "*"
            } else {
                resultado += " "
            }
        }
        console.log(resultado);
        resultado = "";
        endT1++;
        endT2--;
        begT3++;
        begT4--;
    }
}