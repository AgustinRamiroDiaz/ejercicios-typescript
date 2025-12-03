import { test } from "node:test";
import assert from "node:assert";
import {
  obtenerPrecioItem,
  agregarItemInventario,
  contarItems,
  obtenerItemsDisponibles,
  calcularValorTotalInventario,
  fusionarInventarios,
  obtenerItemMasCaro,
} from "./ejercicio";

test("obtenerPrecioItem - item existe", () => {
  const precios = { espada: 100, escudo: 50, poción: 25 };
  assert.strictEqual(obtenerPrecioItem(precios, "espada"), 100);
  assert.strictEqual(obtenerPrecioItem(precios, "poción"), 25);
});

test("obtenerPrecioItem - item no existe", () => {
  const precios = { espada: 100, escudo: 50 };
  assert.strictEqual(obtenerPrecioItem(precios, "daga"), 0);
  assert.strictEqual(obtenerPrecioItem(precios, "armadura"), 0);
});

test("agregarItemInventario - item nuevo", () => {
  const inventario = {};
  const resultado = agregarItemInventario(inventario, "espada", 1);
  assert.strictEqual(resultado["espada"], 1);
});

test("agregarItemInventario - item existente", () => {
  const inventario = { espada: 2, escudo: 1 };
  const resultado = agregarItemInventario(inventario, "espada", 3);
  assert.strictEqual(resultado["espada"], 5);
  assert.strictEqual(resultado["escudo"], 1);
});

test("agregarItemInventario - no modifica original", () => {
  const inventario = { espada: 2 };
  agregarItemInventario(inventario, "escudo", 1);
});

test("contarItems - inventario vacío", () => {
  assert.strictEqual(contarItems({}), 0);
});

test("contarItems - varios items", () => {
  assert.strictEqual(contarItems({ espada: 2, escudo: 1, poción: 3 }), 6);
  assert.strictEqual(contarItems({ espada: 10 }), 10);
});

test("obtenerItemsDisponibles - inventario vacío", () => {
  assert.deepStrictEqual(obtenerItemsDisponibles({}), []);
});

test("obtenerItemsDisponibles - varios items", () => {
  const resultado = obtenerItemsDisponibles({
    espada: 2,
    escudo: 0,
    poción: 3,
    daga: 1,
  });
  assert.strictEqual(resultado.length, 3);
  assert(resultado.includes("espada"));
  assert(resultado.includes("poción"));
  assert(resultado.includes("daga"));
  assert(!resultado.includes("escudo"));
});

test("calcularValorTotalInventario - inventario vacío", () => {
  assert.strictEqual(calcularValorTotalInventario({}, { espada: 100 }), 0);
});

test("calcularValorTotalInventario - varios items", () => {
  const inventario = { espada: 2, escudo: 1, poción: 3 };
  const precios = { espada: 100, escudo: 50, poción: 25 };
  assert.strictEqual(calcularValorTotalInventario(inventario, precios), 325); // 2*100 + 1*50 + 3*25
});

test("calcularValorTotalInventario - item sin precio", () => {
  const inventario = { espada: 2, daga: 1 };
  const precios = { espada: 100 };
  assert.strictEqual(calcularValorTotalInventario(inventario, precios), 200);
});

test("fusionarInventarios - inventarios vacíos", () => {
  assert.deepStrictEqual(fusionarInventarios({}, {}), {});
});

test("fusionarInventarios - sin items comunes", () => {
  const resultado = fusionarInventarios({ espada: 2 }, { escudo: 1 });
  assert.strictEqual(resultado["espada"], 2);
  assert.strictEqual(resultado["escudo"], 1);
});

test("fusionarInventarios - con items comunes", () => {
  const resultado = fusionarInventarios(
    { espada: 2, poción: 1 },
    { espada: 3, escudo: 1 }
  );
  assert.strictEqual(resultado["espada"], 5);
  assert.strictEqual(resultado["poción"], 1);
  assert.strictEqual(resultado["escudo"], 1);
});

test("obtenerItemMasCaro - diccionario vacío", () => {
  assert.strictEqual(obtenerItemMasCaro({}), null);
});

test("obtenerItemMasCaro - un item", () => {
  assert.strictEqual(obtenerItemMasCaro({ espada: 100 }), "espada");
});

test("obtenerItemMasCaro - varios items", () => {
  assert.strictEqual(
    obtenerItemMasCaro({ espada: 100, escudo: 50, poción: 200 }),
    "poción"
  );
  assert.strictEqual(
    obtenerItemMasCaro({ espada: 100, escudo: 150, poción: 25 }),
    "escudo"
  );
});

