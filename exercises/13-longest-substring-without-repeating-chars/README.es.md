# `13` Encontrar la subcadena mas larga sin caracteres repetidos

Dada una cadena, encuentra la longitud de la subcadena mas larga que no contenga caracteres repetidos.

- Puedes asumir que la cadena contiene letras inglesas, digitos, simbolos y espacios.
- Intenta mejorar una solucion ingenua.

## Ejemplos

- Entrada: `"abcabcbb"`
  - Salida: `3`
  - Explicacion: la respuesta es `"abc"`.

- Entrada: `"bbbbb"`
  - Salida: `1`
  - Explicacion: la respuesta es `"b"`.

- Entrada: `"pwwkew"`
  - Salida: `3`
  - Explicacion: la respuesta es `"wke"`.

## Pista

El enfoque de ventana deslizante permite resolverlo en `O(n)`.


