/*
 * EJERCICIO: Batalla entre personajes
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Luchador {
  nombre: string;
  vida: number;
  ataque: number;

  constructor(nombre: string, vida: number, ataque: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacarA(enemigo: Luchador) {
    enemigo.vida -= this.ataque;
    console.log(`${this.nombre} ataca a ${enemigo.nombre}`);
  }

  estaVivo() {
    return this.vida > 0;
  }
}

let mario = new Luchador("Mario", 100, 20);
let bowser = new Luchador("Bowser", 150, 15);

console.log(mario.vida);
console.log(bowser.vida);

mario.atacarA(bowser);
console.log(bowser.vida);

bowser.atacarA(mario);
bowser.atacarA(mario);
console.log(mario.vida);
console.log(bowser.vida);

console.log(mario.estaVivo());
console.log(bowser.estaVivo());

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:

export {};
