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
let contadorA = new Contador();
let contadorB = new Contador();

console.log(contadorA.valor);
console.log(contadorB.valor);

contadorA.incrementar();
console.log(contadorA.valor);
console.log(contadorB.valor);

contadorB.incrementar();
contadorB.incrementar();
console.log(contadorA.valor);
console.log(contadorB.valor);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:

export {};
