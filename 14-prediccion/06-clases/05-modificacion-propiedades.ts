/*
 * EJERCICIO: Modificación de propiedades
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Contador {
  valor: number;

  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor++;
  }
}
let contador = new Contador();
console.log(contador.valor);
contador.incrementar();
console.log(contador.valor);
contador.incrementar();
console.log(contador.valor);

// Predicción 1:
// Predicción 2:
// Predicción 3:

export {};
