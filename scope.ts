var global_num = 12;

class Numbers{
	num_val = 13;// Variable global
	
	static otro_valor = 14;
	
	metodoX(){
		let dato = 30;// Variable local
		return dato;
	}
	
	dameValor(){
		return this.num_val;
	}
	
	otroMetodo(){
		//return this.dato;
	}
}

let objeto = new Numbers();
let instancia = new Numbers();
objeto.num_val = 20;


console.log("global_num: " + global_num);

console.log("objeto.num_val: " + objeto.num_val);
console.log("instancia.num_val: " + instancia.num_val);

console.log("Numbers.otro_valor: " + Numbers.otro_valor);

