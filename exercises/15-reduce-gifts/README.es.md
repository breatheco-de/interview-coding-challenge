# `15` Reducir Regalos

Determina el numero minimo de elementos que hay que eliminar de un arreglo de precios para que la suma de cualquier `k` elementos consecutivos no supere un `threshold` dado.

## Enunciado

Se te da un arreglo de enteros `prices`, donde cada entero representa el precio de un articulo. Tambien se te dan dos enteros `k` y `threshold`. Tu tarea es eliminar el numero minimo de articulos del arreglo para que la suma de cualquier `k` elementos consecutivos en el arreglo resultante no exceda `threshold`.

Si la longitud de `prices` es menor que `k`, no es necesario eliminar elementos.

## Entrada

- `prices`: arreglo de enteros (`1 <= prices.length <= 10^5`, `1 <= prices[i] <= 10^4`)
- `k`: entero (`1 <= k <= 10^5`)
- `threshold`: entero (`1 <= threshold <= 10^5`)

## Salida

Devuelve el numero minimo de elementos que deben eliminarse. Si no hace falta eliminar elementos, devuelve `0`.

## Ejemplos

```txt
prices = [3, 2, 1, 4, 6, 5]
k = 3
threshold = 14
Salida: 1
```
Explicacion: la ventana `[4,6,5]` suma `15` (> 14), por eso quitar un elemento (por ejemplo `6`) hace que todas las ventanas de 3 cumplan.

```txt
prices = [9, 6, 7, 2, 7, 2]
k = 3
threshold = 14
Salida: 2
```
Explicacion: mas de una ventana de tamano 3 supera `14`, asi que hacen falta al menos dos eliminaciones para cumplir en todo el arreglo.


