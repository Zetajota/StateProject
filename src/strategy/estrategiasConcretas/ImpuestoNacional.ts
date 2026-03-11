import { EstrategiaImpuesto } from '../EstrategiaImpuesto';

export class ImpuestoNacional implements EstrategiaImpuesto {
  calcularImpuesto(montoBase: number): number {
    console.log("Aplicando impuesto nacional (13%)...");
    return montoBase * 0.13;
  }
}