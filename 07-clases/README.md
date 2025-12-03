# Sección 07: Clases en TypeScript

Esta sección contiene ejercicios para practicar el uso de clases en TypeScript. Aprenderás a crear clases, instanciar objetos, definir métodos y hacer que diferentes clases interactúen entre sí.

## Objetivo

Practicar la programación orientada a objetos en TypeScript trabajando con clases que representan elementos de un juego: personajes, enemigos, items y monedas.

## Contenido

El archivo `ejercicio.ts` contiene:

### Parte 1: Clase Personaje
- Constructor que inicializa propiedades (nombre, nivel, vida, mana, oro, experiencia)
- Métodos para gestionar el estado del personaje (vida, mana, oro, experiencia)
- Sistema de subida de nivel al alcanzar cierta experiencia

### Parte 2: Clase Enemigo
- Constructor que inicializa propiedades del enemigo
- Métodos para combate y gestión de vida
- Sistema de recompensas (oro y experiencia)

### Parte 3: Clase Item
- Diferentes tipos de items (curación, mana, daño)
- Métodos para usar items en personajes o contra enemigos
- Sistema de precios

### Parte 4: Clase Moneda
- Monedas normales y raras (valen el doble)
- Método para recoger el oro

### Parte 5: Clase Inventario
- Sistema de capacidad limitada
- Métodos para agregar, usar y filtrar items
- Cálculo de valor total del inventario

### Parte 6: Funciones de combate
- Sistema de combate por turnos entre personajes y enemigos
- Funciones para buscar enemigos (más débil, más fuerte)
- Sistema para derrotar múltiples enemigos

### Parte 7: Sistema de tienda
- Clase Tienda con items para comprar
- Método para comprar items (verifica oro y espacio en inventario)
- El item se queda en la tienda después de comprarse (se crea una copia)

### Parte 8: Recolección de monedas
- Función para recolectar múltiples monedas
- Generación aleatoria de monedas (incluye monedas raras)

## Cómo trabajar en esta sección

1. Abre el archivo `ejercicio.ts`
2. Lee las instrucciones de cada función marcada con `// ========== TU CÓDIGO AQUÍ ==========`
3. Implementa el código necesario entre los comentarios
4. Ejecuta los tests con `npm run test:clases` para verificar tu solución
5. Los tests te indicarán si tu implementación es correcta

## Conceptos importantes

### Clases
Una clase es una plantilla para crear objetos que comparten propiedades y métodos:

```typescript
class Personaje {
  nombre: string;
  nivel: number;

  constructor(nombre: string, nivel: number) {
    this.nombre = nombre;
    this.nivel = nivel;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}

const heroe = new Personaje("Héroe", 5);
console.log(heroe.saludar()); // "Hola, soy Héroe"
```

### Métodos
Los métodos son funciones dentro de una clase que pueden acceder a las propiedades del objeto usando `this`:

```typescript
class Personaje {
  vida: number;

  constructor(vida: number) {
    this.vida = vida;
  }

  recibirDanio(danio: number): void {
    this.vida -= danio;
    if (this.vida < 0) {
      this.vida = 0;
    }
  }
}
```

### Interacción entre clases
Las clases pueden interactuar entre sí pasando objetos como parámetros:

```typescript
class Enemigo {
  danio: number;

  atacar(personaje: Personaje): void {
    personaje.recibirDanio(this.danio);
  }
}
```

### Parámetros opcionales y valores por defecto
Puedes definir parámetros con valores por defecto:

```typescript
constructor(nombre: string, nivel: number = 1) {
  // Si no se proporciona nivel, será 1
}
```

## Ejecutar los tests

```bash
# Ejecutar todos los tests de esta sección
npm run test:clases

# Ejecutar todos los tests del proyecto
npm test
```

## Tips

- Lee cuidadosamente las instrucciones de cada función
- Los tests son muy específicos sobre lo que esperan, léelos si necesitas más detalles
- Recuerda que `this` se refiere al objeto actual dentro de una clase
- Las propiedades de un objeto se acceden con `this.propiedad`
- Los métodos pueden llamar a otros métodos del mismo objeto con `this.metodo()`
- Cuando una clase recibe otra clase como parámetro, puede llamar a sus métodos públicos
- En combate, recuerda verificar si los personajes/enemigos están vivos antes de actuar

## Orden sugerido

Se recomienda completar los ejercicios en el orden presentado:
1. Clase Personaje (métodos básicos primero)
2. Clase Enemigo
3. Clase Item
4. Clase Moneda
5. Clase Inventario
6. Funciones de combate
7. Sistema de tienda
8. Recolección de monedas

¡Buena suerte!
