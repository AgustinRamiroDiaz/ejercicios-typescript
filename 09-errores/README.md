# Sección 09: Manejo de Errores

Esta sección contiene ejercicios para practicar el manejo de errores en TypeScript. Aprenderás a lanzar, capturar y manejar errores de forma profesional.

## Objetivo

Dominar el manejo de errores para crear aplicaciones robustas que puedan recuperarse de situaciones inesperadas y proporcionar mensajes útiles cuando algo falla.

## Contenido

### Parte 1: Conceptos básicos - throw y try/catch
- Lanzar errores con `throw`
- Capturar errores con `try/catch`
- Funciones "seguras" que retornan null en lugar de lanzar

### Parte 2: Validación de datos de juego
- Validar parámetros de entrada
- Lanzar errores descriptivos
- Validación de estados del juego

### Parte 3: Clases de error personalizadas
- Crear clases que heredan de Error
- Tipos de error específicos (PersonajeError, InventarioError, CombateError)
- Identificar tipos de error con instanceof

### Parte 4: Manejo de múltiples errores
- Procesar múltiples operaciones que pueden fallar
- Acumular errores
- Conteo de éxitos y fallos

### Parte 5: Finally y limpieza
- Uso del bloque finally
- Simular operaciones de guardado/carga
- Garantizar limpieza de recursos

### Parte 6: Validación de combate
- Validaciones complejas antes de acciones
- Errores específicos de dominio
- Retornar resultados con posibles errores

### Parte 7: Encadenamiento de validaciones
- Múltiples validaciones en secuencia
- Acumular todos los errores de validación
- Retornar arrays de errores

### Parte 8: Manejo de errores en operaciones batch
- Procesar múltiples elementos
- Separar válidos de inválidos
- No detener el proceso completo por un error

### Parte 9: Errores con información adicional
- Clases de error con propiedades custom
- Información contextual en errores
- Errores más descriptivos

### Parte 10: Error recovery (recuperación de errores)
- Valores por defecto cuando algo falla
- Fallback patterns
- Operaciones que nunca fallan

## Conceptos importantes

### throw
Lanza un error que interrumpe la ejecución:
```typescript
if (valor < 0) {
  throw new Error("El valor no puede ser negativo");
}
```

### try/catch
Captura y maneja errores:
```typescript
try {
  operacionPeligrosa();
} catch (error) {
  console.log("Ocurrió un error:", error);
}
```

### finally
Se ejecuta siempre, haya o no error:
```typescript
try {
  operacion();
} catch (error) {
  manejarError(error);
} finally {
  limpiar(); // Siempre se ejecuta
}
```

### Clases de error personalizadas
```typescript
class MiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MiError";
  }
}

throw new MiError("Algo falló");
```

### Type narrowing con instanceof
```typescript
try {
  operacion();
} catch (error) {
  if (error instanceof PersonajeError) {
    // Manejar error de personaje
  } else if (error instanceof InventarioError) {
    // Manejar error de inventario
  }
}
```

## Patrones comunes

### Validación con throw
```typescript
function crearUsuario(nombre: string, edad: number) {
  if (!nombre) throw new Error("Nombre requerido");
  if (edad < 0) throw new Error("Edad inválida");
  return { nombre, edad };
}
```

### Try/catch con retorno seguro
```typescript
function operacionSegura(): number | null {
  try {
    return operacionPeligrosa();
  } catch {
    return null;
  }
}
```

### Acumular errores de validación
```typescript
function validar(datos: Datos): string[] {
  const errores: string[] = [];
  if (!datos.nombre) errores.push("Nombre requerido");
  if (datos.edad < 0) errores.push("Edad inválida");
  return errores;
}
```

### Fallback pattern
```typescript
function obtenerConFallback<T>(
  operacion: () => T,
  fallback: T
): T {
  try {
    return operacion();
  } catch {
    return fallback;
  }
}
```

## Ejecutar los tests

```bash
npm run test:errores
```

## Tips

- Siempre proporciona mensajes de error descriptivos
- Usa clases de error personalizadas para errores de dominio
- No uses try/catch para control de flujo normal
- Documenta qué errores puede lanzar una función
- En operaciones batch, considera no detener todo por un error
- Los valores por defecto son útiles para hacer código más resiliente
- finally es útil para limpieza, pero no es necesario siempre

¡Buena suerte!
