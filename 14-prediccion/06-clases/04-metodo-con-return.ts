/*
 * EJERCICIO: Método con return
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Calculadora {
  sumar(a: number, b: number) {
    return a + b;
  }

  multiplicar(a: number, b: number) {
    return a * b;
  }
}
let calc1 = new Calculadora();
let calc2 = new Calculadora();

console.log(calc1.sumar(5, 3));
console.log(calc2.sumar(10, 20));

let resultado1 = calc1.multiplicar(4, 5);
let resultado2 = calc2.multiplicar(2, 3);

console.log(resultado1);
console.log(resultado2);
console.log(calc1.sumar(resultado1, resultado2));

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:

export {};
