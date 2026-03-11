import { LogisticsFactory } from './LogisticsFactory';
import { EstrategiaEnvio } from '../strategy/EstrategiaEnvio';
import { EstrategiaImpuesto } from '../strategy/EstrategiaImpuesto';
import { EstadoPedido } from '../state/EstadoPedido';
import { EnvioAereo } from '../strategy/estrategiasConcretas/EnvioAereo';
import { ImpuestoInternacional } from '../strategy/estrategiasConcretas/ImpuestoInternacional';
import { Nuevo } from '../state/estadosConcretos/Nuevo';

export class FactoryZonaRemota implements LogisticsFactory {
  crearEnvio(): EstrategiaEnvio {
    return new EnvioAereo();
  }

  crearImpuesto(): EstrategiaImpuesto {
    return new ImpuestoInternacional();
  }

  crearEstadoInicial(): EstadoPedido {
    return new Nuevo(); // Ambos inician como 'Nuevo' en este diseño
  }
}