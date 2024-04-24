import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Injecting HttpClient as a dependancy 
  // HttpClient is a class that allows us to perform Http requests (GET POST PUT DELETE)
  http = inject(HttpClient);
  
  getPokemon(userInput = 'bulbasaur') {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
  }
}
