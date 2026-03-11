import { LogisticsFactory } from './LogisticsFactory';
import { EstrategiaEnvio } from '../strategy/EstrategiaEnvio';
import { EstrategiaImpuesto } from '../strategy/EstrategiaImpuesto';
import { EstadoPedido } from '../state/EstadoPedido';
import { EnvioTerrestre } from '../strategy/estrategiasConcretas/EnvioTerrestre';
import { ImpuestoNacional } from '../strategy/estrategiasConcretas/ImpuestoNacional';
import { Nuevo } from '../state/estadosConcretos/Nuevo';

export class FactoryLocal implements LogisticsFactory {
  crearEnvio(): EstrategiaEnvio {
    return new EnvioTerrestre();
  }

  crearImpuesto(): EstrategiaImpuesto {
    return new ImpuestoNacional();
  }

  crearEstadoInicial(): EstadoPedido {
    return new Nuevo();
  }
}