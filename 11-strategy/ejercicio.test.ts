import { describe, it } from "node:test";
import assert from "node:assert";
import {
  HorizontalPatrolStrategy,
  ChasePlayerStrategy,
  CircularMovementStrategy,
  StaticStrategy,
  Enemy,
  BootScene,
  MenuScene,
  GameScene,
  SceneManager,
  NormalAttackStrategy,
  CriticalAttackStrategy,
  MagicAttackStrategy,
  WeakAttackStrategy,
  Player,
  simulateGame,
  createChasingEnemy,
  getEnemyPositions
} from "./ejercicio.js";

describe("Patrón Strategy - Ejercicios", () => {
  // ============================================================
  // PARTE 1: Estrategias de Movimiento
  // ============================================================

  describe("HorizontalPatrolStrategy", () => {
    it("debe moverse hacia la derecha inicialmente", () => {
      const strategy = new HorizontalPatrolStrategy(100, 0, 200);
      const newPos = strategy.move(50, 50, 0.1);

      assert.strictEqual(newPos.y, 50, "Y no debe cambiar");
      assert.ok(newPos.x > 50, "X debe incrementar");
      assert.ok(Math.abs(newPos.x - 60) < 0.1, "X debe ser ~60 (50 + 100*0.1)");
    });

    it("debe cambiar de dirección en el límite derecho", () => {
      const strategy = new HorizontalPatrolStrategy(100, 0, 100);

      // Muévelo al límite derecho
      strategy.move(99, 50, 0.2); // Llegará a >100

      // Siguiente movimiento debe ser hacia la izquierda
      const pos1 = strategy.move(100, 50, 0.1);
      const pos2 = strategy.move(pos1.x, 50, 0.1);

      assert.ok(pos2.x < pos1.x, "Debe moverse hacia la izquierda");
    });

    it("debe cambiar de dirección en el límite izquierdo", () => {
      const strategy = new HorizontalPatrolStrategy(100, 0, 100);

      // Forzar dirección izquierda llegando al límite
      strategy.move(99, 50, 0.2);
      strategy.move(100, 50, 0.2);
      strategy.move(80, 50, 0.2);
      strategy.move(60, 50, 0.2);
      strategy.move(40, 50, 0.2);
      strategy.move(20, 50, 0.2);
      strategy.move(1, 50, 0.2); // Llegará a <0

      const pos1 = strategy.move(0, 50, 0.1);
      const pos2 = strategy.move(pos1.x, 50, 0.1);

      assert.ok(pos2.x > pos1.x, "Debe moverse hacia la derecha");
    });

    it("debe retornar el nombre correcto", () => {
      const strategy = new HorizontalPatrolStrategy(100, 0, 200);
      assert.strictEqual(strategy.getName(), "Horizontal Patrol");
    });
  });

  describe("ChasePlayerStrategy", () => {
    it("debe moverse hacia el jugador", () => {
      const strategy = new ChasePlayerStrategy(100);
      strategy.updatePlayerPosition(100, 100);

      const newPos = strategy.move(0, 0, 0.1);

      assert.ok(newPos.x > 0, "X debe incrementar hacia el jugador");
      assert.ok(newPos.y > 0, "Y debe incrementar hacia el jugador");
    });

    it("debe moverse proporcionalmente en ambas direcciones", () => {
      const strategy = new ChasePlayerStrategy(100);
      strategy.updatePlayerPosition(100, 0); // Jugador a la derecha

      const newPos = strategy.move(0, 0, 0.1);

      assert.ok(newPos.x > 0, "X debe moverse");
      assert.strictEqual(newPos.y, 0, "Y no debe cambiar");
    });

    it("no debe moverse si ya está en la posición del jugador", () => {
      const strategy = new ChasePlayerStrategy(100);
      strategy.updatePlayerPosition(50, 50);

      const newPos = strategy.move(50, 50, 0.1);

      assert.strictEqual(newPos.x, 50, "X no debe cambiar");
      assert.strictEqual(newPos.y, 50, "Y no debe cambiar");
    });

    it("debe actualizar la posición del jugador", () => {
      const strategy = new ChasePlayerStrategy(100);
      strategy.updatePlayerPosition(100, 100);

      const pos1 = strategy.move(0, 0, 0.1);

      strategy.updatePlayerPosition(0, 0);
      const pos2 = strategy.move(pos1.x, pos1.y, 0.1);

      // Debe moverse en dirección opuesta
      assert.ok(pos2.x < pos1.x || pos2.y < pos1.y, "Debe cambiar dirección");
    });

    it("debe retornar el nombre correcto", () => {
      const strategy = new ChasePlayerStrategy(100);
      assert.strictEqual(strategy.getName(), "Chase Player");
    });
  });

  describe("CircularMovementStrategy", () => {
    it("debe moverse en círculo", () => {
      const strategy = new CircularMovementStrategy(0, 0, 100, Math.PI / 2);

      const pos1 = strategy.move(100, 0, 1); // 90 grados
      const pos2 = strategy.move(pos1.x, pos1.y, 1); // 180 grados

      assert.ok(Math.abs(pos1.y - 100) < 1, "Después de 90° debe estar arriba");
      assert.ok(Math.abs(pos1.x) < 1, "X debe estar cerca de 0");

      assert.ok(Math.abs(pos2.x + 100) < 1, "Después de 180° debe estar a la izquierda");
      assert.ok(Math.abs(pos2.y) < 1, "Y debe estar cerca de 0");
    });

    it("debe mantener el radio constante", () => {
      const strategy = new CircularMovementStrategy(0, 0, 50, 1);

      const pos1 = strategy.move(50, 0, 1);
      const distance = Math.sqrt(pos1.x * pos1.x + pos1.y * pos1.y);

      assert.ok(Math.abs(distance - 50) < 0.1, "Radio debe mantenerse en 50");
    });

    it("debe retornar el nombre correcto", () => {
      const strategy = new CircularMovementStrategy(0, 0, 100, 1);
      assert.strictEqual(strategy.getName(), "Circular Movement");
    });
  });

  describe("StaticStrategy", () => {
    it("no debe cambiar la posición", () => {
      const strategy = new StaticStrategy();
      const newPos = strategy.move(100, 200, 1.0);

      assert.strictEqual(newPos.x, 100);
      assert.strictEqual(newPos.y, 200);
    });

    it("debe retornar el nombre correcto", () => {
      const strategy = new StaticStrategy();
      assert.strictEqual(strategy.getName(), "Static");
    });
  });

  // ============================================================
  // PARTE 2: Enemy con Strategy
  // ============================================================

  describe("Enemy", () => {
    it("debe inicializarse correctamente", () => {
      const strategy = new StaticStrategy();
      const enemy = new Enemy(100, 200, strategy);

      const pos = enemy.getPosition();
      assert.strictEqual(pos.x, 100);
      assert.strictEqual(pos.y, 200);
    });

    it("debe usar la estrategia para moverse", () => {
      const strategy = new HorizontalPatrolStrategy(100, 0, 200);
      const enemy = new Enemy(50, 50, strategy);

      enemy.update(0.1);
      const pos = enemy.getPosition();

      assert.ok(pos.x > 50, "X debe incrementar");
      assert.strictEqual(pos.y, 50, "Y no debe cambiar");
    });

    it("debe permitir cambiar la estrategia en tiempo de ejecución", () => {
      const strategy1 = new StaticStrategy();
      const enemy = new Enemy(50, 50, strategy1);

      enemy.update(0.1);
      let pos = enemy.getPosition();
      assert.strictEqual(pos.x, 50, "No debe moverse con Static");

      const strategy2 = new HorizontalPatrolStrategy(100, 0, 200);
      enemy.setMovementStrategy(strategy2);

      enemy.update(0.1);
      pos = enemy.getPosition();
      assert.ok(pos.x > 50, "Debe moverse con HorizontalPatrol");
    });

    it("debe retornar el nombre de la estrategia", () => {
      const strategy = new CircularMovementStrategy(0, 0, 100, 1);
      const enemy = new Enemy(100, 0, strategy);

      assert.strictEqual(enemy.getStrategyName(), "Circular Movement");
    });
  });

  // ============================================================
  // PARTE 3: Scene System
  // ============================================================

  describe("BootScene", () => {
    it("debe inicializar con progreso 0", () => {
      const scene = new BootScene();
      assert.strictEqual(scene.getProgress(), 0);
      assert.strictEqual(scene.isComplete(), false);
    });

    it("debe completarse con create()", () => {
      const scene = new BootScene();
      scene.preload();
      scene.create();

      assert.strictEqual(scene.getProgress(), 100);
      assert.strictEqual(scene.isComplete(), true);
    });

    it("debe incrementar progreso con update()", () => {
      const scene = new BootScene();
      scene.preload();

      scene.update(0.1);
      assert.strictEqual(scene.getProgress(), 10);

      scene.update(0.1);
      assert.strictEqual(scene.getProgress(), 20);
    });

    it("debe tener la clave correcta", () => {
      const scene = new BootScene();
      assert.strictEqual(scene.key, "BootScene");
    });
  });

  describe("MenuScene", () => {
    it("debe inicializar con opción 0 seleccionada", () => {
      const scene = new MenuScene();
      assert.strictEqual(scene.getSelectedIndex(), 0);
      assert.strictEqual(scene.getCurrentOption(), "Start");
    });

    it("debe navegar hacia adelante", () => {
      const scene = new MenuScene();

      scene.selectNext();
      assert.strictEqual(scene.getCurrentOption(), "Options");

      scene.selectNext();
      assert.strictEqual(scene.getCurrentOption(), "Quit");
    });

    it("debe hacer wrap-around al final", () => {
      const scene = new MenuScene();

      scene.selectNext(); // Options
      scene.selectNext(); // Quit
      scene.selectNext(); // Debe volver a Start

      assert.strictEqual(scene.getCurrentOption(), "Start");
    });

    it("debe navegar hacia atrás", () => {
      const scene = new MenuScene();

      scene.selectNext();
      scene.selectNext();
      scene.selectPrevious();

      assert.strictEqual(scene.getCurrentOption(), "Options");
    });

    it("debe hacer wrap-around al inicio", () => {
      const scene = new MenuScene();

      scene.selectPrevious(); // Debe ir a Quit

      assert.strictEqual(scene.getCurrentOption(), "Quit");
    });

    it("debe tener la clave correcta", () => {
      const scene = new MenuScene();
      assert.strictEqual(scene.key, "MenuScene");
    });
  });

  describe("GameScene", () => {
    it("debe inicializar vacío", () => {
      const scene = new GameScene();

      assert.strictEqual(scene.getEnemyCount(), 0);
      assert.strictEqual(scene.getScore(), 0);
      assert.strictEqual(scene.getGameTime(), 0);
    });

    it("debe crear enemigos en create()", () => {
      const scene = new GameScene();
      scene.preload();
      scene.create();

      assert.strictEqual(scene.getEnemyCount(), 3, "Debe crear 3 enemigos");
    });

    it("debe permitir agregar enemigos", () => {
      const scene = new GameScene();
      const enemy = new Enemy(0, 0, new StaticStrategy());

      scene.addEnemy(enemy);
      assert.strictEqual(scene.getEnemyCount(), 1);
    });

    it("debe incrementar gameTime con update()", () => {
      const scene = new GameScene();
      scene.preload();
      scene.create();

      scene.update(0.016);
      assert.ok(scene.getGameTime() > 0, "gameTime debe incrementar");

      const time1 = scene.getGameTime();
      scene.update(0.016);
      assert.ok(scene.getGameTime() > time1, "gameTime debe seguir incrementando");
    });

    it("debe actualizar todos los enemigos", () => {
      const scene = new GameScene();
      const enemy = new Enemy(50, 50, new HorizontalPatrolStrategy(100, 0, 200));
      scene.addEnemy(enemy);

      scene.update(0.1);

      const pos = enemy.getPosition();
      assert.ok(pos.x > 50, "Enemigo debe haberse movido");
    });

    it("debe incrementar score", () => {
      const scene = new GameScene();

      scene.incrementScore(100);
      assert.strictEqual(scene.getScore(), 100);

      scene.incrementScore(50);
      assert.strictEqual(scene.getScore(), 150);
    });

    it("debe tener la clave correcta", () => {
      const scene = new GameScene();
      assert.strictEqual(scene.key, "GameScene");
    });
  });

  // ============================================================
  // PARTE 4: Scene Manager
  // ============================================================

  describe("SceneManager", () => {
    it("debe inicializar sin escena activa", () => {
      const manager = new SceneManager();
      assert.strictEqual(manager.getCurrentScene(), null);
    });

    it("debe permitir agregar escenas", () => {
      const manager = new SceneManager();
      const scene = new BootScene();

      manager.add(scene);

      assert.strictEqual(manager.getScene("BootScene"), scene);
    });

    it("debe iniciar una escena", () => {
      const manager = new SceneManager();
      const scene = new BootScene();
      manager.add(scene);

      const success = manager.start("BootScene");

      assert.strictEqual(success, true);
      assert.strictEqual(manager.getCurrentScene(), scene);
    });

    it("debe llamar preload y create al iniciar", () => {
      const manager = new SceneManager();
      const scene = new BootScene();
      manager.add(scene);

      manager.start("BootScene");

      // BootScene.create() pone progress en 100
      assert.strictEqual(scene.getProgress(), 100);
    });

    it("debe retornar false al iniciar escena inexistente", () => {
      const manager = new SceneManager();

      const success = manager.start("NonExistent");

      assert.strictEqual(success, false);
      assert.strictEqual(manager.getCurrentScene(), null);
    });

    it("debe actualizar la escena actual", () => {
      const manager = new SceneManager();
      const scene = new GameScene();
      manager.add(scene);
      manager.start("GameScene");

      manager.update(0.016);

      assert.ok(scene.getGameTime() > 0, "Scene debe haberse actualizado");
    });

    it("debe permitir cambiar entre escenas", () => {
      const manager = new SceneManager();
      const boot = new BootScene();
      const menu = new MenuScene();

      manager.add(boot);
      manager.add(menu);

      manager.start("BootScene");
      assert.strictEqual(manager.getCurrentScene(), boot);

      manager.start("MenuScene");
      assert.strictEqual(manager.getCurrentScene(), menu);
    });

    it("no debe crashear update sin escena activa", () => {
      const manager = new SceneManager();

      assert.doesNotThrow(() => {
        manager.update(0.016);
      });
    });
  });

  // ============================================================
  // PARTE 5: Estrategias de Ataque
  // ============================================================

  describe("Attack Strategies", () => {
    it("NormalAttack debe retornar daño base", () => {
      const strategy = new NormalAttackStrategy();
      assert.strictEqual(strategy.calculateDamage(10), 10);
      assert.strictEqual(strategy.getName(), "Normal Attack");
    });

    it("CriticalAttack debe hacer daño x2", () => {
      const strategy = new CriticalAttackStrategy();
      assert.strictEqual(strategy.calculateDamage(10), 20);
      assert.strictEqual(strategy.getName(), "Critical Attack");
    });

    it("MagicAttack debe hacer daño x1.5", () => {
      const strategy = new MagicAttackStrategy();
      assert.strictEqual(strategy.calculateDamage(10), 15);
      assert.strictEqual(strategy.getName(), "Magic Attack");
    });

    it("WeakAttack debe hacer daño x0.5", () => {
      const strategy = new WeakAttackStrategy();
      assert.strictEqual(strategy.calculateDamage(10), 5);
      assert.strictEqual(strategy.getName(), "Weak Attack");
    });
  });

  describe("Player", () => {
    it("debe inicializar con ataque normal", () => {
      const player = new Player("Hero", 10);

      assert.strictEqual(player.getName(), "Hero");
      assert.strictEqual(player.getBasePower(), 10);
      assert.strictEqual(player.getAttackStrategyName(), "Normal Attack");
    });

    it("debe atacar con la estrategia normal", () => {
      const player = new Player("Hero", 10);

      const damage = player.attack();
      assert.strictEqual(damage, 10);
    });

    it("debe cambiar estrategia de ataque", () => {
      const player = new Player("Hero", 10);

      player.setAttackStrategy(new CriticalAttackStrategy());

      assert.strictEqual(player.getAttackStrategyName(), "Critical Attack");
      assert.strictEqual(player.attack(), 20);
    });

    it("debe calcular diferentes daños con diferentes estrategias", () => {
      const player = new Player("Hero", 20);

      player.setAttackStrategy(new MagicAttackStrategy());
      assert.strictEqual(player.attack(), 30);

      player.setAttackStrategy(new WeakAttackStrategy());
      assert.strictEqual(player.attack(), 10);

      player.setAttackStrategy(new NormalAttackStrategy());
      assert.strictEqual(player.attack(), 20);
    });
  });

  // ============================================================
  // PARTE 6: Funciones de utilidad
  // ============================================================

  describe("Utility Functions", () => {
    it("simulateGame debe ejecutar múltiples frames", () => {
      const manager = new SceneManager();
      const scene = new GameScene();
      manager.add(scene);
      manager.start("GameScene");

      simulateGame(manager, 10, 0.016);

      const expectedTime = 10 * 0.016;
      assert.ok(
        Math.abs(scene.getGameTime() - expectedTime) < 0.001,
        "Debe simular 10 frames"
      );
    });

    it("createChasingEnemy debe crear enemigo que persigue", () => {
      const enemy = createChasingEnemy(0, 0, 100, 100, 50);

      assert.strictEqual(enemy.getStrategyName(), "Chase Player");

      enemy.update(0.1);
      const pos = enemy.getPosition();

      assert.ok(pos.x > 0, "Debe moverse hacia el objetivo");
      assert.ok(pos.y > 0, "Debe moverse hacia el objetivo");
    });

    it("getEnemyPositions debe retornar posiciones de todos los enemigos", () => {
      const scene = new GameScene();
      scene.addEnemy(new Enemy(10, 20, new StaticStrategy()));
      scene.addEnemy(new Enemy(30, 40, new StaticStrategy()));

      const positions = getEnemyPositions(scene);

      assert.strictEqual(positions.length, 2);
      assert.deepStrictEqual(positions[0], { x: 10, y: 20 });
      assert.deepStrictEqual(positions[1], { x: 30, y: 40 });
    });
  });

  // ============================================================
  // TESTS DE INTEGRACIÓN
  // ============================================================

  describe("Integration Tests", () => {
    it("debe simular un juego completo cambiando escenas", () => {
      const manager = new SceneManager();
      const boot = new BootScene();
      const menu = new MenuScene();
      const game = new GameScene();

      manager.add(boot);
      manager.add(menu);
      manager.add(game);

      // Boot scene
      manager.start("BootScene");
      assert.strictEqual(manager.getCurrentScene()?.key, "BootScene");

      // Menu scene
      manager.start("MenuScene");
      assert.strictEqual(manager.getCurrentScene()?.key, "MenuScene");

      // Game scene
      manager.start("GameScene");
      assert.strictEqual(manager.getCurrentScene()?.key, "GameScene");

      // Simular juego
      simulateGame(manager, 60, 0.016); // 1 segundo de juego

      assert.ok(game.getGameTime() > 0.9, "Debe haber simulado ~1 segundo");
    });

    it("debe permitir enemigos con diferentes estrategias en la misma escena", () => {
      const scene = new GameScene();

      const enemy1 = new Enemy(50, 50, new HorizontalPatrolStrategy(100, 0, 100));
      const enemy2 = new Enemy(100, 100, new CircularMovementStrategy(100, 100, 50, 1));
      const enemy3 = new Enemy(150, 150, new StaticStrategy());

      scene.addEnemy(enemy1);
      scene.addEnemy(enemy2);
      scene.addEnemy(enemy3);

      scene.update(0.1);

      const pos1 = enemy1.getPosition();
      const pos2 = enemy2.getPosition();
      const pos3 = enemy3.getPosition();

      assert.ok(pos1.x !== 50, "Enemy1 debe moverse");
      assert.ok(pos2.x !== 100 || pos2.y !== 100, "Enemy2 debe moverse");
      assert.strictEqual(pos3.x, 150, "Enemy3 no debe moverse");
      assert.strictEqual(pos3.y, 150, "Enemy3 no debe moverse");
    });

    it("debe permitir cambiar estrategia de enemigo en runtime", () => {
      const enemy = new Enemy(50, 50, new StaticStrategy());

      enemy.update(0.1);
      const pos1 = enemy.getPosition();
      assert.strictEqual(pos1.x, 50, "No debe moverse con Static");

      enemy.setMovementStrategy(new HorizontalPatrolStrategy(100, 0, 200));
      enemy.update(0.1);
      const pos2 = enemy.getPosition();
      assert.ok(pos2.x > 50, "Debe moverse con Patrol");
    });
  });
});
