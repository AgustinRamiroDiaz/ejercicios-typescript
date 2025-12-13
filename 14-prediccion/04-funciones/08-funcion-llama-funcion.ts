/*
 * EJERCICIO: Función que llama a otra función
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function multiplicar(a: number, b: number) {
  return a * b;
}
function calcularArea(lado: number) {
  return multiplicar(lado, lado);
}
console.log(calcularArea(5));

// Predicción:

export {};
