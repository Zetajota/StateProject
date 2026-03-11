"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nuevo = void 0;
const Pagado_1 = require("./Pagado");
class Nuevo {
    procesarPago(pedido) {
        console.log("Procesando pago del pedido...");
        // Transición de estado
        pedido.setEstado(new Pagado_1.Pagado());
    }
    enviar(pedido) {
        console.log("Error: No se puede enviar un pedido que no ha sido pagado.");
    }
}
exports.Nuevo = Nuevo;
//# sourceMappingURL=Nuevo.js.map