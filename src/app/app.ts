import { Component } from '@angular/core';
import { Pokemon } from './interfaces/pokemon.interface';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pokemon: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', liked: false },
    { id: 2, name: 'Ivysaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', liked: false },
    { id: 3, name: 'Venusaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', liked: false },
    { id: 4, name: 'Charmander', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', liked: false },
    { id: 5, name: 'Charmeleon', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', liked: false },
    { id: 6, name: 'Charizard', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', liked: false },
    { id: 7, name: 'Squirtle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', liked: false },
    { id: 8, name: 'Wartortle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', liked: false },
    { id: 9, name: 'Blastoise', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', liked: false },
    { id: 10, name: 'Caterpie', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', liked: false },
    { id: 11, name: 'Metapod', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', liked: false },
    { id: 12, name: 'Butterfree', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', liked: false },
    { id: 13, name: 'Weedle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png', liked: false },
    { id: 14, name: 'Kakuna', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png', liked: false },
    { id: 15, name: 'Beedrill', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png', liked: false },
    { id: 16, name: 'Pidgey', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png', liked: true },
    { id: 17, name: 'Pidgeotto', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png', liked: false },
    { id: 18, name: 'Pidgeot', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png', liked: true },
    { id: 19, name: 'Rattata', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png', liked: false },
    { id: 20, name: 'Raticate', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', liked: false }
  ];

  updatePokemon(pokemon: Pokemon): void {
    this.pokemon = this.pokemon.map(p => p.id === pokemon.id ? pokemon : p);
  }
}
