# `08` Validación de nombre de usuario (Codeland)

Haga que la función `CodelandUsernameValidation(str)` tome el parámetro `str` y determine si la cadena es un nombre de usuario válido según las siguientes reglas:

1. El nombre de usuario tiene entre 4 y 25 caracteres.
2. Debe comenzar con una letra.
3. Solo puede contener letras, números y el carácter guion bajo (`_`).
4. No puede terminar con un guion bajo.

Si el nombre de usuario es válido, el programa debe devolver la cadena `true`; de lo contrario, `false`.

## Ejemplos

```txt
Input: "aa_"
Output: false
```

```
Input: "u__hello_world123"
Output: true
```