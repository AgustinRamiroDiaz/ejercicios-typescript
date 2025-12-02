/**
 * EJERCICIO: Bucles FOR
 *
 * En este juego, usarás bucles for para procesar listas de elementos del juego.
 *
 * INSTRUCCIONES:
 * 1. Completa las funciones usando bucles for
 */
let contador = 0;

let xp: number[] = [17, 30, 15, 15];
export function sumarExperiencia(niveles: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todos los valores en el array niveles
  // Retorna la suma total

  for (let valor of xp) {
    contador = contador + valor;
  }

  return contador;

  throw new Error("Función no implementada");
}
console.log(sumarExperiencia(xp));

// ====================================

let inventary = ["Espada rara", "Escudo rara", "Poción rara", "armadura"];
export function contarItemsRaros(inventario: string[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para contar cuántos items contienen la palabra "raro"
  // (case insensitive)
  let contador = 0;
  for (let e of inventary) {
    if (e.includes("raro") || e.includes("rara")) {
      contador++;
    }
  }
  return contador;
}
console.log(contarItemsRaros(inventary));

// ====================================

let puntajes: number[] = [15, 65, 15];
export function duplicarPuntajes(puntajes: number[]): number[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear un nuevo array donde cada puntaje
  // esté multiplicado por 2
  const resultado: number[] = [];
  for (let e of puntajes) {
    resultado.push(e * 2);
  }

  return resultado;
}
console.log(duplicarPuntajes(puntajes));

// ====================================

export function encontrarMaximoPuntaje(puntajes: number[]): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para encontrar el puntaje más alto
  // Si el array está vacío, retorna 0
  if (puntajes.length === 0) {
    return 0;
  }
  let maximo = puntajes[0];
  for (let e of puntajes) {
    if (e > maximo) {
      maximo = e;
    }
  }
  return maximo;
}
console.log(encontrarMaximoPuntaje(puntajes));

// ====================================

let items = ["casio", "yamaha", "kawai", "alba"];

export function crearInventarioOrdenado(items: string[]): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para crear una copia del array items ordenada
  // alfabéticamente (puedes usar el método sort si quieres, pero intenta
  // entender cómo funciona un bucle for primero)
  let itemsordenados = items;
  for (let i = 0; i < items.length - 1; i++) {
    for (let j = 0; j < items.length - 1 - i; j++) {
      if (items[j] > items[j + 1]) {
        let temp = items[j + 1];
        items[j + 1] = items[j];
        items[j] = temp;
      }
    }
  }
  return itemsordenados;
}
console.log(crearInventarioOrdenado(items));

// ====================================

let danio = [
  { nombre: "Goblin", danio: 5 },
  { nombre: "Orco", danio: 10 },
];

export function calcularDanioTotal(
  ataques: { nombre: string; danio: number }[]
): number {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para sumar todo el daño de los ataques
  let danioTotal = 0;
  let i = 0;
  for (let damage of danio) {
    danioTotal = danioTotal + damage.danio;
  }
  return danioTotal;
}
console.log(calcularDanioTotal(danio));

// ====================================

let nivelMinimo = 60;
let enemigos = [
  { nombre: "Goblin", nivel: 5 },
  { nombre: "Orco", nivel: 10 },
  { nombre: "Zombie", nivel: 80 },
  { nombre: "Golem", nivel: 69 },
];
let enemigosNivelAlto: string[] = [];

export function obtenerEnemigosNivelAlto(
  enemigos: { nombre: string; nivel: number }[],
  nivelMinimo: number
): string[] {
  // ========== TU CÓDIGO AQUÍ ==========
  // Usa un bucle for para obtener los nombres de los enemigos
  // que tienen un nivel mayor o igual a nivelMinimo
  for (let enemigo of enemigos) {
    if (enemigo.nivel >= 60) {
      enemigosNivelAlto.push(enemigo.nombre);
    }
  }
  return enemigosNivelAlto;

  // ====================================
}

console.log(obtenerEnemigosNivelAlto(enemigos, nivelMinimo));
