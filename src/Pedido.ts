import { LogisticsFactory } from './factory';
import { EstadoPedido } from './state';
import { EstrategiaEnvio, EstrategiaImpuesto } from './strategy';
// --- CONTEXTO ---
export class Pedido {
  private estado: EstadoPedido;
  private estrategiaEnvio: EstrategiaEnvio;
  private estrategiaImpuesto: EstrategiaImpuesto;
  private montoBase: number;

  constructor(factory: LogisticsFactory, montoBase: number) {
    this.montoBase = montoBase;
    
    // Inyección de dependencias a través de la fábrica
    this.estrategiaEnvio = factory.crearEnvio();
    this.estrategiaImpuesto = factory.crearImpuesto();
    this.estado = factory.crearEstadoInicial();
  }

  public setEstado(estado: EstadoPedido): void {
    this.estado = estado;
  }

  public procesarPago(): void {
    this.estado.procesarPago(this);
  }

  public enviar(): void {
    this.estado.enviar(this);
  }

  public calcularTotal(): number {
    const costoEnvio = this.estrategiaEnvio.calcularCosto();
    const costoImpuesto = this.estrategiaImpuesto.calcularImpuesto(this.montoBase);
    
    return this.montoBase + costoImpuesto + costoEnvio;
  }
}