import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'saul';

  duplicaNumero(n1:number):number {
    return n1*2
  }

  pelicula = {
    titulo:'Spider-Man',
    fecha_lanzamiento:new Date(),
    precio:999,
  }
}
