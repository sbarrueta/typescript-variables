var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // Variable global
    }
    Numbers.prototype.metodoX = function () {
        var dato = 30; // Variable local
        return dato;
    };
    Numbers.prototype.dameValor = function () {
        return this.num_val;
    };
    Numbers.prototype.otroMetodo = function () {
        //return this.dato;
    };
    Numbers.otro_valor = 14;
    return Numbers;
}());
var objeto = new Numbers();
var instancia = new Numbers();
objeto.num_val = 20;
console.log("global_num: " + global_num);
console.log("objeto.num_val: " + objeto.num_val);
console.log("instancia.num_val: " + instancia.num_val);
console.log("Numbers.otro_valor: " + Numbers.otro_valor);
