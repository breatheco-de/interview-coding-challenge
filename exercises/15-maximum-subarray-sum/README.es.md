# `15` Suma máxima de subarreglo (Algoritmo de Kadane)

Dado un arreglo de enteros `nums`, encuentra el subarreglo contiguo (con al menos un número) que tiene la suma más grande, y devuelve su suma.

## Ejemplos

- Entrada: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`
  - Salida: `6`
  - Explicación: El subarreglo `[4, -1, 2, 1]` tiene la mayor suma `6`.

- Entrada: `nums = [1]`
  - Salida: `1`

- Entrada: `nums = [5, 4, -1, 7, 8]`
  - Salida: `23`

## Recomendación

- La solución óptima debe tener complejidad temporal `O(n)`.
- Una solución ingenua con bucles anidados funciona, pero intenta encontrar un enfoque más eficiente (por ejemplo, el algoritmo de Kadane).
