import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
  @Output() onLike = new EventEmitter<Pokemon>();

  toggleLike(): void {
    this.pokemon.liked = !this.pokemon.liked;
    this.onLike.emit(this.pokemon);
  }
}
