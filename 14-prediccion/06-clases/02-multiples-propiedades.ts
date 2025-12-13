/*
 * EJERCICIO: Múltiples propiedades
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Personaje {
  nombre: string;
  vida: number;

  constructor(nombre: string, vida: number) {
    this.nombre = nombre;
    this.vida = vida;
  }

  recibirDanio(danio: number) {
    this.vida -= danio;
  }
}
let heroe = new Personaje("Link", 100);
let villano = new Personaje("Ganon", 150);

console.log(heroe.nombre);
console.log(heroe.vida);
console.log(villano.vida);

heroe.recibirDanio(30);
console.log(heroe.vida);
console.log(villano.vida);

villano.recibirDanio(50);
console.log(heroe.vida);
console.log(villano.vida);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:

export {};
