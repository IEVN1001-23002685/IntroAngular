import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  numeroVocales: number = 0;
  numeroConsonantes: number = 0;
  vocales: string = '';
  consonantes: string = '';
  resultado: string = '';

  leerFrase(): void {
    this.numeroVocales = 0;
    this.numeroConsonantes = 0;
    this.vocales = '';
    this.consonantes = '';

    for (let i = 0; i < this.frase.length; i++) {

      let caracter = this.frase[i];

      if (caracter != ' ') {

        if (
          caracter == 'a' ||
          caracter == 'e' ||
          caracter == 'i' ||
          caracter == 'o' ||
          caracter == 'u' ||
          caracter == 'A' ||
          caracter == 'E' ||
          caracter == 'I' ||
          caracter == 'O' ||
          caracter == 'U'
        ) {

          this.numeroVocales++;
          this.vocales = this.vocales + caracter + ' ';

        } else {

          this.numeroConsonantes++;
          this.consonantes = this.consonantes + caracter + ' ';
        }
      }
    }

    let izquierda: number = 0;
    let derecha: number = this.frase.length - 1;
    let esPalindromo: boolean = true;

    while (izquierda < derecha) {
      if (this.frase[izquierda] == ' ') {
        izquierda++;
      }

      else if (this.frase[derecha] == ' ') {
        derecha--;
      }

      else {

        let letraIzquierda = this.frase[izquierda];
        let letraDerecha = this.frase[derecha];

        if (letraIzquierda == 'A') letraIzquierda = 'a';
        if (letraIzquierda == 'B') letraIzquierda = 'b';
        if (letraIzquierda == 'C') letraIzquierda = 'c';
        if (letraIzquierda == 'D') letraIzquierda = 'd';
        if (letraIzquierda == 'E') letraIzquierda = 'e';
        if (letraIzquierda == 'F') letraIzquierda = 'f';
        if (letraIzquierda == 'G') letraIzquierda = 'g';
        if (letraIzquierda == 'H') letraIzquierda = 'h';
        if (letraIzquierda == 'I') letraIzquierda = 'i';
        if (letraIzquierda == 'J') letraIzquierda = 'j';
        if (letraIzquierda == 'K') letraIzquierda = 'k';
        if (letraIzquierda == 'L') letraIzquierda = 'l';
        if (letraIzquierda == 'M') letraIzquierda = 'm';
        if (letraIzquierda == 'N') letraIzquierda = 'n';
        if (letraIzquierda == 'O') letraIzquierda = 'o';
        if (letraIzquierda == 'P') letraIzquierda = 'p';
        if (letraIzquierda == 'Q') letraIzquierda = 'q';
        if (letraIzquierda == 'R') letraIzquierda = 'r';
        if (letraIzquierda == 'S') letraIzquierda = 's';
        if (letraIzquierda == 'T') letraIzquierda = 't';
        if (letraIzquierda == 'U') letraIzquierda = 'u';
        if (letraIzquierda == 'V') letraIzquierda = 'v';
        if (letraIzquierda == 'W') letraIzquierda = 'w';
        if (letraIzquierda == 'X') letraIzquierda = 'x';
        if (letraIzquierda == 'Y') letraIzquierda = 'y';
        if (letraIzquierda == 'Z') letraIzquierda = 'z';

        if (letraDerecha == 'A') letraDerecha = 'a';
        if (letraDerecha == 'B') letraDerecha = 'b';
        if (letraDerecha == 'C') letraDerecha = 'c';
        if (letraDerecha == 'D') letraDerecha = 'd';
        if (letraDerecha == 'E') letraDerecha = 'e';
        if (letraDerecha == 'F') letraDerecha = 'f';
        if (letraDerecha == 'G') letraDerecha = 'g';
        if (letraDerecha == 'H') letraDerecha = 'h';
        if (letraDerecha == 'I') letraDerecha = 'i';
        if (letraDerecha == 'J') letraDerecha = 'j';
        if (letraDerecha == 'K') letraDerecha = 'k';
        if (letraDerecha == 'L') letraDerecha = 'l';
        if (letraDerecha == 'M') letraDerecha = 'm';
        if (letraDerecha == 'N') letraDerecha = 'n';
        if (letraDerecha == 'O') letraDerecha = 'o';
        if (letraDerecha == 'P') letraDerecha = 'p';
        if (letraDerecha == 'Q') letraDerecha = 'q';
        if (letraDerecha == 'R') letraDerecha = 'r';
        if (letraDerecha == 'S') letraDerecha = 's';
        if (letraDerecha == 'T') letraDerecha = 't';
        if (letraDerecha == 'U') letraDerecha = 'u';
        if (letraDerecha == 'V') letraDerecha = 'v';
        if (letraDerecha == 'W') letraDerecha = 'w';
        if (letraDerecha == 'X') letraDerecha = 'x';
        if (letraDerecha == 'Y') letraDerecha = 'y';
        if (letraDerecha == 'Z') letraDerecha = 'z';

        if (letraIzquierda != letraDerecha) {
          esPalindromo = false;
        }

        izquierda++;
        derecha--;
      }
    }

    if (esPalindromo) {
      this.resultado = 'La cadena es un palíndromo.';
    } else {
      this.resultado = 'La cadena no es un palíndromo.';
    }
  }
}
