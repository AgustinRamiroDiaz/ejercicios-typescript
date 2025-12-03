import { test } from "node:test";
import assert from "node:assert";
import {
  crearAtaque,
  esAtaqueFisico,
  mover,
  esDireccionVertical,
  procesarEvento,
  primero,
  ultimo,
  intercambiar,
  obtenerNombres,
  filtrarPorNivelMinimo,
  actualizarPersonaje,
  Personaje,
  crearResumen,
  convertirAGuerrero,
  aplicarConfiguracion,
  crearConfiguracionInmutable,
  crearEstadisticas,
  sumarEstadistica,
  esJugador,
  esEnemigo,
  obtenerInfo,
  extraerPrimero,
  crearPersonajeNullable,
  actualizarParcial,
  crearEvento,
  agregarAlInventario,
  obtenerCantidad,
  crearGuerrero,
  crearMago,
  esMago,
} from "./ejercicio.js";

// PARTE 1
test("crearAtaque", () => {
  const ataque = crearAtaque("Golpe", 50, "físico");
  assert.strictEqual(ataque.tipo, "físico");
});

test("esAtaqueFisico", () => {
  const ataque = crearAtaque("Golpe", 50, "físico");
  assert.strictEqual(esAtaqueFisico(ataque), true);
  const magia = crearAtaque("Rayo", 40, "mágico");
  assert.strictEqual(esAtaqueFisico(magia), false);
});

// PARTE 2
test("mover", () => {
  assert.strictEqual(mover("norte"), "Moviendo hacia el norte");
  assert.strictEqual(mover("sur"), "Moviendo hacia el sur");
});

test("esDireccionVertical", () => {
  assert.strictEqual(esDireccionVertical("norte"), true);
  assert.strictEqual(esDireccionVertical("este"), false);
});

// PARTE 3
test("procesarEvento - ataque", () => {
  const evento = { tipo: "ataque" as const, danio: 50, objetivo: "Goblin" };
  assert.match(procesarEvento(evento), /Goblin.*50/);
});

test("procesarEvento - curación", () => {
  const evento = { tipo: "curación" as const, cantidad: 30, objetivo: "Héroe" };
  assert.match(procesarEvento(evento), /Héroe.*30/);
});

// PARTE 4
test("primero", () => {
  assert.strictEqual(primero([1, 2, 3]), 1);
  assert.strictEqual(primero([]), undefined);
});

test("ultimo", () => {
  assert.strictEqual(ultimo([1, 2, 3]), 3);
  assert.strictEqual(ultimo([]), undefined);
});

test("intercambiar", () => {
  assert.deepStrictEqual(intercambiar([1, 2, 3], 0, 2), [3, 2, 1]);
});

// PARTE 5
test("obtenerNombres", () => {
  const items = [{ nombre: "Item1", x: 1 }, { nombre: "Item2", x: 2 }];
  assert.deepStrictEqual(obtenerNombres(items), ["Item1", "Item2"]);
});

test("filtrarPorNivelMinimo", () => {
  const items = [{ nivel: 5 }, { nivel: 10 }, { nivel: 3 }];
  const filtrados = filtrarPorNivelMinimo(items, 5);
  assert.strictEqual(filtrados.length, 2);
});

// PARTE 6
test("actualizarPersonaje", () => {
  const p: Personaje = { nombre: "H", nivel: 5, vida: 50, mana: 25 };
  const p2 = actualizarPersonaje(p, { vida: 100 });
  assert.strictEqual(p2.vida, 100);
  assert.strictEqual(p2.nombre, "H");
});

// PARTE 7
test("crearResumen", () => {
  const p: Personaje = { nombre: "H", nivel: 5, vida: 50, mana: 25 };
  const resumen = crearResumen(p);
  assert.strictEqual(resumen.nombre, "H");
  assert.strictEqual(resumen.nivel, 5);
});

test("convertirAGuerrero", () => {
  const p: Personaje = { nombre: "H", nivel: 5, vida: 50, mana: 25 };
  const guerrero = convertirAGuerrero(p);
  assert.strictEqual(guerrero.nombre, "H");
  assert.strictEqual("mana" in guerrero, false);
});

// PARTE 8
test("aplicarConfiguracion", () => {
  const config = { volumen: 50, dificultad: "Normal", idioma: "ES" };
  const resultado = aplicarConfiguracion(config);
  assert(resultado.includes("50"));
});

test("crearConfiguracionInmutable", () => {
  const config = { volumen: 50 };
  const inmutable = crearConfiguracionInmutable(config);
  assert.strictEqual(inmutable.volumen, 50);
});

// PARTE 9
test("crearEstadisticas", () => {
  const stats = crearEstadisticas(10, 5, 3);
  assert.strictEqual(stats["asesinatos"], 10);
  assert.strictEqual(stats["muertes"], 5);
});

test("sumarEstadistica", () => {
  const stats = { asesinatos: 10 };
  const stats2 = sumarEstadistica(stats, "asesinatos", 5);
  assert.strictEqual(stats2["asesinatos"], 15);
});

// PARTE 10
test("esJugador", () => {
  const jugador = { tipo: "jugador" as const, nombre: "H", nivel: 5 };
  assert.strictEqual(esJugador(jugador), true);
});

test("obtenerInfo", () => {
  const jugador = { tipo: "jugador" as const, nombre: "H", nivel: 5 };
  const info = obtenerInfo(jugador);
  assert(info.includes("H") && info.includes("5"));
});

// PARTE 11
test("extraerPrimero", () => {
  assert.strictEqual(extraerPrimero([1, 2, 3]), 1);
  assert.strictEqual(extraerPrimero(42), 42);
});

// PARTE 12
test("crearPersonajeNullable", () => {
  const p = crearPersonajeNullable();
  assert.strictEqual(p.nombre, null);
});

test("actualizarParcial", () => {
  const p: Personaje = { nombre: "H", nivel: 5, vida: 50, mana: 25 };
  const p2 = actualizarParcial(p, { nivel: 10 });
  assert.strictEqual(p2.nivel, 10);
});

// PARTE 13
test("crearEvento", () => {
  const evento = crearEvento("direccion-norte");
  assert(evento.includes("norte"));
});

// PARTE 14
test("agregarAlInventario", () => {
  const inv = {};
  const inv2 = agregarAlInventario(inv, "Poción", 5);
  assert.strictEqual(inv2["Poción"], 5);
});

test("obtenerCantidad", () => {
  const inv = { "Poción": 5 };
  assert.strictEqual(obtenerCantidad(inv, "Poción"), 5);
  assert.strictEqual(obtenerCantidad(inv, "Espada"), 0);
});

// PARTE 15
test("crearGuerrero", () => {
  const g = crearGuerrero("Arthas", 5);
  assert.strictEqual(g.nombre, "Arthas");
  assert.strictEqual(g.vida, 50);
});

test("crearMago", () => {
  const m = crearMago("Jaina", 5);
  assert.strictEqual(m.mana, 60);
});

test("esMago", () => {
  const g = crearGuerrero("Arthas", 5);
  const m = crearMago("Jaina", 5);
  assert.strictEqual(esMago(g), false);
  assert.strictEqual(esMago(m), true);
});
