/**
 * EJERCICIO: Bucles WHILE
 *
 * En este juego, necesitas implementar lógica de combate usando bucles while.
 *
 * INSTRUCCIONES:
 * 1. Completa la función atacarHastaDerrotar para que ataque al enemigo
 *    hasta que su vida llegue a 0 o menos
 * 2. Completa la función buscarItem para que busque items hasta encontrar
 *    el item deseado o hasta que se acaben los intentos
 * 3. Completa la función subirNivel para que suba de nivel hasta alcanzar
 *    el nivel objetivo
 */

// ====================================

export function atacarHastaDerrotar(
  vidaEnemigo: number,
  danioPorAtaque: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Ataca al enemigo hasta que su vida llegue a 0 o menos
  // Retorna el número de ataques necesarios
  let ataques = 0;
  while (vidaEnemigo > 0) {
    vidaEnemigo = vidaEnemigo - danioPorAtaque;
    ataques = ataques + 1;
  }

  return ataques;
}
console.log(atacarHastaDerrotar(60, 10));

// ====================================

let items: string[] = ["pecho", "casco", "botas", "guantes", "armadura"];
let indice = 0;
let maxIntentos = 3;

export function buscarItem(
  items: string[],
  itemBuscado: string,
  maxIntentos: number
): string | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Busca el item en el array hasta encontrarlo o hasta agotar los intentos
  // Retorna el item si lo encuentra, o null si no lo encuentra

  let indice = 0;
  let nroInventario = 1;

  while (maxIntentos > 0) {
    if (itemBuscado == items[indice]) {
      return items[indice];
    } else {
      maxIntentos = maxIntentos - 1;
      indice = indice + 1;
      nroInventario = nroInventario + 1;
    }
  }
  return null;
}
console.log(buscarItem(items, "botas", 4));

// ====================================

export function subirNivel(
  nivelActual: number,
  nivelObjetivo: number,
  experienciaPorNivel: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula cuánta experiencia total se necesita para subir del nivel actual
  // al nivel objetivo (cada nivel requiere experienciaPorNivel puntos)
  // Retorna la experiencia total necesaria
  let experienciaTotal = 0;
  let nivel = nivelActual;
  while (nivel < nivelObjetivo) {
    experienciaTotal = experienciaTotal + experienciaPorNivel;
    nivel = nivel + 1;
  }

  return experienciaTotal;
}

console.log(subirNivel(3, 10, 70));
