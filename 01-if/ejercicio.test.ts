import { test } from "node:test";
import assert from "node:assert";
import { puedeUsarArma, puedeUsarHabilidad, calcularDanio } from "./ejercicio";

test("puedeUsarArma - nivel suficiente y mana suficiente", () => {
  assert.strictEqual(puedeUsarArma(5, 10), true);
  assert.strictEqual(puedeUsarArma(10, 20), true);
  assert.strictEqual(puedeUsarArma(5, 10), true);
});

test("puedeUsarArma - nivel insuficiente", () => {
  assert.strictEqual(puedeUsarArma(4, 10), false);
  assert.strictEqual(puedeUsarArma(3, 20), false);
});

test("puedeUsarArma - mana insuficiente", () => {
  assert.strictEqual(puedeUsarArma(5, 9), false);
  assert.strictEqual(puedeUsarArma(10, 5), false);
});

test("puedeUsarHabilidad - habilidad especial", () => {
  assert.strictEqual(puedeUsarHabilidad(50), "Puede usar habilidad especial");
  assert.strictEqual(puedeUsarHabilidad(100), "Puede usar habilidad especial");
});

test("puedeUsarHabilidad - habilidad normal", () => {
  assert.strictEqual(puedeUsarHabilidad(20), "Puede usar habilidad normal");
  assert.strictEqual(puedeUsarHabilidad(30), "Puede usar habilidad normal");
  assert.strictEqual(puedeUsarHabilidad(49), "Puede usar habilidad normal");
});

test("puedeUsarHabilidad - sin mana suficiente", () => {
  assert.strictEqual(puedeUsarHabilidad(19), "No tiene suficiente mana");
  assert.strictEqual(puedeUsarHabilidad(0), "No tiene suficiente mana");
});

test("calcularDanio - con arma y nivel bajo", () => {
  assert.strictEqual(calcularDanio(5, true), 50);
  assert.strictEqual(calcularDanio(3, true), 30);
});

test("calcularDanio - sin arma y nivel bajo", () => {
  assert.strictEqual(calcularDanio(5, false), 25);
  assert.strictEqual(calcularDanio(3, false), 15);
});

test("calcularDanio - con arma y nivel alto", () => {
  assert.strictEqual(calcularDanio(11, true), 165); // 11 * 10 * 1.5
  assert.strictEqual(calcularDanio(20, true), 300); // 20 * 10 * 1.5
});

test("calcularDanio - sin arma y nivel alto", () => {
  assert.strictEqual(calcularDanio(11, false), 82.5); // 11 * 5 * 1.5
  assert.strictEqual(calcularDanio(20, false), 150); // 20 * 5 * 1.5
});

