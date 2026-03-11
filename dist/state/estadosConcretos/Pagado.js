"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagado = void 0;
const Enviado_1 = require("./Enviado");
class Pagado {
    procesarPago(pedido) {
        console.log("El pedido ya ha sido pagado anteriormente.");
    }
    enviar(pedido) {
        console.log("Preparando la logística y enviando el pedido...");
        // Transición de estado
        pedido.setEstado(new Enviado_1.Enviado());
    }
}
exports.Pagado = Pagado;
//# sourceMappingURL=Pagado.js.map