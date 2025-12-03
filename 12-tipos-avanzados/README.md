# Sección 12: Tipos Avanzados de TypeScript

Domina el sistema de tipos de TypeScript: union types, generics, utility types y más.

## Contenido

- **Parte 1**: Union Types
- **Parte 2**: Literal Types
- **Parte 3**: Discriminated Unions
- **Parte 4**: Generics básicos
- **Parte 5**: Generics con constraints
- **Parte 6**: Utility Types (Partial)
- **Parte 7**: Pick y Omit
- **Parte 8**: Required y Readonly
- **Parte 9**: Record
- **Parte 10**: Type Guards
- **Parte 11**: Conditional Types
- **Parte 12**: Mapped Types
- **Parte 13**: Template Literal Types
- **Parte 14**: Index Signatures
- **Parte 15**: Intersection Types

## Conceptos clave

### Union Types
```typescript
type Estado = "activo" | "inactivo";
let estado: Estado = "activo"; // ✓
estado = "otro"; // ✗ Error
```

### Generics
```typescript
function primero<T>(arr: T[]): T {
  return arr[0];
}
```

### Utility Types
```typescript
Partial<T>    // Todas opcionales
Required<T>   // Todas requeridas
Readonly<T>   // Solo lectura
Pick<T, K>    // Seleccionar propiedades
Omit<T, K>    // Excluir propiedades
Record<K, T>  // Objeto con keys y values
```

### Type Guards
```typescript
function esPez(animal: Animal): animal is Pez {
  return (animal as Pez).nadar !== undefined;
}
```

```bash
npm run test:tipos-avanzados
```
