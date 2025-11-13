import { test } from "node:test";
import assert from "node:assert";
import {
  Personaje,
  Item,
  Enemigo,
  crearPersonaje,
  estaVivo,
  recibirDanio,
  usarHabilidad,
  calcularDanioTotal,
  encontrarEnemigoMasDebil,
  puedeDerrotarEnemigo,
  calcularValorTotalInventario,
  filtrarItemsPorTipo,
} from "./ejercicio";

test("crearPersonaje - nivel 1", () => {
  const personaje = crearPersonaje("Héroe", 1);
  assert.strictEqual(personaje.nombre, "Héroe");
  assert.strictEqual(personaje.nivel, 1);
  assert.strictEqual(personaje.vida, 10);
  assert.strictEqual(personaje.mana, 5);
});

test("crearPersonaje - nivel 10", () => {
  const personaje = crearPersonaje("Guerrero", 10);
  assert.strictEqual(personaje.nombre, "Guerrero");
  assert.strictEqual(personaje.nivel, 10);
  assert.strictEqual(personaje.vida, 100);
  assert.strictEqual(personaje.mana, 50);
});

test("estaVivo - personaje vivo", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 50,
    mana: 25,
  };
  assert.strictEqual(estaVivo(personaje), true);
});

test("estaVivo - personaje muerto", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 0,
    mana: 25,
  };
  assert.strictEqual(estaVivo(personaje), false);
});

test("recibirDanio - daño normal", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 50,
    mana: 25,
  };
  const resultado = recibirDanio(personaje, 20);
  assert.strictEqual(resultado.vida, 30);
  assert.strictEqual(resultado.nombre, personaje.nombre);
  assert.strictEqual(resultado.nivel, personaje.nivel);
  assert.strictEqual(resultado.mana, personaje.mana);
});

test("recibirDanio - daño excesivo", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 50,
    mana: 25,
  };
  const resultado = recibirDanio(personaje, 100);
  assert.strictEqual(resultado.vida, 0);
});

test("usarHabilidad - mana suficiente", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 50,
    mana: 25,
  };
  const resultado = usarHabilidad(personaje, 10);
  assert.notStrictEqual(resultado, null);
  if (resultado) {
    assert.strictEqual(resultado.mana, 15);
    assert.strictEqual(resultado.vida, personaje.vida);
  }
});

test("usarHabilidad - mana insuficiente", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 50,
    mana: 5,
  };
  const resultado = usarHabilidad(personaje, 10);
  assert.strictEqual(resultado, null);
});

test("calcularDanioTotal - array vacío", () => {
  assert.strictEqual(calcularDanioTotal([]), 0);
});

test("calcularDanioTotal - varios enemigos", () => {
  const enemigos: Enemigo[] = [
    { nombre: "Goblin", nivel: 5, vida: 30, danio: 10 },
    { nombre: "Orco", nivel: 10, vida: 100, danio: 20 },
    { nombre: "Dragón", nivel: 50, vida: 500, danio: 50 },
  ];
  assert.strictEqual(calcularDanioTotal(enemigos), 80);
});

test("encontrarEnemigoMasDebil - array vacío", () => {
  assert.strictEqual(encontrarEnemigoMasDebil([]), null);
});

test("encontrarEnemigoMasDebil - varios enemigos", () => {
  const enemigos: Enemigo[] = [
    { nombre: "Goblin", nivel: 5, vida: 30, danio: 10 },
    { nombre: "Orco", nivel: 10, vida: 100, danio: 20 },
    { nombre: "Dragón", nivel: 50, vida: 500, danio: 50 },
  ];
  const resultado = encontrarEnemigoMasDebil(enemigos);
  assert.notStrictEqual(resultado, null);
  if (resultado) {
    assert.strictEqual(resultado.nombre, "Goblin");
    assert.strictEqual(resultado.vida, 30);
  }
});

test("puedeDerrotarEnemigo - puede derrotar", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 10,
    vida: 100,
    mana: 50,
  };
  const enemigo: Enemigo = {
    nombre: "Goblin",
    nivel: 5,
    vida: 30,
    danio: 10,
  };
  assert.strictEqual(puedeDerrotarEnemigo(personaje, enemigo), true);
});

test("puedeDerrotarEnemigo - nivel insuficiente", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 5,
    vida: 100,
    mana: 50,
  };
  const enemigo: Enemigo = {
    nombre: "Dragón",
    nivel: 50,
    vida: 500,
    danio: 50,
  };
  assert.strictEqual(puedeDerrotarEnemigo(personaje, enemigo), false);
});

test("puedeDerrotarEnemigo - vida insuficiente", () => {
  const personaje: Personaje = {
    nombre: "Héroe",
    nivel: 10,
    vida: 5,
    mana: 50,
  };
  const enemigo: Enemigo = {
    nombre: "Orco",
    nivel: 5,
    vida: 100,
    danio: 10,
  };
  assert.strictEqual(puedeDerrotarEnemigo(personaje, enemigo), false);
});

test("calcularValorTotalInventario - array vacío", () => {
  assert.strictEqual(calcularValorTotalInventario([]), 0);
});

test("calcularValorTotalInventario - varios items", () => {
  const items: Item[] = [
    { nombre: "Espada", tipo: "arma", valor: 100 },
    { nombre: "Escudo", tipo: "armadura", valor: 50 },
    { nombre: "Poción", tipo: "consumible", valor: 25 },
  ];
  assert.strictEqual(calcularValorTotalInventario(items), 175);
});

test("filtrarItemsPorTipo - array vacío", () => {
  assert.deepStrictEqual(filtrarItemsPorTipo([], "arma"), []);
});

test("filtrarItemsPorTipo - varios items", () => {
  const items: Item[] = [
    { nombre: "Espada", tipo: "arma", valor: 100 },
    { nombre: "Daga", tipo: "arma", valor: 50 },
    { nombre: "Escudo", tipo: "armadura", valor: 50 },
    { nombre: "Poción", tipo: "consumible", valor: 25 },
  ];
  const resultado = filtrarItemsPorTipo(items, "arma");
  assert.strictEqual(resultado.length, 2);
  assert(resultado.some((item) => item.nombre === "Espada"));
  assert(resultado.some((item) => item.nombre === "Daga"));
});

