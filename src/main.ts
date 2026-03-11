import { FactoryLocal, FactoryZonaRemota } from './factory';
import { Pedido } from './Pedido';
// --- CLIENTE (main.ts) ---
console.log("--SISTEMA E-COMMERCE --");

console.log("\n--- Escenario 1: Pedido Local ---");
const factoryLocal = new FactoryLocal();
const pedidoLocal = new Pedido(factoryLocal, 100.0);

console.log(`Total a pagar: $${pedidoLocal.calcularTotal()}`);
pedidoLocal.procesarPago(); // Cambia a Pagado
pedidoLocal.enviar();       // Cambia a Enviado


console.log("\n--- Escenario 2: Pedido Zona Remota ---");
const factoryRemoto = new FactoryZonaRemota();
const pedidoRemoto = new Pedido(factoryRemoto, 100.0);

console.log(`Total a pagar: $${pedidoRemoto.calcularTotal()}`);
// Intentamos enviar antes de pagar (El patrón State lo evita)
pedidoRemoto.enviar();
// Flujo correcto
pedidoRemoto.procesarPago();
pedidoRemoto.enviar();