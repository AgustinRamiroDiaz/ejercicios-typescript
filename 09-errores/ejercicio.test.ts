import { test } from "node:test";
import assert from "node:assert";
import {
  dividir,
  obtenerElemento,
  dividirSeguro,
  obtenerElementoSeguro,
  Personaje,
  crearPersonaje,
  subirNivel,
  usarItem,
  PersonajeError,
  InventarioError,
  CombateError,
  atacar,
  Item,
  agregarItem,
  removerItem,
  procesarAccion,
  ejecutarAcciones,
  guardarPartida,
  cargarPartida,
  Enemigo,
  validarCombate,
  iniciarCombate,
  validarPersonajeCompleto,
  crearPersonajeValidado,
  procesarPersonajes,
  atacarMultiples,
  PersonajeDetalladoError,
  realizarAccionCompleja,
  obtenerPersonajeODefault,
  operacionConFallback,
  dividirConDefault,
} from "./ejercicio.js";

// ============================================================
// TESTS PARTE 1: Conceptos básicos - throw y try/catch
// ============================================================

test("dividir - divide correctamente", () => {
  assert.strictEqual(dividir(10, 2), 5);
  assert.strictEqual(dividir(15, 3), 5);
});

test("dividir - lanza error al dividir por cero", () => {
  assert.throws(() => dividir(10, 0), /No se puede dividir por cero/);
});

test("obtenerElemento - obtiene elemento correctamente", () => {
  assert.strictEqual(obtenerElemento([1, 2, 3], 0), 1);
  assert.strictEqual(obtenerElemento([1, 2, 3], 2), 3);
});

test("obtenerElemento - lanza error con índice negativo", () => {
  assert.throws(() => obtenerElemento([1, 2, 3], -1), /Índice fuera de rango/);
});

test("obtenerElemento - lanza error con índice fuera de rango", () => {
  assert.throws(() => obtenerElemento([1, 2, 3], 5), /Índice fuera de rango/);
});

test("dividirSeguro - retorna resultado correcto", () => {
  assert.strictEqual(dividirSeguro(10, 2), 5);
});

test("dividirSeguro - retorna null al dividir por cero", () => {
  assert.strictEqual(dividirSeguro(10, 0), null);
});

test("obtenerElementoSeguro - obtiene elemento correctamente", () => {
  assert.strictEqual(obtenerElementoSeguro([1, 2, 3], 1), 2);
});

test("obtenerElementoSeguro - retorna null con índice inválido", () => {
  assert.strictEqual(obtenerElementoSeguro([1, 2, 3], 10), null);
  assert.strictEqual(obtenerElementoSeguro([1, 2, 3], -1), null);
});

// ============================================================
// TESTS PARTE 2: Validación de datos de juego
// ============================================================

test("crearPersonaje - crea personaje válido", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.strictEqual(p.nombre, "Héroe");
  assert.strictEqual(p.nivel, 5);
  assert.strictEqual(p.vida, 50);
});

test("crearPersonaje - error con nombre vacío", () => {
  assert.throws(() => crearPersonaje("", 5, 50), /El nombre no puede estar vacío/);
});

test("crearPersonaje - error con nivel menor a 1", () => {
  assert.throws(() => crearPersonaje("Héroe", 0, 50), /El nivel debe ser al menos 1/);
});

test("crearPersonaje - error con vida negativa", () => {
  assert.throws(() => crearPersonaje("Héroe", 5, -10), /La vida no puede ser negativa/);
});

test("subirNivel - sube nivel correctamente", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const p2 = subirNivel(p, 3);
  assert.strictEqual(p2.nivel, 8);
  assert.strictEqual(p2.vida, 80); // 50 + (3 * 10)
});

test("subirNivel - error con niveles no positivos", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.throws(() => subirNivel(p, 0), /Los niveles a subir deben ser positivos/);
  assert.throws(() => subirNivel(p, -1), /Los niveles a subir deben ser positivos/);
});

test("usarItem - funciona con personaje vivo", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = usarItem(p, "Poción");
  assert.strictEqual(resultado.nombre, "Héroe");
});

test("usarItem - error con personaje muerto", () => {
  const p = crearPersonaje("Héroe", 5, 0);
  assert.throws(
    () => usarItem(p, "Poción"),
    /No se puede usar items con un personaje muerto/
  );
});

test("usarItem - error con nombre vacío", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.throws(
    () => usarItem(p, ""),
    /El nombre del item no puede estar vacío/
  );
});

// ============================================================
// TESTS PARTE 3: Clases de error personalizadas
// ============================================================

test("PersonajeError - es una instancia de Error", () => {
  const error = new PersonajeError("Test");
  assert(error instanceof Error);
  assert(error instanceof PersonajeError);
  assert.strictEqual(error.name, "PersonajeError");
});

test("InventarioError - es una instancia de Error", () => {
  const error = new InventarioError("Test");
  assert(error instanceof Error);
  assert(error instanceof InventarioError);
  assert.strictEqual(error.name, "InventarioError");
});

test("CombateError - es una instancia de Error", () => {
  const error = new CombateError("Test");
  assert(error instanceof Error);
  assert(error instanceof CombateError);
  assert.strictEqual(error.name, "CombateError");
});

test("atacar - reduce vida correctamente", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const p2 = atacar(p, 20);
  assert.strictEqual(p2.vida, 30);
});

test("atacar - vida no baja de 0", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const p2 = atacar(p, 100);
  assert.strictEqual(p2.vida, 0);
});

test("atacar - error con personaje muerto", () => {
  const p = crearPersonaje("Héroe", 5, 0);
  assert.throws(
    () => atacar(p, 10),
    (err: Error) => {
      return err instanceof PersonajeError &&
             err.message.includes("No se puede atacar a un personaje muerto");
    }
  );
});

test("atacar - error con daño negativo", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.throws(
    () => atacar(p, -10),
    (err: Error) => {
      return err instanceof PersonajeError &&
             err.message.includes("El daño no puede ser negativo");
    }
  );
});

test("agregarItem - agrega item correctamente", () => {
  const inventario: Item[] = [];
  const item: Item = { nombre: "Poción", tipo: "consumible", cantidad: 1 };
  const nuevo = agregarItem(inventario, item, 5);
  assert.strictEqual(nuevo.length, 1);
  assert.strictEqual(nuevo[0].nombre, "Poción");
});

test("agregarItem - error con inventario lleno", () => {
  const inventario: Item[] = [
    { nombre: "Item1", tipo: "a", cantidad: 1 },
    { nombre: "Item2", tipo: "a", cantidad: 1 },
  ];
  const item: Item = { nombre: "Item3", tipo: "a", cantidad: 1 };
  assert.throws(
    () => agregarItem(inventario, item, 2),
    (err: Error) => {
      return err instanceof InventarioError &&
             err.message.includes("Inventario lleno");
    }
  );
});

test("agregarItem - error con cantidad no positiva", () => {
  const inventario: Item[] = [];
  const item: Item = { nombre: "Poción", tipo: "consumible", cantidad: 0 };
  assert.throws(
    () => agregarItem(inventario, item, 5),
    (err: Error) => {
      return err instanceof InventarioError &&
             err.message.includes("La cantidad debe ser positiva");
    }
  );
});

test("removerItem - remueve item correctamente", () => {
  const inventario: Item[] = [
    { nombre: "Poción", tipo: "consumible", cantidad: 1 },
    { nombre: "Espada", tipo: "arma", cantidad: 1 },
  ];
  const nuevo = removerItem(inventario, "Poción");
  assert.strictEqual(nuevo.length, 1);
  assert.strictEqual(nuevo[0].nombre, "Espada");
});

test("removerItem - error con item no encontrado", () => {
  const inventario: Item[] = [
    { nombre: "Poción", tipo: "consumible", cantidad: 1 },
  ];
  assert.throws(
    () => removerItem(inventario, "Escudo"),
    (err: Error) => {
      return err instanceof InventarioError &&
             err.message.includes("Item no encontrado: Escudo");
    }
  );
});

// ============================================================
// TESTS PARTE 4: Manejo de múltiples errores
// ============================================================

test("procesarAccion - ataque exitoso", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = procesarAccion(p, "atacar");
  assert.strictEqual(resultado.exito, true);
  assert.strictEqual(resultado.error, undefined);
});

test("procesarAccion - ataque fallido (personaje muerto)", () => {
  const p = crearPersonaje("Héroe", 5, 0);
  const resultado = procesarAccion(p, "atacar");
  assert.strictEqual(resultado.exito, false);
  assert(resultado.error !== undefined);
});

test("procesarAccion - acción desconocida", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = procesarAccion(p, "volar");
  assert.strictEqual(resultado.exito, false);
  assert.strictEqual(resultado.error, "Acción desconocida");
});

test("ejecutarAcciones - todas exitosas", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = ejecutarAcciones(p, ["subir", "subir"]);
  assert.strictEqual(resultado.exitosas, 2);
  assert.strictEqual(resultado.fallidas, 0);
  assert.strictEqual(resultado.errores.length, 0);
});

test("ejecutarAcciones - algunas fallidas", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = ejecutarAcciones(p, ["subir", "volar", "usar"]);
  assert(resultado.exitosas > 0);
  assert(resultado.fallidas > 0);
  assert(resultado.errores.length > 0);
});

// ============================================================
// TESTS PARTE 5: Finally y limpieza
// ============================================================

test("guardarPartida - guardado exitoso", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = guardarPartida(p, "save1");
  assert.strictEqual(resultado.guardado, true);
  assert.match(resultado.mensaje, /Partida guardada/);
});

test("guardarPartida - error con nombre vacío", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = guardarPartida(p, "");
  assert.strictEqual(resultado.guardado, false);
  assert.match(resultado.mensaje, /Nombre de archivo inválido/);
});

test("guardarPartida - error al guardar", () => {
  const p = crearPersonaje("error", 5, 50);
  const resultado = guardarPartida(p, "save1");
  assert.strictEqual(resultado.guardado, false);
  assert.match(resultado.mensaje, /Error al guardar/);
});

test("cargarPartida - carga exitosa", () => {
  const resultado = cargarPartida("save1");
  assert.notStrictEqual(resultado.personaje, null);
  assert.match(resultado.mensaje, /Partida cargada/);
});

test("cargarPartida - error con nombre vacío", () => {
  const resultado = cargarPartida("");
  assert.strictEqual(resultado.personaje, null);
  assert.match(resultado.mensaje, /Nombre de archivo inválido/);
});

test("cargarPartida - error con archivo corrupto", () => {
  const resultado = cargarPartida("corrupto");
  assert.strictEqual(resultado.personaje, null);
  assert.match(resultado.mensaje, /Archivo corrupto/);
});

// ============================================================
// TESTS PARTE 6: Validación de combate
// ============================================================

test("validarCombate - combate válido", () => {
  const p = crearPersonaje("Héroe", 10, 100);
  const e: Enemigo = { nombre: "Goblin", nivel: 5, vida: 50 };
  assert.strictEqual(validarCombate(p, e), true);
});

test("validarCombate - error con personaje muerto", () => {
  const p = crearPersonaje("Héroe", 10, 0);
  const e: Enemigo = { nombre: "Goblin", nivel: 5, vida: 50 };
  assert.throws(
    () => validarCombate(p, e),
    (err: Error) => {
      return err instanceof CombateError &&
             err.message.includes("El personaje está muerto");
    }
  );
});

test("validarCombate - error con enemigo muerto", () => {
  const p = crearPersonaje("Héroe", 10, 100);
  const e: Enemigo = { nombre: "Goblin", nivel: 5, vida: 0 };
  assert.throws(
    () => validarCombate(p, e),
    (err: Error) => {
      return err instanceof CombateError &&
             err.message.includes("El enemigo está muerto");
    }
  );
});

test("validarCombate - error con nivel insuficiente", () => {
  const p = crearPersonaje("Héroe", 3, 30);
  const e: Enemigo = { nombre: "Dragón", nivel: 20, vida: 200 };
  assert.throws(
    () => validarCombate(p, e),
    (err: Error) => {
      return err instanceof CombateError &&
             err.message.includes("Nivel insuficiente");
    }
  );
});

test("iniciarCombate - combate iniciado", () => {
  const p = crearPersonaje("Héroe", 10, 100);
  const e: Enemigo = { nombre: "Goblin", nivel: 5, vida: 50 };
  const resultado = iniciarCombate(p, e);
  assert.strictEqual(resultado.iniciado, true);
  assert.strictEqual(resultado.error, undefined);
});

test("iniciarCombate - combate no iniciado por error", () => {
  const p = crearPersonaje("Héroe", 3, 30);
  const e: Enemigo = { nombre: "Dragón", nivel: 20, vida: 200 };
  const resultado = iniciarCombate(p, e);
  assert.strictEqual(resultado.iniciado, false);
  assert(resultado.error !== undefined);
});

// ============================================================
// TESTS PARTE 7: Encadenamiento de validaciones
// ============================================================

test("validarPersonajeCompleto - personaje válido", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const errores = validarPersonajeCompleto(p);
  assert.strictEqual(errores.length, 0);
});

test("validarPersonajeCompleto - múltiples errores", () => {
  const p: Personaje = { nombre: "", nivel: 0, vida: -10 };
  const errores = validarPersonajeCompleto(p);
  assert(errores.length >= 3);
  assert(errores.some((e) => e.includes("Nombre")));
  assert(errores.some((e) => e.includes("Nivel")));
  assert(errores.some((e) => e.includes("Vida")));
});

test("validarPersonajeCompleto - nivel demasiado alto", () => {
  const p: Personaje = { nombre: "Héroe", nivel: 150, vida: 100 };
  const errores = validarPersonajeCompleto(p);
  assert(errores.some((e) => e.includes("demasiado alto")));
});

test("validarPersonajeCompleto - vida demasiado alta", () => {
  const p: Personaje = { nombre: "Héroe", nivel: 5, vida: 1000 };
  const errores = validarPersonajeCompleto(p);
  assert(errores.some((e) => e.includes("demasiado alta")));
});

test("crearPersonajeValidado - personaje válido", () => {
  const resultado = crearPersonajeValidado("Héroe", 5, 50);
  assert.notStrictEqual(resultado.personaje, null);
  assert.strictEqual(resultado.errores.length, 0);
});

test("crearPersonajeValidado - personaje inválido", () => {
  const resultado = crearPersonajeValidado("", 0, -10);
  assert.strictEqual(resultado.personaje, null);
  assert(resultado.errores.length > 0);
});

// ============================================================
// TESTS PARTE 8: Manejo de errores en operaciones batch
// ============================================================

test("procesarPersonajes - todos válidos", () => {
  const datos = [
    { nombre: "Héroe1", nivel: 5, vida: 50 },
    { nombre: "Héroe2", nivel: 3, vida: 30 },
  ];
  const resultado = procesarPersonajes(datos);
  assert.strictEqual(resultado.validos.length, 2);
  assert.strictEqual(resultado.invalidos.length, 0);
});

test("procesarPersonajes - algunos inválidos", () => {
  const datos = [
    { nombre: "Héroe1", nivel: 5, vida: 50 },
    { nombre: "", nivel: 3, vida: 30 },
    { nombre: "Héroe3", nivel: 0, vida: 10 },
  ];
  const resultado = procesarPersonajes(datos);
  assert.strictEqual(resultado.validos.length, 1);
  assert.strictEqual(resultado.invalidos.length, 2);
});

test("atacarMultiples - todos válidos", () => {
  const personajes = [
    crearPersonaje("Héroe1", 5, 50),
    crearPersonaje("Héroe2", 5, 50),
  ];
  const resultado = atacarMultiples(personajes, 10);
  assert.strictEqual(resultado.atacados.length, 2);
  assert.strictEqual(resultado.errores.length, 0);
  assert.strictEqual(resultado.atacados[0].vida, 40);
});

test("atacarMultiples - algunos con error", () => {
  const personajes = [
    crearPersonaje("Héroe1", 5, 50),
    crearPersonaje("Héroe2", 5, 0),
  ];
  const resultado = atacarMultiples(personajes, 10);
  assert.strictEqual(resultado.atacados.length, 1);
  assert.strictEqual(resultado.errores.length, 1);
});

// ============================================================
// TESTS PARTE 9: Errores con información adicional
// ============================================================

test("PersonajeDetalladoError - contiene información adicional", () => {
  const error = new PersonajeDetalladoError("Héroe", "está muerto");
  assert(error instanceof Error);
  assert.strictEqual(error.name, "PersonajeDetalladoError");
  assert.strictEqual(error.personaje, "Héroe");
  assert.strictEqual(error.razon, "está muerto");
  assert(error.message.includes("Héroe"));
  assert(error.message.includes("está muerto"));
});

test("realizarAccionCompleja - atacar válido", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  const resultado = realizarAccionCompleja(p, "atacar", 20);
  assert.strictEqual(resultado.vida, 30);
});

test("realizarAccionCompleja - curar válido", () => {
  const p = crearPersonaje("Héroe", 5, 30);
  const resultado = realizarAccionCompleja(p, "curar", 20);
  assert.strictEqual(resultado.vida, 50);
});

test("realizarAccionCompleja - error con personaje muerto", () => {
  const p = crearPersonaje("Héroe", 5, 0);
  assert.throws(
    () => realizarAccionCompleja(p, "atacar", 10),
    (err: Error) => {
      return err instanceof PersonajeDetalladoError &&
             err.personaje === "Héroe" &&
             err.razon === "está muerto";
    }
  );
});

test("realizarAccionCompleja - error con daño inválido", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.throws(
    () => realizarAccionCompleja(p, "atacar", 0),
    (err: Error) => {
      return err instanceof PersonajeDetalladoError &&
             err.razon.includes("daño inválido");
    }
  );
});

test("realizarAccionCompleja - error con acción desconocida", () => {
  const p = crearPersonaje("Héroe", 5, 50);
  assert.throws(
    () => realizarAccionCompleja(p, "volar", 10),
    (err: Error) => {
      return err instanceof PersonajeDetalladoError &&
             err.razon.includes("acción desconocida");
    }
  );
});

// ============================================================
// TESTS PARTE 10: Error recovery (recuperación de errores)
// ============================================================

test("obtenerPersonajeODefault - encuentra personaje", () => {
  const personajes = [
    crearPersonaje("Héroe1", 5, 50),
    crearPersonaje("Héroe2", 3, 30),
  ];
  const resultado = obtenerPersonajeODefault(personajes, "Héroe1");
  assert.strictEqual(resultado.nombre, "Héroe1");
});

test("obtenerPersonajeODefault - retorna default si no encuentra", () => {
  const personajes = [crearPersonaje("Héroe1", 5, 50)];
  const resultado = obtenerPersonajeODefault(personajes, "NoExiste");
  assert.strictEqual(resultado.nombre, "Desconocido");
  assert.strictEqual(resultado.nivel, 1);
  assert.strictEqual(resultado.vida, 10);
});

test("operacionConFallback - operación exitosa", () => {
  const resultado = operacionConFallback(() => 5 + 5, 0);
  assert.strictEqual(resultado, 10);
});

test("operacionConFallback - usa fallback en error", () => {
  const resultado = operacionConFallback(() => {
    throw new Error("Error");
  }, 42);
  assert.strictEqual(resultado, 42);
});

test("dividirConDefault - división exitosa", () => {
  const resultado = dividirConDefault(10, 2, 999);
  assert.strictEqual(resultado, 5);
});

test("dividirConDefault - usa default en división por cero", () => {
  const resultado = dividirConDefault(10, 0, 999);
  assert.strictEqual(resultado, 999);
});
