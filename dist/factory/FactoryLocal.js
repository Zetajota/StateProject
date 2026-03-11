"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryLocal = void 0;
const EnvioTerrestre_1 = require("../strategy/estrategiasConcretas/EnvioTerrestre");
const ImpuestoNacional_1 = require("../strategy/estrategiasConcretas/ImpuestoNacional");
const Nuevo_1 = require("../state/estadosConcretos/Nuevo");
class FactoryLocal {
    crearEnvio() {
        return new EnvioTerrestre_1.EnvioTerrestre();
    }
    crearImpuesto() {
        return new ImpuestoNacional_1.ImpuestoNacional();
    }
    crearEstadoInicial() {
        return new Nuevo_1.Nuevo();
    }
}
exports.FactoryLocal = FactoryLocal;
//# sourceMappingURL=FactoryLocal.js.map