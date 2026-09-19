import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-ist',
  standalone: false,
  templateUrl: './heroes-ist.html',
})
export class HeroesIst {
  imageWidth: number = 160
  imageMargin: number = 10
  muestraImage: boolean = true
  listFilter: string = ''
  
  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }

  heroes: IHeroes[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'Goku',
      descripcion: 'El protagonista de la serie, conocido por su gran poder y personalidad amigable.',
      race: 'Saiyan',
      ki: '60.000.000'
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'Vegeta',
      descripcion: 'Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters.',
      race: 'Saiyan',
      ki: '54.000.000',
    },
    {
      imagen: 'https://dragonball-api.com/characters/gohan.webp',
      nombre: 'Gohan',
      descripcion: 'Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT.',
      race: 'Saiyan',
      ki: '45.000.000',
    },
    {
      imagen: 'https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp',
      nombre: 'Trunks',
      descripcion: 'Hijo de Vegeta y Bulma. Es un mestizo entre humano terrícola y Saiyano nacido en la Tierra, e hijo de Bulma y Vegeta, el cual es introducido en el Arco de los Androides y Cell.',
      race: 'Saiyan',
      ki: '50.000.000',
    },
  ]
}
