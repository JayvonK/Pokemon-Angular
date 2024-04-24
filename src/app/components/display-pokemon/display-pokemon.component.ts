import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../interfaces/ipokemon';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-display-pokemon',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './display-pokemon.component.html',
  styleUrl: './display-pokemon.component.css'
})
export class DisplayPokemonComponent {
  // @Input Declares that this component will be taking in data (like a prop)
  @Input() pokemonDisplay: IPokemon | null = null;
  @Input() hint = '';
  @Output() hintChange = new EventEmitter<string>();

  giveHint(){
    this.hint = `this pokemon has ${this.pokemonDisplay?.abilities.length} abilities`
    this.hintChange.emit(this.hint)
  }
}
