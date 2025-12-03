/**
 * EJERCICIO: Recursión
 *
 * La recursión es cuando una función se llama a sí misma.
 * Es útil para resolver problemas que se pueden dividir en subproblemas similares.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones usando recursión
 * 2. Asegúrate de tener un caso base (condición de parada)
 * 3. Cada llamada recursiva debe acercarse al caso base
 */

// ============================================================
// PARTE 1: Recursión básica con números
// ============================================================

export function factorial(n: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el factorial de n (n!)
  // Caso base: factorial(0) = 1
  // Caso recursivo: factorial(n) = n * factorial(n - 1)
  // Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

  throw new Error("Función no implementada");
  // ====================================
}

export function fibonacci(n: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el n-ésimo número de Fibonacci
  // Caso base: fibonacci(0) = 0, fibonacci(1) = 1
  // Caso recursivo: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
  // Secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21...

  throw new Error("Función no implementada");
  // ====================================
}

export function sumarHastaN(n: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma todos los números de 1 hasta n
  // Caso base: sumarHastaN(0) = 0
  // Caso recursivo: sumarHastaN(n) = n + sumarHastaN(n - 1)

  throw new Error("Función no implementada");
  // ====================================
}

export function potencia(base: number, exponente: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula base^exponente usando recursión
  // Caso base: cualquier número elevado a 0 es 1
  // Caso recursivo: base^exp = base * base^(exp-1)

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 2: Recursión con strings
// ============================================================

export function invertirString(s: string): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Invierte un string usando recursión
  // Caso base: string vacío o de 1 caracter retorna el mismo string
  // Caso recursivo: último caracter + invertir el resto
  // Ejemplo: invertirString("hola") = "aloh"

  throw new Error("Función no implementada");
  // ====================================
}

export function contarCaracter(s: string, c: string): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántas veces aparece el caracter c en el string s
  // Caso base: string vacío = 0
  // Caso recursivo:
  //   si el primer caracter es c: 1 + contar en el resto
  //   si no: contar en el resto

  throw new Error("Función no implementada");
  // ====================================
}

export function esPalindromo(s: string): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Verifica si un string es palíndromo (se lee igual al derecho y al revés)
  // Caso base: string vacío o de 1 caracter es palíndromo
  // Caso recursivo: primer y último caracter iguales Y el medio es palíndromo
  // Ejemplo: "reconocer" es palíndromo, "hola" no lo es

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 3: Recursión con arrays
// ============================================================

export function sumarArray(arr: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Suma todos los elementos del array
  // Caso base: array vacío = 0
  // Caso recursivo: primer elemento + suma del resto
  // Pista: usa arr[0] y arr.slice(1) para dividir el array

  throw new Error("Función no implementada");
  // ====================================
}

export function maximoArray(arr: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el valor máximo en el array
  // Caso base: array de 1 elemento retorna ese elemento
  // Caso recursivo: el máximo entre el primero y el máximo del resto
  // Pista: usa Math.max(a, b)

  throw new Error("Función no implementada");
  // ====================================
}

export function contarPares(arr: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántos números pares hay en el array
  // Caso base: array vacío = 0
  // Caso recursivo:
  //   si el primero es par: 1 + contar en el resto
  //   si no: contar en el resto

  throw new Error("Función no implementada");
  // ====================================
}

export function aplanar(arr: any[]): any[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplana un array anidado (cualquier nivel de profundidad)
  // Caso base: array vacío = []
  // Caso recursivo:
  //   si el primer elemento es un array: aplanarlo y concatenar con el resto aplanado
  //   si no: agregarlo y concatenar con el resto aplanado
  // Ejemplo: aplanar([1, [2, [3, 4]], 5]) = [1, 2, 3, 4, 5]
  // Pista: usa Array.isArray() para verificar si es array

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 4: Recursión en estructuras de juego
// ============================================================

export interface Enemigo {
  nombre: string;
  vida: number;
  nivel: number;
}

export function contarEnemigosVivos(enemigos: Enemigo[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántos enemigos tienen vida > 0
  // Usa recursión

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularDanioTotal(danios: number[], multiplicador: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula el daño total aplicando el multiplicador a cada uno
  // Caso base: array vacío = 0
  // Caso recursivo: (primer daño * multiplicador) + calcular resto

  throw new Error("Función no implementada");
  // ====================================
}

export interface Dungeon {
  nombre: string;
  nivel: number;
  subdungeons: Dungeon[];
}

export function contarNiveles(dungeon: Dungeon): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántos niveles (dungeons y subdungeons) hay en total
  // Caso base: un dungeon sin subdungeons = 1
  // Caso recursivo: 1 + suma de niveles de todos los subdungeons

  throw new Error("Función no implementada");
  // ====================================
}

export function nivelMasProfundo(dungeon: Dungeon): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra el nivel más alto de cualquier dungeon en la estructura
  // Caso base: un dungeon sin subdungeons retorna su nivel
  // Caso recursivo: el máximo entre el nivel actual y el máximo de los subdungeons

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 5: Búsqueda recursiva
// ============================================================

export interface Item {
  nombre: string;
  valor: number;
}

export function buscarItem(items: Item[], nombre: string): Item | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Busca un item por nombre usando recursión
  // Caso base: array vacío = null
  // Caso recursivo: si el primero coincide retornarlo, si no buscar en el resto

  throw new Error("Función no implementada");
  // ====================================
}

export interface Nodo {
  valor: number;
  hijos: Nodo[];
}

export function buscarEnArbol(nodo: Nodo, valor: number): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Busca un valor en un árbol
  // Si el nodo actual tiene el valor, retorna true
  // Si no, busca recursivamente en todos los hijos
  // Si algún hijo tiene el valor, retorna true
  // Si ninguno lo tiene, retorna false

  throw new Error("Función no implementada");
  // ====================================
}

export function contarNodos(nodo: Nodo): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántos nodos hay en el árbol
  // 1 (el nodo actual) + la suma de nodos de todos los hijos

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 6: Generación recursiva
// ============================================================

export function generarSecuencia(inicio: number, fin: number): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Genera un array con números desde inicio hasta fin
  // Caso base: si inicio > fin, retorna []
  // Caso recursivo: [inicio] concatenado con generarSecuencia(inicio + 1, fin)
  // Ejemplo: generarSecuencia(3, 6) = [3, 4, 5, 6]

  throw new Error("Función no implementada");
  // ====================================
}

export function repetirString(s: string, veces: number): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Repite un string n veces
  // Caso base: veces <= 0 retorna ""
  // Caso recursivo: s + repetirString(s, veces - 1)

  throw new Error("Función no implementada");
  // ====================================
}

export function generarNivel(profundidad: number): Dungeon {
  // ========== TU CÓDIGO AQUÍ ==========
  // Genera una estructura de dungeon con la profundidad especificada
  // Caso base: profundidad 0 retorna { nombre: "Nivel 0", nivel: 0, subdungeons: [] }
  // Caso recursivo: retorna un dungeon con un subdungeon de profundidad-1
  // El nombre debe ser "Nivel {profundidad}"
  // El nivel debe ser igual a profundidad

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 7: Recursión con acumulador
// ============================================================

export function factorialConAcumulador(n: number, acumulador: number = 1): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula factorial usando un acumulador (tail recursion)
  // Caso base: n <= 0 retorna acumulador
  // Caso recursivo: factorialConAcumulador(n - 1, acumulador * n)
  // Nota: el parámetro acumulador tiene valor por defecto 1

  throw new Error("Función no implementada");
  // ====================================
}

export function invertirArrayConAcumulador(
  arr: number[],
  acumulador: number[] = []
): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Invierte un array usando un acumulador
  // Caso base: array vacío retorna acumulador
  // Caso recursivo: invertirArrayConAcumulador(resto, [primero, ...acumulador])

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 8: Problemas de optimización
// ============================================================

const fibonacciCache: { [key: number]: number } = {};

export function fibonacciConCache(n: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Implementa fibonacci con memoización
  // Antes de calcular, verifica si el resultado está en fibonacciCache
  // Si está, retórnalo
  // Si no está, calcúlalo recursivamente, guárdalo en el cache, y retórnalo
  // Esto hace que fibonacci sea mucho más rápido

  throw new Error("Función no implementada");
  // ====================================
}

export function contarCaminos(filas: number, columnas: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Cuenta cuántos caminos diferentes hay desde (0,0) hasta (filas,columnas)
  // Solo puedes moverte hacia abajo o hacia la derecha
  // Caso base: si filas o columnas es 0, hay 1 solo camino
  // Caso recursivo: caminos desde (filas-1, columnas) + caminos desde (filas, columnas-1)

  throw new Error("Función no implementada");
  // ====================================
}
