import type { Pedido } from '../Pedido';

export interface EstadoPedido {
  procesarPago(pedido: Pedido): void;
  enviar(pedido: Pedido): void;
}