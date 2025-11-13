/**
 * EJERCICIO: Bucles FOR
 * 
 * En este juego, usarás bucles for para procesar listas de elementos del juego.
 * 
 * INSTRUCCIONES:
 * 1. Completa las funciones usando bucles for
 */

export function sumarExperiencia(niveles: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todos los valores en el array niveles
  // Retorna la suma total
  
  throw new Error("Función no implementada");
  // ====================================
}

export function contarItemsRaros(inventario: string[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para contar cuántos items contienen la palabra "raro"
  // (case insensitive)
  let contador = 0;
  
  
  // ====================================
  return contador;
}

export function duplicarPuntajes(puntajes: number[]): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear un nuevo array donde cada puntaje
  // esté multiplicado por 2
  const resultado: number[] = [];
  
  
  // ====================================
  return resultado;
}

export function encontrarMaximoPuntaje(puntajes: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para encontrar el puntaje más alto
  // Si el array está vacío, retorna 0
  if (puntajes.length === 0) {
    return 0;
  }
  let maximo = puntajes[0];
  
  
  // ====================================
  return maximo;
}

export function crearInventarioOrdenado(items: string[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear una copia del array items ordenada
  // alfabéticamente (puedes usar el método sort si quieres, pero intenta
  // entender cómo funciona un bucle for primero)
  const copia: string[] = [];
  
  
  // ====================================
  return copia.sort();
}

export function calcularDanioTotal(ataques: { nombre: string; danio: number }[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todo el daño de los ataques
  let danioTotal = 0;
  
  
  // ====================================
  return danioTotal;
}

export function obtenerEnemigosNivelAlto(
  enemigos: { nombre: string; nivel: number }[],
  nivelMinimo: number
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para obtener los nombres de los enemigos
  // que tienen un nivel mayor o igual a nivelMinimo
  const resultado: string[] = [];
  
  
  // ====================================
  return resultado;
}

