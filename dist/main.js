"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
const Pedido_1 = require("./Pedido");
// --- CLIENTE (main.ts) ---
console.log("--SISTEMA E-COMMERCE --");
console.log("\n--- Escenario 1: Pedido Local ---");
const factoryLocal = new factory_1.FactoryLocal();
const pedidoLocal = new Pedido_1.Pedido(factoryLocal, 100.0);
console.log(`Total a pagar: $${pedidoLocal.calcularTotal()}`);
pedidoLocal.procesarPago(); // Cambia a Pagado
pedidoLocal.enviar(); // Cambia a Enviado
console.log("\n--- Escenario 2: Pedido Zona Remota ---");
const factoryRemoto = new factory_1.FactoryZonaRemota();
const pedidoRemoto = new Pedido_1.Pedido(factoryRemoto, 100.0);
console.log(`Total a pagar: $${pedidoRemoto.calcularTotal()}`);
// Intentamos enviar antes de pagar (El patrón State lo evita)
pedidoRemoto.enviar();
// Flujo correcto
pedidoRemoto.procesarPago();
pedidoRemoto.enviar();
//# sourceMappingURL=main.js.map