# Sección 08: Funciones de Alto Orden

Esta sección contiene ejercicios para practicar el uso de funciones como valores en TypeScript. Aprenderás a pasar funciones como parámetros, retornar funciones, y usar las funciones de alto orden más importantes: `map`, `filter` y `reduce`.

## Objetivo

Dominar el concepto de funciones de alto orden (higher-order functions), que son funciones que trabajan con otras funciones. Este es uno de los conceptos más poderosos de la programación funcional.

## Contenido

El archivo `ejercicio.ts` contiene 11 partes con dificultad progresiva:

### Parte 1: Funciones como valores (conceptos básicos)
- Funciones simples que transforman daño
- Pasar funciones como parámetros
- Introducción al concepto de "modificador"

### Parte 2: Composición de funciones
- Combinar dos funciones en una
- Aplicar múltiples funciones en secuencia
- El orden de aplicación importa

### Parte 3: Funciones que retornan funciones
- Crear funciones especializadas desde funciones generales
- Closures (capturar valores del contexto)
- Funciones factory

### Parte 4: Funciones con múltiples aplicaciones
- Aplicar una función N veces
- Aplicar hasta alcanzar un límite
- Iteración controlada por función

### Parte 5: Introducción a map (versión manual)
- Transformar arrays aplicando funciones
- Implementación manual (sin usar `.map()`)
- Transformación de strings

### Parte 6: Introducción a filter (versión manual)
- Filtrar arrays por condición
- Implementación manual (sin usar `.filter()`)
- Predicados (funciones que retornan boolean)

### Parte 7: Introducción a reduce (versión manual)
- Acumular valores con una función
- Implementación manual (sin usar `.reduce()`)
- Suma y multiplicación como casos especiales

### Parte 8: Usando map, filter, reduce
- Usar los métodos nativos de arrays
- `map()` para transformar
- `filter()` para filtrar
- `reduce()` para acumular

### Parte 9: Combinando map, filter, reduce
- Encadenar múltiples operaciones
- Pipeline de transformaciones
- Patrones comunes de procesamiento de datos

### Parte 10: Funciones de alto orden avanzadas
- Crear funciones genéricas con tipos
- Pipeline de funciones
- Memoización (caché de resultados)

### Parte 11: Casos de uso prácticos en videojuegos
- Aplicar buffs a equipos
- Calcular recompensas
- Sistemas de niveles
- Cálculo de daño con críticos

## Cómo trabajar en esta sección

1. Abre el archivo `ejercicio.ts`
2. Lee las instrucciones de cada función marcada con `// ========== TU CÓDIGO AQUÍ ==========`
3. Implementa el código necesario entre los comentarios
4. Ejecuta los tests con `npm run test:funciones` para verificar tu solución
5. Los tests te indicarán si tu implementación es correcta

## Conceptos importantes

### Funciones de alto orden

Una función de alto orden es aquella que:
1. Recibe una o más funciones como parámetros, O
2. Retorna una función como resultado

```typescript
// Función que recibe otra función
function aplicar(valor: number, f: (x: number) => number): number {
  return f(valor);
}

// Función que retorna otra función
function crearMultiplicador(factor: number): (x: number) => number {
  return (x: number) => x * factor;
}
```

### Composición de funciones

Combinar funciones para crear nuevas funciones:

```typescript
function componerDos(f, g) {
  return (x) => f(g(x));
}

const duplicar = (x) => x * 2;
const sumarDiez = (x) => x + 10;
const procesador = componerDos(sumarDiez, duplicar);
procesador(5); // (5 * 2) + 10 = 20
```

### Map, Filter, Reduce

Las tres funciones más importantes para procesar arrays:

```typescript
// map: transforma cada elemento
const numeros = [1, 2, 3];
const dobles = numeros.map(x => x * 2); // [2, 4, 6]

// filter: selecciona elementos que cumplen una condición
const mayores = numeros.filter(x => x > 1); // [2, 3]

// reduce: acumula valores en un solo resultado
const suma = numeros.reduce((acc, x) => acc + x, 0); // 6
```

### Closures

Una función puede "recordar" variables de su contexto:

```typescript
function crearContador(inicial: number) {
  let contador = inicial;
  return () => {
    contador++;
    return contador;
  };
}

const contador = crearContador(0);
contador(); // 1
contador(); // 2
contador(); // 3
```

### Predicados

Funciones que retornan booleanos, útiles para filtrar:

```typescript
const esPar = (x: number) => x % 2 === 0;
const esPositivo = (x: number) => x > 0;

[1, 2, 3, 4].filter(esPar); // [2, 4]
[-1, 2, -3, 4].filter(esPositivo); // [2, 4]
```

## Ejecutar los tests

```bash
# Ejecutar todos los tests de esta sección
npm run test:funciones

# Ejecutar todos los tests del proyecto
npm test
```

## Tips

### Para las partes 1-4 (fundamentos):
- Las funciones son valores, puedes asignarlas a variables
- Los parámetros de tipo `(x: number) => number` son funciones
- Para llamar una función que recibiste como parámetro, usa `nombreParametro(valor)`

### Para las partes 5-7 (versiones manuales):
- Usa bucles `for` para iterar los arrays
- Crea un nuevo array vacío y ve agregando elementos con `.push()`
- NO uses `.map()`, `.filter()` o `.reduce()` todavía en estas partes

### Para las partes 8-9 (usando métodos nativos):
- AHORA SÍ usa `.map()`, `.filter()` y `.reduce()`
- Puedes encadenarlos: `array.filter(...).map(...).reduce(...)`
- La función que pasas a `.reduce()` recibe dos parámetros: acumulador y valor actual

### Para las partes 10-11 (avanzado):
- Retornar una función es como retornar cualquier otro valor
- Para memoización, usa un objeto o Map para guardar resultados previos
- Los tipos genéricos `<T>` permiten que la función funcione con cualquier tipo

## Orden sugerido

Se recomienda completar los ejercicios en el orden presentado, ya que cada parte construye sobre los conceptos anteriores:

1. Conceptos básicos (Parte 1)
2. Composición (Parte 2)
3. Funciones que retornan funciones (Parte 3)
4. Aplicaciones múltiples (Parte 4)
5. Versión manual de map (Parte 5)
6. Versión manual de filter (Parte 6)
7. Versión manual de reduce (Parte 7)
8. Usando los métodos nativos (Parte 8)
9. Combinando operaciones (Parte 9)
10. Conceptos avanzados (Parte 10)
11. Casos prácticos (Parte 11)

## Patrones comunes

### Transformar y sumar
```typescript
// Aplicar descuento y calcular total
const precios = [100, 200, 150];
const total = precios
  .map(p => p * 0.9)  // 10% descuento
  .reduce((sum, p) => sum + p, 0);
```

### Filtrar y transformar
```typescript
// Obtener nombres de jugadores activos
const jugadores = [
  { nombre: "Ana", activo: true },
  { nombre: "Bob", activo: false },
  { nombre: "Carlos", activo: true }
];
const nombresActivos = jugadores
  .filter(j => j.activo)
  .map(j => j.nombre);
// ["Ana", "Carlos"]
```

### Pipeline completo
```typescript
// Calcular experiencia total de enemigos derrotados de alto nivel
const enemigos = [...];
const expTotal = enemigos
  .filter(e => e.derrotado)
  .filter(e => e.nivel >= 10)
  .map(e => e.nivel * 100)
  .reduce((sum, exp) => sum + exp, 0);
```

¡Buena suerte! Esta sección es fundamental para escribir código elegante y expresivo en TypeScript.
