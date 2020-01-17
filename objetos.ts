function total(subtotal:number,  impuesto:number){
	console.log("El total a pagar es  " + (subtotal + impuesto));
}

function totalTamales(subtotal?:number,  impuesto?:number){
	if (impuesto)
		return  (subtotal + impuesto);
	else
		return subtotal;
}
//console.log(totalTamales(100));

interface Persona {
	nombre:string,
	apellido:string
}


function nombreCompleto(
		persona: {nombre:string, apellido:string}){
	return persona.nombre+" "+persona.apellido;
}

function nombreCompletoConInterface(persona: Persona){
	return persona.nombre+" "+persona.apellido;
}




let profe = {
	nombre:"Jorge",
	apellido:"Sanchez"
}

console.log(nombreCompleto(profe));
console.log(nombreCompletoConInterface(profe));


class Empleado{
	nombre:string;
	constructor(argumento:string){
		this.nombre=argumento;
	}
}


class Gerente extends Empleado{
	constructor(nombreGerente:string){
		super(nombreGerente);
	}
	
}


let instancia = new Gerente("Jorge");
let empleado = new Empleado("Rocio");


