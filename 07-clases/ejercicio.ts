/**
 * EJERCICIO: Clases en TypeScript
 *
 * En este ejercicio aprenderás a trabajar con clases en TypeScript.
 * Crearás clases para personajes, enemigos, items y monedas, y aprenderás
 * a interactuar con múltiples objetos de diferentes clases.
 *
 * INSTRUCCIONES:
 * 1. Completa las clases siguiendo las indicaciones
 * 2. Implementa los métodos de cada clase
 * 3. Las clases pueden interactuar entre sí
 */

// ============================================================
// PARTE 1: Clase Personaje
// ============================================================

export class Personaje {
  nombre: string;
  nivel: number;
  vida: number;
  vidaMaxima: number;
  mana: number;
  manaMaximo: number;
  oro: number;
  experiencia: number;

  constructor(nombre: string, nivel: number = 1) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa las propiedades del personaje:
    // - nombre: el nombre proporcionado
    // - nivel: el nivel proporcionado (por defecto 1)
    // - vidaMaxima: nivel * 10
    // - vida: igual a vidaMaxima
    // - manaMaximo: nivel * 5
    // - mana: igual a manaMaximo
    // - oro: 0
    // - experiencia: 0

    throw new Error("Constructor no implementado");
    // ====================================
  }

  estaVivo(): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna true si la vida es mayor a 0

    throw new Error("Método no implementado");
    // ====================================
  }

  recibirDanio(danio: number): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Reduce la vida del personaje por el daño recibido
    // La vida no puede ser menor a 0

    throw new Error("Método no implementado");
    // ====================================
  }

  curar(cantidad: number): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Aumenta la vida del personaje por la cantidad especificada
    // La vida no puede superar vidaMaxima

    throw new Error("Método no implementado");
    // ====================================
  }

  usarMana(cantidad: number): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el personaje tiene suficiente mana, reduce el mana y retorna true
    // Si no tiene suficiente mana, retorna false sin cambiar el mana

    throw new Error("Método no implementado");
    // ====================================
  }

  recuperarMana(cantidad: number): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Aumenta el mana del personaje por la cantidad especificada
    // El mana no puede superar manaMaximo

    throw new Error("Método no implementado");
    // ====================================
  }

  ganarExperiencia(cantidad: number): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Aumenta la experiencia del personaje
    // Si la experiencia alcanza o supera 100, el personaje sube de nivel:
    // - nivel aumenta en 1
    // - experiencia se reduce en 100 (puede seguir teniendo experiencia restante)
    // - vidaMaxima aumenta en 10
    // - vida se restaura a vidaMaxima
    // - manaMaximo aumenta en 5
    // - mana se restaura a manaMaximo
    // Retorna true si subió de nivel, false en caso contrario

    throw new Error("Método no implementado");
    // ====================================
  }

  recogerOro(cantidad: number): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Aumenta el oro del personaje

    throw new Error("Método no implementado");
    // ====================================
  }

  gastarOro(cantidad: number): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el personaje tiene suficiente oro, reduce el oro y retorna true
    // Si no tiene suficiente oro, retorna false sin cambiar el oro

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 2: Clase Enemigo
// ============================================================

export class Enemigo {
  nombre: string;
  nivel: number;
  vida: number;
  vidaMaxima: number;
  danio: number;
  oroPorDerrota: number;
  experienciaPorDerrota: number;

  constructor(
    nombre: string,
    nivel: number,
    danio: number,
    oroPorDerrota: number = 10,
    experienciaPorDerrota: number = 20
  ) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa las propiedades del enemigo:
    // - nombre: el nombre proporcionado
    // - nivel: el nivel proporcionado
    // - vidaMaxima: nivel * 8
    // - vida: igual a vidaMaxima
    // - danio: el daño proporcionado
    // - oroPorDerrota: el oro por derrota proporcionado (por defecto 10)
    // - experienciaPorDerrota: la experiencia por derrota proporcionada (por defecto 20)

    throw new Error("Constructor no implementado");
    // ====================================
  }

  estaVivo(): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna true si la vida es mayor a 0

    throw new Error("Método no implementado");
    // ====================================
  }

  recibirDanio(danio: number): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Reduce la vida del enemigo por el daño recibido
    // La vida no puede ser menor a 0

    throw new Error("Método no implementado");
    // ====================================
  }

  atacar(personaje: Personaje): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el enemigo está vivo, hace que el personaje reciba daño
    // igual al daño del enemigo

    throw new Error("Método no implementado");
    // ====================================
  }

  obtenerRecompensas(): { oro: number; experiencia: number } {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna un objeto con el oro y la experiencia que otorga este enemigo

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 3: Clase Item
// ============================================================

export class Item {
  nombre: string;
  tipo: "curacion" | "mana" | "danio";
  valor: number;
  precio: number;

  constructor(
    nombre: string,
    tipo: "curacion" | "mana" | "danio",
    valor: number,
    precio: number
  ) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa todas las propiedades con los valores proporcionados

    throw new Error("Constructor no implementado");
    // ====================================
  }

  usar(personaje: Personaje): string {
    // ========== TU CÓDIGO AQUÍ ==========
    // Aplica el efecto del item al personaje según su tipo:
    // - "curacion": cura al personaje por el valor del item
    // - "mana": recupera el mana del personaje por el valor del item
    // - "danio": no hace nada (los items de daño se usan contra enemigos)
    // Retorna un mensaje descriptivo de lo que hizo el item
    // Ejemplo: "Poción de vida restaura 50 puntos de vida"

    throw new Error("Método no implementado");
    // ====================================
  }

  usarContra(enemigo: Enemigo): string {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el tipo es "danio", hace que el enemigo reciba daño
    // Si el tipo no es "danio", no hace nada
    // Retorna un mensaje descriptivo
    // Ejemplo: "Bomba causa 30 de daño al enemigo"

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 4: Clase Moneda
// ============================================================

export class Moneda {
  valor: number;
  esRara: boolean; // Las monedas raras valen el doble

  constructor(valor: number, esRara: boolean = false) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa las propiedades

    throw new Error("Constructor no implementado");
    // ====================================
  }

  obtenerValor(): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna el valor de la moneda
    // Si es rara, retorna el doble del valor

    throw new Error("Método no implementado");
    // ====================================
  }

  recoger(personaje: Personaje): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Hace que el personaje recoja el oro de esta moneda

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 5: Clase Inventario
// ============================================================

export class Inventario {
  items: Item[];
  capacidadMaxima: number;

  constructor(capacidadMaxima: number = 10) {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa el array de items vacío
    // Guarda la capacidad máxima

    throw new Error("Constructor no implementado");
    // ====================================
  }

  agregarItem(item: Item): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si hay espacio en el inventario, agrega el item y retorna true
    // Si no hay espacio, retorna false

    throw new Error("Método no implementado");
    // ====================================
  }

  usarItem(indice: number, personaje: Personaje): string | null {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el índice es válido, usa el item en el personaje,
    // lo elimina del inventario y retorna el mensaje del item
    // Si el índice no es válido, retorna null

    throw new Error("Método no implementado");
    // ====================================
  }

  usarItemContra(indice: number, enemigo: Enemigo): string | null {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el índice es válido, usa el item contra el enemigo,
    // lo elimina del inventario y retorna el mensaje del item
    // Si el índice no es válido, retorna null

    throw new Error("Método no implementado");
    // ====================================
  }

  obtenerItemsPorTipo(tipo: "curacion" | "mana" | "danio"): Item[] {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna un array con todos los items del tipo especificado

    throw new Error("Método no implementado");
    // ====================================
  }

  calcularValorTotal(): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna la suma del precio de todos los items

    throw new Error("Método no implementado");
    // ====================================
  }

  estaLleno(): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna true si el inventario está lleno

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 6: Funciones de combate
// ============================================================

export function combatir(
  personaje: Personaje,
  enemigo: Enemigo
): "victoria" | "derrota" | "en_curso" {
  // ========== TU CÓDIGO AQUÍ ==========
  // Simula UN TURNO de combate:
  // 1. El personaje ataca al enemigo causando daño igual al nivel del personaje
  // 2. Si el enemigo sigue vivo, el enemigo ataca al personaje
  // 3. Si el enemigo murió, el personaje recibe las recompensas y retorna "victoria"
  // 4. Si el personaje murió, retorna "derrota"
  // 5. Si ambos siguen vivos, retorna "en_curso"

  throw new Error("Función no implementada");
  // ====================================
}

export function combateCompleto(
  personaje: Personaje,
  enemigo: Enemigo
): "victoria" | "derrota" {
  // ========== TU CÓDIGO AQUÍ ==========
  // Simula un combate completo hasta que uno de los dos muera
  // Usa la función combatir en un bucle
  // Retorna "victoria" si el personaje ganó o "derrota" si perdió

  throw new Error("Función no implementada");
  // ====================================
}

export function encontrarEnemigoMasDebil(enemigos: Enemigo[]): Enemigo | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra y retorna el enemigo con menos vida actual
  // Retorna null si el array está vacío

  throw new Error("Función no implementada");
  // ====================================
}

export function encontrarEnemigoMasFuerte(enemigos: Enemigo[]): Enemigo | null {
  // ========== TU CÓDIGO AQUÍ ==========
  // Encuentra y retorna el enemigo con más daño
  // Retorna null si el array está vacío

  throw new Error("Función no implementada");
  // ====================================
}

export function calcularDanioTotal(enemigos: Enemigo[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Calcula y retorna el daño total que harían todos los enemigos vivos

  throw new Error("Función no implementada");
  // ====================================
}

export function derrotarTodos(personaje: Personaje, enemigos: Enemigo[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // El personaje intenta derrotar a todos los enemigos uno por uno
  // usando combateCompleto
  // Retorna el número de enemigos derrotados antes de morir
  // (o todos si el personaje sobrevive)

  throw new Error("Función no implementada");
  // ====================================
}

// ============================================================
// PARTE 7: Sistema de tienda
// ============================================================

export class Tienda {
  items: Item[];

  constructor() {
    // ========== TU CÓDIGO AQUÍ ==========
    // Inicializa el array de items con algunos items de ejemplo:
    // - Poción de vida (curacion, 50, precio 30)
    // - Poción de mana (mana, 30, precio 25)
    // - Bomba (danio, 40, precio 50)

    throw new Error("Constructor no implementado");
    // ====================================
  }

  mostrarItems(): string[] {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna un array de strings con la información de cada item
    // Formato: "nombre - tipo - valor - precio oro"

    throw new Error("Método no implementado");
    // ====================================
  }

  comprarItem(
    indice: number,
    personaje: Personaje,
    inventario: Inventario
  ): boolean {
    // ========== TU CÓDIGO AQUÍ ==========
    // Si el índice es válido, el personaje tiene suficiente oro,
    // y hay espacio en el inventario:
    // 1. El personaje gasta el oro
    // 2. Se agrega una COPIA del item al inventario
    //    (el item original se queda en la tienda)
    // 3. Retorna true
    // En caso contrario, retorna false

    throw new Error("Método no implementado");
    // ====================================
  }

  agregarItem(item: Item): void {
    // ========== TU CÓDIGO AQUÍ ==========
    // Agrega un item a la tienda

    throw new Error("Método no implementado");
    // ====================================
  }
}

// ============================================================
// PARTE 8: Recolección de monedas
// ============================================================

export function recolectarMonedas(
  personaje: Personaje,
  monedas: Moneda[]
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // El personaje recoge todas las monedas del array
  // Retorna el total de oro recolectado

  throw new Error("Función no implementada");
  // ====================================
}

export function generarMonedasAleatorias(cantidad: number): Moneda[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Genera un array de monedas con valores aleatorios entre 1 y 10
  // El 20% de las monedas deberían ser raras
  // Usa Math.random() para generar valores aleatorios

  throw new Error("Función no implementada");
  // ====================================
}
