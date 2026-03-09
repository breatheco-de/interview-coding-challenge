# `11` Validar una cadena balanceada de corchetes

Escribe una función llamada `isBalanced` que tome una cadena como entrada y determine si la cadena contiene corchetes balanceados. Los corchetes incluyen `()`, `{}` y `[]`. Una cadena se considera balanceada si:
1. Cada corchete de apertura tiene un corchete de cierre correspondiente del mismo tipo.
2. Los corchetes se cierran en el orden correcto.

## Ejemplos:

```javascript
isBalanced("()");             // Devuelve: true
isBalanced("([{}])");         // Devuelve: true
isBalanced("({[)]}");         // Devuelve: false
isBalanced("((())");          // Devuelve: false
isBalanced("({[]}){}[]");     // Devuelve: true
```
Explicacion:
- `()` es un par que abre y cierra correctamente.
- `([{}])` esta bien anidado y cierra en el orden correcto.
- `({[)]}` falla porque `)` intenta cerrar `[` (orden/tipo incorrecto).
- `((())` falla porque queda un `(` sin cerrar.
- `({[]}){}[]` combina grupos anidados y secuenciales balanceados.

## Reglas:
1. La cadena de entrada puede contener cualquier combinación de corchetes y otros caracteres. Ignora los caracteres que no sean corchetes.
2. Devuelve `true` si los corchetes están balanceados; de lo contrario, `false`.

## Restricciones:
- La solución debe manejar corchetes anidados.
- Usa un enfoque eficiente con complejidad de tiempo O(n).


