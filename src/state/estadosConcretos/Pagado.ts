import { EstadoPedido } from '../EstadoPedido';
import { Pedido } from '../../Pedido';
import { Enviado } from './Enviado';

export class Pagado implements EstadoPedido {
  procesarPago(pedido: Pedido): void {
    console.log("El pedido ya ha sido pagado anteriormente.");
  }

  enviar(pedido: Pedido): void {
    console.log("Preparando la logística y enviando el pedido...");
    // Transición de estado
    pedido.setEstado(new Enviado());
  }
}