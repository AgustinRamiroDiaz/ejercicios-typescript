/**
 * EJERCICIO: Tipos Avanzados de TypeScript
 *
 * TypeScript ofrece un sistema de tipos muy poderoso.
 * En este ejercicio aprenderás los conceptos más avanzados.
 *
 * INSTRUCCIONES:
 * 1. Define los tipos según las indicaciones
 * 2. Implementa las funciones con la seguridad de tipos correcta
 * 3. Aprovecha las características avanzadas de TypeScript
 */

// ============================================================
// PARTE 1: Union Types
// ============================================================

export type TipoAtaque = "físico" | "mágico" | "elemental";
export type Estado = "vivo" | "muerto" | "envenenado" | "paralizado";

export interface Ataque {
  nombre: string;
  danio: number;
  tipo: TipoAtaque;
}

export function crearAtaque(
  nombre: string,
  danio: number,
  tipo: TipoAtaque
): Ataque {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea y retorna un ataque
  // El tipo solo acepta "físico", "mágico" o "elemental"

  throw new Error("Función no implementada");
  // ====================================
}

export function esAtaqueFisico(ataque: Ataque): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna true si el tipo es "físico"

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 2: Literal Types y Type Narrowing
// ============================================================

export type Direccion = "norte" | "sur" | "este" | "oeste";

export function mover(direccion: Direccion): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un mensaje según la dirección:
  // - "norte": "Moviendo hacia el norte"
  // - "sur": "Moviendo hacia el sur"
  // - "este": "Moviendo hacia el este"
  // - "oeste": "Moviendo hacia el oeste"

  throw new Error("Función no implementada");
  // ====================================
}

export function esDireccionVertical(direccion: Direccion): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna true si es "norte" o "sur"

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 3: Discriminated Unions
// ============================================================

export type Evento =
  | { tipo: "ataque"; danio: number; objetivo: string }
  | { tipo: "curación"; cantidad: number; objetivo: string }
  | { tipo: "movimiento"; destino: string };

export function procesarEvento(evento: Evento): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa el tipo para determinar qué hacer:
  // - "ataque": retorna "[objetivo] recibe [danio] de daño"
  // - "curación": retorna "[objetivo] se cura [cantidad] puntos"
  // - "movimiento": retorna "Moviendo a [destino]"
  // Usa un switch con evento.tipo

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 4: Generics básicos
// ============================================================

export function primero<T>(array: T[]): T | undefined {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el primer elemento del array o undefined si está vacío
  // T es un tipo genérico que puede ser cualquier cosa

  throw new Error("Función no implementada");
  // ====================================
}

export function ultimo<T>(array: T[]): T | undefined {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna el último elemento del array o undefined si está vacío

  throw new Error("Función no implementada");
  // ====================================
}

export function intercambiar<T>(array: T[], i: number, j: number): T[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un nuevo array con los elementos en posiciones i y j intercambiados
  // Si algún índice es inválido, retorna una copia del array original

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 5: Generics con constraints
// ============================================================

export interface ConNombre {
  nombre: string;
}

export function obtenerNombres<T extends ConNombre>(items: T[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un array con los nombres de todos los items
  // T debe tener una propiedad nombre (por eso extends ConNombre)

  throw new Error("Función no implementada");
  // ====================================
}

export interface ConNivel {
  nivel: number;
}

export function filtrarPorNivelMinimo<T extends ConNivel>(
  items: T[],
  nivelMinimo: number
): T[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Filtra items que tengan nivel >= nivelMinimo
  // T debe tener una propiedad nivel

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 6: Utility Types - Partial
// ============================================================

export interface Personaje {
  nombre: string;
  nivel: number;
  vida: number;
  mana: number;
}

export function actualizarPersonaje(
  personaje: Personaje,
  cambios: Partial<Personaje>
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un nuevo personaje con los cambios aplicados
  // Partial<Personaje> significa que todas las propiedades son opcionales
  // Usa spread operator: { ...personaje, ...cambios }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 7: Utility Types - Pick y Omit
// ============================================================

export type PersonajeResumen = Pick<Personaje, "nombre" | "nivel">;

export function crearResumen(personaje: Personaje): PersonajeResumen {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un objeto con solo nombre y nivel
  // PersonajeResumen solo tiene esas dos propiedades

  throw new Error("Función no implementada");
  // ====================================
}

export type PersonajeSinMana = Omit<Personaje, "mana">;

export function convertirAGuerrero(personaje: Personaje): PersonajeSinMana {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un objeto sin la propiedad mana
  // PersonajeSinMana tiene todas las propiedades excepto mana

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 8: Utility Types - Required y Readonly
// ============================================================

export interface ConfiguracionJuego {
  volumen?: number;
  dificultad?: string;
  idioma?: string;
}

export function aplicarConfiguracion(
  config: Required<ConfiguracionJuego>
): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Required hace que todas las propiedades sean obligatorias
  // Retorna un string describiendo la configuración
  // Ejemplo: "Volumen: 50, Dificultad: Normal, Idioma: ES"

  throw new Error("Función no implementada");
  // ====================================
}

export function crearConfiguracionInmutable(
  config: ConfiguracionJuego
): Readonly<ConfiguracionJuego> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Readonly hace que no se puedan modificar las propiedades
  // Retorna el config tal cual (TypeScript evitará modificaciones)

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 9: Utility Types - Record
// ============================================================

export type EstadisticasJugador = Record<string, number>;

export function crearEstadisticas(
  asesinatos: number,
  muertes: number,
  asistencias: number
): EstadisticasJugador {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un objeto con las estadísticas
  // Record<string, number> es un objeto donde las keys son strings y valores numbers
  // { "asesinatos": ..., "muertes": ..., "asistencias": ... }

  throw new Error("Función no implementada");
  // ====================================
}

export function sumarEstadistica(
  stats: EstadisticasJugador,
  clave: string,
  valor: number
): EstadisticasJugador {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un nuevo objeto con el valor sumado a la clave
  // Si la clave no existe, créala con el valor
  // Si existe, suma el valor al existente

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 10: Type Guards
// ============================================================

export interface Jugador {
  tipo: "jugador";
  nombre: string;
  nivel: number;
}

export interface Enemigo {
  tipo: "enemigo";
  nombre: string;
  peligrosidad: number;
}

export type Entidad = Jugador | Enemigo;

export function esJugador(entidad: Entidad): entidad is Jugador {
  // ========== TU CÓDIGO AQUÍ ==========
  // Type guard: retorna true si la entidad es un Jugador
  // Verifica si entidad.tipo === "jugador"
  // El tipo de retorno "entidad is Jugador" es especial

  throw new Error("Función no implementada");
  // ====================================
}

export function esEnemigo(entidad: Entidad): entidad is Enemigo {
  // ========== TU CÓDIGO AQUÍ ==========
  // Type guard: retorna true si la entidad es un Enemigo

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerInfo(entidad: Entidad): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa los type guards para retornar la info correcta:
  // - Si es Jugador: "[nombre] - Nivel: [nivel]"
  // - Si es Enemigo: "[nombre] - Peligrosidad: [peligrosidad]"

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 11: Conditional Types básico
// ============================================================

export type EsArray<T> = T extends any[] ? true : false;

// Estos son solo para demostración, no hay función que implementar aquí
export type Test1 = EsArray<number[]>; // true
export type Test2 = EsArray<string>; // false

export type ExtraerTipo<T> = T extends Array<infer U> ? U : T;

// Ejemplos de uso (no implementar):
export type Test3 = ExtraerTipo<number[]>; // number
export type Test4 = ExtraerTipo<string>; // string

// Implementa esta función:
export function extraerPrimero<T>(valor: T): ExtraerTipo<T> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si valor es un array, retorna el primer elemento
  // Si no es array, retorna el valor tal cual
  // Usa Array.isArray() para verificar

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 12: Mapped Types
// ============================================================

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export function crearPersonajeNullable(): Nullable<Personaje> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un objeto donde todas las propiedades pueden ser null
  // Ejemplo: { nombre: null, nivel: null, vida: null, mana: null }

  throw new Error("Función no implementada");
  // ====================================
}

export type Opcional<T> = {
  [P in keyof T]?: T[P];
};

export function actualizarParcial(
  personaje: Personaje,
  cambios: Opcional<Personaje>
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Similar a actualizarPersonaje pero usando nuestro tipo Opcional
  // (que es equivalente a Partial)

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 13: Template Literal Types
// ============================================================

export type DireccionCompleta = `direccion-${"norte" | "sur" | "este" | "oeste"}`;

export function crearEvento(direccion: DireccionCompleta): string {
  // ========== TU CÓDIGO AQUÍ ==========
  // direccion solo puede ser:
  // "direccion-norte", "direccion-sur", "direccion-este", "direccion-oeste"
  // Retorna un mensaje con la dirección

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 14: Index Signatures
// ============================================================

export interface Inventario {
  [nombreItem: string]: number;
}

export function agregarAlInventario(
  inventario: Inventario,
  item: string,
  cantidad: number
): Inventario {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna un nuevo inventario con el item agregado/actualizado
  // Si el item ya existe, suma la cantidad

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerCantidad(inventario: Inventario, item: string): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Retorna la cantidad del item en el inventario
  // Si no existe, retorna 0

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 15: Tipos complejos combinados
// ============================================================

export interface BasePersonaje {
  nombre: string;
  nivel: number;
}

export interface ConVida {
  vida: number;
  vidaMaxima: number;
}

export interface ConMana {
  mana: number;
  manaMaximo: number;
}

export type Guerrero = BasePersonaje & ConVida;
export type Mago = BasePersonaje & ConVida & ConMana;

export function crearGuerrero(nombre: string, nivel: number): Guerrero {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea un guerrero con vida y vidaMaxima = nivel * 10

  throw new Error("Función no implementada");
  // ====================================
}

export function crearMago(nombre: string, nivel: number): Mago {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea un mago con:
  // - vida y vidaMaxima = nivel * 8
  // - mana y manaMaximo = nivel * 12

  throw new Error("Función no implementada");
  // ====================================
}

export function esMago(personaje: Guerrero | Mago): personaje is Mago {
  // ========== TU CÓDIGO AQUÍ ==========
  // Type guard: retorna true si tiene propiedad mana
  // Pista: usa 'mana' in personaje

  throw new Error("Función no implementada");
  // ====================================
}
