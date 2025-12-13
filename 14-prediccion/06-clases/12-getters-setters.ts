/*
 * EJERCICIO: Getters y Setters
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Temperatura {
  private celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 9/5 + 32;
  }

  set fahrenheit(f: number) {
    this.celsius = (f - 32) * 5/9;
  }
}

let temp = new Temperatura(0);
console.log(temp.fahrenheit);
temp.fahrenheit = 212;
console.log(temp.fahrenheit);

// Predicción 1:
// Predicción 2:

export {};
