import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('secogroupe-ssr');

  platformId = inject(PLATFORM_ID)

  constructor(){
    if(isPlatformBrowser(this.platformId)){
       afterNextRender(() => {
      // Force le navigateur à ignorer sa mémoire historique de scroll
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      
      // Remonte immédiatement la page tout en haut
      window.scrollTo(0, 0);
    });
    }
  }
}
