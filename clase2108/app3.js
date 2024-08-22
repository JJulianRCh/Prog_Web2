let val1, val2;

val1 = parseInt(prompt("Ingrese valor 1: "));
val2 = parseInt(prompt("Ingrese valor 2: "));

if (val1 > val2) {
    console.log("%d es mayor que %d", val1, val2);
} else if (val1 < val2) {
    console.log("%d es mayor que %d", val2, val1);
} else {
    console.log("ambos valores son iguales");
}
