/**
 * EJERCICIO: Funciones de Alto Orden
 *
 * En este ejercicio aprenderás a trabajar con funciones como valores.
 * Las funciones de alto orden son funciones que reciben otras funciones
 * como parámetros o retornan funciones.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones siguiendo las indicaciones
 * 2. Los ejercicios van desde lo más simple hasta conceptos más avanzados
 * 3. Usa funciones como parámetros y valores de retorno
 */

// ============================================================
// PARTE 1: Funciones como valores (conceptos básicos)
// ============================================================

export function aplicarDanio(danio: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Esta es una función simple que solo retorna el daño
  // La usaremos en los siguientes ejercicios

  throw new Error("Función no implementada");
  // ====================================
}

export function aplicarDanioDoble(danio: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el doble del daño

  throw new Error("Función no implementada");
  // ====================================
}

export function aplicarDanioTriple(danio: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el triple del daño

  throw new Error("Función no implementada");
  // ====================================
}

export function aplicarModificador(
  danio: number,
  modificador: (d: number) => number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función modificador al daño y retorna el resultado
  // Ejemplo: aplicarModificador(10, aplicarDanioDoble) debería retornar 20

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 2: Composición de funciones
// ============================================================

export function componerDos(
  f: (x: number) => number,
  g: (x: number) => number
): (x: number) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una nueva función que aplica primero g y luego f
  // Es decir, retorna una función que hace: f(g(x))
  // Ejemplo: componerDos(aplicarDanioDoble, aplicarDanioTriple)(10)
  //          primero aplica triple: 10 * 3 = 30
  //          luego aplica doble: 30 * 2 = 60

  throw new Error("Función no implementada");
  // ====================================
}

export function aplicarVarias(
  valor: number,
  funciones: Array<(x: number) => number>
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica todas las funciones en orden al valor
  // Cada función recibe el resultado de la anterior
  // Ejemplo: aplicarVarias(10, [aplicarDanioDoble, aplicarDanioTriple])
  //          primero: 10 * 2 = 20
  //          luego: 20 * 3 = 60

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 3: Funciones que retornan funciones
// ============================================================

export function crearMultiplicador(factor: number): (x: number) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que multiplica su parámetro por el factor
  // Ejemplo:
  //   const duplicar = crearMultiplicador(2);
  //   duplicar(5) // retorna 10
  //   duplicar(8) // retorna 16

  throw new Error("Función no implementada");
  // ====================================
}

export function crearSumador(cantidad: number): (x: number) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que suma la cantidad a su parámetro
  // Ejemplo:
  //   const sumarDiez = crearSumador(10);
  //   sumarDiez(5) // retorna 15

  throw new Error("Función no implementada");
  // ====================================
}

export function crearAplicadorDeBonus(
  bonus: number
): (danio: number) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que suma el bonus al daño
  // Similar a crearSumador pero con nombres específicos del dominio

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 4: Funciones con múltiples aplicaciones
// ============================================================

export function aplicarNVeces(
  n: number,
  f: (x: number) => number,
  valor: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función f al valor n veces
  // Ejemplo: aplicarNVeces(3, aplicarDanioDoble, 5)
  //          primera vez: 5 * 2 = 10
  //          segunda vez: 10 * 2 = 20
  //          tercera vez: 20 * 2 = 40

  throw new Error("Función no implementada");
  // ====================================
}

export function aplicarHastaLimite(
  f: (x: number) => number,
  limite: number,
  valor: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función f al valor repetidamente mientras
  // el resultado sea menor al límite
  // Retorna el último valor que no superó el límite
  // Ejemplo: aplicarHastaLimite(aplicarDanioDoble, 100, 5)
  //          5 -> 10 -> 20 -> 40 -> 80 -> 160 (se pasó!)
  //          retorna 80

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 5: Introducción a map (versión manual)
// ============================================================

export function aplicarATodos(
  valores: number[],
  f: (x: number) => number
): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función f a cada elemento del array y retorna un nuevo array
  // con los resultados
  // NO USES .map() todavía, hazlo con un bucle for
  // Ejemplo: aplicarATodos([1, 2, 3], aplicarDanioDoble)
  //          retorna [2, 4, 6]

  throw new Error("Función no implementada");
  // ====================================
}

export function transformarNombres(
  nombres: string[],
  transformar: (s: string) => string
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función transformar a cada nombre
  // NO USES .map() todavía, hazlo con un bucle for

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 6: Introducción a filter (versión manual)
// ============================================================

export function filtrarPorCondicion(
  valores: number[],
  condicion: (x: number) => boolean
): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un nuevo array con solo los elementos que cumplen la condición
  // NO USES .filter() todavía, hazlo con un bucle for
  // Ejemplo: filtrarPorCondicion([1, 5, 10, 15], (x) => x > 5)
  //          retorna [10, 15]

  throw new Error("Función no implementada");
  // ====================================
}

export function encontrarEnemigosDebiles(
  enemigos: Array<{ nombre: string; vida: number }>,
  vidaMaxima: number
): Array<{ nombre: string; vida: number }> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna solo los enemigos con vida menor o igual a vidaMaxima
  // NO USES .filter() todavía, hazlo con un bucle for

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 7: Introducción a reduce (versión manual)
// ============================================================

export function acumular(
  valores: number[],
  f: (acumulador: number, valor: number) => number,
  inicial: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Aplica la función f a cada elemento, acumulando el resultado
  // NO USES .reduce() todavía, hazlo con un bucle for
  // Ejemplo: acumular([1, 2, 3, 4], (acc, val) => acc + val, 0)
  //          0 + 1 = 1
  //          1 + 2 = 3
  //          3 + 3 = 6
  //          6 + 4 = 10

  throw new Error("Función no implementada");
  // ====================================
}

export function sumarTodos(valores: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa la función acumular para sumar todos los valores
  // Ejemplo: sumarTodos([1, 2, 3, 4]) retorna 10

  throw new Error("Función no implementada");
  // ====================================
}

export function multiplicarTodos(valores: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa la función acumular para multiplicar todos los valores
  // Ejemplo: multiplicarTodos([2, 3, 4]) retorna 24

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 8: Usando map, filter, reduce
// ============================================================

export function duplicarValores(valores: number[]): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .map() para duplicar cada valor
  // Ejemplo: duplicarValores([1, 2, 3]) retorna [2, 4, 6]

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerNombres(
  personajes: Array<{ nombre: string; nivel: number }>
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .map() para obtener solo los nombres
  // Ejemplo: obtenerNombres([{nombre: "Link", nivel: 5}]) retorna ["Link"]

  throw new Error("Función no implementada");
  // ====================================
}

export function filtrarPorNivel(
  personajes: Array<{ nombre: string; nivel: number }>,
  nivelMinimo: number
): Array<{ nombre: string; nivel: number }> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .filter() para retornar solo los personajes con nivel >= nivelMinimo

  throw new Error("Función no implementada");
  // ====================================
}

export function filtrarVivos(
  enemigos: Array<{ nombre: string; vida: number }>
): Array<{ nombre: string; vida: number }> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .filter() para retornar solo los enemigos con vida > 0

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularDanioTotal(danios: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .reduce() para sumar todos los daños
  // Ejemplo: calcularDanioTotal([10, 20, 30]) retorna 60

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularVidaTotal(
  enemigos: Array<{ nombre: string; vida: number }>
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .reduce() para sumar la vida de todos los enemigos

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 9: Combinando map, filter, reduce
// ============================================================

export function calcularDanioTotalConBonus(
  danios: number[],
  bonus: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // 1. Usa .map() para aplicar el bonus a cada daño (sumar el bonus)
  // 2. Usa .reduce() para sumar todos los daños con bonus
  // Ejemplo: calcularDanioTotalConBonus([10, 20], 5)
  //          map: [15, 25]
  //          reduce: 40

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerNombresDeVivos(
  enemigos: Array<{ nombre: string; vida: number }>
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // 1. Usa .filter() para obtener solo los enemigos vivos (vida > 0)
  // 2. Usa .map() para obtener solo los nombres

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularExperienciaTotal(
  enemigos: Array<{ nombre: string; nivel: number; derrotado: boolean }>,
  experienciaPorNivel: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // 1. Usa .filter() para obtener solo los enemigos derrotados
  // 2. Usa .map() para calcular la experiencia de cada uno (nivel * experienciaPorNivel)
  // 3. Usa .reduce() para sumar toda la experiencia

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 10: Funciones de alto orden avanzadas
// ============================================================

export function crearFiltro<T>(
  condicion: (item: T) => boolean
): (items: T[]) => T[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que filtra un array usando la condición
  // Ejemplo:
  //   const filtrarMayoresA10 = crearFiltro((x: number) => x > 10);
  //   filtrarMayoresA10([5, 15, 8, 20]) // retorna [15, 20]

  throw new Error("Función no implementada");
  // ====================================
}

export function crearTransformador<T, U>(
  transformacion: (item: T) => U
): (items: T[]) => U[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que transforma un array usando la transformación
  // Ejemplo:
  //   const obtenerLongitudes = crearTransformador((s: string) => s.length);
  //   obtenerLongitudes(["hola", "mundo"]) // retorna [4, 5]

  throw new Error("Función no implementada");
  // ====================================
}

export function crearPipeline<T>(
  ...funciones: Array<(x: T) => T>
): (x: T) => T {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que aplica todas las funciones en secuencia
  // Similar a aplicarVarias pero más genérico
  // Ejemplo:
  //   const procesarDanio = crearPipeline(
  //     (x: number) => x * 2,
  //     (x: number) => x + 10,
  //     (x: number) => x * 3
  //   );
  //   procesarDanio(5) // (5 * 2 = 10) + 10 = 20 * 3 = 60

  throw new Error("Función no implementada");
  // ====================================
}

export function cachear<T, U>(f: (x: T) => U): (x: T) => U {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una versión de la función que guarda resultados anteriores
  // Si se llama con el mismo parámetro, retorna el resultado guardado
  // sin ejecutar la función de nuevo
  // Pista: usa un objeto o Map para guardar los resultados
  // Ejemplo:
  //   let llamadas = 0;
  //   const funcionLenta = (x: number) => { llamadas++; return x * 2; };
  //   const funcionRapida = cachear(funcionLenta);
  //   funcionRapida(5); // llamadas = 1, retorna 10
  //   funcionRapida(5); // llamadas = 1 (no incrementa!), retorna 10
  //   funcionRapida(3); // llamadas = 2, retorna 6

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 11: Casos de uso prácticos en videojuegos
// ============================================================

export interface Personaje {
  nombre: string;
  nivel: number;
  vida: number;
  ataque: number;
}

export interface Enemigo {
  nombre: string;
  nivel: number;
  vida: number;
  recompensa: number;
}

export function aplicarBuffATodos(
  personajes: Personaje[],
  buffAtaque: number,
  buffVida: number
): Personaje[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .map() para crear nuevos personajes con el buff aplicado
  // El ataque aumenta por buffAtaque y la vida por buffVida
  // IMPORTANTE: Retorna nuevos objetos, no modifiques los originales

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerEnemigosMasFuertes(
  enemigos: Enemigo[],
  limite: number
): Enemigo[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa .filter() para obtener los enemigos con nivel > limite
  // Luego usa .sort() para ordenarlos de mayor a menor nivel
  // (mayor nivel primero)

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularRecompensaTotal(
  enemigos: Enemigo[],
  multiplicador: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // 1. Filtra solo los enemigos con vida <= 0 (derrotados)
  // 2. Mapea para obtener la recompensa de cada uno multiplicada por el multiplicador
  // 3. Reduce para sumar todas las recompensas

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerEquipoBalanceado(
  personajes: Personaje[]
): { nombre: string; poder: number }[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // 1. Filtra personajes con vida > 0
  // 2. Mapea para crear objetos con nombre y poder (nivel * ataque)
  // 3. Ordena por poder de menor a mayor
  // 4. Toma solo los primeros 3 (usa .slice(0, 3))

  throw new Error("Función no implementada");
  // ====================================
}

export function crearSistemaDeNiveles(
  baseExp: number
): (nivel: number) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que calcula la experiencia necesaria para un nivel
  // La fórmula es: baseExp * nivel * nivel
  // Ejemplo:
  //   const expNecesaria = crearSistemaDeNiveles(100);
  //   expNecesaria(1) // 100
  //   expNecesaria(2) // 400
  //   expNecesaria(3) // 900

  throw new Error("Función no implementada");
  // ====================================
}

export function crearCalculadorDeDanio(
  bonusBase: number,
  multiplicadorCritico: number
): (ataque: number, esCritico: boolean) => number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna una función que calcula el daño final
  // Si esCritico es true: (ataque + bonusBase) * multiplicadorCritico
  // Si esCritico es false: ataque + bonusBase
  // Ejemplo:
  //   const calcularDanio = crearCalculadorDeDanio(10, 2);
  //   calcularDanio(50, false) // 60
  //   calcularDanio(50, true)  // 120

  throw new Error("Función no implementada");
  // ====================================
}
