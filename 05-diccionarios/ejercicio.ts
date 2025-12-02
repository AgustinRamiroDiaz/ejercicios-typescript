/**
 * EJERCICIO: Diccionarios (Objetos como mapas)
 *
 * En este juego, trabajarás con diccionarios para almacenar información
 * de items, estadísticas y configuraciones.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones usando objetos como diccionarios
 */
let precioItem = {
  armadura: 2500,
  casco: 2000,
  botas: 1500,
  espada: 9000,
};

export function obtenerPrecioItem(
  precios: Record<string, number>,
  item: string
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el precio del item desde el diccionario precios
  // Si el item no existe, retorna 0
  if (precios[item] !== undefined) {
    return precios[item];
  } else {
    return 0;
  }

  throw new Error("Función no implementada");
}
console.log(obtenerPrecioItem(precioItem, "casco"));

// ====================================

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
  if (nuevoInventario[item] !== undefined) {
    nuevoInventario[item] = nuevoInventario[item] + cantidad;
  } else {
    nuevoInventario[item] = cantidad;
  }

  return nuevoInventario;
}
console.log(agregarItemInventario(precioItem, "pantalones", 2100));

// ====================================

export function contarItems(inventario: Record<string, number>): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna la cantidad total de items en el inventario
  // (suma todas las cantidades)
  let total = 0;
  for (let item in inventario) {
    total += inventario[item];
  }
  return total;
}
console.log(contarItems(precioItem));

// ====================================

export function obtenerItemsDisponibles(
  inventario: Record<string, number>
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con los nombres de todos los items que tienen
  // cantidad mayor a 0
  const items: string[] = [];
  for (let item in inventario) {
    if (inventario[item] > 0) items.push(item);
  }

  return items;
}
console.log(obtenerItemsDisponibles(precioItem));

// ====================================

let cantidadItem = {
  armadura: 1,
  casco: 2,
  botas: 1,
  espada: 1,
};

export function calcularValorTotalInventario(
  inventario: Record<string, number>,
  precios: Record<string, number>
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el valor total del inventario multiplicando la cantidad
  // de cada item por su precio
  // Si un item no tiene precio, ignóralo
  let valorTotal = 0;
  for (let i in inventario) {
    if (precios[i] == undefined) {
      continue;
    } else {
      valorTotal += precios[i] * inventario[i];
    }
  }

  return valorTotal;
}
console.log(calcularValorTotalInventario(cantidadItem, precioItem));

// ====================================

export function fusionarInventarios(
  inventario1: Record<string, number>,
  inventario2: Record<string, number>
): Record<string, number> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Fusiona dos inventarios, sumando las cantidades de items que
  // aparecen en ambos
  const inventarioFusionado: Record<string, number> = { ...inventario1 };

  for (let i in inventario2) {
    if (inventarioFusionado[i] === undefined) {
      inventarioFusionado[i] = inventario2[i];
    } else {
      inventarioFusionado[i] += inventario2[i];
    }
  }
  return inventarioFusionado;
}

// ====================================

export function obtenerItemMasCaro(
  precios: Record<string, number>
): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el item con el precio más alto
  // Retorna su nombre, o null si el diccionario está vacío
  let items = Object.keys(precios);
  if (items.length === 0) {
    return null;
  }
  let itemMasCaro = items[0];
  for (let i of items) {
    if (precios[i] > precios[itemMasCaro]) {
      itemMasCaro = i;
    }
  }
  return itemMasCaro;

  // ====================================
}
