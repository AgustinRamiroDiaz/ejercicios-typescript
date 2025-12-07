/**
 * EJERCICIO: Grafos Dirigidos - Estructuras de Datos para Videojuegos
 *
 * Los grafos dirigidos son fundamentales en el desarrollo de videojuegos:
 * - Máquinas de estados (FSM - Finite State Machines)
 * - Sistemas de navegación entre habitaciones/niveles
 * - Árboles de habilidades y tecnologías
 * - Sistemas de diálogo con opciones
 * - Grafos de dependencias
 *
 * INSTRUCCIONES:
 * 1. Implementa la interfaz GrafoDirigido con diferentes representaciones internas
 * 2. Cada clase usa una estructura de datos diferente para almacenar la información
 * 3. Completa los ejercicios prácticos con temática de videojuegos
 */

// ============================================================
// PARTE 1: Interfaz de Grafo Dirigido
// ============================================================

/**
 * Interfaz que define las operaciones básicas de un grafo dirigido
 *
 * Un grafo dirigido G = (V, E) consiste en:
 * - V: conjunto de vértices
 * - E: conjunto de aristas dirigidas (u, v) donde u y v están en V
 */
export interface GrafoDirigido<V> {
  /**
   * Agrega un vértice al grafo
   * @param vertice el vértice a agregar
   */
  agregarVertice(vertice: V): void;

  /**
   * Agrega una arista dirigida desde origen hacia destino
   * @param origen vértice de origen
   * @param destino vértice de destino
   */
  agregarArista(origen: V, destino: V): void;

  /**
   * Retorna todos los vértices del grafo
   * @returns array con todos los vértices
   */
  vertices(): V[];

  /**
   * Retorna todas las aristas del grafo
   * @returns array de tuplas [origen, destino]
   */
  aristas(): [V, V][];

  /**
   * Retorna los vértices adyacentes (sucesores) de un vértice dado
   * @param vertice el vértice del cual obtener adyacentes
   * @returns array con los vértices adyacentes
   */
  adyacentes(vertice: V): V[];

  /**
   * Verifica si existe una arista desde origen hacia destino
   * @param origen vértice de origen
   * @param destino vértice de destino
   * @returns true si existe la arista, false en caso contrario
   */
  existeArista(origen: V, destino: V): boolean;

  /**
   * Retorna el grado de salida de un vértice (cantidad de aristas que salen)
   * @param vertice el vértice
   * @returns número de aristas salientes
   */
  gradoSalida(vertice: V): number;

  /**
   * Retorna el grado de entrada de un vértice (cantidad de aristas que llegan)
   * @param vertice el vértice
   * @returns número de aristas entrantes
   */
  gradoEntrada(vertice: V): number;

  /**
   * Encuentra todos los caminos simples desde origen hasta destino
   * Un camino simple no repite vértices
   * @param origen vértice inicial
   * @param destino vértice final
   * @returns array de caminos, donde cada camino es un array de vértices
   */
  obtenerCaminos(origen: V, destino: V): V[][];

  /**
   * Verifica si existe algún camino desde origen hasta destino
   * @param origen vértice inicial
   * @param destino vértice final
   * @returns true si existe al menos un camino, false en caso contrario
   */
  existeCamino(origen: V, destino: V): boolean;

  /**
   * Retorna el número total de vértices en el grafo
   * @returns cantidad de vértices
   */
  numeroVertices(): number;

  /**
   * Retorna el número total de aristas en el grafo
   * @returns cantidad de aristas
   */
  numeroAristas(): number;
}

// ============================================================
// PARTE 2: Implementaciones con Diferentes Estructuras de Datos
// ============================================================

/**
 * IMPLEMENTACIÓN 1: Lista de Adyacencia con Map
 *
 * Estructura interna:
 * - Map<V, Set<V>> donde la clave es el vértice y el valor es el conjunto
 *   de vértices adyacentes (a los que apunta)
 *
 * Ventajas:
 * - Eficiente para grafos dispersos (pocos aristas)
 * - Búsqueda rápida de adyacentes O(1)
 * - Fácil agregar/eliminar aristas
 *
 * Ejemplo:
 * Para el grafo: A -> B, A -> C, B -> C
 * Map { A => Set{B, C}, B => Set{C}, C => Set{} }
 */
export class GrafoListaAdyacencia<V> implements GrafoDirigido<V> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - adyacencias: Map<V, Set<V>>

  constructor() {
    throw new Error("Constructor no implementado");
  }

  agregarVertice(vertice: V): void {
    throw new Error("Método no implementado");
  }

  agregarArista(origen: V, destino: V): void {
    throw new Error("Método no implementado");
  }

  vertices(): V[] {
    throw new Error("Método no implementado");
  }

  aristas(): [V, V][] {
    throw new Error("Método no implementado");
  }

  adyacentes(vertice: V): V[] {
    throw new Error("Método no implementado");
  }

  existeArista(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  gradoSalida(vertice: V): number {
    throw new Error("Método no implementado");
  }

  gradoEntrada(vertice: V): number {
    throw new Error("Método no implementado");
  }

  obtenerCaminos(origen: V, destino: V): V[][] {
    throw new Error("Método no implementado");
  }

  existeCamino(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  numeroVertices(): number {
    throw new Error("Método no implementado");
  }

  numeroAristas(): number {
    throw new Error("Método no implementado");
  }
  // ====================================
}

/**
 * IMPLEMENTACIÓN 2: Conjunto de Aristas
 *
 * Estructura interna:
 * - vertices: Set<V> para almacenar todos los vértices
 * - aristas: Set<string> donde cada arista se representa como "origen->destino"
 *
 * Ventajas:
 * - Simple y fácil de entender
 * - Útil cuando necesitas iterar sobre todas las aristas frecuentemente
 *
 * Desventajas:
 * - Menos eficiente para buscar adyacentes O(n)
 */
export class GrafoConjuntoAristas<V> implements GrafoDirigido<V> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - vertices: Set<V>
  // - aristas: Set<string> (usa this.codificarArista(origen, destino))

  constructor() {
    throw new Error("Constructor no implementado");
  }

  /**
   * Método auxiliar para codificar una arista como string
   * Usa JSON.stringify para manejar cualquier tipo de vértice
   */
  private codificarArista(origen: V, destino: V): string {
    return `${JSON.stringify(origen)}->${JSON.stringify(destino)}`;
  }

  /**
   * Método auxiliar para decodificar una arista desde string
   */
  private decodificarArista(arista: string): [V, V] {
    const [origen, destino] = arista.split("->");
    return [JSON.parse(origen), JSON.parse(destino)];
  }

  agregarVertice(vertice: V): void {
    throw new Error("Método no implementado");
  }

  agregarArista(origen: V, destino: V): void {
    throw new Error("Método no implementado");
  }

  vertices(): V[] {
    throw new Error("Método no implementado");
  }

  aristas(): [V, V][] {
    throw new Error("Método no implementado");
  }

  adyacentes(vertice: V): V[] {
    throw new Error("Método no implementado");
  }

  existeArista(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  gradoSalida(vertice: V): number {
    throw new Error("Método no implementado");
  }

  gradoEntrada(vertice: V): number {
    throw new Error("Método no implementado");
  }

  obtenerCaminos(origen: V, destino: V): V[][] {
    throw new Error("Método no implementado");
  }

  existeCamino(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  numeroVertices(): number {
    throw new Error("Método no implementado");
  }

  numeroAristas(): number {
    throw new Error("Método no implementado");
  }
  // ====================================
}

/**
 * IMPLEMENTACIÓN 3: Matriz de Adyacencia
 *
 * Estructura interna:
 * - vertices: V[] array indexado de vértices
 * - matriz: boolean[][] donde matriz[i][j] = true si existe arista de i a j
 *
 * Ventajas:
 * - Verificación de arista muy rápida O(1)
 * - Bueno para grafos densos (muchas aristas)
 *
 * Desventajas:
 * - Uso de memoria O(V²) incluso para grafos dispersos
 */
export class GrafoMatrizAdyacencia<V> implements GrafoDirigido<V> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - vertices: V[]
  // - matriz: boolean[][]

  constructor() {
    throw new Error("Constructor no implementado");
  }

  /**
   * Método auxiliar para obtener el índice de un vértice
   */
  private obtenerIndice(vertice: V): number {
    throw new Error("Método no implementado");
  }

  agregarVertice(vertice: V): void {
    // Al agregar un vértice, debes redimensionar la matriz
    throw new Error("Método no implementado");
  }

  agregarArista(origen: V, destino: V): void {
    throw new Error("Método no implementado");
  }

  vertices(): V[] {
    throw new Error("Método no implementado");
  }

  aristas(): [V, V][] {
    throw new Error("Método no implementado");
  }

  adyacentes(vertice: V): V[] {
    throw new Error("Método no implementado");
  }

  existeArista(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  gradoSalida(vertice: V): number {
    throw new Error("Método no implementado");
  }

  gradoEntrada(vertice: V): number {
    throw new Error("Método no implementado");
  }

  obtenerCaminos(origen: V, destino: V): V[][] {
    throw new Error("Método no implementado");
  }

  existeCamino(origen: V, destino: V): boolean {
    throw new Error("Método no implementado");
  }

  numeroVertices(): number {
    throw new Error("Método no implementado");
  }

  numeroAristas(): number {
    throw new Error("Método no implementado");
  }
  // ====================================
}


// ============================================================
// PARTE 3: Ejercicios Prácticos - Máquina de Estados (FSM)
// ============================================================

/**
 * EJERCICIO 1: Máquina de Estados para un Enemigo
 *
 * Estados posibles: "patrullando", "persiguiendo", "atacando", "huyendo", "muerto"
 *
 * Transiciones:
 * - patrullando -> persiguiendo (cuando ve al jugador)
 * - patrullando -> huyendo (cuando recibe daño crítico)
 * - persiguiendo -> atacando (cuando está en rango)
 * - persiguiendo -> patrullando (cuando pierde de vista al jugador)
 * - atacando -> persiguiendo (cuando el jugador sale del rango)
 * - atacando -> huyendo (cuando vida baja)
 * - huyendo -> muerto (cuando vida llega a 0)
 * - cualquier estado -> muerto (cuando vida llega a 0)
 */
export class MaquinaEstadosEnemigo {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - grafo: GrafoDirigido<string>
  // - estadoActual: string

  constructor() {
    // Inicializa el grafo (usa cualquier implementación)
    // Agrega todos los estados como vértices
    // Agrega todas las transiciones como aristas
    // El estado actual comienza en "patrullando"

    throw new Error("Constructor no implementado");
  }

  /**
   * Obtiene el estado actual
   */
  obtenerEstadoActual(): string {
    throw new Error("Método no implementado");
  }

  /**
   * Intenta hacer una transición al nuevo estado
   * @returns true si la transición es válida, false si no existe esa transición
   */
  transicionar(nuevoEstado: string): boolean {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene todos los estados posibles a los que se puede transicionar
   * desde el estado actual
   */
  obtenerTransicionesPosibles(): string[] {
    throw new Error("Método no implementado");
  }

  /**
   * Verifica si se puede llegar desde el estado actual hasta un estado objetivo
   */
  puedeLlegarA(estadoObjetivo: string): boolean {
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 4: Ejercicios Prácticos - Sistema de Habitaciones
// ============================================================

/**
 * Tipo que representa una habitación en un juego
 */
export type Habitacion = {
  id: string;
  nombre: string;
  descripcion: string;
};

/**
 * EJERCICIO 2: Sistema de Navegación entre Habitaciones
 *
 * Similar a juegos como Zork, Colossal Cave Adventure, o mazmorras en RPGs
 *
 * Ejemplo de mapa:
 *   Entrada -> Pasillo -> Sala del Tesoro
 *      |          |            |
 *      v          v            v
 *   Armería <- Biblioteca -> Salida
 */
export class SistemaHabitaciones {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - grafo: GrafoDirigido<Habitacion>
  // - habitacionActual: Habitacion | null

  constructor() {
    throw new Error("Constructor no implementado");
  }

  /**
   * Agrega una habitación al sistema
   */
  agregarHabitacion(habitacion: Habitacion): void {
    throw new Error("Método no implementado");
  }

  /**
   * Conecta dos habitaciones (crea un pasaje desde origen hasta destino)
   */
  conectarHabitaciones(origen: Habitacion, destino: Habitacion): void {
    throw new Error("Método no implementado");
  }

  /**
   * Establece la habitación actual del jugador
   */
  establecerHabitacionActual(habitacion: Habitacion): void {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene la habitación actual
   */
  obtenerHabitacionActual(): Habitacion | null {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las habitaciones adyacentes (a las que se puede ir directamente)
   */
  obtenerHabitacionesAdyacentes(): Habitacion[] {
    throw new Error("Método no implementado");
  }

  /**
   * Encuentra todas las rutas posibles desde la habitación actual hasta una habitación objetivo
   */
  encontrarRutas(habitacionObjetivo: Habitacion): Habitacion[][] {
    throw new Error("Método no implementado");
  }

  /**
   * Verifica si existe algún camino desde la habitación actual hasta una habitación objetivo
   */
  existeRuta(habitacionObjetivo: Habitacion): boolean {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene todas las habitaciones del sistema
   */
  obtenerTodasLasHabitaciones(): Habitacion[] {
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 5: Ejercicios Prácticos - Árbol de Habilidades
// ============================================================

/**
 * Tipo que representa una habilidad en un árbol de habilidades
 */
export type Habilidad = {
  id: string;
  nombre: string;
  descripcion: string;
  costo: number; // puntos de habilidad necesarios
};

/**
 * EJERCICIO 3: Árbol de Habilidades (Skill Tree)
 *
 * Similar a juegos como Path of Exile, World of Warcraft, Diablo, etc.
 *
 * Las habilidades tienen prerequisitos (otras habilidades que deben desbloquearse primero)
 *
 * Ejemplo:
 *   Ataque Básico -> Ataque Doble -> Ataque Triple
 *        |               |
 *        v               v
 *   Golpe Fuerte -> Golpe Crítico
 */
export class ArbolHabilidades {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - grafo: GrafoDirigido<Habilidad>
  // - habilidadesDesbloqueadas: Set<Habilidad>
  // - puntosDisponibles: number

  constructor(puntosIniciales: number) {
    throw new Error("Constructor no implementado");
  }

  /**
   * Agrega una habilidad al árbol
   */
  agregarHabilidad(habilidad: Habilidad): void {
    throw new Error("Método no implementado");
  }

  /**
   * Define que habilidadB requiere habilidadA como prerequisito
   * (crea una arista desde A hacia B)
   */
  agregarPrerequisito(prerequisito: Habilidad, habilidad: Habilidad): void {
    throw new Error("Método no implementado");
  }

  /**
   * Intenta desbloquear una habilidad
   * @returns true si se pudo desbloquear, false si no cumple requisitos o no hay puntos
   */
  desbloquearHabilidad(habilidad: Habilidad): boolean {
    // Debe verificar:
    // 1. Que no esté ya desbloqueada
    // 2. Que tenga puntos suficientes
    // 3. Que todos los prerequisitos estén desbloqueados

    throw new Error("Método no implementado");
  }

  /**
   * Verifica si una habilidad está desbloqueada
   */
  estaDesbloqueada(habilidad: Habilidad): boolean {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene los prerequisitos directos de una habilidad
   */
  obtenerPrerequisitos(habilidad: Habilidad): Habilidad[] {
    // Estos son los vértices que apuntan HACIA la habilidad
    // Necesitarás buscar en todas las aristas

    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las habilidades que se pueden desbloquear ahora
   * (cumplen todos los prerequisitos y hay puntos suficientes)
   */
  obtenerHabilidadesDesbloqueables(): Habilidad[] {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las habilidades que se desbloquean después de esta
   */
  obtenerHabilidadesSiguientes(habilidad: Habilidad): Habilidad[] {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene los puntos disponibles
   */
  obtenerPuntosDisponibles(): number {
    throw new Error("Método no implementado");
  }

  /**
   * Agrega puntos de habilidad
   */
  agregarPuntos(puntos: number): void {
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 6: Ejercicios Prácticos - Sistema de Diálogo
// ============================================================

/**
 * Tipo que representa un nodo de diálogo
 */
export type NodoDialogo = {
  id: string;
  texto: string;
  personaje: string;
};

/**
 * EJERCICIO 4: Sistema de Diálogo con Opciones
 *
 * Similar a juegos como Mass Effect, The Witcher, Disco Elysium
 *
 * Los diálogos forman un grafo donde cada nodo es una línea de diálogo
 * y las aristas representan las opciones de respuesta posibles
 *
 * Ejemplo:
 *   NPC: "¿Necesitas ayuda?" -> [Opción A, Opción B]
 *   Opción A: "Sí, por favor" -> NPC: "Aquí tienes"
 *   Opción B: "No, gracias" -> NPC: "Adiós"
 */
export class SistemaDialogo {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - grafo: GrafoDirigido<NodoDialogo>
  // - nodoActual: NodoDialogo | null
  // - nodoInicial: NodoDialogo | null

  constructor() {
    throw new Error("Constructor no implementado");
  }

  /**
   * Agrega un nodo de diálogo
   */
  agregarNodo(nodo: NodoDialogo): void {
    throw new Error("Método no implementado");
  }

  /**
   * Conecta dos nodos de diálogo (crea una opción de respuesta)
   */
  agregarOpcion(nodoOrigen: NodoDialogo, nodoDestino: NodoDialogo): void {
    throw new Error("Método no implementado");
  }

  /**
   * Establece el nodo inicial del diálogo
   */
  establecerNodoInicial(nodo: NodoDialogo): void {
    throw new Error("Método no implementado");
  }

  /**
   * Inicia el diálogo desde el nodo inicial
   */
  iniciarDialogo(): void {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene el nodo actual del diálogo
   */
  obtenerNodoActual(): NodoDialogo | null {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las opciones disponibles desde el nodo actual
   */
  obtenerOpciones(): NodoDialogo[] {
    throw new Error("Método no implementado");
  }

  /**
   * Selecciona una opción (avanza al nodo seleccionado)
   */
  seleccionarOpcion(nodo: NodoDialogo): boolean {
    // Verifica que sea una opción válida desde el nodo actual
    throw new Error("Método no implementado");
  }

  /**
   * Reinicia el diálogo al nodo inicial
   */
  reiniciar(): void {
    throw new Error("Método no implementado");
  }

  /**
   * Verifica si el diálogo puede continuar (hay opciones disponibles)
   */
  puedeContinar(): boolean {
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 7: Ejercicios Prácticos - Grafo de Dependencias
// ============================================================

/**
 * Tipo que representa una misión/quest
 */
export type Mision = {
  id: string;
  nombre: string;
  descripcion: string;
  recompensa: number;
};

/**
 * EJERCICIO 5: Sistema de Misiones con Dependencias
 *
 * Similar a juegos como Skyrim, The Witcher, World of Warcraft
 *
 * Las misiones tienen dependencias (otras misiones que deben completarse primero)
 *
 * Ejemplo:
 *   "Hablar con el alcalde" -> "Investigar el bosque" -> "Derrotar al jefe"
 *                          |
 *                          v
 *                     "Conseguir equipo"
 */
export class SistemaMisiones {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - grafo: GrafoDirigido<Mision>
  // - misionesCompletadas: Set<Mision>

  constructor() {
    throw new Error("Constructor no implementado");
  }

  /**
   * Agrega una misión al sistema
   */
  agregarMision(mision: Mision): void {
    throw new Error("Método no implementado");
  }

  /**
   * Define que misionB requiere misionA como prerequisito
   */
  agregarDependencia(prerequisito: Mision, mision: Mision): void {
    throw new Error("Método no implementado");
  }

  /**
   * Marca una misión como completada
   * @returns true si se pudo completar, false si no cumple prerequisitos
   */
  completarMision(mision: Mision): boolean {
    // Debe verificar que todos los prerequisitos estén completados
    throw new Error("Método no implementado");
  }

  /**
   * Verifica si una misión está completada
   */
  estaCompletada(mision: Mision): boolean {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las misiones disponibles (prerequisitos cumplidos, no completadas)
   */
  obtenerMisionesDisponibles(): Mision[] {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene los prerequisitos de una misión
   */
  obtenerPrerequisitos(mision: Mision): Mision[] {
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene las misiones que se desbloquean al completar esta misión
   */
  obtenerMisionesDesbloqueadas(mision: Mision): Mision[] {
    throw new Error("Método no implementado");
  }

  /**
   * Calcula la recompensa total de todas las misiones completadas
   */
  calcularRecompensaTotal(): number {
    throw new Error("Método no implementado");
  }

  /**
   * Verifica si todas las misiones han sido completadas
   */
  todasLasMisionesCompletadas(): boolean {
    throw new Error("Método no implementado");
  }
  // ====================================
}
