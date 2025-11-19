/**
 * EJERCICIO: Arrays
 *
 * En este juego, trabajarás con inventarios, listas de enemigos y puntajes.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones usando métodos de arrays y operaciones básicas
 */
let inventario = ["elemento0", "elemento3", "elemento2"];

export function agregarItem(inventario: string[], nuevoItem: string): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Agrega el nuevoItem al inventario y retorna el nuevo array
  inventario.push(nuevoItem);
  return inventario;
  throw new Error("Función no implementada");

  // ====================================
}
agregarItem(inventario, "hola");
console.log(inventario);
agregarItem(inventario, "chau");
console.log(inventario);

let enemigos = [
  "pedro(derrotado)",
  "juan(derrotado)",
  "cacho(derrotado)",
  "pepe",
];
export function contarEnemigosDerrotados(enemigos: string[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna la cantidad de enemigos en el array
  let contador: number = 0;
  for (let enemigo of enemigos) {
    if (enemigo.includes("derrotado")) {
      contador++;
    }
  }

  return contador;

  // ====================================
}
console.log(contarEnemigosDerrotados(enemigos));

let items: string[] = [];
export function encontrarItemMasRaro(items: string[]): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el primer item que encuentres en el array
  // Si el array está vacío, retorna null
  return items[0] ?? null;

  throw new Error("Función no implementada");
  // ====================================
}
console.log(encontrarItemMasRaro(items));
let puntajes = [15, 30, 45, 10];
export function calcularPuntajeTotal(puntajes: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma todos los puntajes del array
  // Si el array está vacío, retorna 0
  let contador: number = 0;
  for (let puntaje of puntajes) {
    contador = contador + puntaje;
  }
  return contador;

  throw new Error("Función no implementada");
}
console.log(calcularPuntajeTotal(puntajes));

// ====================================

let inventary = ["Espada rara", "Escudo rara", "Poción rara", "armadura"];
let rareinventary: string[] = [];
export function filtrarItemsRaros(items: string[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Filtra los items que contengan la palabra "raro" (case insensitive)
  // Ejemplo: ["Espada rara", "Escudo", "Poción rara"] -> ["Espada rara", "Poción rara"]

  for (let e of inventary) {
    if (e.includes("rara") || e.includes("raro")) {
      rareinventary.push(e);
    }
  }
  return rareinventary;

  throw new Error("Función no implementada");
}
console.log(filtrarItemsRaros(inventary));

// ====================================

let farmeo = [
  { nombre: "Goblin", nivel: 5 },
  { nombre: "Orco", nivel: 10 },
];
let nombres: string[] = [];
export function obtenerNombresEnemigos(
  enemigos: { nombre: string; nivel: number }[]
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con solo los nombres de los enemigos
  // Ejemplo: [{nombre: "Goblin", nivel: 5}, {nombre: "Orco", nivel: 10}]
  //          -> ["Goblin", "Orco"]
  for (let e of farmeo) {
    nombres.push(e.nombre);
  }
  return nombres;
  throw new Error("Función no implementada");
}
console.log(obtenerNombresEnemigos(farmeo));

// ====================================

let enemigomasfuerte = farmeo[0];
export function encontrarEnemigoMasFuerte(
  enemigos: { nombre: string; nivel: number }[]
): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el enemigo con el nivel más alto
  // Retorna su nombre, o null si el array está vacío
  if (farmeo.length === 0) {
    return null;
  }

  for (let enemigo of farmeo) {
    if (enemigo.nivel > enemigomasfuerte.nivel) {
      enemigomasfuerte = enemigo;
    }
  }
  return enemigomasfuerte.nombre;

  throw new Error("Función no implementada");
  // ====================================
}
console.log(encontrarEnemigoMasFuerte(farmeo));
