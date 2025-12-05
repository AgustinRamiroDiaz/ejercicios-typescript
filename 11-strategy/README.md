# Patrón Strategy - Preparación para Frameworks de Videojuegos

## ¿Qué es el Patrón Strategy?

El patrón Strategy es un patrón de diseño que permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables. Este patrón permite que el algoritmo varíe independientemente de los clientes que lo utilicen.

### Componentes del Patrón Strategy

1. **Strategy (Interfaz)**: Define una interfaz común para todos los algoritmos
2. **Concrete Strategies (Implementaciones)**: Implementan el algoritmo usando la interfaz Strategy
3. **Context (Contexto)**: Mantiene una referencia a un objeto Strategy y puede cambiarla en tiempo de ejecución

## Strategy en Frameworks de Videojuegos

Los frameworks de videojuegos modernos utilizan extensivamente el patrón Strategy combinado con **Inversion of Control (IoC)**.

### Phaser.js

En Phaser, el sistema de escenas es un ejemplo perfecto del patrón Strategy:

```typescript
// La "estrategia" - defines el comportamiento
export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' }); // Registra tu estrategia
  }

  preload() {
    // Carga de assets
  }

  create() {
    // Inicialización de la escena
  }

  update(deltaTime: number) {
    // Lógica del juego cada frame
  }
}

// El "contexto" - Phaser's Scene Manager
// Phaser LLAMA a tus métodos (inversión de control)
```

**El motor controla el game loop, tú solo defines el comportamiento.**

### Unity (C#)

Unity usa el mismo patrón con MonoBehaviours:

```csharp
public class PlayerController : MonoBehaviour {
    void Start() { } // Unity llama esto
    void Update() { } // Unity llama esto cada frame
    void OnCollisionEnter(Collision col) { } // Unity llama esto
}
```

### Godot

Godot usa Nodes con el mismo patrón:

```gdscript
extends Node2D

func _ready():
    pass # Godot llama esto

func _process(delta):
    pass # Godot llama esto cada frame
```

## Beneficios del Patrón Strategy

1. **Flexibilidad**: Puedes cambiar el comportamiento en tiempo de ejecución
2. **Separación de Responsabilidades**: Cada estrategia encapsula su propio algoritmo
3. **Open/Closed Principle**: Puedes agregar nuevas estrategias sin modificar el código existente
4. **Testabilidad**: Cada estrategia se puede testear independientemente

## En Este Ejercicio

Practicarás el patrón Strategy en varios contextos:

### 1. Sistema de IA - Movimiento de Enemigos
Diferentes estrategias de movimiento que se pueden intercambiar:
- `HorizontalPatrolStrategy` - Patrulla horizontal
- `ChasePlayerStrategy` - Persigue al jugador
- `CircularMovementStrategy` - Movimiento circular
- `StaticStrategy` - No se mueve

### 2. Sistema de Escenas (como Phaser)
Diferentes escenas que implementan la misma interfaz:
- `BootScene` - Pantalla de carga
- `MenuScene` - Menú principal
- `GameScene` - Juego principal

El `SceneManager` ejecuta cualquier escena sin saber los detalles de implementación.

### 3. Sistema de Ataque
Diferentes estrategias de daño:
- `NormalAttackStrategy` - Daño normal
- `CriticalAttackStrategy` - Daño crítico (2x)
- `MagicAttackStrategy` - Daño mágico (1.5x)
- `WeakAttackStrategy` - Daño débil (0.5x)

## Inversión de Control (IoC)

Una característica importante de los frameworks de juegos es que **el framework llama a tu código**, no al revés:

```typescript
// ❌ NO haces esto:
while (gameRunning) {
  scene.update(deltaTime);
}

// ✅ El framework hace esto:
class SceneManager {
  update(deltaTime: number) {
    if (this.currentScene) {
      this.currentScene.update(deltaTime); // Llama a TU implementación
    }
  }
}
```

## Ejemplo Completo

```typescript
// 1. Define la estrategia (interfaz)
interface MovementStrategy {
  move(x: number, y: number, deltaTime: number): {x: number, y: number};
}

// 2. Implementa estrategias concretas
class PatrolStrategy implements MovementStrategy {
  move(x: number, y: number, deltaTime: number) {
    return { x: x + 100 * deltaTime, y }; // Mueve a la derecha
  }
}

class ChaseStrategy implements MovementStrategy {
  constructor(private targetX: number, private targetY: number) {}

  move(x: number, y: number, deltaTime: number) {
    const dx = this.targetX - x;
    const dy = this.targetY - y;
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance > 0) {
      return {
        x: x + (dx/distance) * 100 * deltaTime,
        y: y + (dy/distance) * 100 * deltaTime
      };
    }
    return { x, y };
  }
}

// 3. Usa estrategias en el contexto
class Enemy {
  constructor(
    private x: number,
    private y: number,
    private strategy: MovementStrategy // ¡Inyección de estrategia!
  ) {}

  update(deltaTime: number) {
    const newPos = this.strategy.move(this.x, this.y, deltaTime);
    this.x = newPos.x;
    this.y = newPos.y;
  }

  // Cambiar estrategia en tiempo de ejecución
  setStrategy(strategy: MovementStrategy) {
    this.strategy = strategy;
  }
}

// 4. Usa el patrón
const enemy1 = new Enemy(0, 0, new PatrolStrategy());
const enemy2 = new Enemy(100, 100, new ChaseStrategy(200, 200));

// Cambiar comportamiento en runtime
enemy1.setStrategy(new ChaseStrategy(300, 300));
```

## Tips para el Ejercicio

1. **Lee las interfaces primero**: Entender qué métodos debes implementar
2. **Implementa las estrategias simples primero**: Empieza con `StaticStrategy`
3. **Prueba cada estrategia individualmente**: Antes de integrarlas
4. **Piensa en la reutilización**: Las estrategias son objetos independientes
5. **Recuerda la geometría**: Para `CircularMovementStrategy` y `ChasePlayerStrategy` necesitarás trigonometría básica

## Conexión con Frameworks Reales

Este ejercicio te prepara para trabajar con:
- **Phaser**: Scene system, Game objects con comportamientos
- **Unity**: Component system, MonoBehaviours
- **Godot**: Node system con scripts
- **Babylon.js**: Scene behaviors
- **Three.js**: Object behaviors

¡Todos usan variaciones del patrón Strategy!
