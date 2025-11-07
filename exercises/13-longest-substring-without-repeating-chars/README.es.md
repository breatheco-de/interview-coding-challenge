# `13` Encontrar la subcadena más larga sin caracteres repetidos

Dada una cadena, encuentra la longitud de la subcadena más larga que no contenga caracteres repetidos.

- Puedes asumir que la cadena dada consiste solo de letras inglesas, dígitos, símbolos y espacios.
- Si quieres, describe el enfoque verbalmente antes de escribir la solución y trata de mejorar una solución ingenua si es posible.

## Ejemplos

- Entrada: `"abcabcbb"`
  - Salida: `3`
  - Explicación: la respuesta es `"abc"`, con longitud `3`.

- Entrada: `"bbbbb"`
  - Salida: `1`
  - Explicación: la respuesta es `"b"`, con longitud `1`.

- Entrada: `"pwwkew"`
  - Salida: `3`
  - Explicación: la respuesta es `"wke"`, con longitud `3`. Nota: la respuesta debe ser una subcadena, `"pwke"` no es válida.

## Pistas

- Considera usar la técnica de "ventana deslizante" (sliding window) para mantener la subcadena actual sin caracteres repetidos.
- Usar un conjunto o un diccionario puede ayudar a llevar el registro de caracteres de manera eficiente.

## Rendimiento
Apunta a una solución con complejidad de tiempo `O(n)`, donde `n` es la longitud de la cadena.
