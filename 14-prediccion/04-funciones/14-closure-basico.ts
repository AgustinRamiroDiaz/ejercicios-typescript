/*
 * EJERCICIO: Closure básico
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function crearContador() {
  let cuenta = 0;
  return function() {
    cuenta++;
    return cuenta;
  };
}
const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());

// Predicción 1:
// Predicción 2:
// Predicción 3:

export {};
