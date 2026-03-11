// src/state/index.ts

// Si pusiste la interfaz en su propio archivo:
export * from './EstadoPedido'; 

// Exportas tus estados concretos:
export * from './estadosConcretos/Nuevo';
export * from './estadosConcretos/Pagado';
export * from './estadosConcretos/Enviado';