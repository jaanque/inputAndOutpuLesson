import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../interficies/pokemon.interficie';

@Component({
  standalone: true,
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;
  @Output() alFerLike = new EventEmitter<Pokemon>();

  canviarLike(): void {
    this.pokemon.liked = !this.pokemon.liked;
    this.alFerLike.emit(this.pokemon);
  }
}
