import { LogisticsFactory } from './factory';
import { EstadoPedido } from './state';
export declare class Pedido {
    private estado;
    private estrategiaEnvio;
    private estrategiaImpuesto;
    private montoBase;
    constructor(factory: LogisticsFactory, montoBase: number);
    setEstado(estado: EstadoPedido): void;
    procesarPago(): void;
    enviar(): void;
    calcularTotal(): number;
}
//# sourceMappingURL=Pedido.d.ts.map