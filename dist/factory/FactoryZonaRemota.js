"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryZonaRemota = void 0;
const EnvioAereo_1 = require("../strategy/estrategiasConcretas/EnvioAereo");
const ImpuestoInternacional_1 = require("../strategy/estrategiasConcretas/ImpuestoInternacional");
const Nuevo_1 = require("../state/estadosConcretos/Nuevo");
class FactoryZonaRemota {
    crearEnvio() {
        return new EnvioAereo_1.EnvioAereo();
    }
    crearImpuesto() {
        return new ImpuestoInternacional_1.ImpuestoInternacional();
    }
    crearEstadoInicial() {
        return new Nuevo_1.Nuevo(); // Ambos inician como 'Nuevo' en este diseño
    }
}
exports.FactoryZonaRemota = FactoryZonaRemota;
//# sourceMappingURL=FactoryZonaRemota.js.map