/**
 * EJERCICIO: Manejo de Errores
 *
 * En este ejercicio aprenderás a manejar errores de forma adecuada en TypeScript.
 * El manejo de errores es fundamental para crear aplicaciones robustas y confiables.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones siguiendo las indicaciones
 * 2. Usa try/catch para capturar errores
 * 3. Lanza errores con throw cuando sea necesario
 * 4. Crea clases de error personalizadas
 */

// ============================================================
// PARTE 1: Conceptos básicos - throw y try/catch
// ============================================================

export function dividir(a: number, b: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si b es 0, lanza un error con el mensaje "No se puede dividir por cero"
  // Si no, retorna a / b

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerElemento(array: number[], indice: number): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el índice está fuera de rango (menor a 0 o mayor/igual a la longitud),
  // lanza un error con el mensaje "Índice fuera de rango"
  // Si no, retorna el elemento en ese índice

  throw new Error("Función no implementada");
  // ====================================
}

export function dividirSeguro(a: number, b: number): number | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa try/catch para intentar dividir
  // Si hay un error, retorna null
  // Si no hay error, retorna el resultado
  // Pista: usa la función dividir que ya creaste

  throw new Error("Función no implementada");
  // ====================================
}

export function obtenerElementoSeguro(
  array: number[],
  indice: number
): number | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa try/catch para intentar obtener el elemento
  // Si hay un error, retorna null
  // Si no hay error, retorna el elemento
  // Pista: usa la función obtenerElemento que ya creaste

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 2: Validación de datos de juego
// ============================================================

export interface Personaje {
  nombre: string;
  nivel: number;
  vida: number;
}

export function crearPersonaje(
  nombre: string,
  nivel: number,
  vida: number
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Valida los parámetros y lanza errores si son inválidos:
  // - Si nombre está vacío: "El nombre no puede estar vacío"
  // - Si nivel es menor a 1: "El nivel debe ser al menos 1"
  // - Si vida es menor a 0: "La vida no puede ser negativa"
  // Si todo es válido, retorna el personaje

  throw new Error("Función no implementada");
  // ====================================
}

export function subirNivel(personaje: Personaje, niveles: number): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si niveles es menor o igual a 0, lanza error: "Los niveles a subir deben ser positivos"
  // Si no, retorna un nuevo personaje con el nivel aumentado
  // (el nivel aumenta en 'niveles', la vida aumenta en niveles * 10)

  throw new Error("Función no implementada");
  // ====================================
}

export function usarItem(personaje: Personaje, nombreItem: string): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el personaje tiene vida <= 0, lanza error: "No se puede usar items con un personaje muerto"
  // Si el nombreItem está vacío, lanza error: "El nombre del item no puede estar vacío"
  // Si todo es válido, retorna el mismo personaje (sin cambios por ahora)

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 3: Clases de error personalizadas
// ============================================================

export class PersonajeError extends Error {
  constructor(message: string) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Llama al constructor de Error con el mensaje
    // Establece el nombre del error como "PersonajeError"

    super(message);
    throw new Error("Constructor no implementado");
    // ====================================
  }
}

export class InventarioError extends Error {
  constructor(message: string) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Llama al constructor de Error con el mensaje
    // Establece el nombre del error como "InventarioError"

    super(message);
    throw new Error("Constructor no implementado");
    // ====================================
  }
}

export class CombateError extends Error {
  constructor(message: string) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Llama al constructor de Error con el mensaje
    // Establece el nombre del error como "CombateError"

    super(message);
    throw new Error("Constructor no implementado");
    // ====================================
  }
}

export function atacar(
  personaje: Personaje,
  danio: number
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el personaje está muerto (vida <= 0), lanza PersonajeError con mensaje:
  //   "No se puede atacar a un personaje muerto"
  // Si el daño es negativo, lanza PersonajeError con mensaje:
  //   "El daño no puede ser negativo"
  // Si todo es válido, retorna un nuevo personaje con la vida reducida
  // (la vida no puede bajar de 0)

  throw new Error("Función no implementada");
  // ====================================
}

export interface Item {
  nombre: string;
  tipo: string;
  cantidad: number;
}

export function agregarItem(
  inventario: Item[],
  item: Item,
  capacidadMaxima: number
): Item[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el inventario está lleno (length >= capacidadMaxima),
  //   lanza InventarioError: "Inventario lleno"
  // Si la cantidad del item es <= 0,
  //   lanza InventarioError: "La cantidad debe ser positiva"
  // Si todo es válido, retorna un nuevo array con el item agregado

  throw new Error("Función no implementada");
  // ====================================
}

export function removerItem(inventario: Item[], nombreItem: string): Item[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Si el item no existe en el inventario,
  //   lanza InventarioError: "Item no encontrado: [nombreItem]"
  // Si existe, retorna un nuevo array sin ese item

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 4: Manejo de múltiples errores
// ============================================================

export function procesarAccion(
  personaje: Personaje,
  accion: string
): { exito: boolean; error?: string } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa try/catch para intentar diferentes acciones
  // Si accion === "atacar", llama a atacar(personaje, 10)
  // Si accion === "subir", llama a subirNivel(personaje, 1)
  // Si accion === "usar", llama a usarItem(personaje, "poción")
  // Si hay un error, retorna { exito: false, error: mensaje del error }
  // Si no hay error, retorna { exito: true }
  // Si la acción no es reconocida, retorna { exito: false, error: "Acción desconocida" }

  throw new Error("Función no implementada");
  // ====================================
}

export function ejecutarAcciones(
  personaje: Personaje,
  acciones: string[]
): { exitosas: number; fallidas: number; errores: string[] } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Procesa cada acción usando procesarAccion
  // Cuenta cuántas fueron exitosas y cuántas fallaron
  // Guarda los mensajes de error en un array
  // Retorna { exitosas: número, fallidas: número, errores: array de mensajes }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 5: Finally y limpieza
// ============================================================

export function guardarPartida(
  personaje: Personaje,
  nombreArchivo: string
): { guardado: boolean; mensaje: string } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Simula guardar una partida
  // Si nombreArchivo está vacío, lanza un error "Nombre de archivo inválido"
  // Si el nombre del personaje contiene "error", lanza un error "Error al guardar"
  // Usa try/catch/finally:
  //   - try: valida y si todo está bien retorna { guardado: true, mensaje: "Partida guardada" }
  //   - catch: retorna { guardado: false, mensaje: el mensaje del error }
  //   - finally: NO hagas nada aquí, solo está para practicar la sintaxis
  // Pista: necesitas una variable fuera del try para guardar el resultado

  throw new Error("Función no implementada");
  // ====================================
}

export function cargarPartida(
  nombreArchivo: string
): { personaje: Personaje | null; mensaje: string } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Simula cargar una partida
  // Si nombreArchivo está vacío, lanza error "Nombre de archivo inválido"
  // Si nombreArchivo === "corrupto", lanza error "Archivo corrupto"
  // Si todo está bien, retorna un personaje de ejemplo:
  //   { personaje: { nombre: "Héroe", nivel: 5, vida: 50 }, mensaje: "Partida cargada" }
  // Usa try/catch para manejar errores:
  //   - Si hay error, retorna { personaje: null, mensaje: mensaje del error }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 6: Validación de combate
// ============================================================

export interface Enemigo {
  nombre: string;
  nivel: number;
  vida: number;
}

export function validarCombate(
  personaje: Personaje,
  enemigo: Enemigo
): boolean {
  // ========== TU CÓDIGO AQUÍ ==========
  // Lanza CombateError en los siguientes casos:
  // - Si el personaje está muerto (vida <= 0): "El personaje está muerto"
  // - Si el enemigo está muerto (vida <= 0): "El enemigo está muerto"
  // - Si el nivel del personaje es menor a la mitad del nivel del enemigo:
  //   "Nivel insuficiente para este combate"
  // Si todo es válido, retorna true

  throw new Error("Función no implementada");
  // ====================================
}

export function iniciarCombate(
  personaje: Personaje,
  enemigo: Enemigo
): { iniciado: boolean; error?: string } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa try/catch para llamar a validarCombate
  // Si validarCombate lanza un error (debe ser CombateError):
  //   - Retorna { iniciado: false, error: mensaje del error }
  // Si no hay error:
  //   - Retorna { iniciado: true }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 7: Encadenamiento de validaciones
// ============================================================

export function validarPersonajeCompleto(personaje: Personaje): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Valida múltiples aspectos del personaje y retorna un array de errores
  // Agrega un mensaje de error al array por cada validación que falle:
  // - Si nombre está vacío: "Nombre inválido"
  // - Si nivel < 1: "Nivel inválido"
  // - Si vida < 0: "Vida inválida"
  // - Si nivel > 100: "Nivel demasiado alto"
  // - Si vida > nivel * 100: "Vida demasiado alta para el nivel"
  // Retorna el array de errores (puede estar vacío si todo es válido)

  throw new Error("Función no implementada");
  // ====================================
}

export function crearPersonajeValidado(
  nombre: string,
  nivel: number,
  vida: number
): { personaje: Personaje | null; errores: string[] } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea un personaje y valida usando validarPersonajeCompleto
  // Si hay errores, retorna { personaje: null, errores: array de errores }
  // Si no hay errores, retorna { personaje: el personaje creado, errores: [] }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 8: Manejo de errores en operaciones batch
// ============================================================

export function procesarPersonajes(
  datos: Array<{ nombre: string; nivel: number; vida: number }>
): { validos: Personaje[]; invalidos: string[] } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Intenta crear un personaje para cada elemento en datos
  // Si crearPersonaje lanza un error, guarda el mensaje en invalidos
  // Si no lanza error, guarda el personaje en validos
  // Retorna { validos: array de personajes, invalidos: array de mensajes de error }

  throw new Error("Función no implementada");
  // ====================================
}

export function atacarMultiples(
  personajes: Personaje[],
  danio: number
): { atacados: Personaje[]; errores: string[] } {
  // ========== TU CÓDIGO AQUÍ ==========
  // Intenta atacar cada personaje
  // Si atacar lanza un error, guarda el mensaje en errores
  // Si no lanza error, guarda el personaje resultante en atacados
  // Retorna { atacados: array de personajes, errores: array de mensajes }

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 9: Errores con información adicional
// ============================================================

export class PersonajeDetalladoError extends Error {
  public personaje: string;
  public razon: string;

  constructor(personaje: string, razon: string) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Llama a super con un mensaje que combine personaje y razón
    // Por ejemplo: "Error en [personaje]: [razon]"
    // Guarda personaje y razon en las propiedades
    // Establece this.name = "PersonajeDetalladoError"

    super();
    throw new Error("Constructor no implementado");
    // ====================================
  }
}

export function realizarAccionCompleja(
  personaje: Personaje,
  accion: string,
  valor: number
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Lanza PersonajeDetalladoError en estos casos:
  // - Si personaje.vida <= 0:
  //   new PersonajeDetalladoError(personaje.nombre, "está muerto")
  // - Si accion === "atacar" y valor <= 0:
  //   new PersonajeDetalladoError(personaje.nombre, "daño inválido")
  // - Si accion === "curar" y valor <= 0:
  //   new PersonajeDetalladoError(personaje.nombre, "curación inválida")
  // - Si accion no es ni "atacar" ni "curar":
  //   new PersonajeDetalladoError(personaje.nombre, "acción desconocida")
  // Si todo es válido:
  //   - Si accion === "atacar": reduce vida por valor (mínimo 0)
  //   - Si accion === "curar": aumenta vida por valor
  // Retorna el personaje modificado

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 10: Error recovery (recuperación de errores)
// ============================================================

export function obtenerPersonajeODefault(
  personajes: Personaje[],
  nombre: string
): Personaje {
  // ========== TU CÓDIGO AQUÍ ==========
  // Busca un personaje por nombre en el array
  // Si lo encuentra, retórnalo
  // Si no lo encuentra, retorna un personaje por defecto:
  //   { nombre: "Desconocido", nivel: 1, vida: 10 }
  // NO lances errores en esta función

  throw new Error("Función no implementada");
  // ====================================
}

export function operacionConFallback<T>(
  operacion: () => T,
  fallback: T
): T {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa try/catch para ejecutar la operación
  // Si la operación lanza un error, retorna fallback
  // Si no hay error, retorna el resultado de la operación

  throw new Error("Función no implementada");
  // ====================================
}

export function dividirConDefault(
  a: number,
  b: number,
  valorDefault: number
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa operacionConFallback para intentar dividir a / b
  // Si hay error (división por cero), retorna valorDefault
  // Pista: pasa una función arrow que haga la división

  throw new Error("Función no implementada");
  // ====================================
}
