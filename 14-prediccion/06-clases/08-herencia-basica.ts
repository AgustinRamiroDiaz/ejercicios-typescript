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

class Gato extends Animal {
  hacerSonido() {
    console.log("Miau miau");
  }
}

let miPerro = new Perro("Rex");
let miGato = new Gato("Mishi");
let miAnimal = new Animal("Genérico");

console.log(miPerro.nombre);
miPerro.hacerSonido();

console.log(miGato.nombre);
miGato.hacerSonido();

miAnimal.hacerSonido();

miPerro.nombre = "Max";
console.log(miPerro.nombre);
console.log(miGato.nombre);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:

export {};
