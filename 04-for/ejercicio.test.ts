import { test } from "node:test";
import assert from "node:assert";
import {
  sumarExperiencia,
  contarItemsRaros,
  duplicarPuntajes,
  encontrarMaximoPuntaje,
  crearInventarioOrdenado,
  calcularDanioTotal,
  obtenerEnemigosNivelAlto,
} from "./ejercicio";

test("sumarExperiencia - array vacío", () => {
  assert.strictEqual(sumarExperiencia([]), 0);
});

test("sumarExperiencia - varios niveles", () => {
  assert.strictEqual(sumarExperiencia([10, 20, 30]), 60);
  assert.strictEqual(sumarExperiencia([5, 15, 25, 35]), 80);
  assert.strictEqual(sumarExperiencia([100]), 100);
});

test("contarItemsRaros - sin items raros", () => {
  assert.strictEqual(contarItemsRaros(["espada", "escudo", "poción"]), 0);
});

test("contarItemsRaros - con items raros", () => {
  assert.strictEqual(
    contarItemsRaros(["Espada rara", "Escudo", "Poción rara", "Daga"]),
    2
  );
  assert.strictEqual(
    contarItemsRaros(["espada RARA", "escudo", "poción Rara"]),
    2
  );
  assert.strictEqual(contarItemsRaros(["Espada rara", "Escudo raro"]), 2);
});

test("duplicarPuntajes - array vacío", () => {
  assert.deepStrictEqual(duplicarPuntajes([]), []);
});

test("duplicarPuntajes - varios puntajes", () => {
  assert.deepStrictEqual(duplicarPuntajes([10, 20, 30]), [20, 40, 60]);
  assert.deepStrictEqual(duplicarPuntajes([5, 15, 25]), [10, 30, 50]);
  assert.deepStrictEqual(duplicarPuntajes([100]), [200]);
});

test("encontrarMaximoPuntaje - array vacío", () => {
  assert.strictEqual(encontrarMaximoPuntaje([]), 0);
});

test("encontrarMaximoPuntaje - varios puntajes", () => {
  assert.strictEqual(encontrarMaximoPuntaje([10, 20, 30]), 30);
  assert.strictEqual(encontrarMaximoPuntaje([50, 15, 25, 35]), 50);
  assert.strictEqual(encontrarMaximoPuntaje([100]), 100);
  assert.strictEqual(encontrarMaximoPuntaje([5, 10, 3, 8]), 10);
});

test("crearInventarioOrdenado - array vacío", () => {
  assert.deepStrictEqual(crearInventarioOrdenado([]), []);
});

test("crearInventarioOrdenado - varios items", () => {
  assert.deepStrictEqual(
    crearInventarioOrdenado(["espada", "poción", "escudo"]),
    ["escudo", "espada", "poción"]
  );
  assert.deepStrictEqual(
    crearInventarioOrdenado(["z", "a", "m"]),
    ["a", "m", "z"]
  );
});

test("calcularDanioTotal - array vacío", () => {
  assert.strictEqual(calcularDanioTotal([]), 0);
});

test("calcularDanioTotal - varios ataques", () => {
  assert.strictEqual(
    calcularDanioTotal([
      { nombre: "Espadazo", danio: 10 },
      { nombre: "Flecha", danio: 5 },
      { nombre: "Hechizo", danio: 15 },
    ]),
    30
  );
  assert.strictEqual(
    calcularDanioTotal([{ nombre: "Golpe", danio: 20 }]),
    20
  );
});

test("obtenerEnemigosNivelAlto - array vacío", () => {
  assert.deepStrictEqual(obtenerEnemigosNivelAlto([], 10), []);
});

test("obtenerEnemigosNivelAlto - varios enemigos", () => {
  assert.deepStrictEqual(
    obtenerEnemigosNivelAlto(
      [
        { nombre: "Goblin", nivel: 5 },
        { nombre: "Orco", nivel: 10 },
        { nombre: "Dragón", nivel: 50 },
      ],
      10
    ),
    ["Orco", "Dragón"]
  );
  assert.deepStrictEqual(
    obtenerEnemigosNivelAlto(
      [
        { nombre: "Goblin", nivel: 5 },
        { nombre: "Orco", nivel: 10 },
        { nombre: "Dragón", nivel: 50 },
      ],
      20
    ),
    ["Dragón"]
  );
  assert.deepStrictEqual(
    obtenerEnemigosNivelAlto(
      [
        { nombre: "Goblin", nivel: 5 },
        { nombre: "Orco", nivel: 10 },
      ],
      100
    ),
    []
  );
});

