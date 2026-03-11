import { EstadoPedido } from '../EstadoPedido';
import { Pedido } from '../../Pedido';
import { Pagado } from './Pagado';

export class Nuevo implements EstadoPedido {
  procesarPago(pedido: Pedido): void {
    console.log("Procesando pago del pedido...");
    // Transición de estado
    pedido.setEstado(new Pagado());
  }

  enviar(pedido: Pedido): void {
    console.log("Error: No se puede enviar un pedido que no ha sido pagado.");
  }
}