# Grafos Dirigidos - Estructuras de Datos para Videojuegos

## ¿Qué son los Grafos Dirigidos?

Un **grafo dirigido** (o dígrafo) es una estructura de datos que consiste en:
- **Vértices (V)**: Nodos que representan entidades
- **Aristas dirigidas (E)**: Conexiones con dirección desde un vértice hacia otro

Se representa como G = (V, E) donde cada arista (u, v) indica una conexión desde u hacia v.

### Diferencia con Grafos No Dirigidos

```
Grafo No Dirigido:        Grafo Dirigido:
    A --- B                  A --> B
    |     |                  |     ^
    |     |                  v     |
    C --- D                  C --> D
```

En un grafo dirigido, la arista A → B no implica B → A.

## Grafos Dirigidos en Videojuegos

Los grafos dirigidos son fundamentales en el desarrollo de videojuegos:

### 1. Máquinas de Estados Finitos (FSM)

Estados y transiciones de IA de enemigos:

```
  Patrullando → Persiguiendo → Atacando
       ↓            ↓             ↓
    Huyendo ← ← ← ← ← ← ← ← ← Muerto
```

**Juegos que lo usan:**
- Pac-Man: Estados de los fantasmas
- Stealth games: Estados de guardias
- Cualquier juego con IA de enemigos

### 2. Sistema de Navegación de Habitaciones

Mapas de aventuras tipo texto o RPGs:

```
  Entrada → Pasillo → Sala del Tesoro
     ↓         ↓            ↓
  Armería ← Biblioteca → Salida
```

**Juegos que lo usan:**
- Zork y adventure games
- The Legend of Zelda: Conexión entre habitaciones
- Dark Souls: Interconexión de áreas

### 3. Árboles de Habilidades (Skill Trees)

Prerequisitos de habilidades:

```
  Ataque Básico → Ataque Doble → Ataque Triple
       ↓               ↓
  Golpe Fuerte → Golpe Crítico
```

**Juegos que lo usan:**
- Path of Exile: Passive Skill Tree
- World of Warcraft: Talent Trees
- Diablo: Skill Trees
- Borderlands: Skill Trees

### 4. Sistema de Diálogo

Opciones y ramificaciones de diálogo:

```
  "¿Necesitas ayuda?"
     ↓           ↓
  "Sí"        "No"
     ↓           ↓
  "Aquí"    "Adiós"
```

**Juegos que lo usan:**
- Mass Effect: Sistema de diálogo con rueda
- The Witcher: Opciones de diálogo
- Disco Elysium: Diálogo complejo
- Telltale Games: Narrativa ramificada

### 5. Grafo de Dependencias

Misiones que dependen de otras:

```
  "Hablar con alcalde" → "Investigar bosque" → "Derrotar jefe"
            ↓
     "Conseguir equipo"
```

**Juegos que lo usan:**
- Skyrim: Questlines
- The Witcher 3: Misiones principales y secundarias
- MMORPGs: Cadenas de misiones

## Representaciones Internas

En este ejercicio aprenderás **4 formas diferentes** de implementar un grafo dirigido:

### 1. Lista de Adyacencia con Map y Set

```typescript
// Map<Vértice, Set<Vértices adyacentes>>
Map {
  "A" => Set { "B", "C" },
  "B" => Set { "C" },
  "C" => Set { }
}
```

**Ventajas:**
- Eficiente para grafos dispersos (pocas aristas)
- Búsqueda de adyacentes O(1)
- Agregar/eliminar aristas rápido

**Cuándo usar:**
- Grafos grandes con pocas conexiones
- Necesitas iterar sobre adyacentes frecuentemente

### 2. Conjunto de Aristas

```typescript
// Set de vértices + Set de strings codificados
vertices: Set { "A", "B", "C" }
aristas: Set { "A->B", "A->C", "B->C" }
```

**Ventajas:**
- Simple de implementar
- Bueno para iterar sobre todas las aristas
- Fácil de serializar

**Cuándo usar:**
- Necesitas procesar todas las aristas frecuentemente
- El grafo es pequeño

### 3. Matriz de Adyacencia

```typescript
// Array 2D donde matriz[i][j] = true si existe arista de i a j
vertices: ["A", "B", "C"]
matriz: [
  [false, true,  true],  // A -> B, A -> C
  [false, false, true],  // B -> C
  [false, false, false]  // C -> nada
]
```

**Ventajas:**
- Verificación de arista O(1)
- Ideal para grafos densos (muchas aristas)
- Operaciones matriciales (grafos ponderados)

**Cuándo usar:**
- Grafos pequeños y densos
- Necesitas verificar aristas constantemente
- Vas a hacer operaciones matemáticas con el grafo

### 4. Map de Aristas con Arrays

```typescript
// Map<Vértice, Array<Vértices destino>>
Map {
  "A" => ["B", "C"],
  "B" => ["C"],
  "C" => []
}
```

**Ventajas:**
- Similar a lista de adyacencia
- Mantiene orden de inserción
- Permite duplicados si es necesario

**Cuándo usar:**
- Necesitas mantener orden de aristas
- Prefieres trabajar con arrays que sets

## Operaciones Fundamentales

### Operaciones Básicas

1. **agregarVertice(v)**: Agrega un vértice al grafo
2. **agregarArista(u, v)**: Crea arista dirigida u → v
3. **existeArista(u, v)**: Verifica si existe u → v
4. **adyacentes(v)**: Retorna vértices a los que apunta v

### Consultas de Información

5. **gradoSalida(v)**: Cantidad de aristas que salen de v
6. **gradoEntrada(v)**: Cantidad de aristas que llegan a v
7. **numeroVertices()**: Total de vértices
8. **numeroAristas()**: Total de aristas

### Algoritmos de Caminos

9. **existeCamino(u, v)**: ¿Se puede llegar de u a v?
10. **obtenerCaminos(u, v)**: Todos los caminos simples de u a v

## Algoritmos Importantes

### Búsqueda en Profundidad (DFS)

Explora un camino hasta el final antes de retroceder:

```typescript
function dfs(grafo, inicio, visitados = new Set()) {
  visitados.add(inicio);

  for (const adyacente of grafo.adyacentes(inicio)) {
    if (!visitados.has(adyacente)) {
      dfs(grafo, adyacente, visitados);
    }
  }
}
```

**Útil para:**
- Encontrar caminos
- Detectar ciclos
- Ordenamiento topológico

### Búsqueda en Amplitud (BFS)

Explora por niveles (vecinos cercanos primero):

```typescript
function bfs(grafo, inicio) {
  const cola = [inicio];
  const visitados = new Set([inicio]);

  while (cola.length > 0) {
    const actual = cola.shift();

    for (const adyacente of grafo.adyacentes(actual)) {
      if (!visitados.has(adyacente)) {
        visitados.add(adyacente);
        cola.push(adyacente);
      }
    }
  }
}
```

**Útil para:**
- Camino más corto (sin pesos)
- Verificar conexión
- Encontrar componentes

## Estructura del Ejercicio

### Parte 1: Interfaz GrafoDirigido
Define todas las operaciones que debe soportar un grafo dirigido.

### Parte 2: Implementaciones (4 clases)
1. `GrafoListaAdyacencia` - Map con Sets
2. `GrafoConjuntoAristas` - Set de vértices + Set de aristas
3. `GrafoMatrizAdyacencia` - Array 2D
4. `GrafoMapAristas` - Map con Arrays

### Parte 3: Máquina de Estados
`MaquinaEstadosEnemigo` - FSM para IA de enemigos

### Parte 4: Sistema de Habitaciones
`SistemaHabitaciones` - Navegación entre habitaciones

### Parte 5: Árbol de Habilidades
`ArbolHabilidades` - Skill tree con prerequisitos

### Parte 6: Sistema de Diálogo
`SistemaDialogo` - Diálogo ramificado con opciones

### Parte 7: Sistema de Misiones
`SistemaMisiones` - Misiones con dependencias

## Cómo Resolver los Ejercicios

### Paso 1: Implementa las 4 clases de grafos

Empieza con `GrafoListaAdyacencia` (la más común):

1. Inicializa el Map en el constructor
2. Implementa `agregarVertice` y `agregarArista`
3. Implementa las consultas básicas (`vertices`, `aristas`, `adyacentes`)
4. Implementa los cálculos de grados
5. Implementa `existeCamino` usando DFS o BFS
6. Implementa `obtenerCaminos` usando DFS recursivo con backtracking

### Paso 2: Implementa los ejercicios de videojuegos

Para cada ejercicio:

1. **Lee los comentarios** que explican qué debe hacer cada método
2. **Decide qué implementación de grafo usar** (cualquiera funciona)
3. **Inicializa el grafo** en el constructor
4. **Delega al grafo** para las operaciones complejas

### Ejemplo: MaquinaEstadosEnemigo

```typescript
constructor() {
  // 1. Crea el grafo
  this.grafo = new GrafoListaAdyacencia<string>();

  // 2. Agrega los estados como vértices
  this.grafo.agregarVertice("patrullando");
  this.grafo.agregarVertice("persiguiendo");
  // ... etc

  // 3. Agrega las transiciones como aristas
  this.grafo.agregarArista("patrullando", "persiguiendo");
  this.grafo.agregarArista("patrullando", "huyendo");
  // ... etc

  // 4. Estado inicial
  this.estadoActual = "patrullando";
}

transicionar(nuevoEstado: string): boolean {
  // Usa this.grafo.existeArista para verificar
  if (this.grafo.existeArista(this.estadoActual, nuevoEstado)) {
    this.estadoActual = nuevoEstado;
    return true;
  }
  return false;
}
```

## Tips y Trucos

### Tip 1: Comparación de Objetos

Cuando uses objetos como vértices (como `Habitacion`, `Habilidad`), recuerda que JavaScript compara por referencia:

```typescript
const h1 = { id: "1", nombre: "Entrada" };
const h2 = { id: "1", nombre: "Entrada" };

// h1 !== h2 (diferentes referencias)
// Usa el MISMO objeto al agregar y buscar
```

### Tip 2: Algoritmo de Caminos

Para `obtenerCaminos`, usa DFS con backtracking:

```typescript
function encontrarCaminos(
  actual: V,
  destino: V,
  camino: V[],
  visitados: Set<V>,
  resultado: V[][]
) {
  camino.push(actual);
  visitados.add(actual);

  if (actual === destino) {
    resultado.push([...camino]); // Copia el camino
  } else {
    for (const adyacente of this.adyacentes(actual)) {
      if (!visitados.has(adyacente)) {
        encontrarCaminos(adyacente, destino, camino, visitados, resultado);
      }
    }
  }

  // Backtracking
  camino.pop();
  visitados.delete(actual);
}
```

### Tip 3: Grado de Entrada

Para calcular grado de entrada, necesitas contar todas las aristas que **llegan** al vértice:

```typescript
gradoEntrada(vertice: V): number {
  let cuenta = 0;
  for (const [origen, destino] of this.aristas()) {
    if (destino === vertice) cuenta++;
  }
  return cuenta;
}
```

### Tip 4: Prerequisitos

En el `ArbolHabilidades` y `SistemaMisiones`, los prerequisitos son las aristas **inversas**:

```
A → B significa "B requiere A como prerequisito"

obtenerPrerequisitos(B) debe retornar [A]
```

## Complejidades Temporales

### Lista de Adyacencia (Map + Set)

- agregarVertice: O(1)
- agregarArista: O(1)
- existeArista: O(1)
- adyacentes: O(1) para obtener el Set
- gradoSalida: O(1)
- gradoEntrada: O(V + E)

### Conjunto de Aristas

- agregarVertice: O(1)
- agregarArista: O(1)
- existeArista: O(1)
- adyacentes: O(E)
- gradoSalida: O(E)
- gradoEntrada: O(E)

### Matriz de Adyacencia

- agregarVertice: O(V²) (redimensionar matriz)
- agregarArista: O(1)
- existeArista: O(1)
- adyacentes: O(V)
- gradoSalida: O(V)
- gradoEntrada: O(V)

## Conceptos Relacionados

### Ciclos

Un **ciclo** es un camino que empieza y termina en el mismo vértice:

```
A → B → C → A (ciclo)
```

Los grafos dirigidos pueden tener ciclos. Los **DAGs** (Directed Acyclic Graphs) no los tienen.

### Ordenamiento Topológico

Solo funciona en DAGs. Ordena vértices de forma que todas las aristas apunten hacia adelante:

```
Grafo:  A → B → D
        ↓
        C

Orden: A, B, C, D  o  A, C, B, D
```

**Útil para:**
- Orden de compilación
- Orden de misiones
- Orden de habilidades

### Grafos Fuertemente Conectados

Un grafo es fuertemente conectado si existe camino desde cualquier vértice a cualquier otro.

```
Fuertemente conectado:    No fuertemente conectado:
    A ⇄ B                     A → B
    ↕   ↕                     ↓
    C ⇄ D                     C → D
```

## Ejecución de Tests

Ejecuta los tests para verificar tu implementación:

```bash
npm run test:grafos
```

O ejecuta todos los tests:

```bash
npm test
```

## Desafíos Extra

Si quieres practicar más, intenta implementar:

1. **Detección de Ciclos**: Verifica si el grafo tiene ciclos
2. **Camino Más Corto**: Encuentra el camino con menos aristas entre dos vértices
3. **Ordenamiento Topológico**: Ordena vértices de un DAG
4. **Componentes Fuertemente Conectados**: Encuentra subgrafos fuertemente conectados
5. **Grafo Inverso**: Crea un grafo con todas las aristas invertidas

## Recursos Adicionales

### Visualizadores de Grafos

- [VisuAlgo](https://visualgo.net/en/graphds) - Visualización de algoritmos de grafos
- [Graph Online](https://graphonline.ru/en/) - Editor de grafos
- [D3 Force Graph](https://observablehq.com/@d3/force-directed-graph) - Grafos interactivos

### Lecturas Recomendadas

- Introduction to Algorithms (CLRS) - Capítulo 22: Grafos
- [Graph Theory Basics](https://www.youtube.com/watch?v=LFKZLXVO-Dg) - Video tutorial
- [Pathfinding in Games](https://www.redblobgames.com/pathfinding/a-star/introduction.html)

### Frameworks de Juegos que Usan Grafos

- **Phaser**: Scene graph, navegación
- **Unity**: Navmesh para pathfinding
- **Unreal Engine**: Behavior Trees (grafo dirigido)
- **Godot**: Scene tree, state machines

## Próximos Pasos

Después de dominar grafos dirigidos, puedes aprender:

1. **Grafos Ponderados**: Aristas con peso (distancias, costos)
2. **Algoritmo de Dijkstra**: Camino más corto con pesos
3. **Algoritmo A\***: Pathfinding en videojuegos
4. **Árboles**: Caso especial de grafos
5. **Redes de Flujo**: Optimización de recursos

¡Los grafos son una de las estructuras de datos más importantes en desarrollo de videojuegos!
