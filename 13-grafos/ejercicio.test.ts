import { describe, it } from "node:test";
import assert from "node:assert";
import {
  GrafoDirigido,
  GrafoListaAdyacencia,
  GrafoConjuntoAristas,
  GrafoMatrizAdyacencia,
  MaquinaEstadosEnemigo,
  SistemaHabitaciones,
  Habitacion,
  ArbolHabilidades,
  Habilidad,
  SistemaDialogo,
  NodoDialogo,
  SistemaMisiones,
  Mision,
} from "./ejercicio.js";

// ============================================================
// Tests para implementaciones de GrafoDirigido
// ============================================================

/**
 * Función auxiliar para probar todas las implementaciones
 */
function probarImplementacionGrafo(
  nombre: string,
  crearGrafo: () => GrafoDirigido<string>
) {
  describe(`${nombre} - Operaciones básicas`, () => {
    it("debe permitir agregar vértices", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");

      const vertices = grafo.vertices();
      assert.strictEqual(vertices.length, 3);
      assert.ok(vertices.includes("A"));
      assert.ok(vertices.includes("B"));
      assert.ok(vertices.includes("C"));
    });

    it("debe permitir agregar aristas", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarArista("A", "B");

      assert.ok(grafo.existeArista("A", "B"));
      assert.ok(!grafo.existeArista("B", "A"));
    });

    it("debe retornar aristas correctamente", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("A", "C");
      grafo.agregarArista("B", "C");

      const aristas = grafo.aristas();
      assert.strictEqual(aristas.length, 3);
    });

    it("debe retornar vértices adyacentes correctamente", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("A", "C");

      const adyacentes = grafo.adyacentes("A");
      assert.strictEqual(adyacentes.length, 2);
      assert.ok(adyacentes.includes("B"));
      assert.ok(adyacentes.includes("C"));
    });

    it("debe calcular grado de salida correctamente", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("A", "C");

      assert.strictEqual(grafo.gradoSalida("A"), 2);
      assert.strictEqual(grafo.gradoSalida("B"), 0);
    });

    it("debe calcular grado de entrada correctamente", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("C", "B");

      assert.strictEqual(grafo.gradoEntrada("A"), 0);
      assert.strictEqual(grafo.gradoEntrada("B"), 2);
    });

    it("debe detectar si existe camino", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarVertice("D");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("B", "C");
      grafo.agregarArista("C", "D");

      assert.ok(grafo.existeCamino("A", "D"));
      assert.ok(!grafo.existeCamino("D", "A"));
    });

    it("debe encontrar todos los caminos simples", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarVertice("D");

      // Crear dos caminos de A a D:
      // A -> B -> D
      // A -> C -> D
      grafo.agregarArista("A", "B");
      grafo.agregarArista("A", "C");
      grafo.agregarArista("B", "D");
      grafo.agregarArista("C", "D");

      const caminos = grafo.obtenerCaminos("A", "D");
      assert.strictEqual(caminos.length, 2);
    });

    it("debe contar vértices y aristas", () => {
      const grafo = crearGrafo();
      grafo.agregarVertice("A");
      grafo.agregarVertice("B");
      grafo.agregarVertice("C");
      grafo.agregarArista("A", "B");
      grafo.agregarArista("B", "C");

      assert.strictEqual(grafo.numeroVertices(), 3);
      assert.strictEqual(grafo.numeroAristas(), 2);
    });
  });
}

// Probar todas las implementaciones
probarImplementacionGrafo(
  "GrafoListaAdyacencia",
  () => new GrafoListaAdyacencia<string>()
);
probarImplementacionGrafo(
  "GrafoConjuntoAristas",
  () => new GrafoConjuntoAristas<string>()
);
probarImplementacionGrafo(
  "GrafoMatrizAdyacencia",
  () => new GrafoMatrizAdyacencia<string>()
);

// ============================================================
// Tests para Máquina de Estados
// ============================================================

describe("MaquinaEstadosEnemigo", () => {
  it("debe comenzar en estado patrullando", () => {
    const maquina = new MaquinaEstadosEnemigo();
    assert.strictEqual(maquina.obtenerEstadoActual(), "patrullando");
  });

  it("debe permitir transiciones válidas", () => {
    const maquina = new MaquinaEstadosEnemigo();
    const exito = maquina.transicionar("persiguiendo");
    assert.ok(exito);
    assert.strictEqual(maquina.obtenerEstadoActual(), "persiguiendo");
  });

  it("debe rechazar transiciones inválidas", () => {
    const maquina = new MaquinaEstadosEnemigo();
    const exito = maquina.transicionar("atacando"); // No se puede ir directo de patrullando a atacando
    assert.ok(!exito);
    assert.strictEqual(maquina.obtenerEstadoActual(), "patrullando");
  });

  it("debe obtener transiciones posibles", () => {
    const maquina = new MaquinaEstadosEnemigo();
    const transiciones = maquina.obtenerTransicionesPosibles();

    assert.ok(transiciones.includes("persiguiendo"));
    assert.ok(transiciones.includes("huyendo"));
    assert.ok(!transiciones.includes("atacando"));
  });

  it("debe verificar si puede llegar a un estado", () => {
    const maquina = new MaquinaEstadosEnemigo();
    assert.ok(maquina.puedeLlegarA("muerto"));
    assert.ok(maquina.puedeLlegarA("atacando"));
  });

  it("debe permitir transición a muerto desde cualquier estado", () => {
    const maquina = new MaquinaEstadosEnemigo();
    maquina.transicionar("persiguiendo");
    const exito = maquina.transicionar("muerto");
    assert.ok(exito);
    assert.strictEqual(maquina.obtenerEstadoActual(), "muerto");
  });
});

// ============================================================
// Tests para Sistema de Habitaciones
// ============================================================

describe("SistemaHabitaciones", () => {
  it("debe permitir agregar habitaciones", () => {
    const sistema = new SistemaHabitaciones();
    const entrada: Habitacion = {
      id: "entrada",
      nombre: "Entrada",
      descripcion: "La entrada del castillo",
    };

    sistema.agregarHabitacion(entrada);
    const todas = sistema.obtenerTodasLasHabitaciones();

    assert.strictEqual(todas.length, 1);
    assert.strictEqual(todas[0].id, "entrada");
  });

  it("debe conectar habitaciones", () => {
    const sistema = new SistemaHabitaciones();
    const entrada: Habitacion = {
      id: "entrada",
      nombre: "Entrada",
      descripcion: "La entrada",
    };
    const pasillo: Habitacion = {
      id: "pasillo",
      nombre: "Pasillo",
      descripcion: "Un pasillo largo",
    };

    sistema.agregarHabitacion(entrada);
    sistema.agregarHabitacion(pasillo);
    sistema.conectarHabitaciones(entrada, pasillo);
    sistema.establecerHabitacionActual(entrada);

    const adyacentes = sistema.obtenerHabitacionesAdyacentes();
    assert.strictEqual(adyacentes.length, 1);
    assert.strictEqual(adyacentes[0].id, "pasillo");
  });

  it("debe cambiar habitación actual", () => {
    const sistema = new SistemaHabitaciones();
    const entrada: Habitacion = {
      id: "entrada",
      nombre: "Entrada",
      descripcion: "La entrada",
    };

    sistema.agregarHabitacion(entrada);
    sistema.establecerHabitacionActual(entrada);

    const actual = sistema.obtenerHabitacionActual();
    assert.strictEqual(actual?.id, "entrada");
  });

  it("debe encontrar rutas entre habitaciones", () => {
    const sistema = new SistemaHabitaciones();
    const h1: Habitacion = { id: "1", nombre: "Uno", descripcion: "Uno" };
    const h2: Habitacion = { id: "2", nombre: "Dos", descripcion: "Dos" };
    const h3: Habitacion = { id: "3", nombre: "Tres", descripcion: "Tres" };

    sistema.agregarHabitacion(h1);
    sistema.agregarHabitacion(h2);
    sistema.agregarHabitacion(h3);
    sistema.conectarHabitaciones(h1, h2);
    sistema.conectarHabitaciones(h2, h3);
    sistema.establecerHabitacionActual(h1);

    const rutas = sistema.encontrarRutas(h3);
    assert.ok(rutas.length > 0);
  });

  it("debe verificar si existe ruta", () => {
    const sistema = new SistemaHabitaciones();
    const h1: Habitacion = { id: "1", nombre: "Uno", descripcion: "Uno" };
    const h2: Habitacion = { id: "2", nombre: "Dos", descripcion: "Dos" };
    const h3: Habitacion = { id: "3", nombre: "Tres", descripcion: "Tres" };

    sistema.agregarHabitacion(h1);
    sistema.agregarHabitacion(h2);
    sistema.agregarHabitacion(h3);
    sistema.conectarHabitaciones(h1, h2);
    sistema.establecerHabitacionActual(h1);

    assert.ok(sistema.existeRuta(h2));
    assert.ok(!sistema.existeRuta(h3));
  });
});

// ============================================================
// Tests para Árbol de Habilidades
// ============================================================

describe("ArbolHabilidades", () => {
  it("debe inicializar con puntos", () => {
    const arbol = new ArbolHabilidades(10);
    assert.strictEqual(arbol.obtenerPuntosDisponibles(), 10);
  });

  it("debe permitir agregar habilidades", () => {
    const arbol = new ArbolHabilidades(10);
    const habilidad: Habilidad = {
      id: "ataque",
      nombre: "Ataque Básico",
      descripcion: "Ataque simple",
      costo: 1,
    };

    arbol.agregarHabilidad(habilidad);
    assert.ok(!arbol.estaDesbloqueada(habilidad));
  });

  it("debe desbloquear habilidad sin prerequisitos", () => {
    const arbol = new ArbolHabilidades(10);
    const habilidad: Habilidad = {
      id: "ataque",
      nombre: "Ataque Básico",
      descripcion: "Ataque simple",
      costo: 1,
    };

    arbol.agregarHabilidad(habilidad);
    const exito = arbol.desbloquearHabilidad(habilidad);

    assert.ok(exito);
    assert.ok(arbol.estaDesbloqueada(habilidad));
    assert.strictEqual(arbol.obtenerPuntosDisponibles(), 9);
  });

  it("debe rechazar desbloqueo sin puntos suficientes", () => {
    const arbol = new ArbolHabilidades(0);
    const habilidad: Habilidad = {
      id: "ataque",
      nombre: "Ataque Básico",
      descripcion: "Ataque simple",
      costo: 1,
    };

    arbol.agregarHabilidad(habilidad);
    const exito = arbol.desbloquearHabilidad(habilidad);

    assert.ok(!exito);
    assert.ok(!arbol.estaDesbloqueada(habilidad));
  });

  it("debe rechazar desbloqueo sin prerequisitos cumplidos", () => {
    const arbol = new ArbolHabilidades(10);
    const basico: Habilidad = {
      id: "basico",
      nombre: "Básico",
      descripcion: "Básico",
      costo: 1,
    };
    const avanzado: Habilidad = {
      id: "avanzado",
      nombre: "Avanzado",
      descripcion: "Avanzado",
      costo: 2,
    };

    arbol.agregarHabilidad(basico);
    arbol.agregarHabilidad(avanzado);
    arbol.agregarPrerequisito(basico, avanzado);

    const exito = arbol.desbloquearHabilidad(avanzado);
    assert.ok(!exito);
  });

  it("debe permitir desbloqueo con prerequisitos cumplidos", () => {
    const arbol = new ArbolHabilidades(10);
    const basico: Habilidad = {
      id: "basico",
      nombre: "Básico",
      descripcion: "Básico",
      costo: 1,
    };
    const avanzado: Habilidad = {
      id: "avanzado",
      nombre: "Avanzado",
      descripcion: "Avanzado",
      costo: 2,
    };

    arbol.agregarHabilidad(basico);
    arbol.agregarHabilidad(avanzado);
    arbol.agregarPrerequisito(basico, avanzado);

    arbol.desbloquearHabilidad(basico);
    const exito = arbol.desbloquearHabilidad(avanzado);

    assert.ok(exito);
    assert.ok(arbol.estaDesbloqueada(avanzado));
  });

  it("debe obtener habilidades desbloqueables", () => {
    const arbol = new ArbolHabilidades(10);
    const h1: Habilidad = {
      id: "1",
      nombre: "H1",
      descripcion: "H1",
      costo: 1,
    };
    const h2: Habilidad = {
      id: "2",
      nombre: "H2",
      descripcion: "H2",
      costo: 1,
    };
    const h3: Habilidad = {
      id: "3",
      nombre: "H3",
      descripcion: "H3",
      costo: 1,
    };

    arbol.agregarHabilidad(h1);
    arbol.agregarHabilidad(h2);
    arbol.agregarHabilidad(h3);
    arbol.agregarPrerequisito(h1, h2);

    const desbloqueables = arbol.obtenerHabilidadesDesbloqueables();
    assert.ok(desbloqueables.some((h) => h.id === "1"));
    assert.ok(desbloqueables.some((h) => h.id === "3"));
    assert.ok(!desbloqueables.some((h) => h.id === "2"));
  });

  it("debe agregar puntos", () => {
    const arbol = new ArbolHabilidades(5);
    arbol.agregarPuntos(3);
    assert.strictEqual(arbol.obtenerPuntosDisponibles(), 8);
  });
});

// ============================================================
// Tests para Sistema de Diálogo
// ============================================================

describe("SistemaDialogo", () => {
  it("debe permitir agregar nodos", () => {
    const sistema = new SistemaDialogo();
    const nodo: NodoDialogo = {
      id: "1",
      texto: "Hola",
      personaje: "NPC",
    };

    sistema.agregarNodo(nodo);
    sistema.establecerNodoInicial(nodo);
    sistema.iniciarDialogo();

    const actual = sistema.obtenerNodoActual();
    assert.strictEqual(actual?.id, "1");
  });

  it("debe obtener opciones disponibles", () => {
    const sistema = new SistemaDialogo();
    const n1: NodoDialogo = {
      id: "1",
      texto: "¿Qué quieres?",
      personaje: "NPC",
    };
    const n2: NodoDialogo = { id: "2", texto: "Ayuda", personaje: "Player" };
    const n3: NodoDialogo = { id: "3", texto: "Nada", personaje: "Player" };

    sistema.agregarNodo(n1);
    sistema.agregarNodo(n2);
    sistema.agregarNodo(n3);
    sistema.agregarOpcion(n1, n2);
    sistema.agregarOpcion(n1, n3);
    sistema.establecerNodoInicial(n1);
    sistema.iniciarDialogo();

    const opciones = sistema.obtenerOpciones();
    assert.strictEqual(opciones.length, 2);
  });

  it("debe permitir seleccionar opción válida", () => {
    const sistema = new SistemaDialogo();
    const n1: NodoDialogo = { id: "1", texto: "¿Qué?", personaje: "NPC" };
    const n2: NodoDialogo = { id: "2", texto: "Ayuda", personaje: "Player" };

    sistema.agregarNodo(n1);
    sistema.agregarNodo(n2);
    sistema.agregarOpcion(n1, n2);
    sistema.establecerNodoInicial(n1);
    sistema.iniciarDialogo();

    const exito = sistema.seleccionarOpcion(n2);
    assert.ok(exito);
    assert.strictEqual(sistema.obtenerNodoActual()?.id, "2");
  });

  it("debe rechazar opción inválida", () => {
    const sistema = new SistemaDialogo();
    const n1: NodoDialogo = { id: "1", texto: "¿Qué?", personaje: "NPC" };
    const n2: NodoDialogo = { id: "2", texto: "Ayuda", personaje: "Player" };
    const n3: NodoDialogo = { id: "3", texto: "Otra", personaje: "Player" };

    sistema.agregarNodo(n1);
    sistema.agregarNodo(n2);
    sistema.agregarNodo(n3);
    sistema.agregarOpcion(n1, n2);
    sistema.establecerNodoInicial(n1);
    sistema.iniciarDialogo();

    const exito = sistema.seleccionarOpcion(n3);
    assert.ok(!exito);
    assert.strictEqual(sistema.obtenerNodoActual()?.id, "1");
  });

  it("debe reiniciar correctamente", () => {
    const sistema = new SistemaDialogo();
    const n1: NodoDialogo = { id: "1", texto: "Inicio", personaje: "NPC" };
    const n2: NodoDialogo = { id: "2", texto: "Dos", personaje: "NPC" };

    sistema.agregarNodo(n1);
    sistema.agregarNodo(n2);
    sistema.agregarOpcion(n1, n2);
    sistema.establecerNodoInicial(n1);
    sistema.iniciarDialogo();
    sistema.seleccionarOpcion(n2);

    sistema.reiniciar();
    assert.strictEqual(sistema.obtenerNodoActual()?.id, "1");
  });

  it("debe verificar si puede continuar", () => {
    const sistema = new SistemaDialogo();
    const n1: NodoDialogo = { id: "1", texto: "Inicio", personaje: "NPC" };
    const n2: NodoDialogo = { id: "2", texto: "Fin", personaje: "NPC" };

    sistema.agregarNodo(n1);
    sistema.agregarNodo(n2);
    sistema.agregarOpcion(n1, n2);
    sistema.establecerNodoInicial(n1);
    sistema.iniciarDialogo();

    assert.ok(sistema.puedeContinar());

    sistema.seleccionarOpcion(n2);
    assert.ok(!sistema.puedeContinar());
  });
});

// ============================================================
// Tests para Sistema de Misiones
// ============================================================

describe("SistemaMisiones", () => {
  it("debe permitir agregar misiones", () => {
    const sistema = new SistemaMisiones();
    const mision: Mision = {
      id: "1",
      nombre: "Primera misión",
      descripcion: "Habla con el NPC",
      recompensa: 100,
    };

    sistema.agregarMision(mision);
    assert.ok(!sistema.estaCompletada(mision));
  });

  it("debe completar misión sin dependencias", () => {
    const sistema = new SistemaMisiones();
    const mision: Mision = {
      id: "1",
      nombre: "Primera",
      descripcion: "Primera",
      recompensa: 100,
    };

    sistema.agregarMision(mision);
    const exito = sistema.completarMision(mision);

    assert.ok(exito);
    assert.ok(sistema.estaCompletada(mision));
  });

  it("debe rechazar completar misión sin prerequisitos", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "Primera",
      descripcion: "Primera",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "Segunda",
      descripcion: "Segunda",
      recompensa: 200,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.agregarDependencia(m1, m2);

    const exito = sistema.completarMision(m2);
    assert.ok(!exito);
  });

  it("debe completar misión con prerequisitos cumplidos", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "Primera",
      descripcion: "Primera",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "Segunda",
      descripcion: "Segunda",
      recompensa: 200,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.agregarDependencia(m1, m2);

    sistema.completarMision(m1);
    const exito = sistema.completarMision(m2);

    assert.ok(exito);
    assert.ok(sistema.estaCompletada(m2));
  });

  it("debe obtener misiones disponibles", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "Primera",
      descripcion: "Primera",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "Segunda",
      descripcion: "Segunda",
      recompensa: 200,
    };
    const m3: Mision = {
      id: "3",
      nombre: "Tercera",
      descripcion: "Tercera",
      recompensa: 300,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.agregarMision(m3);
    sistema.agregarDependencia(m1, m2);

    const disponibles = sistema.obtenerMisionesDisponibles();

    assert.ok(disponibles.some((m) => m.id === "1"));
    assert.ok(disponibles.some((m) => m.id === "3"));
    assert.ok(!disponibles.some((m) => m.id === "2"));
  });

  it("debe calcular recompensa total", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "M1",
      descripcion: "M1",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "M2",
      descripcion: "M2",
      recompensa: 200,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.completarMision(m1);
    sistema.completarMision(m2);

    assert.strictEqual(sistema.calcularRecompensaTotal(), 300);
  });

  it("debe verificar si todas están completadas", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "M1",
      descripcion: "M1",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "M2",
      descripcion: "M2",
      recompensa: 200,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);

    assert.ok(!sistema.todasLasMisionesCompletadas());

    sistema.completarMision(m1);
    sistema.completarMision(m2);

    assert.ok(sistema.todasLasMisionesCompletadas());
  });

  it("debe obtener prerequisitos de una misión", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "M1",
      descripcion: "M1",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "M2",
      descripcion: "M2",
      recompensa: 100,
    };
    const m3: Mision = {
      id: "3",
      nombre: "M3",
      descripcion: "M3",
      recompensa: 100,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.agregarMision(m3);
    sistema.agregarDependencia(m1, m3);
    sistema.agregarDependencia(m2, m3);

    const prereqs = sistema.obtenerPrerequisitos(m3);
    assert.strictEqual(prereqs.length, 2);
  });

  it("debe obtener misiones desbloqueadas", () => {
    const sistema = new SistemaMisiones();
    const m1: Mision = {
      id: "1",
      nombre: "M1",
      descripcion: "M1",
      recompensa: 100,
    };
    const m2: Mision = {
      id: "2",
      nombre: "M2",
      descripcion: "M2",
      recompensa: 100,
    };
    const m3: Mision = {
      id: "3",
      nombre: "M3",
      descripcion: "M3",
      recompensa: 100,
    };

    sistema.agregarMision(m1);
    sistema.agregarMision(m2);
    sistema.agregarMision(m3);
    sistema.agregarDependencia(m1, m2);
    sistema.agregarDependencia(m1, m3);

    const desbloqueadas = sistema.obtenerMisionesDesbloqueadas(m1);
    assert.strictEqual(desbloqueadas.length, 2);
  });
});
