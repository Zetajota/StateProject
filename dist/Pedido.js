"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
// --- CONTEXTO ---
class Pedido {
    estado;
    estrategiaEnvio;
    estrategiaImpuesto;
    montoBase;
    constructor(factory, montoBase) {
        this.montoBase = montoBase;
        // Inyección de dependencias a través de la fábrica
        this.estrategiaEnvio = factory.crearEnvio();
        this.estrategiaImpuesto = factory.crearImpuesto();
        this.estado = factory.crearEstadoInicial();
    }
    setEstado(estado) {
        this.estado = estado;
    }
    procesarPago() {
        this.estado.procesarPago(this);
    }
    enviar() {
        this.estado.enviar(this);
    }
    calcularTotal() {
        const costoEnvio = this.estrategiaEnvio.calcularCosto();
        const costoImpuesto = this.estrategiaImpuesto.calcularImpuesto(this.montoBase);
        return this.montoBase + costoImpuesto + costoEnvio;
    }
}
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.js.map