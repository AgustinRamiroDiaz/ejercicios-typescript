# Ejercicios de TypeScript - Aprende Programación con Videojuegos 🎮

¡Bienvenido! Este es un conjunto de ejercicios diseñados para aprender los conceptos fundamentales de programación usando TypeScript con temática de videojuegos.

## 📚 Estructura

Los ejercicios están organizados en niveles progresivos:

1. **01-if** - Condicionales (if/else)
2. **02-while** - Bucles while
3. **03-arrays** - Arrays y operaciones básicas
4. **04-for** - Bucles for
5. **05-diccionarios** - Objetos como diccionarios (Record/Map)
6. **06-objetos** - Objetos y tipos personalizados
7. **07-clases** - Clases y programación orientada a objetos
8. **08-funciones** - Funciones de alto orden (map, filter, reduce)
9. **09-errores** - Manejo de errores (try/catch, throw, custom errors)
10. **10-recursion** - Recursión y algoritmos recursivos
11. **11-strategy** - Patrón Strategy (preparación para frameworks de videojuegos)
12. **12-tipos-avanzados** - Tipos avanzados de TypeScript (generics, utility types)
13. **13-grafos** - Estructuras de grafos
14. **14-prediccion** - Predicción de código (sin tests)

## 🚀 Cómo empezar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar un ejercicio

Cada carpeta contiene:
- `ejercicio.ts` - El archivo donde escribirás tu código
- `ejercicio.test.ts` - Los tests que verifican si tu solución es correcta

Para ejecutar los tests de un ejercicio específico:

```bash
# Ejercicio de if
npm test 01-if

# Ejercicio de while
npm test 02-while

# Ejercicio de arrays
npm test 03-arrays

# Ejercicio de for
npm test 04-for

# Ejercicio de diccionarios
npm test 05-diccionarios

# Ejercicio de objetos
npm test 06-objetos

# Ejercicio de clases
npm test 07-clases

# Ejercicio de funciones de alto orden
npm test 08-funciones

# Ejercicio de manejo de errores
npm test 09-errores

# Ejercicio de recursión
npm test 10-recursion

# Ejercicio de patrón Strategy
npm test 11-strategy

# Ejercicio de tipos avanzados
npm test 12-tipos-avanzados
```

### 3. Ejecutar todos los tests

```bash
npm test
```

### 4. Sección especial: Predicción de Código (14-prediccion)

La sección 14 es diferente: **no tiene tests**. El objetivo es que predijas mentalmente qué imprimirá el código antes de ejecutarlo.

Esta sección contiene **98 ejercicios** organizados en 6 subcarpetas:
- `01-variables/` - 15 ejercicios de variables básicas
- `02-condicionales/` - 15 ejercicios de if/else/switch
- `03-loops/` - 18 ejercicios de for/while/do-while
- `04-funciones/` - 15 ejercicios de funciones
- `05-arrays/` - 20 ejercicios de arrays y métodos
- `06-clases/` - 15 ejercicios de clases y POO

Para ejecutar un ejercicio individual:

```bash
# Ejemplo: primer ejercicio de variables
npx tsx 14-prediccion/01-variables/01-asignacion-basica.ts

# Ejemplo: ejercicio de switch
npx tsx 14-prediccion/02-condicionales/11-switch.ts

# Ejemplo: ejercicio de closures
npx tsx 14-prediccion/04-funciones/14-closure-basico.ts
```

**Importante**: Escribe tus predicciones en los comentarios ANTES de ejecutar el código. Consulta `14-prediccion/README.md` para más detalles sobre cómo usar esta sección.

## 📝 Cómo resolver los ejercicios

1. Abre el archivo `ejercicio.ts` en la carpeta del ejercicio que quieras resolver
2. Busca las secciones marcadas con `// ========== TU CÓDIGO AQUÍ ==========`
3. Escribe tu código en esas secciones
4. Ejecuta los tests para verificar si tu solución es correcta
5. Si todos los tests pasan (✅), ¡felicidades! Puedes pasar al siguiente ejercicio

## 💡 Consejos

- Lee cuidadosamente las instrucciones en cada función
- Los comentarios te dan pistas sobre qué hacer
- Si un test falla, lee el mensaje de error para entender qué está mal
- No te preocupes si no funciona a la primera, ¡la práctica hace al maestro!

## 🎯 Objetivo

Completar todos los ejercicios y entender los conceptos fundamentales de programación:
- Condicionales para tomar decisiones
- Bucles para repetir acciones
- Arrays para manejar listas de datos
- Objetos para estructurar información compleja
- Clases para crear tipos personalizados con comportamiento
- Funciones de alto orden para transformar y procesar datos
- Manejo de errores para crear código robusto
- Recursión para resolver problemas complejos
- Patrón Strategy para diseño flexible (esencial en frameworks de videojuegos)
- Tipos avanzados de TypeScript para máxima seguridad

¡Diviértete aprendiendo! 🚀

