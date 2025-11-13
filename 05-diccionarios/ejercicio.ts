/**
 * EJERCICIO: Diccionarios (Objetos como mapas)
 * 
 * En este juego, trabajarás con diccionarios para almacenar información
 * de items, estadísticas y configuraciones.
 * 
 * INSTRUCCIONES:
 * 1. Completa las funciones usando objetos como diccionarios
 */

export function obtenerPrecioItem(precios: Record<string, number>, item: string): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el precio del item desde el diccionario precios
  // Si el item no existe, retorna 0
  
  throw new Error("Función no implementada");
  // ====================================
}

export function agregarItemInventario(
  inventario: Record<string, number>,
  item: string,
  cantidad: number
): Record<string, number> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Agrega o actualiza la cantidad del item en el inventario
  // Si el item ya existe, suma la cantidad nueva a la existente
  // Retorna el inventario actualizado
  const nuevoInventario = { ...inventario };
  
  
  // ====================================
  return nuevoInventario;
}

export function contarItems(inventario: Record<string, number>): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna la cantidad total de items en el inventario
  // (suma todas las cantidades)
  let total = 0;
  
  
  // ====================================
  return total;
}

export function obtenerItemsDisponibles(
  inventario: Record<string, number>
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con los nombres de todos los items que tienen
  // cantidad mayor a 0
  const items: string[] = [];
  
  
  // ====================================
  return items;
}

export function calcularValorTotalInventario(
  inventario: Record<string, number>,
  precios: Record<string, number>
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el valor total del inventario multiplicando la cantidad
  // de cada item por su precio
  // Si un item no tiene precio, ignóralo
  let valorTotal = 0;
  
  
  // ====================================
  return valorTotal;
}

export function fusionarInventarios(
  inventario1: Record<string, number>,
  inventario2: Record<string, number>
): Record<string, number> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Fusiona dos inventarios, sumando las cantidades de items que
  // aparecen en ambos
  const inventarioFusionado: Record<string, number> = {};
  
  
  // ====================================
  return inventarioFusionado;
}

export function obtenerItemMasCaro(precios: Record<string, number>): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el item con el precio más alto
  // Retorna su nombre, o null si el diccionario está vacío
  
  throw new Error("Función no implementada");
  // ====================================
}

