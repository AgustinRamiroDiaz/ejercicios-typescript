/*
 * EJERCICIO: Múltiples instancias
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Moneda {
  cantidad: number;

  constructor(cantidad: number) {
    this.cantidad = cantidad;
  }
}
let bolsa1 = new Moneda(10);
let bolsa2 = new Moneda(20);
console.log(bolsa1.cantidad);
console.log(bolsa2.cantidad);

// Predicción 1:
// Predicción 2:

export {};
