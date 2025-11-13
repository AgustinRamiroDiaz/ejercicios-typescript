import { test } from "node:test";
import assert from "node:assert";
import { atacarHastaDerrotar, buscarItem, subirNivel } from "./ejercicio";

test("atacarHastaDerrotar - enemigo débil", () => {
  assert.strictEqual(atacarHastaDerrotar(50, 10), 5);
  assert.strictEqual(atacarHastaDerrotar(30, 15), 2);
});

test("atacarHastaDerrotar - enemigo fuerte", () => {
  assert.strictEqual(atacarHastaDerrotar(100, 7), 15); // 100 / 7 = 14.28... -> 15 ataques
  assert.strictEqual(atacarHastaDerrotar(200, 25), 8);
});

test("atacarHastaDerrotar - enemigo con vida exacta", () => {
  assert.strictEqual(atacarHastaDerrotar(50, 50), 1);
  assert.strictEqual(atacarHastaDerrotar(100, 50), 2);
});

test("buscarItem - item encontrado", () => {
  const items = ["espada", "escudo", "poción", "llave"];
  assert.strictEqual(buscarItem(items, "poción", 10), "poción");
  assert.strictEqual(buscarItem(items, "espada", 10), "espada");
});

test("buscarItem - item no encontrado por falta de intentos", () => {
  const items = ["espada", "escudo", "poción", "llave"];
  assert.strictEqual(buscarItem(items, "poción", 2), null);
  assert.strictEqual(buscarItem(items, "llave", 1), null);
});

test("buscarItem - item no existe", () => {
  const items = ["espada", "escudo", "poción"];
  assert.strictEqual(buscarItem(items, "daga", 10), null);
});

test("subirNivel - subir un nivel", () => {
  assert.strictEqual(subirNivel(1, 2, 100), 100);
  assert.strictEqual(subirNivel(5, 6, 50), 50);
});

test("subirNivel - subir varios niveles", () => {
  assert.strictEqual(subirNivel(1, 3, 100), 200);
  assert.strictEqual(subirNivel(5, 8, 50), 150);
});

test("subirNivel - mismo nivel", () => {
  assert.strictEqual(subirNivel(5, 5, 100), 0);
  assert.strictEqual(subirNivel(10, 10, 50), 0);
});

