import { EstrategiaEnvio } from '../EstrategiaEnvio';

export class EnvioTerrestre implements EstrategiaEnvio {
  calcularCosto(): number {
    console.log("Calculando costo de envío terrestre...");
    return 15.0; // Costo fijo de ejemplo
  }
}