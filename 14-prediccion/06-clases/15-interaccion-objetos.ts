/*
 * EJERCICIO: Interacción entre objetos
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

  agregarPuntos(cantidad: number) {
    this.puntos += cantidad;
  }
}

class Juego {
  jugador: Jugador;

  constructor(nombreJugador: string) {
    this.jugador = new Jugador(nombreJugador);
  }

  ganarNivel() {
    this.jugador.agregarPuntos(100);
  }
}

let juego = new Juego("Peach");
console.log(juego.jugador.puntos);
juego.ganarNivel();
console.log(juego.jugador.puntos);
juego.ganarNivel();
console.log(juego.jugador.puntos);

// Predicción 1:
// Predicción 2:
// Predicción 3:

export {};
