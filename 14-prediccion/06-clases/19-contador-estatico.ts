/*
 * EJERCICIO: Contador estático vs instancia
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Enemigo {
  nombre: string;
  static totalEnemigos = 0;
  miNumero: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    Enemigo.totalEnemigos++;
    this.miNumero = Enemigo.totalEnemigos;
  }

  static cuantosHay() {
    return Enemigo.totalEnemigos;
  }
}

console.log(Enemigo.cuantosHay());

let goomba1 = new Enemigo("Goomba");
console.log(goomba1.miNumero);
console.log(Enemigo.cuantosHay());

let goomba2 = new Enemigo("Goomba");
let koopa1 = new Enemigo("Koopa");

console.log(goomba2.miNumero);
console.log(koopa1.miNumero);
console.log(Enemigo.cuantosHay());

console.log(goomba1.miNumero);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:
// Predicción 7:

export {};
