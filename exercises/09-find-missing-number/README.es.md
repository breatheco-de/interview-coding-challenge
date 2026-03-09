# `09` Encuentra el número faltante

Escribe una función llamada `findMissingNumber` que tome un arreglo de enteros positivos que representan números en el rango de `1` a `n`. El arreglo contiene todos los números en ese rango excepto uno. Tu tarea es encontrar y devolver el número faltante.

#### Reglas:

1. El arreglo no está necesariamente ordenado.
2. Falta exactamente un número.
3. No uses librerías externas como `lodash` o `underscore`.

#### Ejemplos:

```javascript
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Devuelve: 6
findMissingNumber([1, 2, 4, 5, 6]);       // Devuelve: 3
findMissingNumber([2, 3, 1, 5]);          // Devuelve: 4
```
Explicacion:
- En el primer caso, el rango es `1..8` y falta solo el `6`.
- En el segundo caso, el rango es `1..6` y falta solo el `3`.
- En el tercer caso, el rango es `1..5` y falta solo el `4`.

#### Requisitos:
- La solución debe ser eficiente (O(n) o O(n log n)).
- Puedes usar estructuras de datos básicas como arreglos u objetos.


