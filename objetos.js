var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function total(subtotal, impuesto) {
    console.log("El total a pagar es  " + (subtotal + impuesto));
}
function totalTamales(subtotal, impuesto) {
    if (impuesto)
        return (subtotal + impuesto);
    else
        return subtotal;
}
function nombreCompleto(persona) {
    return persona.nombre + " " + persona.apellido;
}
function nombreCompletoConInterface(persona) {
    return persona.nombre + " " + persona.apellido;
}
var profe = {
    nombre: "Jorge",
    apellido: "Sanchez"
};
console.log(nombreCompleto(profe));
console.log(nombreCompletoConInterface(profe));
var Empleado = /** @class */ (function () {
    function Empleado(argumento) {
        this.nombre = argumento;
    }
    return Empleado;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nombreGerente) {
        return _super.call(this, nombreGerente) || this;
    }
    return Gerente;
}(Empleado));
var instancia = new Gerente("Jorge");
var empleado = new Empleado("Rocio");
