/**
 * EJERCICIO: Objetos y Clases
 * 
 * En este juego, trabajarás con objetos que representan personajes,
 * items y enemigos del juego.
 * 
 * INSTRUCCIONES:
 * 1. Completa las funciones y clases usando objetos de TypeScript
 */

// Tipo para un personaje del juego
export interface Personaje {
  nombre: string;
  nivel: number;
  vida: number;
  mana: number;
}

// Tipo para un item del juego
export interface Item {
  nombre: string;
  tipo: string;
  valor: number;
}

// Tipo para un enemigo del juego
export interface Enemigo {
  nombre: string;
  nivel: number;
  vida: number;
  danio: number;
}

export function crearPersonaje(nombre: string, nivel: number): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea y retorna un objeto Personaje con:
  // - nombre: el nombre proporcionado
  // - nivel: el nivel proporcionado
  // - vida: nivel * 10
  // - mana: nivel * 5
  
  throw new Error("Función no implementada");
  // ====================================
}

export function estaVivo(personaje: Personaje): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna true si la vida del personaje es mayor a 0
  
  throw new Error("Función no implementada");
  // ====================================
}

export function recibirDanio(personaje: Personaje, danio: number): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea y retorna un nuevo personaje con la vida reducida por el daño
  // La vida no puede ser menor a 0
  const nuevoPersonaje: Personaje = {
    nombre: personaje.nombre,
    nivel: personaje.nivel,
    vida: personaje.vida,
    mana: personaje.mana,
  };
  
  
  // ====================================
  return nuevoPersonaje;
}

export function usarHabilidad(personaje: Personaje, costoMana: number): Personaje | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el personaje tiene suficiente mana (>= costoMana), retorna un nuevo
  // personaje con el mana reducido. Si no tiene suficiente mana, retorna null
  
  throw new Error("Función no implementada");
  // ====================================
}

export function calcularDanioTotal(enemigos: Enemigo[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma el daño de todos los enemigos
  let total = 0;
  
  
  // ====================================
  return total;
}

export function encontrarEnemigoMasDebil(enemigos: Enemigo[]): Enemigo | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el enemigo con menos vida
  // Retorna null si el array está vacío
  if (enemigos.length === 0) {
    return null;
  }
  let masDebil = enemigos[0];
  
  
  // ====================================
  return masDebil;
}

export function puedeDerrotarEnemigo(personaje: Personaje, enemigo: Enemigo): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna true si el personaje puede derrotar al enemigo
  // Un personaje puede derrotar a un enemigo si:
  // - El nivel del personaje es mayor o igual al nivel del enemigo
  // - Y la vida del personaje es mayor al daño del enemigo
  
  throw new Error("Función no implementada");
  // ====================================
}

export function calcularValorTotalInventario(items: Item[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma el valor de todos los items
  let total = 0;
  
  
  // ====================================
  return total;
}

export function filtrarItemsPorTipo(items: Item[], tipo: string): Item[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con solo los items del tipo especificado
  const resultado: Item[] = [];
  
  
  // ====================================
  return resultado;
}

