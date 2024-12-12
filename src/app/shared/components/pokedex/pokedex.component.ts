import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { PokemonService } from '../../../core/services/pokemon.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonSelected: Pokemon | null = null;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Método para obtener los Pokémon del backend
  getPokemons(): void {
    this.pokemonService.getAllPokemon().subscribe({
      next: (data) => {
        this.pokemons = data;
        console.log('Datos obtenidos:', this.pokemons.length);
      },
      error: (error) => {
        console.error('Error al obtener los Pokémon', error);
      },
      complete: () => {
        this.pokemonSelected = this.pokemons[0];
        console.log('Petición completada');
      },
    });
  }

  onPokemonClick(pokemon: Pokemon): void{
    this.pokemonSelected = pokemon;
  }
  

  capitalizeFirstLetter(str: string|undefined): string {
    if (!str) return '';  // Si la cadena está vacía, la devuelve tal cual
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}