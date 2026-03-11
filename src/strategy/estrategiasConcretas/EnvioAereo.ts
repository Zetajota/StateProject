import { EstrategiaEnvio } from '../EstrategiaEnvio';

export class EnvioAereo implements EstrategiaEnvio {
  calcularCosto(): number {
    console.log("Calculando costo de envío aéreo (Zona Remota)...");
    return 50.0;
  }
}