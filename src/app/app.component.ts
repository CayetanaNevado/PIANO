import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PIANO1';
  AplicarSonido(numero: number): void
{
  let audio = new Audio();
  switch (numero) {
    case 1:
      audio.src = '../assets/Sonidos/do-80236.mp3';
      audio.load();
      audio.play();
      break;
      case 2:
      audio.src = '../assets/Sonidos/re-78500.mp3';
      audio.load();
      audio.play();
      break;
      case 3:
      audio.src = '../assets/Sonidos/mi-80239.mp3';
      audio.load();
      audio.play();
      break;
      case 4:
      audio.src = '../assets/Sonidos/fa-78409.mp3';
      audio.load();
      audio.play();
      break;
      case 5:
      audio.src = '../assets/Sonidos/sol-101774.mp3';
      audio.load();
      audio.play();
      break;
      case 6:
      audio.src = '../assets/Sonidos/si-80238.mp3';
      audio.load();
      audio.play();
      break;
}
  }
  
}
