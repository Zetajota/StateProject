import { LogisticsFactory } from './LogisticsFactory';
import { EstrategiaEnvio } from '../strategy/EstrategiaEnvio';
import { EstrategiaImpuesto } from '../strategy/EstrategiaImpuesto';
import { EstadoPedido } from '../state/EstadoPedido';
export declare class FactoryLocal implements LogisticsFactory {
    crearEnvio(): EstrategiaEnvio;
    crearImpuesto(): EstrategiaImpuesto;
    crearEstadoInicial(): EstadoPedido;
}
//# sourceMappingURL=FactoryLocal.d.ts.map