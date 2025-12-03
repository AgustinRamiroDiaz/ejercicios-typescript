import { test } from "node:test";
import assert from "node:assert";
import {
  Personaje,
  Enemigo,
  Item,
  Moneda,
  Inventario,
  Tienda,
  combatir,
  combateCompleto,
  encontrarEnemigoMasDebil,
  encontrarEnemigoMasFuerte,
  calcularDanioTotal,
  derrotarTodos,
  recolectarMonedas,
  generarMonedasAleatorias,
} from "./ejercicio";

// ============================================================
// TESTS PARTE 1: Clase Personaje
// ============================================================

test("Personaje - constructor con valores por defecto", () => {
  const personaje = new Personaje("Héroe");
  assert.strictEqual(personaje.nombre, "Héroe");
  assert.strictEqual(personaje.nivel, 1);
  assert.strictEqual(personaje.vida, 10);
  assert.strictEqual(personaje.vidaMaxima, 10);
  assert.strictEqual(personaje.mana, 5);
  assert.strictEqual(personaje.manaMaximo, 5);
  assert.strictEqual(personaje.oro, 0);
  assert.strictEqual(personaje.experiencia, 0);
});

test("Personaje - constructor con nivel específico", () => {
  const personaje = new Personaje("Guerrero", 5);
  assert.strictEqual(personaje.nombre, "Guerrero");
  assert.strictEqual(personaje.nivel, 5);
  assert.strictEqual(personaje.vida, 50);
  assert.strictEqual(personaje.vidaMaxima, 50);
  assert.strictEqual(personaje.mana, 25);
  assert.strictEqual(personaje.manaMaximo, 25);
});

test("Personaje - estaVivo retorna true cuando tiene vida", () => {
  const personaje = new Personaje("Héroe", 5);
  assert.strictEqual(personaje.estaVivo(), true);
});

test("Personaje - estaVivo retorna false cuando no tiene vida", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(100);
  assert.strictEqual(personaje.estaVivo(), false);
});

test("Personaje - recibirDanio reduce la vida", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(20);
  assert.strictEqual(personaje.vida, 30);
});

test("Personaje - recibirDanio no reduce la vida por debajo de 0", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(100);
  assert.strictEqual(personaje.vida, 0);
});

test("Personaje - curar aumenta la vida", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(20);
  personaje.curar(10);
  assert.strictEqual(personaje.vida, 40);
});

test("Personaje - curar no supera la vida máxima", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(10);
  personaje.curar(100);
  assert.strictEqual(personaje.vida, 50);
});

test("Personaje - usarMana reduce el mana si es suficiente", () => {
  const personaje = new Personaje("Héroe", 5);
  const resultado = personaje.usarMana(10);
  assert.strictEqual(resultado, true);
  assert.strictEqual(personaje.mana, 15);
});

test("Personaje - usarMana retorna false si no hay suficiente", () => {
  const personaje = new Personaje("Héroe", 5);
  const resultado = personaje.usarMana(30);
  assert.strictEqual(resultado, false);
  assert.strictEqual(personaje.mana, 25);
});

test("Personaje - recuperarMana aumenta el mana", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.usarMana(10);
  personaje.recuperarMana(5);
  assert.strictEqual(personaje.mana, 20);
});

test("Personaje - recuperarMana no supera el mana máximo", () => {
  const personaje = new Personaje("Héroe", 5);
  personaje.recuperarMana(100);
  assert.strictEqual(personaje.mana, 25);
});

test("Personaje - ganarExperiencia sin subir de nivel", () => {
  const personaje = new Personaje("Héroe", 1);
  const subioNivel = personaje.ganarExperiencia(50);
  assert.strictEqual(subioNivel, false);
  assert.strictEqual(personaje.experiencia, 50);
  assert.strictEqual(personaje.nivel, 1);
});

test("Personaje - ganarExperiencia y subir de nivel", () => {
  const personaje = new Personaje("Héroe", 1);
  const subioNivel = personaje.ganarExperiencia(100);
  assert.strictEqual(subioNivel, true);
  assert.strictEqual(personaje.nivel, 2);
  assert.strictEqual(personaje.experiencia, 0);
  assert.strictEqual(personaje.vidaMaxima, 20);
  assert.strictEqual(personaje.vida, 20);
  assert.strictEqual(personaje.manaMaximo, 10);
  assert.strictEqual(personaje.mana, 10);
});

test("Personaje - ganarExperiencia con experiencia restante", () => {
  const personaje = new Personaje("Héroe", 1);
  personaje.ganarExperiencia(150);
  assert.strictEqual(personaje.nivel, 2);
  assert.strictEqual(personaje.experiencia, 50);
});

test("Personaje - recogerOro aumenta el oro", () => {
  const personaje = new Personaje("Héroe", 1);
  personaje.recogerOro(50);
  assert.strictEqual(personaje.oro, 50);
  personaje.recogerOro(30);
  assert.strictEqual(personaje.oro, 80);
});

test("Personaje - gastarOro reduce el oro si es suficiente", () => {
  const personaje = new Personaje("Héroe", 1);
  personaje.recogerOro(100);
  const resultado = personaje.gastarOro(60);
  assert.strictEqual(resultado, true);
  assert.strictEqual(personaje.oro, 40);
});

test("Personaje - gastarOro retorna false si no hay suficiente", () => {
  const personaje = new Personaje("Héroe", 1);
  personaje.recogerOro(50);
  const resultado = personaje.gastarOro(60);
  assert.strictEqual(resultado, false);
  assert.strictEqual(personaje.oro, 50);
});

// ============================================================
// TESTS PARTE 2: Clase Enemigo
// ============================================================

test("Enemigo - constructor con valores por defecto", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  assert.strictEqual(enemigo.nombre, "Goblin");
  assert.strictEqual(enemigo.nivel, 3);
  assert.strictEqual(enemigo.vida, 24);
  assert.strictEqual(enemigo.vidaMaxima, 24);
  assert.strictEqual(enemigo.danio, 15);
  assert.strictEqual(enemigo.oroPorDerrota, 10);
  assert.strictEqual(enemigo.experienciaPorDerrota, 20);
});

test("Enemigo - constructor con valores personalizados", () => {
  const enemigo = new Enemigo("Dragón", 10, 50, 100, 200);
  assert.strictEqual(enemigo.oroPorDerrota, 100);
  assert.strictEqual(enemigo.experienciaPorDerrota, 200);
});

test("Enemigo - estaVivo retorna true cuando tiene vida", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  assert.strictEqual(enemigo.estaVivo(), true);
});

test("Enemigo - estaVivo retorna false cuando no tiene vida", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  enemigo.recibirDanio(100);
  assert.strictEqual(enemigo.estaVivo(), false);
});

test("Enemigo - recibirDanio reduce la vida", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  enemigo.recibirDanio(10);
  assert.strictEqual(enemigo.vida, 14);
});

test("Enemigo - recibirDanio no reduce la vida por debajo de 0", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  enemigo.recibirDanio(100);
  assert.strictEqual(enemigo.vida, 0);
});

test("Enemigo - atacar reduce la vida del personaje", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  const personaje = new Personaje("Héroe", 5);
  enemigo.atacar(personaje);
  assert.strictEqual(personaje.vida, 35);
});

test("Enemigo - atacar no hace nada si el enemigo está muerto", () => {
  const enemigo = new Enemigo("Goblin", 3, 15);
  const personaje = new Personaje("Héroe", 5);
  enemigo.recibirDanio(100);
  enemigo.atacar(personaje);
  assert.strictEqual(personaje.vida, 50);
});

test("Enemigo - obtenerRecompensas retorna oro y experiencia", () => {
  const enemigo = new Enemigo("Goblin", 3, 15, 50, 100);
  const recompensas = enemigo.obtenerRecompensas();
  assert.strictEqual(recompensas.oro, 50);
  assert.strictEqual(recompensas.experiencia, 100);
});

// ============================================================
// TESTS PARTE 3: Clase Item
// ============================================================

test("Item - constructor inicializa correctamente", () => {
  const item = new Item("Poción de vida", "curacion", 50, 30);
  assert.strictEqual(item.nombre, "Poción de vida");
  assert.strictEqual(item.tipo, "curacion");
  assert.strictEqual(item.valor, 50);
  assert.strictEqual(item.precio, 30);
});

test("Item - usar con tipo curacion cura al personaje", () => {
  const item = new Item("Poción de vida", "curacion", 50, 30);
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(30);
  const mensaje = item.usar(personaje);
  assert.strictEqual(personaje.vida, 40);
  assert.match(mensaje, /Poción de vida/);
});

test("Item - usar con tipo mana recupera el mana", () => {
  const item = new Item("Poción de mana", "mana", 30, 25);
  const personaje = new Personaje("Héroe", 5);
  personaje.usarMana(20);
  const mensaje = item.usar(personaje);
  assert.strictEqual(personaje.mana, 15);
  assert.match(mensaje, /Poción de mana/);
});

test("Item - usar con tipo danio no afecta al personaje", () => {
  const item = new Item("Bomba", "danio", 40, 50);
  const personaje = new Personaje("Héroe", 5);
  const vidaInicial = personaje.vida;
  const manaInicial = personaje.mana;
  item.usar(personaje);
  assert.strictEqual(personaje.vida, vidaInicial);
  assert.strictEqual(personaje.mana, manaInicial);
});

test("Item - usarContra con tipo danio daña al enemigo", () => {
  const item = new Item("Bomba", "danio", 40, 50);
  const enemigo = new Enemigo("Goblin", 3, 15);
  const mensaje = item.usarContra(enemigo);
  assert.strictEqual(enemigo.vida, 0); // 24 - 40 = 0 (limitado a 0)
  assert.match(mensaje, /Bomba/);
});

test("Item - usarContra con tipo no-danio no afecta al enemigo", () => {
  const item = new Item("Poción de vida", "curacion", 50, 30);
  const enemigo = new Enemigo("Goblin", 3, 15);
  const vidaInicial = enemigo.vida;
  item.usarContra(enemigo);
  assert.strictEqual(enemigo.vida, vidaInicial);
});

// ============================================================
// TESTS PARTE 4: Clase Moneda
// ============================================================

test("Moneda - constructor con valores normales", () => {
  const moneda = new Moneda(10);
  assert.strictEqual(moneda.valor, 10);
  assert.strictEqual(moneda.esRara, false);
});

test("Moneda - constructor con moneda rara", () => {
  const moneda = new Moneda(10, true);
  assert.strictEqual(moneda.valor, 10);
  assert.strictEqual(moneda.esRara, true);
});

test("Moneda - obtenerValor para moneda normal", () => {
  const moneda = new Moneda(10);
  assert.strictEqual(moneda.obtenerValor(), 10);
});

test("Moneda - obtenerValor para moneda rara", () => {
  const moneda = new Moneda(10, true);
  assert.strictEqual(moneda.obtenerValor(), 20);
});

test("Moneda - recoger aumenta el oro del personaje", () => {
  const moneda = new Moneda(10);
  const personaje = new Personaje("Héroe", 1);
  moneda.recoger(personaje);
  assert.strictEqual(personaje.oro, 10);
});

test("Moneda - recoger moneda rara da doble oro", () => {
  const moneda = new Moneda(10, true);
  const personaje = new Personaje("Héroe", 1);
  moneda.recoger(personaje);
  assert.strictEqual(personaje.oro, 20);
});

// ============================================================
// TESTS PARTE 5: Clase Inventario
// ============================================================

test("Inventario - constructor inicializa vacío", () => {
  const inventario = new Inventario();
  assert.strictEqual(inventario.items.length, 0);
  assert.strictEqual(inventario.capacidadMaxima, 10);
});

test("Inventario - constructor con capacidad personalizada", () => {
  const inventario = new Inventario(5);
  assert.strictEqual(inventario.capacidadMaxima, 5);
});

test("Inventario - agregarItem agrega cuando hay espacio", () => {
  const inventario = new Inventario();
  const item = new Item("Poción", "curacion", 50, 30);
  const resultado = inventario.agregarItem(item);
  assert.strictEqual(resultado, true);
  assert.strictEqual(inventario.items.length, 1);
});

test("Inventario - agregarItem retorna false cuando está lleno", () => {
  const inventario = new Inventario(1);
  const item1 = new Item("Poción 1", "curacion", 50, 30);
  const item2 = new Item("Poción 2", "curacion", 50, 30);
  inventario.agregarItem(item1);
  const resultado = inventario.agregarItem(item2);
  assert.strictEqual(resultado, false);
  assert.strictEqual(inventario.items.length, 1);
});

test("Inventario - usarItem usa y elimina el item", () => {
  const inventario = new Inventario();
  const item = new Item("Poción", "curacion", 50, 30);
  const personaje = new Personaje("Héroe", 5);
  personaje.recibirDanio(30);
  inventario.agregarItem(item);
  const mensaje = inventario.usarItem(0, personaje);
  assert.notStrictEqual(mensaje, null);
  assert.strictEqual(inventario.items.length, 0);
  assert.strictEqual(personaje.vida, 40);
});

test("Inventario - usarItem retorna null con índice inválido", () => {
  const inventario = new Inventario();
  const personaje = new Personaje("Héroe", 5);
  const mensaje = inventario.usarItem(0, personaje);
  assert.strictEqual(mensaje, null);
});

test("Inventario - usarItemContra usa y elimina el item", () => {
  const inventario = new Inventario();
  const item = new Item("Bomba", "danio", 40, 50);
  const enemigo = new Enemigo("Goblin", 3, 15);
  inventario.agregarItem(item);
  const mensaje = inventario.usarItemContra(0, enemigo);
  assert.notStrictEqual(mensaje, null);
  assert.strictEqual(inventario.items.length, 0);
});

test("Inventario - obtenerItemsPorTipo filtra correctamente", () => {
  const inventario = new Inventario();
  inventario.agregarItem(new Item("Poción vida", "curacion", 50, 30));
  inventario.agregarItem(new Item("Poción mana", "mana", 30, 25));
  inventario.agregarItem(new Item("Bomba", "danio", 40, 50));
  const curacion = inventario.obtenerItemsPorTipo("curacion");
  assert.strictEqual(curacion.length, 1);
  assert.strictEqual(curacion[0].nombre, "Poción vida");
});

test("Inventario - calcularValorTotal suma correctamente", () => {
  const inventario = new Inventario();
  inventario.agregarItem(new Item("Poción vida", "curacion", 50, 30));
  inventario.agregarItem(new Item("Poción mana", "mana", 30, 25));
  inventario.agregarItem(new Item("Bomba", "danio", 40, 50));
  assert.strictEqual(inventario.calcularValorTotal(), 105);
});

test("Inventario - estaLleno retorna false cuando hay espacio", () => {
  const inventario = new Inventario(2);
  inventario.agregarItem(new Item("Poción", "curacion", 50, 30));
  assert.strictEqual(inventario.estaLleno(), false);
});

test("Inventario - estaLleno retorna true cuando está lleno", () => {
  const inventario = new Inventario(1);
  inventario.agregarItem(new Item("Poción", "curacion", 50, 30));
  assert.strictEqual(inventario.estaLleno(), true);
});

// ============================================================
// TESTS PARTE 6: Funciones de combate
// ============================================================

test("combatir - personaje derrota enemigo en un turno", () => {
  const personaje = new Personaje("Héroe", 10);
  const enemigo = new Enemigo("Slime", 1, 5);
  const resultado = combatir(personaje, enemigo);
  assert.strictEqual(resultado, "victoria");
  assert.strictEqual(enemigo.estaVivo(), false);
});

test("combatir - combate en curso", () => {
  const personaje = new Personaje("Héroe", 5);
  const enemigo = new Enemigo("Orco", 10, 10);
  const resultado = combatir(personaje, enemigo);
  assert.strictEqual(resultado, "en_curso");
  assert.strictEqual(personaje.estaVivo(), true);
  assert.strictEqual(enemigo.estaVivo(), true);
});

test("combatir - personaje es derrotado", () => {
  const personaje = new Personaje("Héroe", 1);
  const enemigo = new Enemigo("Dragón", 20, 100);
  const resultado = combatir(personaje, enemigo);
  assert.strictEqual(resultado, "derrota");
  assert.strictEqual(personaje.estaVivo(), false);
});

test("combatir - personaje recibe recompensas al ganar", () => {
  const personaje = new Personaje("Héroe", 10);
  const oroInicial = personaje.oro;
  const expInicial = personaje.experiencia;
  const enemigo = new Enemigo("Slime", 1, 5, 20, 50);
  combatir(personaje, enemigo);
  assert.strictEqual(personaje.oro, oroInicial + 20);
  assert.strictEqual(personaje.experiencia, expInicial + 50);
});

test("combateCompleto - personaje gana", () => {
  const personaje = new Personaje("Héroe", 10);
  const enemigo = new Enemigo("Goblin", 3, 10);
  const resultado = combateCompleto(personaje, enemigo);
  assert.strictEqual(resultado, "victoria");
  assert.strictEqual(personaje.estaVivo(), true);
  assert.strictEqual(enemigo.estaVivo(), false);
});

test("combateCompleto - personaje pierde", () => {
  const personaje = new Personaje("Héroe", 1);
  const enemigo = new Enemigo("Dragón", 20, 50);
  const resultado = combateCompleto(personaje, enemigo);
  assert.strictEqual(resultado, "derrota");
  assert.strictEqual(personaje.estaVivo(), false);
});

test("encontrarEnemigoMasDebil - array vacío", () => {
  const resultado = encontrarEnemigoMasDebil([]);
  assert.strictEqual(resultado, null);
});

test("encontrarEnemigoMasDebil - encuentra el más débil", () => {
  const enemigos = [
    new Enemigo("Orco", 10, 20),
    new Enemigo("Goblin", 3, 15),
    new Enemigo("Dragón", 50, 100),
  ];
  const resultado = encontrarEnemigoMasDebil(enemigos);
  assert.notStrictEqual(resultado, null);
  if (resultado) {
    assert.strictEqual(resultado.nombre, "Goblin");
  }
});

test("encontrarEnemigoMasFuerte - array vacío", () => {
  const resultado = encontrarEnemigoMasFuerte([]);
  assert.strictEqual(resultado, null);
});

test("encontrarEnemigoMasFuerte - encuentra el más fuerte", () => {
  const enemigos = [
    new Enemigo("Orco", 10, 20),
    new Enemigo("Goblin", 3, 15),
    new Enemigo("Dragón", 50, 100),
  ];
  const resultado = encontrarEnemigoMasFuerte(enemigos);
  assert.notStrictEqual(resultado, null);
  if (resultado) {
    assert.strictEqual(resultado.nombre, "Dragón");
  }
});

test("calcularDanioTotal - array vacío", () => {
  const resultado = calcularDanioTotal([]);
  assert.strictEqual(resultado, 0);
});

test("calcularDanioTotal - suma daño de enemigos vivos", () => {
  const enemigos = [
    new Enemigo("Orco", 10, 20),
    new Enemigo("Goblin", 3, 15),
    new Enemigo("Dragón", 50, 100),
  ];
  enemigos[1].recibirDanio(100); // Mata al Goblin
  const resultado = calcularDanioTotal(enemigos);
  assert.strictEqual(resultado, 120); // Solo Orco (20) + Dragón (100)
});

test("derrotarTodos - personaje derrota a todos", () => {
  const personaje = new Personaje("Héroe", 50);
  const enemigos = [
    new Enemigo("Goblin", 3, 5),
    new Enemigo("Orco", 5, 10),
    new Enemigo("Slime", 1, 3),
  ];
  const resultado = derrotarTodos(personaje, enemigos);
  assert.strictEqual(resultado, 3);
  assert.strictEqual(personaje.estaVivo(), true);
});

test("derrotarTodos - personaje es derrotado", () => {
  const personaje = new Personaje("Héroe", 1);
  const enemigos = [
    new Enemigo("Dragón", 20, 50),
    new Enemigo("Orco", 10, 20),
  ];
  const resultado = derrotarTodos(personaje, enemigos);
  assert(resultado < 2);
  assert.strictEqual(personaje.estaVivo(), false);
});

// ============================================================
// TESTS PARTE 7: Sistema de tienda
// ============================================================

test("Tienda - constructor inicializa con items", () => {
  const tienda = new Tienda();
  assert.strictEqual(tienda.items.length, 3);
});

test("Tienda - mostrarItems retorna información de items", () => {
  const tienda = new Tienda();
  const items = tienda.mostrarItems();
  assert.strictEqual(items.length, 3);
  assert.match(items[0], /Poción de vida/);
});

test("Tienda - comprarItem exitoso", () => {
  const tienda = new Tienda();
  const personaje = new Personaje("Héroe", 5);
  personaje.recogerOro(100);
  const inventario = new Inventario();
  const resultado = tienda.comprarItem(0, personaje, inventario);
  assert.strictEqual(resultado, true);
  assert.strictEqual(inventario.items.length, 1);
  assert.strictEqual(personaje.oro, 70); // 100 - 30 (precio de poción de vida)
});

test("Tienda - comprarItem sin suficiente oro", () => {
  const tienda = new Tienda();
  const personaje = new Personaje("Héroe", 5);
  personaje.recogerOro(10);
  const inventario = new Inventario();
  const resultado = tienda.comprarItem(0, personaje, inventario);
  assert.strictEqual(resultado, false);
  assert.strictEqual(inventario.items.length, 0);
  assert.strictEqual(personaje.oro, 10);
});

test("Tienda - comprarItem con inventario lleno", () => {
  const tienda = new Tienda();
  const personaje = new Personaje("Héroe", 5);
  personaje.recogerOro(100);
  const inventario = new Inventario(0);
  const resultado = tienda.comprarItem(0, personaje, inventario);
  assert.strictEqual(resultado, false);
  assert.strictEqual(personaje.oro, 100);
});

test("Tienda - comprarItem con índice inválido", () => {
  const tienda = new Tienda();
  const personaje = new Personaje("Héroe", 5);
  personaje.recogerOro(100);
  const inventario = new Inventario();
  const resultado = tienda.comprarItem(10, personaje, inventario);
  assert.strictEqual(resultado, false);
});

test("Tienda - comprarItem no elimina el item de la tienda", () => {
  const tienda = new Tienda();
  const personaje = new Personaje("Héroe", 5);
  personaje.recogerOro(100);
  const inventario = new Inventario();
  const cantidadInicial = tienda.items.length;
  tienda.comprarItem(0, personaje, inventario);
  assert.strictEqual(tienda.items.length, cantidadInicial);
});

test("Tienda - agregarItem agrega a la tienda", () => {
  const tienda = new Tienda();
  const item = new Item("Super poción", "curacion", 100, 80);
  const cantidadInicial = tienda.items.length;
  tienda.agregarItem(item);
  assert.strictEqual(tienda.items.length, cantidadInicial + 1);
});

// ============================================================
// TESTS PARTE 8: Recolección de monedas
// ============================================================

test("recolectarMonedas - array vacío", () => {
  const personaje = new Personaje("Héroe", 1);
  const total = recolectarMonedas(personaje, []);
  assert.strictEqual(total, 0);
  assert.strictEqual(personaje.oro, 0);
});

test("recolectarMonedas - varias monedas normales", () => {
  const personaje = new Personaje("Héroe", 1);
  const monedas = [new Moneda(10), new Moneda(20), new Moneda(15)];
  const total = recolectarMonedas(personaje, monedas);
  assert.strictEqual(total, 45);
  assert.strictEqual(personaje.oro, 45);
});

test("recolectarMonedas - incluye monedas raras", () => {
  const personaje = new Personaje("Héroe", 1);
  const monedas = [new Moneda(10), new Moneda(10, true), new Moneda(10)];
  const total = recolectarMonedas(personaje, monedas);
  assert.strictEqual(total, 40); // 10 + 20 + 10
  assert.strictEqual(personaje.oro, 40);
});

test("generarMonedasAleatorias - genera la cantidad correcta", () => {
  const monedas = generarMonedasAleatorias(10);
  assert.strictEqual(monedas.length, 10);
});

test("generarMonedasAleatorias - valores dentro del rango", () => {
  const monedas = generarMonedasAleatorias(100);
  for (const moneda of monedas) {
    assert(moneda.valor >= 1 && moneda.valor <= 10);
  }
});

test("generarMonedasAleatorias - aproximadamente 20% son raras", () => {
  const monedas = generarMonedasAleatorias(100);
  const raras = monedas.filter((m) => m.esRara).length;
  // Permitimos un rango razonable debido a la aleatoriedad (10-30%)
  assert(raras >= 10 && raras <= 30);
});
