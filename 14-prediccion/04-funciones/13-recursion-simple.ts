/*
 * EJERCICIO: Recursión simple
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

function cuentaRegresiva(n: number): void {
  if (n < 0) {
    return;
  }
  console.log(n);
  cuentaRegresiva(n - 1);
}
cuentaRegresiva(3);

// Predicción:

export {};
