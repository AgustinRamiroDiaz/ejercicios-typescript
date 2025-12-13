/*
 * EJERCICIO: Composición
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Motor {
  potencia: number;

  constructor(potencia: number) {
    this.potencia = potencia;
  }
}

class Coche {
  motor: Motor;

  constructor(potencia: number) {
    this.motor = new Motor(potencia);
  }
}

let coche = new Coche(150);
console.log(coche.motor.potencia);

// Predicción:

export {};
