var temperaturas = [21, 27, 25];
var nombres = ["Hugo", "Paco", "Luis"];
var sobrinos = ["Hugo", "Paco", "Luis"];
var calificaciones = [8, 10, 7];
var salario = 100;
var horas = 10;
var empleado = ["Hugo", 100];
//let alumno :[string, number] = [8, "Ramiro"]; // error 
var rgb;
(function (rgb) {
    rgb[rgb["Red"] = 0] = "Red";
    rgb[rgb["Green"] = 1] = "Green";
    rgb[rgb["Blue"] = 2] = "Blue";
})(rgb || (rgb = {}));
;
var numero = rgb.Blue;
//console.log(numero);
var aleatorio = 10; // number
aleatorio = false; // boolean
//aleatorio = "Rocio";
//console.log(aleatorio);
//console.log(aleatorio.toUpperCase());
var miVariable = 10;
miVariable = "Rocio";
miVariable = true;
//console.log((miVariable  as string).toUpperCase());
var total = 10;
//console.log((total  as string).toUpperCase());
var multitipo;
multitipo = 150;
multitipo = true;
multitipo = "otro";
