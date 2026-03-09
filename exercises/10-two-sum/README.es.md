# `10` Two Sum (Suma de dos)

Dado un arreglo de enteros `nums` y un entero `target`, devuelve los índices de los dos números tales que sumados den `target`.

Puedes asumir que cada entrada tiene exactamente una solución y no puedes usar el mismo elemento dos veces.

## Ejemplos

- Entrada: `nums = [2, 7, 11, 15]`, `target = 9`
  - Salida: `[0, 1]`
  - Explicación: `nums[0] + nums[1] == 9`, así que devuelve `[0, 1]`.

- Entrada: `nums = [3, 2, 4]`, `target = 6`
  - Salida: `[1, 2]`
  - Explicacion: `nums[1] + nums[2] = 2 + 4 = 6`.

- Entrada: `nums = [3, 3]`, `target = 6`
  - Salida: `[0, 1]`
  - Explicacion: los dos indices distintos que contienen `3` suman `6`.

## Rendimiento
Intenta una solución eficiente, idealmente con complejidad de tiempo `O(n)`.

