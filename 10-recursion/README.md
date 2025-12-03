# Sección 10: Recursión

Aprende a resolver problemas usando recursión: cuando una función se llama a sí misma.

## Contenido

- **Parte 1**: Recursión básica (factorial, fibonacci, potencia)
- **Parte 2**: Recursión con strings (invertir, contar, palíndromos)
- **Parte 3**: Recursión con arrays (suma, máximo, aplanar)
- **Parte 4**: Estructuras de juego recursivas (dungeons, enemigos)
- **Parte 5**: Búsqueda en árboles
- **Parte 6**: Generación recursiva
- **Parte 7**: Recursión con acumulador (tail recursion)
- **Parte 8**: Optimización con memoización

## Conceptos clave

### Estructura de una función recursiva
```typescript
function recursiva(n: number): number {
  // Caso base: condición de parada
  if (n <= 0) return 0;

  // Caso recursivo: llamada a sí misma
  return n + recursiva(n - 1);
}
```

### Memoización
Guardar resultados previos para evitar recalcular:
```typescript
const cache: {[key: number]: number} = {};
function fibonacci(n: number): number {
  if (n in cache) return cache[n];
  // calcular...
  cache[n] = resultado;
  return resultado;
}
```

## Tips

- Siempre define un caso base (o la recursión será infinita)
- Cada llamada recursiva debe acercarse al caso base
- La recursión usa más memoria que los loops
- Usa memoización para optimizar cálculos repetidos

```bash
npm run test:recursion
```
