import { EstadoPedido } from '../EstadoPedido';
import { Pedido } from '../../Pedido';

export class Enviado implements EstadoPedido {
  procesarPago(pedido: Pedido): void {
    console.log("Error: El pedido ya fue pagado y enviado.");
  }

  enviar(pedido: Pedido): void {
    console.log("Error: El pedido ya se encuentra en camino.");
  }
}