/*
 * EJERCICIO: Inventario compartido
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Item {
  nombre: string;
  cantidad: number;

  constructor(nombre: string, cantidad: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  usar(cant: number) {
    this.cantidad -= cant;
  }
}

class Jugador {
  nombre: string;
  mochila: Item;

  constructor(nombre: string, item: Item) {
    this.nombre = nombre;
    this.mochila = item;
  }

  usarItem(cantidad: number) {
    console.log(`${this.nombre} usa ${cantidad} ${this.mochila.nombre}`);
    this.mochila.usar(cantidad);
  }
}

let pociones = new Item("Poción", 10);
let jugador1 = new Jugador("Link", pociones);
let jugador2 = new Jugador("Zelda", pociones);

console.log(pociones.cantidad);

jugador1.usarItem(3);
console.log(pociones.cantidad);

jugador2.usarItem(2);
console.log(pociones.cantidad);
console.log(jugador1.mochila.cantidad);
console.log(jugador2.mochila.cantidad);

// Predicción 1:
// Predicción 2:
// Predicción 3:
// Predicción 4:
// Predicción 5:

export {};
