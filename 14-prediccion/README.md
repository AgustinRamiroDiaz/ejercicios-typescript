# Sección 14: Predicción de Código

## Objetivo

Esta sección tiene como objetivo desarrollar la habilidad de **predecir mentalmente** qué hará un programa antes de ejecutarlo. Esta es una habilidad fundamental en programación que te ayudará a:

- Entender mejor cómo funciona el código
- Detectar errores más rápidamente
- Escribir código más eficiente
- Depurar problemas con mayor facilidad

## Cómo usar estos ejercicios

1. **NO ejecutes el código inmediatamente**
2. Lee cada ejercicio con atención
3. Escribe tu predicción en el comentario correspondiente
4. Razona por qué crees que ese será el resultado
5. Solo después de escribir tu predicción, ejecuta el código
6. Compara tu predicción con el resultado real
7. Si te equivocaste, analiza por qué y aprende del error

## Estructura

Los ejercicios están organizados en subcarpetas por categoría, cada una con múltiples archivos individuales:

### 01-variables/ (15 ejercicios)
- Asignación básica de variables
- Operaciones matemáticas
- Tipos de datos (string, number, boolean)
- Concatenación y template literals
- Operadores de incremento
- **Nivel**: Principiante

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/01-variables/01-asignacion-basica.ts
npx tsx 14-prediccion/01-variables/02-reasignacion.ts
```

### 02-condicionales/ (15 ejercicios)
- Estructuras if/else/else if
- Operadores de comparación (===, ==, >, <)
- Operadores lógicos (&&, ||, !)
- Switch statements
- Operador ternario
- Valores truthy y falsy
- **Nivel**: Principiante-Intermedio

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/02-condicionales/01-if-basico.ts
npx tsx 14-prediccion/02-condicionales/11-switch.ts
```

### 03-loops/ (18 ejercicios)
- Bucles for, while, do-while
- Break y continue
- Bucles anidados
- Acumuladores
- Iteración sobre strings
- **Nivel**: Intermedio

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/03-loops/01-for-basico.ts
npx tsx 14-prediccion/03-loops/09-loop-anidado.ts
```

### 04-funciones/ (15 ejercicios)
- Funciones básicas y con parámetros
- Return values
- Funciones flecha
- Scope de variables
- Recursión básica
- Closures
- Parámetros por defecto
- **Nivel**: Intermedio-Avanzado

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/04-funciones/01-funcion-basica.ts
npx tsx 14-prediccion/04-funciones/14-closure-basico.ts
```

### 05-arrays/ (20 ejercicios)
- Acceso y modificación de elementos
- Métodos básicos (push, pop, shift, unshift)
- Métodos de búsqueda (includes, indexOf, find)
- Métodos de transformación (map, filter, reduce)
- Iteración (for, for...of, forEach)
- **Nivel**: Intermedio-Avanzado

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/05-arrays/01-acceso-basico.ts
npx tsx 14-prediccion/05-arrays/16-map.ts
```

### 06-clases/ (15 ejercicios)
- Creación de instancias
- Propiedades y métodos
- Herencia con extends
- Propiedades privadas
- Métodos estáticos
- Getters y setters
- Composición
- **Nivel**: Avanzado

**Ejemplo de ejecución:**
```bash
npx tsx 14-prediccion/06-clases/01-clase-basica.ts
npx tsx 14-prediccion/06-clases/08-herencia-basica.ts
```

## Cómo ejecutar todos los ejercicios de una categoría

Puedes ejecutar todos los ejercicios de una categoría usando un wildcard:

```bash
# Todos los ejercicios de variables
for file in 14-prediccion/01-variables/*.ts; do npx tsx "$file"; done

# Todos los ejercicios de condicionales
for file in 14-prediccion/02-condicionales/*.ts; do npx tsx "$file"; done

# Todos los ejercicios de loops
for file in 14-prediccion/03-loops/*.ts; do npx tsx "$file"; done

# Todos los ejercicios de funciones
for file in 14-prediccion/04-funciones/*.ts; do npx tsx "$file"; done

# Todos los ejercicios de arrays
for file in 14-prediccion/05-arrays/*.ts; do npx tsx "$file"; done

# Todos los ejercicios de clases
for file in 14-prediccion/06-clases/*.ts; do npx tsx "$file"; done
```

## Consejos

- **Tómate tu tiempo**: No hay prisa. Es mejor pensar bien una predicción que adivinar rápidamente.
- **Escribe tus razonamientos**: Además de la predicción, escribe por qué crees que será ese resultado.
- **No te desanimes por los errores**: Los errores son oportunidades de aprendizaje. Analiza por qué te equivocaste.
- **Practica regularmente**: La predicción de código mejora con la práctica constante.
- **Empieza por el principio**: Aunque creas que algunos ejercicios son muy fáciles, empezar desde el inicio ayuda a construir una base sólida.
- **Ejecuta uno a la vez**: Cada archivo es independiente, lo que te permite concentrarte en un concepto a la vez.

## Sin Tests

A diferencia de otras secciones, aquí **no hay tests automatizados**. El objetivo es que tú mismo verifiques tus predicciones ejecutando el código y comparando con lo que predijiste.

## Progresión Sugerida

1. Completa todos los ejercicios de una carpeta antes de pasar a la siguiente
2. Si te equivocas en más del 30% de los ejercicios de una carpeta, repásala al día siguiente
3. Una vez completada la sección, vuelve a hacerla después de una semana para reforzar
4. Los ejercicios dentro de cada carpeta están numerados en orden de dificultad

## Resumen de Ejercicios

| Categoría | Cantidad de Ejercicios | Nivel |
|-----------|----------------------|-------|
| Variables | 15 | Principiante |
| Condicionales | 15 | Principiante-Intermedio |
| Loops | 18 | Intermedio |
| Funciones | 15 | Intermedio-Avanzado |
| Arrays | 20 | Intermedio-Avanzado |
| Clases | 15 | Avanzado |
| **Total** | **98** | - |

¡Buena suerte y que disfrutes desarrollando tu capacidad de predicción de código!
