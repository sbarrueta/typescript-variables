var arreglo; // crear el arreglo vacio
arreglo = [1, 2, 5, 9, 15, 21, 99]; // llenar el arreglo
console.log("Primer valor en el arreglo: " + arreglo[0]);
console.log("Valores del arreglo");
for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
// crear e inicializar
var nombres = ["Hugo", "Paco", "Luis"];
console.log("El segundo sobrino es " + nombres[1]);
// Crea el arreglo e indica el numero de elementos del arreglo
var otroArreglo = new Array(4);
console.log("Valores del arreglo vacio");
for (var i = 0; i < otroArreglo.length; i++) {
    console.log(i + ": " + otroArreglo[i]);
}
