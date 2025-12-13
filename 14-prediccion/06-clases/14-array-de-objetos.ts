/*
 * EJERCICIO: Array de objetos
 *
 * Instrucciones:
 * Escribe tu predicción ANTES de ejecutar el código.
 */

class Producto {
  nombre: string;
  precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let carrito = [
  new Producto("Manzana", 1.5),
  new Producto("Pan", 2.0),
  new Producto("Leche", 3.5)
];

console.log(carrito[1].nombre);
console.log(carrito[2].precio);

// Predicción 1:
// Predicción 2:

export {};
