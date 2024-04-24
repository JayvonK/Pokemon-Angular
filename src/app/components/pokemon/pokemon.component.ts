import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { IPokemon } from '../../interfaces/ipokemon';
import { DisplayPokemonComponent } from "../display-pokemon/display-pokemon.component";

@Component({
    selector: 'app-pokemon',
    standalone: true,
    templateUrl: './pokemon.component.html',
    styleUrl: './pokemon.component.css',
    imports: [DisplayPokemonComponent]
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemonData: IPokemon | null = null;

  loadPokemon() {
    // .subscribe is observing the data from the api call or when the api call is fulfilled the code will run
    this.pokemonService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemonData = pokemon;
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }
}
