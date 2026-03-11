import { EstrategiaEnvio } from '../strategy/EstrategiaEnvio';
import { EstrategiaImpuesto } from '../strategy/EstrategiaImpuesto';
import { EstadoPedido } from '../state/EstadoPedido';
export interface LogisticsFactory {
    crearEnvio(): EstrategiaEnvio;
    crearImpuesto(): EstrategiaImpuesto;
    crearEstadoInicial(): EstadoPedido;
}
//# sourceMappingURL=LogisticsFactory.d.ts.map