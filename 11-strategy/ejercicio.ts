/**
 * EJERCICIO: Patrón Strategy con Clases
 *
 * En este ejercicio aprenderás el patrón Strategy, fundamental en frameworks
 * de videojuegos como Phaser, Unity, Godot, etc.
 *
 * El patrón Strategy permite cambiar el comportamiento de un objeto en tiempo
 * de ejecución mediante la inyección de diferentes estrategias (clases que
 * implementan la misma interfaz pero con comportamientos distintos).
 *
 * En frameworks de juegos:
 * - Phaser usa Strategy para scenes (BootScene, GameScene, MenuScene)
 * - Unity usa Strategy para Components (MonoBehaviour subclasses)
 * - El motor llama a tus estrategias (inversion of control)
 *
 * INSTRUCCIONES:
 * 1. Implementa las interfaces y clases base
 * 2. Crea diferentes estrategias para cada comportamiento
 * 3. El motor de juego ejecutará tus estrategias
 */

// ============================================================
// PARTE 1: Sistema de IA - Estrategias de Movimiento
// ============================================================

/**
 * Interfaz que define cómo se debe mover un enemigo
 * Todas las estrategias de movimiento deben implementar esta interfaz
 */
export interface MovementStrategy {
  /**
   * Calcula la nueva posición basándose en la posición actual
   * @param currentX posición X actual
   * @param currentY posición Y actual
   * @param deltaTime tiempo transcurrido desde el último frame
   * @returns nueva posición {x, y}
   */
  move(
    currentX: number,
    currentY: number,
    deltaTime: number
  ): { x: number; y: number };

  /**
   * Nombre descriptivo de la estrategia
   */
  getName(): string;
}

/**
 * Estrategia: el enemigo patrulla horizontalmente
 * Se mueve de izquierda a derecha entre dos límites
 */
export class HorizontalPatrolStrategy implements MovementStrategy {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades necesarias:
  // - speed: velocidad de movimiento
  // - minX: límite izquierdo
  // - maxX: límite derecho
  // - direction: dirección actual (1 = derecha, -1 = izquierda)

  constructor(speed: number, minX: number, maxX: number) {
    // Inicializa las propiedades
    // direction empieza en 1 (derecha)

    throw new Error("Constructor no implementado");
  }

  move(
    currentX: number,
    currentY: number,
    deltaTime: number
  ): { x: number; y: number } {
    // Calcula la nueva posición X sumando speed * direction * deltaTime
    // Si llega al límite derecho (maxX), cambia direction a -1
    // Si llega al límite izquierdo (minX), cambia direction a 1
    // Y no cambia (movimiento solo horizontal)

    throw new Error("Método no implementado");
  }

  getName(): string {
    return "Horizontal Patrol";
  }
  // ====================================
}

/**
 * Estrategia: el enemigo persigue al jugador
 */
export class ChasePlayerStrategy implements MovementStrategy {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades necesarias:
  // - speed: velocidad de movimiento
  // - playerX: posición X del jugador (se actualiza externamente)
  // - playerY: posición Y del jugador (se actualiza externamente)

  constructor(speed: number) {
    // Inicializa speed
    // playerX y playerY empiezan en 0

    throw new Error("Constructor no implementado");
  }

  /**
   * Actualiza la posición del jugador (llamado desde fuera)
   */
  updatePlayerPosition(x: number, y: number): void {
    // Actualiza playerX y playerY

    throw new Error("Método no implementado");
  }

  move(
    currentX: number,
    currentY: number,
    deltaTime: number
  ): { x: number; y: number } {
    // Calcula la dirección hacia el jugador
    // dx = playerX - currentX
    // dy = playerY - currentY
    // Normaliza el vector de dirección:
    // distance = sqrt(dx*dx + dy*dy)
    // Si distance > 0:
    //   dirX = dx / distance
    //   dirY = dy / distance
    //   newX = currentX + dirX * speed * deltaTime
    //   newY = currentY + dirY * speed * deltaTime
    // Si distance === 0, no se mueve

    throw new Error("Método no implementado");
  }

  getName(): string {
    return "Chase Player";
  }
  // ====================================
}

/**
 * Estrategia: movimiento circular
 */
export class CircularMovementStrategy implements MovementStrategy {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades necesarias:
  // - centerX: centro del círculo
  // - centerY: centro del círculo
  // - radius: radio del círculo
  // - angularSpeed: velocidad angular (radianes por segundo)
  // - currentAngle: ángulo actual en radianes

  constructor(
    centerX: number,
    centerY: number,
    radius: number,
    angularSpeed: number
  ) {
    // Inicializa todas las propiedades
    // currentAngle empieza en 0

    throw new Error("Constructor no implementado");
  }

  move(
    currentX: number,
    currentY: number,
    deltaTime: number
  ): { x: number; y: number } {
    // Incrementa currentAngle por angularSpeed * deltaTime
    // Calcula nueva posición:
    // x = centerX + cos(currentAngle) * radius
    // y = centerY + sin(currentAngle) * radius
    // Usa Math.cos() y Math.sin()

    throw new Error("Método no implementado");
  }

  getName(): string {
    return "Circular Movement";
  }
  // ====================================
}

/**
 * Estrategia: no se mueve (estático)
 */
export class StaticStrategy implements MovementStrategy {
  move(
    currentX: number,
    currentY: number,
    deltaTime: number
  ): { x: number; y: number } {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna la misma posición sin cambios

    throw new Error("Método no implementado");
    // ====================================
  }

  getName(): string {
    return "Static";
  }
}

// ============================================================
// PARTE 2: Enemigo con Estrategia Inyectable
// ============================================================

/**
 * Clase Enemy que usa Strategy pattern
 * El comportamiento de movimiento se inyecta desde fuera
 */
export class Enemy {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - x: posición X
  // - y: posición Y
  // - movementStrategy: la estrategia de movimiento actual

  constructor(x: number, y: number, movementStrategy: MovementStrategy) {
    // Inicializa todas las propiedades

    throw new Error("Constructor no implementado");
  }

  /**
   * Actualiza la posición del enemigo usando su estrategia
   */
  update(deltaTime: number): void {
    // Usa movementStrategy.move() para calcular la nueva posición
    // Actualiza x e y con la nueva posición

    throw new Error("Método no implementado");
  }

  /**
   * Cambia la estrategia de movimiento en tiempo de ejecución
   */
  setMovementStrategy(strategy: MovementStrategy): void {
    // Cambia movementStrategy a la nueva estrategia

    throw new Error("Método no implementado");
  }

  getPosition(): { x: number; y: number } {
    // Retorna la posición actual

    throw new Error("Método no implementado");
  }

  getStrategyName(): string {
    // Retorna el nombre de la estrategia actual

    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 3: Scene System (como Phaser)
// ============================================================

/**
 * Interfaz Scene - similar a Phaser.Scene
 * El motor de juego llamará estos métodos
 */
export interface Scene {
  /**
   * Clave única que identifica esta escena
   */
  key: string;

  /**
   * Llamado una vez cuando la escena se carga
   */
  preload(): void;

  /**
   * Llamado una vez después de preload
   */
  create(): void;

  /**
   * Llamado cada frame
   */
  update(deltaTime: number): void;
}

/**
 * Scene: Pantalla de carga (Boot)
 */
export class BootScene implements Scene {
  key: string = "BootScene";
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedad:
  // - loadProgress: número entre 0 y 100

  constructor() {
    // Inicializa loadProgress en 0

    throw new Error("Constructor no implementado");
  }

  preload(): void {
    // No hace nada (o podrías simular carga de assets)
  }

  create(): void {
    // Establece loadProgress a 100
  }

  update(deltaTime: number): void {
    // Si loadProgress < 100, incrementa en 10
    // (simula progreso de carga)
  }

  getProgress(): number {
    // Retorna loadProgress
    throw new Error("Método no implementado");
  }

  isComplete(): boolean {
    // Retorna true si loadProgress >= 100
    throw new Error("Método no implementado");
  }
  // ====================================
}

/**
 * Scene: Menú principal
 */
export class MenuScene implements Scene {
  key: string = "MenuScene";
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - selectedOption: número (0 = "Start", 1 = "Options", 2 = "Quit")
  // - options: array de strings con las opciones

  constructor() {
    // Inicializa selectedOption en 0
    // Inicializa options con ["Start", "Options", "Quit"]

    throw new Error("Constructor no implementado");
  }

  preload(): void {
    // No hace nada
  }

  create(): void {
    // No hace nada
  }

  update(deltaTime: number): void {
    // No hace nada (la navegación del menú se haría con input)
  }

  selectNext(): void {
    // Incrementa selectedOption (con wrap-around al final)
    // Si está en la última opción, vuelve a 0

    throw new Error("Método no implementado");
  }

  selectPrevious(): void {
    // Decrementa selectedOption (con wrap-around al inicio)
    // Si está en 0, va a la última opción

    throw new Error("Método no implementado");
  }

  getCurrentOption(): string {
    // Retorna la opción actualmente seleccionada
    throw new Error("Método no implementado");
  }

  getSelectedIndex(): number {
    // Retorna selectedOption
    throw new Error("Método no implementado");
  }
  // ====================================
}

/**
 * Scene: Juego principal
 */
export class GameScene implements Scene {
  key: string = "GameScene";
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - enemies: array de Enemy
  // - score: puntuación actual
  // - gameTime: tiempo de juego en segundos

  constructor() {
    // Inicializa enemies como array vacío
    // Inicializa score en 0
    // Inicializa gameTime en 0

    throw new Error("Constructor no implementado");
  }

  preload(): void {
    // No hace nada (aquí cargarías sprites, sonidos, etc.)
  }

  create(): void {
    // Crea algunos enemigos de ejemplo con diferentes estrategias:
    // - Enemy en (100, 100) con HorizontalPatrolStrategy(speed=50, min=50, max=150)
    // - Enemy en (200, 200) con CircularMovementStrategy(center=200,200, radius=50, speed=2)
    // - Enemy en (300, 300) con StaticStrategy()

    throw new Error("Método no implementado");
  }

  update(deltaTime: number): void {
    // Incrementa gameTime por deltaTime
    // Actualiza todos los enemigos llamando enemy.update(deltaTime)

    throw new Error("Método no implementado");
  }

  addEnemy(enemy: Enemy): void {
    // Agrega un enemigo al array

    throw new Error("Método no implementado");
  }

  getEnemyCount(): number {
    // Retorna el número de enemigos
    throw new Error("Método no implementado");
  }

  getScore(): number {
    // Retorna score
    throw new Error("Método no implementado");
  }

  incrementScore(amount: number): void {
    // Incrementa score
    throw new Error("Método no implementado");
  }

  getGameTime(): number {
    // Retorna gameTime
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 4: Scene Manager (Motor de Juego Simplificado)
// ============================================================

/**
 * Gestor de escenas - similar al Scene Manager de Phaser
 * Este es el "motor" que ejecuta las escenas (inversion of control)
 */
export class SceneManager {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - scenes: Map<string, Scene> (clave -> escena)
  // - currentScene: Scene | null (escena activa actualmente)

  constructor() {
    // Inicializa scenes como Map vacío
    // Inicializa currentScene como null

    throw new Error("Constructor no implementado");
  }

  /**
   * Registra una escena (similar a game.scene.add en Phaser)
   */
  add(scene: Scene): void {
    // Agrega la escena al Map usando scene.key como clave

    throw new Error("Método no implementado");
  }

  /**
   * Inicia una escena (similar a scene.start en Phaser)
   */
  start(key: string): boolean {
    // Busca la escena en el Map
    // Si existe:
    //   - Establécela como currentScene
    //   - Llama a preload()
    //   - Llama a create()
    //   - Retorna true
    // Si no existe, retorna false

    throw new Error("Método no implementado");
  }

  /**
   * Actualiza la escena actual (llamado cada frame por el game loop)
   */
  update(deltaTime: number): void {
    // Si hay currentScene, llama a su update(deltaTime)

    throw new Error("Método no implementado");
  }

  /**
   * Obtiene la escena actual
   */
  getCurrentScene(): Scene | null {
    // Retorna currentScene
    throw new Error("Método no implementado");
  }

  /**
   * Obtiene una escena por su clave
   */
  getScene(key: string): Scene | null {
    // Busca y retorna la escena del Map
    // Retorna null si no existe
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 5: Sistema de Ataque - Estrategias de Damage
// ============================================================

/**
 * Interfaz para estrategias de ataque
 */
export interface AttackStrategy {
  /**
   * Calcula el daño basándose en el poder base
   */
  calculateDamage(basePower: number): number;

  /**
   * Nombre de la estrategia
   */
  getName(): string;
}

/**
 * Ataque normal - daño 1x
 */
export class NormalAttackStrategy implements AttackStrategy {
  calculateDamage(basePower: number): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna basePower sin modificar

    throw new Error("Método no implementado");
    // ====================================
  }

  getName(): string {
    return "Normal Attack";
  }
}

/**
 * Ataque crítico - daño 2x
 */
export class CriticalAttackStrategy implements AttackStrategy {
  calculateDamage(basePower: number): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna basePower * 2

    throw new Error("Método no implementado");
    // ====================================
  }

  getName(): string {
    return "Critical Attack";
  }
}

/**
 * Ataque mágico - daño 1.5x
 */
export class MagicAttackStrategy implements AttackStrategy {
  calculateDamage(basePower: number): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna basePower * 1.5

    throw new Error("Método no implementado");
    // ====================================
  }

  getName(): string {
    return "Magic Attack";
  }
}

/**
 * Ataque débil - daño 0.5x
 */
export class WeakAttackStrategy implements AttackStrategy {
  calculateDamage(basePower: number): number {
    // ========== TU CÓDIGO AQUÍ ==========
    // Retorna basePower * 0.5

    throw new Error("Método no implementado");
    // ====================================
  }

  getName(): string {
    return "Weak Attack";
  }
}

/**
 * Personaje que puede cambiar su estrategia de ataque
 */
export class Player {
  // ========== TU CÓDIGO AQUÍ ==========
  // Propiedades:
  // - name: string
  // - basePower: number (poder base de ataque)
  // - attackStrategy: AttackStrategy

  constructor(name: string, basePower: number) {
    // Inicializa name y basePower
    // attackStrategy empieza como NormalAttackStrategy

    throw new Error("Constructor no implementado");
  }

  /**
   * Realiza un ataque usando la estrategia actual
   */
  attack(): number {
    // Usa attackStrategy.calculateDamage(basePower)
    // Retorna el daño calculado

    throw new Error("Método no implementado");
  }

  /**
   * Cambia la estrategia de ataque
   */
  setAttackStrategy(strategy: AttackStrategy): void {
    // Cambia attackStrategy

    throw new Error("Método no implementado");
  }

  getAttackStrategyName(): string {
    // Retorna el nombre de la estrategia actual
    throw new Error("Método no implementado");
  }

  getName(): string {
    // Retorna name
    throw new Error("Método no implementado");
  }

  getBasePower(): number {
    // Retorna basePower
    throw new Error("Método no implementado");
  }
  // ====================================
}

// ============================================================
// PARTE 6: Funciones de utilidad
// ============================================================

/**
 * Simula N frames del juego
 */
export function simulateGame(
  sceneManager: SceneManager,
  frames: number,
  deltaTime: number = 0.016
): void {
  // ========== TU CÓDIGO AQUÍ ==========
  // Llama a sceneManager.update(deltaTime) N veces (frames)

  throw new Error("Función no implementada");
  // ====================================
}

/**
 * Crea un enemigo que persigue a un objetivo
 */
export function createChasingEnemy(
  startX: number,
  startY: number,
  targetX: number,
  targetY: number,
  speed: number
): Enemy {
  // ========== TU CÓDIGO AQUÍ ==========
  // Crea un ChasePlayerStrategy con speed
  // Actualiza la posición del objetivo usando updatePlayerPosition
  // Crea un Enemy con la estrategia
  // Retorna el Enemy

  throw new Error("Función no implementada");
  // ====================================
}

/**
 * Obtiene las posiciones de todos los enemigos en una escena de juego
 */
export function getEnemyPositions(gameScene: GameScene): Array<{x: number, y: number}> {
  // ========== TU CÓDIGO AQUÍ ==========
  // Nota: necesitarás acceder a gameScene.enemies (hazlo público o crea getter)
  // Retorna array con las posiciones de todos los enemigos

  throw new Error("Función no implementada");
  // ====================================
}
