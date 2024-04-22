import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';

// The @Component Decorator marks this file as a component
@Component({
  // The component's tag name, <app-root></app-root>
  selector: 'app-root',

  // Marking a component as a standalone, makes it so that it handles it's own dependancy's
  standalone: true,

  // This is where we add our imports and dependancy's
  imports: [RouterOutlet, PokemonComponent],

  // The file paths to the template and stylesheet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Giselle';
}
