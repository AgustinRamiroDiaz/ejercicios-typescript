/**
 * EJERCICIO: Condicionales IF
 * 
 * En este juego, necesitas verificar si el jugador puede usar un arma
 * basándote en su nivel y si tiene suficiente mana.
 * 
 * INSTRUCCIONES:
 * 1. Completa la función puedeUsarArma para que retorne true si:
 *    - El nivel del jugador es mayor o igual a 5
 *    - Y el mana del jugador es mayor o igual a 10
 * 2. Completa la función puedeUsarHabilidad para que retorne:
 *    - "Puede usar habilidad especial" si el mana es mayor o igual a 50
 *    - "Puede usar habilidad normal" si el mana es mayor o igual a 20
 *    - "No tiene suficiente mana" en cualquier otro caso
 */

export function puedeUsarArma(nivel: number, mana: number): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Escribe tu código aquí usando if
  // Retorna true si nivel >= 5 Y mana >= 10
  
  throw new Error("Función no implementada");
  // ====================================
}

export function puedeUsarHabilidad(mana: number): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Escribe tu código aquí usando if-else
  // Retorna "Puede usar habilidad especial" si mana >= 50
  // Retorna "Puede usar habilidad normal" si mana >= 20
  // Retorna "No tiene suficiente mana" en otro caso
  
  throw new Error("Función no implementada");
  // ====================================
}

export function calcularDanio(nivel: number, tieneArma: boolean): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el daño basándote en:
  // - Si tiene arma: daño base = nivel * 10
  // - Si no tiene arma: daño base = nivel * 5
  // - Si el nivel es mayor a 10, multiplica el daño por 1.5
  
  throw new Error("Función no implementada");
  // ====================================
}

