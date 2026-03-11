import { EstrategiaImpuesto } from '../EstrategiaImpuesto';

export class ImpuestoInternacional implements EstrategiaImpuesto {
  calcularImpuesto(montoBase: number): number {
    console.log("Aplicando impuesto internacional (20%)...");
    return montoBase * 0.20;
  }
}