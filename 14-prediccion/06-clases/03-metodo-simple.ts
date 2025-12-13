/*
 * EJERCICIO: Método simple
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Enemigo {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  atacar() {
    console.log(`${this.nombre} ataca!`);
  }
}
let goomba = new Enemigo("Goomba");
goomba.atacar();

// Predicción:

export {};
