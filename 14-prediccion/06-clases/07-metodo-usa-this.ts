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

  entrenar() {
    this.fuerza += 10;
  }
}
let guerrero1 = new Guerrero("Conan", 95);
let guerrero2 = new Guerrero("Xena", 85);

guerrero1.mostrarInfo();
guerrero2.mostrarInfo();

guerrero1.entrenar();
guerrero1.mostrarInfo();
guerrero2.mostrarInfo();

guerrero2.entrenar();
guerrero2.entrenar();
guerrero1.mostrarInfo();
guerrero2.mostrarInfo();

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:

export {};
