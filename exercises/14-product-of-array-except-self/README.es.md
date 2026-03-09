# `14` Producto del Arreglo Excepto el Mismo Elemento

Dado un arreglo de enteros `nums`, devuelve un arreglo `answer` tal que `answer[i]` sea igual al producto de todos los elementos de `nums` excepto `nums[i]`.

## Reglas

1. No uses division.
2. Busca una complejidad de tiempo `O(n)`.
3. Usa espacio extra `O(1)` (sin contar el arreglo de salida).

## Ejemplos

```txt
Entrada: [1,2,3,4]
Salida: [24,12,8,6]
```
Explicacion: cada posicion contiene el producto de todos los otros valores (por ejemplo, `24 = 2*3*4`, `12 = 1*3*4`).

```txt
Entrada: [-1,1,0,-3,3]
Salida: [0,0,9,0,0]
```
Explicacion: como hay un cero, todas las posiciones excepto la del cero valen `0`; en la posicion del cero se multiplican los no-cero (`-1*1*-3*3 = 9`).


