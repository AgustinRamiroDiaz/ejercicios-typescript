import { test } from "node:test";
import assert from "node:assert";
import {
  agregarItem,
  contarEnemigosDerrotados,
  encontrarItemMasRaro,
  calcularPuntajeTotal,
  filtrarItemsRaros,
  obtenerNombresEnemigos,
  encontrarEnemigoMasFuerte,
} from "./ejercicio";

test("agregarItem - agregar a inventario vacío", () => {
  assert.deepStrictEqual(agregarItem([], "espada"), ["espada"]);
});

test("agregarItem - agregar a inventario existente", () => {
  assert.deepStrictEqual(agregarItem(["espada", "escudo"], "poción"), [
    "espada",
    "escudo",
    "poción",
  ]);
});

test("contarEnemigosDerrotados - array vacío", () => {
  assert.strictEqual(contarEnemigosDerrotados([]), 0);
});

test("contarEnemigosDerrotados - varios enemigos", () => {
  assert.strictEqual(contarEnemigosDerrotados(["Goblin", "Orco", "Dragón"]), 3);
  assert.strictEqual(contarEnemigosDerrotados(["Goblin"]), 1);
});

test("encontrarItemMasRaro - array vacío", () => {
  assert.strictEqual(encontrarItemMasRaro([]), null);
});

test("encontrarItemMasRaro - encontrar primer item", () => {
  assert.strictEqual(encontrarItemMasRaro(["espada", "escudo"]), "espada");
  assert.strictEqual(encontrarItemMasRaro(["poción rara", "espada"]), "poción rara");
});

test("calcularPuntajeTotal - array vacío", () => {
  assert.strictEqual(calcularPuntajeTotal([]), 0);
});

test("calcularPuntajeTotal - varios puntajes", () => {
  assert.strictEqual(calcularPuntajeTotal([10, 20, 30]), 60);
  assert.strictEqual(calcularPuntajeTotal([5, 15, 25, 35]), 80);
  assert.strictEqual(calcularPuntajeTotal([100]), 100);
});

test("filtrarItemsRaros - sin items raros", () => {
  assert.deepStrictEqual(filtrarItemsRaros(["espada", "escudo", "poción"]), []);
});

test("filtrarItemsRaros - con items raros", () => {
  assert.deepStrictEqual(
    filtrarItemsRaros(["Espada rara", "Escudo", "Poción rara", "Daga"]),
    ["Espada rara", "Poción rara"]
  );
  assert.deepStrictEqual(
    filtrarItemsRaros(["espada RARA", "escudo", "poción Rara"]),
    ["espada RARA", "poción Rara"]
  );
});

test("obtenerNombresEnemigos - array vacío", () => {
  assert.deepStrictEqual(obtenerNombresEnemigos([]), []);
});

test("obtenerNombresEnemigos - varios enemigos", () => {
  assert.deepStrictEqual(
    obtenerNombresEnemigos([
      { nombre: "Goblin", nivel: 5 },
      { nombre: "Orco", nivel: 10 },
    ]),
    ["Goblin", "Orco"]
  );
  assert.deepStrictEqual(
    obtenerNombresEnemigos([{ nombre: "Dragón", nivel: 50 }]),
    ["Dragón"]
  );
});

test("encontrarEnemigoMasFuerte - array vacío", () => {
  assert.strictEqual(encontrarEnemigoMasFuerte([]), null);
});

test("encontrarEnemigoMasFuerte - un enemigo", () => {
  assert.strictEqual(
    encontrarEnemigoMasFuerte([{ nombre: "Goblin", nivel: 5 }]),
    "Goblin"
  );
});

test("encontrarEnemigoMasFuerte - varios enemigos", () => {
  assert.strictEqual(
    encontrarEnemigoMasFuerte([
      { nombre: "Goblin", nivel: 5 },
      { nombre: "Orco", nivel: 10 },
      { nombre: "Dragón", nivel: 50 },
    ]),
    "Dragón"
  );
  assert.strictEqual(
    encontrarEnemigoMasFuerte([
      { nombre: "Orco", nivel: 10 },
      { nombre: "Goblin", nivel: 5 },
    ]),
    "Orco"
  );
});

