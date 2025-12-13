/*
 * EJERCICIO: Método que usa this
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Guerrero {
  nombre: string;
  fuerza: number;

  constructor(nombre: string, fuerza: number) {
    this.nombre = nombre;
    this.fuerza = fuerza;
  }

  mostrarInfo() {
    console.log(`${this.nombre} - Fuerza: ${this.fuerza}`);
  }
}
let guerrero = new Guerrero("Conan", 95);
guerrero.mostrarInfo();

// Predicción:

export {};
