import { test } from "node:test";
import assert from "node:assert";
import {
  aplicarDanio,
  aplicarDanioDoble,
  aplicarDanioTriple,
  aplicarModificador,
  componerDos,
  aplicarVarias,
  crearMultiplicador,
  crearSumador,
  crearAplicadorDeBonus,
  aplicarNVeces,
  aplicarHastaLimite,
  aplicarATodos,
  transformarNombres,
  filtrarPorCondicion,
  encontrarEnemigosDebiles,
  acumular,
  sumarTodos,
  multiplicarTodos,
  duplicarValores,
  obtenerNombres,
  filtrarPorNivel,
  filtrarVivos,
  calcularDanioTotal,
  calcularVidaTotal,
  calcularDanioTotalConBonus,
  obtenerNombresDeVivos,
  calcularExperienciaTotal,
  crearFiltro,
  crearTransformador,
  crearPipeline,
  cachear,
  Personaje,
  Enemigo,
  aplicarBuffATodos,
  obtenerEnemigosMasFuertes,
  calcularRecompensaTotal,
  obtenerEquipoBalanceado,
  crearSistemaDeNiveles,
  crearCalculadorDeDanio,
} from "./ejercicio.js";

// ============================================================
// TESTS PARTE 1: Funciones como valores (conceptos básicos)
// ============================================================

test("aplicarDanio - retorna el mismo daño", () => {
  assert.strictEqual(aplicarDanio(10), 10);
  assert.strictEqual(aplicarDanio(50), 50);
});

test("aplicarDanioDoble - retorna el doble", () => {
  assert.strictEqual(aplicarDanioDoble(10), 20);
  assert.strictEqual(aplicarDanioDoble(25), 50);
});

test("aplicarDanioTriple - retorna el triple", () => {
  assert.strictEqual(aplicarDanioTriple(10), 30);
  assert.strictEqual(aplicarDanioTriple(15), 45);
});

test("aplicarModificador - aplica función al daño", () => {
  assert.strictEqual(aplicarModificador(10, aplicarDanio), 10);
  assert.strictEqual(aplicarModificador(10, aplicarDanioDoble), 20);
  assert.strictEqual(aplicarModificador(10, aplicarDanioTriple), 30);
});

test("aplicarModificador - funciona con funciones anónimas", () => {
  assert.strictEqual(
    aplicarModificador(10, (x) => x + 5),
    15
  );
  assert.strictEqual(
    aplicarModificador(10, (x) => x * 10),
    100
  );
});

// ============================================================
// TESTS PARTE 2: Composición de funciones
// ============================================================

test("componerDos - compone dos funciones", () => {
  const f = componerDos(aplicarDanioDoble, aplicarDanioTriple);
  assert.strictEqual(f(10), 60); // 10 * 3 = 30, 30 * 2 = 60
});

test("componerDos - orden importa", () => {
  const f1 = componerDos(aplicarDanioDoble, aplicarDanioTriple);
  const f2 = componerDos(aplicarDanioTriple, aplicarDanioDoble);
  assert.strictEqual(f1(5), 30); // 5 * 3 = 15, 15 * 2 = 30
  assert.strictEqual(f2(5), 30); // 5 * 2 = 10, 10 * 3 = 30
});

test("componerDos - con funciones anónimas", () => {
  const f = componerDos(
    (x) => x + 10,
    (x) => x * 2
  );
  assert.strictEqual(f(5), 20); // 5 * 2 = 10, 10 + 10 = 20
});

test("aplicarVarias - array vacío retorna el valor original", () => {
  assert.strictEqual(aplicarVarias(10, []), 10);
});

test("aplicarVarias - aplica funciones en orden", () => {
  const resultado = aplicarVarias(10, [aplicarDanioDoble, aplicarDanioTriple]);
  assert.strictEqual(resultado, 60); // 10 * 2 = 20, 20 * 3 = 60
});

test("aplicarVarias - con tres funciones", () => {
  const resultado = aplicarVarias(5, [
    aplicarDanioDoble,
    aplicarDanioTriple,
    (x) => x + 10,
  ]);
  assert.strictEqual(resultado, 40); // 5 * 2 = 10, 10 * 3 = 30, 30 + 10 = 40
});

// ============================================================
// TESTS PARTE 3: Funciones que retornan funciones
// ============================================================

test("crearMultiplicador - crea función que multiplica", () => {
  const duplicar = crearMultiplicador(2);
  assert.strictEqual(duplicar(5), 10);
  assert.strictEqual(duplicar(8), 16);
});

test("crearMultiplicador - diferentes multiplicadores", () => {
  const triplicar = crearMultiplicador(3);
  const cuadruplicar = crearMultiplicador(4);
  assert.strictEqual(triplicar(5), 15);
  assert.strictEqual(cuadruplicar(5), 20);
});

test("crearSumador - crea función que suma", () => {
  const sumarDiez = crearSumador(10);
  assert.strictEqual(sumarDiez(5), 15);
  assert.strictEqual(sumarDiez(20), 30);
});

test("crearAplicadorDeBonus - aplica bonus al daño", () => {
  const aplicarBonusDeFuerza = crearAplicadorDeBonus(15);
  assert.strictEqual(aplicarBonusDeFuerza(50), 65);
  assert.strictEqual(aplicarBonusDeFuerza(100), 115);
});

// ============================================================
// TESTS PARTE 4: Funciones con múltiples aplicaciones
// ============================================================

test("aplicarNVeces - cero veces retorna el valor original", () => {
  assert.strictEqual(aplicarNVeces(0, aplicarDanioDoble, 10), 10);
});

test("aplicarNVeces - una vez", () => {
  assert.strictEqual(aplicarNVeces(1, aplicarDanioDoble, 10), 20);
});

test("aplicarNVeces - múltiples veces", () => {
  assert.strictEqual(aplicarNVeces(3, aplicarDanioDoble, 5), 40);
  // 5 * 2 = 10, 10 * 2 = 20, 20 * 2 = 40
});

test("aplicarNVeces - con función sumadora", () => {
  const sumarCinco = (x: number) => x + 5;
  assert.strictEqual(aplicarNVeces(4, sumarCinco, 0), 20);
  // 0 + 5 = 5, 5 + 5 = 10, 10 + 5 = 15, 15 + 5 = 20
});

test("aplicarHastaLimite - no supera el límite", () => {
  assert.strictEqual(aplicarHastaLimite(aplicarDanioDoble, 100, 5), 80);
  // 5 -> 10 -> 20 -> 40 -> 80 -> 160 (se pasó), retorna 80
});

test("aplicarHastaLimite - con sumador", () => {
  const sumarDiez = (x: number) => x + 10;
  assert.strictEqual(aplicarHastaLimite(sumarDiez, 50, 0), 40);
  // 0 -> 10 -> 20 -> 30 -> 40 -> 50 (se pasó), retorna 40
});

test("aplicarHastaLimite - valor inicial ya supera límite", () => {
  assert.strictEqual(aplicarHastaLimite(aplicarDanioDoble, 10, 20), 20);
});

// ============================================================
// TESTS PARTE 5: Introducción a map (versión manual)
// ============================================================

test("aplicarATodos - array vacío", () => {
  assert.deepStrictEqual(aplicarATodos([], aplicarDanioDoble), []);
});

test("aplicarATodos - aplica función a todos", () => {
  assert.deepStrictEqual(aplicarATodos([1, 2, 3], aplicarDanioDoble), [2, 4, 6]);
});

test("aplicarATodos - con función anónima", () => {
  assert.deepStrictEqual(
    aplicarATodos([5, 10, 15], (x) => x + 10),
    [15, 20, 25]
  );
});

test("transformarNombres - array vacío", () => {
  assert.deepStrictEqual(transformarNombres([], (s) => s.toUpperCase()), []);
});

test("transformarNombres - convierte a mayúsculas", () => {
  assert.deepStrictEqual(
    transformarNombres(["link", "zelda", "ganon"], (s) => s.toUpperCase()),
    ["LINK", "ZELDA", "GANON"]
  );
});

test("transformarNombres - agrega prefijo", () => {
  assert.deepStrictEqual(
    transformarNombres(["Mario", "Luigi"], (s) => "Super " + s),
    ["Super Mario", "Super Luigi"]
  );
});

// ============================================================
// TESTS PARTE 6: Introducción a filter (versión manual)
// ============================================================

test("filtrarPorCondicion - array vacío", () => {
  assert.deepStrictEqual(filtrarPorCondicion([], (x) => x > 5), []);
});

test("filtrarPorCondicion - filtra correctamente", () => {
  assert.deepStrictEqual(filtrarPorCondicion([1, 5, 10, 15, 3], (x) => x > 5), [
    10, 15,
  ]);
});

test("filtrarPorCondicion - ninguno cumple", () => {
  assert.deepStrictEqual(filtrarPorCondicion([1, 2, 3], (x) => x > 10), []);
});

test("filtrarPorCondicion - todos cumplen", () => {
  assert.deepStrictEqual(filtrarPorCondicion([10, 20, 30], (x) => x > 5), [
    10, 20, 30,
  ]);
});

test("encontrarEnemigosDebiles - array vacío", () => {
  assert.deepStrictEqual(encontrarEnemigosDebiles([], 50), []);
});

test("encontrarEnemigosDebiles - filtra por vida", () => {
  const enemigos = [
    { nombre: "Goblin", vida: 30 },
    { nombre: "Orco", vida: 80 },
    { nombre: "Slime", vida: 10 },
    { nombre: "Dragón", vida: 200 },
  ];
  const resultado = encontrarEnemigosDebiles(enemigos, 50);
  assert.strictEqual(resultado.length, 2);
  assert.strictEqual(resultado[0].nombre, "Goblin");
  assert.strictEqual(resultado[1].nombre, "Slime");
});

// ============================================================
// TESTS PARTE 7: Introducción a reduce (versión manual)
// ============================================================

test("acumular - suma", () => {
  assert.strictEqual(acumular([1, 2, 3, 4], (acc, val) => acc + val, 0), 10);
});

test("acumular - multiplicación", () => {
  assert.strictEqual(acumular([2, 3, 4], (acc, val) => acc * val, 1), 24);
});

test("acumular - array vacío retorna inicial", () => {
  assert.strictEqual(acumular([], (acc, val) => acc + val, 100), 100);
});

test("acumular - encuentra el máximo", () => {
  assert.strictEqual(
    acumular([5, 12, 3, 18, 7], (acc, val) => (val > acc ? val : acc), 0),
    18
  );
});

test("sumarTodos - suma array de números", () => {
  assert.strictEqual(sumarTodos([1, 2, 3, 4, 5]), 15);
  assert.strictEqual(sumarTodos([10, 20, 30]), 60);
});

test("sumarTodos - array vacío", () => {
  assert.strictEqual(sumarTodos([]), 0);
});

test("multiplicarTodos - multiplica array de números", () => {
  assert.strictEqual(multiplicarTodos([2, 3, 4]), 24);
  assert.strictEqual(multiplicarTodos([5, 2]), 10);
});

test("multiplicarTodos - array vacío", () => {
  assert.strictEqual(multiplicarTodos([]), 1);
});

// ============================================================
// TESTS PARTE 8: Usando map, filter, reduce
// ============================================================

test("duplicarValores - usa .map()", () => {
  assert.deepStrictEqual(duplicarValores([1, 2, 3, 4]), [2, 4, 6, 8]);
  assert.deepStrictEqual(duplicarValores([]), []);
});

test("obtenerNombres - extrae nombres", () => {
  const personajes = [
    { nombre: "Link", nivel: 5 },
    { nombre: "Zelda", nivel: 8 },
    { nombre: "Ganon", nivel: 10 },
  ];
  assert.deepStrictEqual(obtenerNombres(personajes), ["Link", "Zelda", "Ganon"]);
});

test("obtenerNombres - array vacío", () => {
  assert.deepStrictEqual(obtenerNombres([]), []);
});

test("filtrarPorNivel - filtra personajes", () => {
  const personajes = [
    { nombre: "Novato", nivel: 3 },
    { nombre: "Veterano", nivel: 10 },
    { nombre: "Maestro", nivel: 15 },
    { nombre: "Aprendiz", nivel: 5 },
  ];
  const resultado = filtrarPorNivel(personajes, 8);
  assert.strictEqual(resultado.length, 2);
  assert.strictEqual(resultado[0].nombre, "Veterano");
  assert.strictEqual(resultado[1].nombre, "Maestro");
});

test("filtrarVivos - filtra enemigos con vida", () => {
  const enemigos = [
    { nombre: "Goblin", vida: 30 },
    { nombre: "Orco", vida: 0 },
    { nombre: "Slime", vida: 10 },
    { nombre: "Zombie", vida: 0 },
  ];
  const resultado = filtrarVivos(enemigos);
  assert.strictEqual(resultado.length, 2);
  assert.strictEqual(resultado[0].nombre, "Goblin");
  assert.strictEqual(resultado[1].nombre, "Slime");
});

test("calcularDanioTotal - suma daños con reduce", () => {
  assert.strictEqual(calcularDanioTotal([10, 20, 30, 15]), 75);
  assert.strictEqual(calcularDanioTotal([]), 0);
});

test("calcularVidaTotal - suma vida de enemigos", () => {
  const enemigos = [
    { nombre: "Goblin", vida: 30 },
    { nombre: "Orco", vida: 80 },
    { nombre: "Slime", vida: 10 },
  ];
  assert.strictEqual(calcularVidaTotal(enemigos), 120);
});

test("calcularVidaTotal - array vacío", () => {
  assert.strictEqual(calcularVidaTotal([]), 0);
});

// ============================================================
// TESTS PARTE 9: Combinando map, filter, reduce
// ============================================================

test("calcularDanioTotalConBonus - combina map y reduce", () => {
  assert.strictEqual(calcularDanioTotalConBonus([10, 20, 30], 5), 75);
  // [10+5, 20+5, 30+5] = [15, 25, 35] -> 75
});

test("calcularDanioTotalConBonus - array vacío", () => {
  assert.strictEqual(calcularDanioTotalConBonus([], 10), 0);
});

test("obtenerNombresDeVivos - combina filter y map", () => {
  const enemigos = [
    { nombre: "Goblin", vida: 30 },
    { nombre: "Orco", vida: 0 },
    { nombre: "Slime", vida: 10 },
    { nombre: "Zombie", vida: 0 },
  ];
  assert.deepStrictEqual(obtenerNombresDeVivos(enemigos), ["Goblin", "Slime"]);
});

test("calcularExperienciaTotal - combina filter, map y reduce", () => {
  const enemigos = [
    { nombre: "Goblin", nivel: 3, derrotado: true },
    { nombre: "Orco", nivel: 5, derrotado: false },
    { nombre: "Slime", nivel: 1, derrotado: true },
    { nombre: "Dragón", nivel: 10, derrotado: true },
  ];
  const resultado = calcularExperienciaTotal(enemigos, 10);
  // Derrotados: Goblin (3*10), Slime (1*10), Dragón (10*10)
  // 30 + 10 + 100 = 140
  assert.strictEqual(resultado, 140);
});

test("calcularExperienciaTotal - ninguno derrotado", () => {
  const enemigos = [
    { nombre: "Goblin", nivel: 3, derrotado: false },
    { nombre: "Orco", nivel: 5, derrotado: false },
  ];
  assert.strictEqual(calcularExperienciaTotal(enemigos, 10), 0);
});

// ============================================================
// TESTS PARTE 10: Funciones de alto orden avanzadas
// ============================================================

test("crearFiltro - crea función de filtrado", () => {
  const filtrarMayoresA10 = crearFiltro((x: number) => x > 10);
  assert.deepStrictEqual(filtrarMayoresA10([5, 15, 8, 20, 3]), [15, 20]);
});

test("crearFiltro - con objetos", () => {
  const filtrarVeterano = crearFiltro(
    (p: { nivel: number }) => p.nivel >= 10
  );
  const personajes = [
    { nivel: 5 },
    { nivel: 12 },
    { nivel: 8 },
    { nivel: 15 },
  ];
  const resultado = filtrarVeterano(personajes);
  assert.strictEqual(resultado.length, 2);
  assert.strictEqual(resultado[0].nivel, 12);
});

test("crearTransformador - crea función de transformación", () => {
  const obtenerLongitudes = crearTransformador((s: string) => s.length);
  assert.deepStrictEqual(obtenerLongitudes(["hola", "mundo", "TypeScript"]), [
    4, 5, 10,
  ]);
});

test("crearTransformador - duplicar números", () => {
  const duplicar = crearTransformador((x: number) => x * 2);
  assert.deepStrictEqual(duplicar([1, 2, 3, 4]), [2, 4, 6, 8]);
});

test("crearPipeline - sin funciones retorna identidad", () => {
  const pipeline = crearPipeline<number>();
  assert.strictEqual(pipeline(10), 10);
});

test("crearPipeline - una función", () => {
  const pipeline = crearPipeline((x: number) => x * 2);
  assert.strictEqual(pipeline(10), 20);
});

test("crearPipeline - múltiples funciones", () => {
  const pipeline = crearPipeline(
    (x: number) => x * 2,
    (x: number) => x + 10,
    (x: number) => x * 3
  );
  assert.strictEqual(pipeline(5), 60);
  // 5 * 2 = 10, 10 + 10 = 20, 20 * 3 = 60
});

test("cachear - cachea resultados", () => {
  let llamadas = 0;
  const funcionLenta = (x: number) => {
    llamadas++;
    return x * 2;
  };
  const funcionRapida = cachear(funcionLenta);

  assert.strictEqual(funcionRapida(5), 10);
  assert.strictEqual(llamadas, 1);

  assert.strictEqual(funcionRapida(5), 10);
  assert.strictEqual(llamadas, 1); // No incrementa, usó caché

  assert.strictEqual(funcionRapida(3), 6);
  assert.strictEqual(llamadas, 2); // Nueva llamada para nuevo valor
});

test("cachear - con strings", () => {
  let llamadas = 0;
  const procesarTexto = (s: string) => {
    llamadas++;
    return s.toUpperCase();
  };
  const procesarRapido = cachear(procesarTexto);

  assert.strictEqual(procesarRapido("hola"), "HOLA");
  assert.strictEqual(llamadas, 1);

  assert.strictEqual(procesarRapido("hola"), "HOLA");
  assert.strictEqual(llamadas, 1);

  assert.strictEqual(procesarRapido("mundo"), "MUNDO");
  assert.strictEqual(llamadas, 2);
});

// ============================================================
// TESTS PARTE 11: Casos de uso prácticos en videojuegos
// ============================================================

test("aplicarBuffATodos - aplica buff a personajes", () => {
  const personajes: Personaje[] = [
    { nombre: "Link", nivel: 5, vida: 100, ataque: 20 },
    { nombre: "Zelda", nivel: 8, vida: 80, ataque: 15 },
  ];
  const resultado = aplicarBuffATodos(personajes, 10, 50);

  assert.strictEqual(resultado[0].ataque, 30);
  assert.strictEqual(resultado[0].vida, 150);
  assert.strictEqual(resultado[1].ataque, 25);
  assert.strictEqual(resultado[1].vida, 130);

  // Verifica que no se modificaron los originales
  assert.strictEqual(personajes[0].ataque, 20);
  assert.strictEqual(personajes[0].vida, 100);
});

test("obtenerEnemigosMasFuertes - filtra y ordena", () => {
  const enemigos: Enemigo[] = [
    { nombre: "Goblin", nivel: 3, vida: 30, recompensa: 10 },
    { nombre: "Orco", nivel: 8, vida: 80, recompensa: 50 },
    { nombre: "Slime", nivel: 1, vida: 10, recompensa: 5 },
    { nombre: "Dragón", nivel: 15, vida: 200, recompensa: 200 },
    { nombre: "Troll", nivel: 10, vida: 120, recompensa: 80 },
  ];
  const resultado = obtenerEnemigosMasFuertes(enemigos, 5);

  assert.strictEqual(resultado.length, 3);
  assert.strictEqual(resultado[0].nombre, "Dragón"); // Mayor nivel primero
  assert.strictEqual(resultado[1].nombre, "Troll");
  assert.strictEqual(resultado[2].nombre, "Orco");
});

test("calcularRecompensaTotal - filtra derrotados y suma", () => {
  const enemigos: Enemigo[] = [
    { nombre: "Goblin", nivel: 3, vida: 0, recompensa: 10 },
    { nombre: "Orco", nivel: 8, vida: 50, recompensa: 50 },
    { nombre: "Slime", nivel: 1, vida: 0, recompensa: 5 },
    { nombre: "Dragón", nivel: 15, vida: 0, recompensa: 200 },
  ];
  const resultado = calcularRecompensaTotal(enemigos, 2);
  // Derrotados: Goblin (10*2), Slime (5*2), Dragón (200*2)
  // 20 + 10 + 400 = 430
  assert.strictEqual(resultado, 430);
});

test("obtenerEquipoBalanceado - filtra, mapea, ordena y limita", () => {
  const personajes: Personaje[] = [
    { nombre: "Tanque", nivel: 10, vida: 0, ataque: 15 },
    { nombre: "Mago", nivel: 8, vida: 60, ataque: 25 },
    { nombre: "Guerrero", nivel: 12, vida: 100, ataque: 30 },
    { nombre: "Arquero", nivel: 7, vida: 70, ataque: 20 },
    { nombre: "Sanador", nivel: 6, vida: 50, ataque: 10 },
  ];
  const resultado = obtenerEquipoBalanceado(personajes);

  assert.strictEqual(resultado.length, 3);
  // Poder = nivel * ataque
  // Sanador: 6*10=60, Arquero: 7*20=140, Mago: 8*25=200
  assert.strictEqual(resultado[0].nombre, "Sanador");
  assert.strictEqual(resultado[0].poder, 60);
  assert.strictEqual(resultado[1].nombre, "Arquero");
  assert.strictEqual(resultado[1].poder, 140);
  assert.strictEqual(resultado[2].nombre, "Mago");
  assert.strictEqual(resultado[2].poder, 200);
});

test("crearSistemaDeNiveles - calcula experiencia necesaria", () => {
  const expNecesaria = crearSistemaDeNiveles(100);
  assert.strictEqual(expNecesaria(1), 100);
  assert.strictEqual(expNecesaria(2), 400);
  assert.strictEqual(expNecesaria(3), 900);
  assert.strictEqual(expNecesaria(10), 10000);
});

test("crearSistemaDeNiveles - diferentes bases", () => {
  const exp1 = crearSistemaDeNiveles(50);
  const exp2 = crearSistemaDeNiveles(200);
  assert.strictEqual(exp1(5), 1250); // 50 * 5 * 5
  assert.strictEqual(exp2(5), 5000); // 200 * 5 * 5
});

test("crearCalculadorDeDanio - sin crítico", () => {
  const calcularDanio = crearCalculadorDeDanio(10, 2);
  assert.strictEqual(calcularDanio(50, false), 60);
  assert.strictEqual(calcularDanio(30, false), 40);
});

test("crearCalculadorDeDanio - con crítico", () => {
  const calcularDanio = crearCalculadorDeDanio(10, 2);
  assert.strictEqual(calcularDanio(50, true), 120); // (50 + 10) * 2
  assert.strictEqual(calcularDanio(30, true), 80); // (30 + 10) * 2
});

test("crearCalculadorDeDanio - diferentes parámetros", () => {
  const calc1 = crearCalculadorDeDanio(5, 3);
  const calc2 = crearCalculadorDeDanio(20, 1.5);
  assert.strictEqual(calc1(10, true), 45); // (10 + 5) * 3
  assert.strictEqual(calc2(100, true), 180); // (100 + 20) * 1.5
});
