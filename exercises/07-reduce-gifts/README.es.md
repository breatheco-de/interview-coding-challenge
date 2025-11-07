# `07` Reducir Regalos

Determina el número mínimo de elementos que hay que eliminar de un arreglo de precios para que la suma de cualquier `k` elementos consecutivos no supere un determinado `threshold`.

## Enunciado

Se te da un arreglo de enteros `prices`, donde cada entero representa el precio de un artículo. También se te dan dos enteros `k` y `threshold`. Tu tarea es eliminar el número mínimo de artículos del arreglo para que la suma de cualquier `k` elementos consecutivos en el arreglo resultante no exceda el `threshold`. Si la longitud de `prices` es menor que `k`, no es necesario eliminar elementos.

### Entrada:

- Un arreglo de enteros `prices` (1 ≤ longitud de `prices` ≤ 10^5, 1 ≤ prices[i] ≤ 10^4).
- Un entero `k` (1 ≤ k ≤ 10^5).
- Un entero `threshold` (1 ≤ threshold ≤ 10^5).

### Salida:

- Devuelve el número mínimo de elementos que deben eliminarse para cumplir la condición. Si no es necesario eliminar elementos, devuelve `0`.

## Ejemplos

Input:

```txt
prices = [3, 2, 1, 4, 6, 5]
k = 3
threshold = 14
```

Output:
```txt
1
```

> La suma de los últimos tres elementos `[4, 6, 5]` es `15`, que excede el umbral `14`. Eliminando el `6` obtenemos `[3, 2, 1, 4, 5]`, donde ninguna suma de tres consecutivos supera el umbral.

---

Input:

```txt
prices = [9, 6, 7, 2, 7, 2]
k = 3
threshold = 14
```

Output: 
```txt
2
```

> Varias ventanas de tres consecutivos exceden el umbral, por lo que hay que eliminar dos elementos para satisfacer la condición.

## Consejos

- Busca una solución eficiente, ya que el tamaño de entrada puede ser grande.
- Ten en cuenta casos borde como cuando no es necesario eliminar elementos o cuando hay varias opciones equivalentes para eliminar.
