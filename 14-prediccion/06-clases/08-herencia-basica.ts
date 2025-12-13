/*
 * EJERCICIO: Herencia básica
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("Hace un sonido");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau");
  }
}

let miPerro = new Perro("Rex");
console.log(miPerro.nombre);
miPerro.hacerSonido();

// Predicción 1:
// Predicción 2:

export {};
