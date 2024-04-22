import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService);

  loadPokemon() {
    // .subscribe is observing the data from the api call or when the api call is fulfilled the code will run
    this.pokemonService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }
}
