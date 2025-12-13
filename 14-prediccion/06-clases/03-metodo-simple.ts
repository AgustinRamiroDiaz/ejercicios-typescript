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
let koopa = new Enemigo("Koopa");
let bowser = new Enemigo("Bowser");

goomba.atacar();
koopa.atacar();
bowser.atacar();

goomba.nombre = "Goomba Gigante";
goomba.atacar();
koopa.atacar();

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:

export {};
