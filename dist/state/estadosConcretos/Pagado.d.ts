import { EstadoPedido } from '../EstadoPedido';
import { Pedido } from '../../Pedido';
export declare class Pagado implements EstadoPedido {
    procesarPago(pedido: Pedido): void;
    enviar(pedido: Pedido): void;
}
//# sourceMappingURL=Pagado.d.ts.map