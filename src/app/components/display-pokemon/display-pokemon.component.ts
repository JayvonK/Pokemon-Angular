import { Component, Input } from '@angular/core';
import { IPokemon } from '../../interfaces/ipokemon';

@Component({
  selector: 'app-display-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './display-pokemon.component.html',
  styleUrl: './display-pokemon.component.css'
})
export class DisplayPokemonComponent {
  // @Input Declares that this component will be taking in data (like a prop)
  @Input() pokemonDisplay: IPokemon | null = null;
}
