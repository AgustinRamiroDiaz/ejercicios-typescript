/*
 * EJERCICIO: Equipo de jugadores
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Jugador {
  nombre: string;
  puntos: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntos = 0;
  }

  ganarPuntos(cantidad: number) {
    this.puntos += cantidad;
  }
}

class Equipo {
  nombre: string;
  miembros: Jugador[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.miembros = [];
  }

  agregarMiembro(jugador: Jugador) {
    this.miembros.push(jugador);
  }

  puntosTotal() {
    let total = 0;
    for (let miembro of this.miembros) {
      total += miembro.puntos;
    }
    return total;
  }
}

let mario = new Jugador("Mario");
let luigi = new Jugador("Luigi");
let peach = new Jugador("Peach");

let equipoA = new Equipo("Equipo A");
equipoA.agregarMiembro(mario);
equipoA.agregarMiembro(luigi);

let equipoB = new Equipo("Equipo B");
equipoB.agregarMiembro(peach);

mario.ganarPuntos(50);
luigi.ganarPuntos(30);
peach.ganarPuntos(100);

console.log(equipoA.puntosTotal());
console.log(equipoB.puntosTotal());

equipoB.agregarMiembro(mario);
console.log(equipoA.puntosTotal());
console.log(equipoB.puntosTotal());

mario.ganarPuntos(20);
console.log(equipoA.puntosTotal());
console.log(equipoB.puntosTotal());

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:
// Predicción 6:

export {};
