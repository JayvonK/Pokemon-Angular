import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Injecting HttpClient as a dependancy 
  // HttpClient is a class that allows us to perform Http requests (GET POST PUT DELETE)
  http = inject(HttpClient);
  
  getPokemon(userInput = 'bulbasaur') {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
  }
}
