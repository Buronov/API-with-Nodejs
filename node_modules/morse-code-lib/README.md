# MorseCode Library
  Un proyecto para traducir texto a código morse y código morse a texto, utilizando TypeScript.

## Documentación
### Morse Encode
  Para el uso de la librería se tomará un separador por default que es el espacio, sin empargo se podrá agregar algún separador custom o utilizar los ya configurados.

  **Nota: El símbolo de grado (°) no está permitido como un separador válido.**

    Separadores Configurados:
    -pa --parenthesis   Separa las palabras entre paréntesis ().
    -sh --sharp        Separa las palabras entre signo de número #.
    -as --asterisk      Separa las palabras entre asteriscos *.
    -pi --pipe          Separa las palabras entre plecas |.

La misma posee una función llamada `morseEncode()` la cual toma dos parámetros, uno es el string que posee el texto para convertir en morse y el otro el separador.
  #### Ejemplo
  ````sh
  // Imprimir la palabra Hello en Código Morse con el separador por default.
  import { MorseCode } from 'morse-code-lib';
  let morseCode = new MorseCode();
  console.log(morseCode.morseEncode('Hello'));

  // Imprimir la palabra Hello en Código Morse con un separador custom.
  import { MorseCode } from 'morse-code-lib';
  let morseCode = new MorseCode();
  console.log(morseCode.morseEncode('Hello', '/'));
  ````

### Morse Decode
 Para el uso de la librería se tomará una convención por default que es lowerCase, sin empargo se podrá utilizar alguna de las ya configuradas.

    Separadores Configurados:
    -lc --lowerCase   Las letras de las palabras salen en Minúscula (hola).
    -uc --upperCase   Las letras de las palabras salen en Mayúscula (HOLA).
    -pc --pascalCase   La primera letra de cada palabra sale Mayúscula y las demás en Minúscula (Hola).

La misma posee una función llamada `morseDecode()` la cual toma dos parámetros, uno es el string que posee el texto morse para convertir en texto y el otro la convención.
  #### Ejemplo
  ````sh
  // Imprimir el Código Morse con la convención por default.
  import { MorseCode } from 'morse-code-lib';
  let morseCode = new MorseCode();
  console.log(morseCode.morseDecode('.... . .-.. .-.. ---'));

  // Imprimir el Código Morse con la convención configurada.
  import { MorseCode } from 'morse-code-lib';
  let morseCode = new MorseCode();
  console.log(morseCode.morseDecode('Hello', '--pascalCase'));
  ````


## Autor
| Name                 |  Contribution   |  Email                        |
|----------------------|-----------------|-------------------------------|
| Jack Pacheco         |  Developer      |  jackdamiolixp@gmail.com      |