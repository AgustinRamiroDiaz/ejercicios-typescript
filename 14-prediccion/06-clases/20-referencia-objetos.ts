/*
 * EJERCICIO: Referencias a objetos
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Cofre {
  oro: number;

  constructor(oro: number) {
    this.oro = oro;
  }
}

let cofre1 = new Cofre(100);
let cofre2 = cofre1;
let cofre3 = new Cofre(100);

console.log(cofre1.oro);
console.log(cofre2.oro);
console.log(cofre3.oro);

cofre1.oro = 50;
console.log(cofre1.oro);
console.log(cofre2.oro);
console.log(cofre3.oro);

cofre3.oro = 200;
console.log(cofre1.oro);
console.log(cofre2.oro);
console.log(cofre3.oro);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:
// Predicción 8:
// Predicción 9:

export {};
