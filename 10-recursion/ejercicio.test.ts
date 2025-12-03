import { test } from "node:test";
import assert from "node:assert";
import {
  factorial,
  fibonacci,
  sumarHastaN,
  potencia,
  invertirString,
  contarCaracter,
  esPalindromo,
  sumarArray,
  maximoArray,
  contarPares,
  aplanar,
  Enemigo,
  contarEnemigosVivos,
  calcularDanioTotal,
  Dungeon,
  contarNiveles,
  nivelMasProfundo,
  Item,
  buscarItem,
  Nodo,
  buscarEnArbol,
  contarNodos,
  generarSecuencia,
  repetirString,
  generarNivel,
  factorialConAcumulador,
  invertirArrayConAcumulador,
  fibonacciConCache,
  contarCaminos,
} from "./ejercicio.js";

// PARTE 1
test("factorial - casos básicos", () => {
  assert.strictEqual(factorial(0), 1);
  assert.strictEqual(factorial(1), 1);
  assert.strictEqual(factorial(5), 120);
});

test("fibonacci - secuencia correcta", () => {
  assert.strictEqual(fibonacci(0), 0);
  assert.strictEqual(fibonacci(1), 1);
  assert.strictEqual(fibonacci(6), 8);
});

test("sumarHastaN", () => {
  assert.strictEqual(sumarHastaN(0), 0);
  assert.strictEqual(sumarHastaN(5), 15);
  assert.strictEqual(sumarHastaN(10), 55);
});

test("potencia", () => {
  assert.strictEqual(potencia(2, 0), 1);
  assert.strictEqual(potencia(2, 3), 8);
  assert.strictEqual(potencia(5, 2), 25);
});

// PARTE 2
test("invertirString", () => {
  assert.strictEqual(invertirString(""), "");
  assert.strictEqual(invertirString("a"), "a");
  assert.strictEqual(invertirString("hola"), "aloh");
});

test("contarCaracter", () => {
  assert.strictEqual(contarCaracter("", "a"), 0);
  assert.strictEqual(contarCaracter("banana", "a"), 3);
  assert.strictEqual(contarCaracter("hola", "x"), 0);
});

test("esPalindromo", () => {
  assert.strictEqual(esPalindromo(""), true);
  assert.strictEqual(esPalindromo("a"), true);
  assert.strictEqual(esPalindromo("oso"), true);
  assert.strictEqual(esPalindromo("reconocer"), true);
  assert.strictEqual(esPalindromo("hola"), false);
});

// PARTE 3
test("sumarArray", () => {
  assert.strictEqual(sumarArray([]), 0);
  assert.strictEqual(sumarArray([5]), 5);
  assert.strictEqual(sumarArray([1, 2, 3, 4]), 10);
});

test("maximoArray", () => {
  assert.strictEqual(maximoArray([5]), 5);
  assert.strictEqual(maximoArray([1, 5, 3, 2]), 5);
  assert.strictEqual(maximoArray([10, 20, 15]), 20);
});

test("contarPares", () => {
  assert.strictEqual(contarPares([]), 0);
  assert.strictEqual(contarPares([1, 3, 5]), 0);
  assert.strictEqual(contarPares([2, 4, 6]), 3);
  assert.strictEqual(contarPares([1, 2, 3, 4]), 2);
});

test("aplanar", () => {
  assert.deepStrictEqual(aplanar([]), []);
  assert.deepStrictEqual(aplanar([1, 2, 3]), [1, 2, 3]);
  assert.deepStrictEqual(aplanar([1, [2, 3]]), [1, 2, 3]);
  assert.deepStrictEqual(aplanar([1, [2, [3, 4]], 5]), [1, 2, 3, 4, 5]);
});

// PARTE 4
test("contarEnemigosVivos", () => {
  const enemigos: Enemigo[] = [
    { nombre: "A", vida: 10, nivel: 1 },
    { nombre: "B", vida: 0, nivel: 1 },
    { nombre: "C", vida: 5, nivel: 1 },
  ];
  assert.strictEqual(contarEnemigosVivos(enemigos), 2);
});

test("calcularDanioTotal", () => {
  assert.strictEqual(calcularDanioTotal([], 2), 0);
  assert.strictEqual(calcularDanioTotal([10, 20], 2), 60);
});

test("contarNiveles", () => {
  const d1: Dungeon = { nombre: "D1", nivel: 1, subdungeons: [] };
  assert.strictEqual(contarNiveles(d1), 1);

  const d2: Dungeon = {
    nombre: "D2",
    nivel: 2,
    subdungeons: [d1],
  };
  assert.strictEqual(contarNiveles(d2), 2);
});

test("nivelMasProfundo", () => {
  const d1: Dungeon = { nombre: "D1", nivel: 5, subdungeons: [] };
  const d2: Dungeon = {
    nombre: "D2",
    nivel: 3,
    subdungeons: [d1],
  };
  assert.strictEqual(nivelMasProfundo(d2), 5);
});

// PARTE 5
test("buscarItem", () => {
  const items: Item[] = [
    { nombre: "Espada", valor: 100 },
    { nombre: "Escudo", valor: 50 },
  ];
  const encontrado = buscarItem(items, "Espada");
  assert.notStrictEqual(encontrado, null);
  assert.strictEqual(encontrado?.nombre, "Espada");
  assert.strictEqual(buscarItem(items, "NoExiste"), null);
});

test("buscarEnArbol", () => {
  const arbol: Nodo = {
    valor: 1,
    hijos: [
      { valor: 2, hijos: [] },
      { valor: 3, hijos: [{ valor: 4, hijos: [] }] },
    ],
  };
  assert.strictEqual(buscarEnArbol(arbol, 1), true);
  assert.strictEqual(buscarEnArbol(arbol, 4), true);
  assert.strictEqual(buscarEnArbol(arbol, 10), false);
});

test("contarNodos", () => {
  const arbol: Nodo = {
    valor: 1,
    hijos: [
      { valor: 2, hijos: [] },
      { valor: 3, hijos: [] },
    ],
  };
  assert.strictEqual(contarNodos(arbol), 3);
});

// PARTE 6
test("generarSecuencia", () => {
  assert.deepStrictEqual(generarSecuencia(5, 3), []);
  assert.deepStrictEqual(generarSecuencia(3, 6), [3, 4, 5, 6]);
});

test("repetirString", () => {
  assert.strictEqual(repetirString("a", 0), "");
  assert.strictEqual(repetirString("ha", 3), "hahaha");
});

test("generarNivel", () => {
  const nivel0 = generarNivel(0);
  assert.strictEqual(nivel0.nombre, "Nivel 0");
  assert.strictEqual(nivel0.nivel, 0);
  assert.strictEqual(nivel0.subdungeons.length, 0);

  const nivel2 = generarNivel(2);
  assert.strictEqual(nivel2.nivel, 2);
  assert.strictEqual(nivel2.subdungeons.length, 1);
  assert.strictEqual(nivel2.subdungeons[0].nivel, 1);
});

// PARTE 7
test("factorialConAcumulador", () => {
  assert.strictEqual(factorialConAcumulador(0), 1);
  assert.strictEqual(factorialConAcumulador(5), 120);
});

test("invertirArrayConAcumulador", () => {
  assert.deepStrictEqual(invertirArrayConAcumulador([]), []);
  assert.deepStrictEqual(invertirArrayConAcumulador([1, 2, 3]), [3, 2, 1]);
});

// PARTE 8
test("fibonacciConCache", () => {
  assert.strictEqual(fibonacciConCache(10), 55);
  assert.strictEqual(fibonacciConCache(15), 610);
});

test("contarCaminos", () => {
  assert.strictEqual(contarCaminos(0, 0), 1);
  assert.strictEqual(contarCaminos(1, 1), 2);
  assert.strictEqual(contarCaminos(2, 2), 6);
});
