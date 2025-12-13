/*
 * EJERCICIO: Super en constructor
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Vehiculo {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }
}

class Auto extends Vehiculo {
  modelo: string;

  constructor(marca: string, modelo: string) {
    super(marca);
    this.modelo = modelo;
  }
}

let miAuto = new Auto("Toyota", "Corolla");
console.log(miAuto.marca);
console.log(miAuto.modelo);

// Predicción 1:
// Predicción 2:

export {};
