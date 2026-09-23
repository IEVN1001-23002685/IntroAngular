import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  figura: string = '';
  base: number = 0;
  altura: number = 0;
  radio: number = 0;
  perimetro: number = 0;
  apotema: number = 0;
  resultado: number = 0;

  calcularArea(): void {
    switch (this.figura) {
      case 'triangulo':
        this.resultado = (this.base * this.altura) / 2;
        break;

      case 'circulo':
        this.resultado = Math.PI * Math.pow(this.radio, 2);
        break;

      case 'rectangulo':
        this.resultado = this.base * this.altura;
        break;

      case 'pentagono':
        this.resultado = (this.perimetro * this.apotema) / 2;
        break;

      default:
        this.resultado = 0;
        break;
    }
  }
}
