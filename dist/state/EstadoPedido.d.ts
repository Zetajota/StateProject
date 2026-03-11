import type { Pedido } from '../Pedido';
export interface EstadoPedido {
    procesarPago(pedido: Pedido): void;
    enviar(pedido: Pedido): void;
}
//# sourceMappingURL=EstadoPedido.d.ts.map