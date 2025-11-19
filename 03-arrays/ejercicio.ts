/**
 * EJERCICIO: Arrays
 * 
 * En este juego, trabajarás con inventarios, listas de enemigos y puntajes.
 * 
 * INSTRUCCIONES:
 * 1. Completa las funciones usando métodos de arrays y operaciones básicas
 */
  let inventario = ["elemento0", "elemento3", "elemento2"]

export function agregarItem(inventario: string[], nuevoItem: string): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Agrega el nuevoItem al inventario y retorna el nuevo array
  inventario.push (nuevoItem)
  return inventario
  throw new Error("Función no implementada");
  
  // ====================================
}
agregarItem(inventario, "hola")
console.log (inventario)
agregarItem(inventario, "chau")
console.log (inventario)

let enemigos = ["pedro","juan","cacho","pepe"]
export function contarEnemigosDerrotados(enemigos: string[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna la cantidad de enemigos en el array
let enemigosDerrotados: number = enemigos.length
return enemigosDerrotados

  

  // ====================================
}
console.log(contarEnemigosDerrotados(enemigos))

let items: string[] = ["huevos"]
export function encontrarItemMasRaro(items: string[]): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el primer item que encuentres en el array
  // Si el array está vacío, retorna null
  return items[0] || null // use el operador "or" para no usar un "If"

  
  throw new Error("Función no implementada");
  // ====================================
}
console.log(encontrarItemMasRaro(items))
let puntajes = [15, 30, 45]
export function calcularPuntajeTotal(puntajes: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma todos los puntajes del array
  // Si el array está vacío, retorna 0
  
  
  throw new Error("Función no implementada");
  // ====================================
}

export function filtrarItemsRaros(items: string[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Filtra los items que contengan la palabra "raro" (case insensitive)
  // Ejemplo: ["Espada rara", "Escudo", "Poción rara"] -> ["Espada rara", "Poción rara"]
  
  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerNombresEnemigos(enemigos: { nombre: string; nivel: number }[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con solo los nombres de los enemigos
  // Ejemplo: [{nombre: "Goblin", nivel: 5}, {nombre: "Orco", nivel: 10}]
  //          -> ["Goblin", "Orco"]
  
  throw new Error("Función no implementada");
  // ====================================
}

export function encontrarEnemigoMasFuerte(enemigos: { nombre: string; nivel: number }[]): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el enemigo con el nivel más alto
  // Retorna su nombre, o null si el array está vacío
  
  throw new Error("Función no implementada");
  // ====================================
}

