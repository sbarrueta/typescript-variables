let temperaturas : number[] = [21, 27, 25];
let nombres:string [] = ["Hugo","Paco","Luis"];

let sobrinos:Array<string> = ["Hugo","Paco","Luis"];

let calificaciones:Array<number> = [8,10,7];
 
let salario:number = 100;

var horas = 10;

let empleado :[string, number] = ["Hugo",100];

//let alumno :[string, number] = [8, "Ramiro"]; // error 


enum rgb {Red, Green, Blue}; 

let numero : rgb = rgb.Blue;
 

//console.log(numero);



let aleatorio : any = 10;// number
aleatorio = false;// boolean
//aleatorio = "Rocio";

//console.log(aleatorio);
//console.log(aleatorio.toUpperCase());

let miVariable: unknown=10;

miVariable = "Rocio";

miVariable = true;

//console.log((miVariable  as string).toUpperCase());

let total: unknown = 10;

//console.log((total  as string).toUpperCase());


let multitipo : number | boolean;

multitipo = 150;

multitipo = true;

multitipo = "otro";











