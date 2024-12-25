import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { PokemonService } from '../../../core/services/pokemon.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],

})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  pokemonSelected: Pokemon | null = null;
  searchTerm: string = '';
  isFilterWindowOpen: boolean = false;
  selectedType1 :string = '';
  selectedType2 :string = '';
  orderDirection: string = "asc";
  orderBy: string = 'id';
  pokemonTypes: string[] = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  // Método para obtener los Pokémon del backend
  getPokemons(): void {
    this.pokemonService.getAllPokemon().subscribe({
      next: (data) => {
        this.pokemons = data;
        this.filteredPokemons = [...this.pokemons];
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

  filterPokemons(): void {
    const searchTermLower = this.searchTerm.toString().toLowerCase();

    this.filteredPokemons = this.pokemons.filter((pokemon) => {
      const matchesName = pokemon.name.toLowerCase().includes(searchTermLower);
      const matchesId = pokemon.id.toString().includes(searchTermLower);
      const matchesType1 = this.selectedType1 ? pokemon.types.includes(this.selectedType1) : true;
      const matchesType2 = this.selectedType2 ? pokemon.types.includes(this.selectedType2) : true;

      return (matchesName || matchesId) && matchesType1 && matchesType2;
    });
    this.orderPokemons();
  }

  orderPokemons(): void {
    const compare = (a: Pokemon, b: Pokemon) => {
      const valueA = this.orderBy === 'name' ? a.name : a.id.toString();
      const valueB = this.orderBy === 'name' ? b.name : b.id.toString();

      if (this.orderDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    };

    this.filteredPokemons.sort(compare);
  }

  toggleFilterWindow() {
    this.isFilterWindowOpen = !this.isFilterWindowOpen;
  }

  toggleOrderDirection(): void {
    this.orderDirection = this.orderDirection === 'asc' ? 'desc' : 'asc';
    this.orderPokemons();
  }
  resetFilter(): void{
    this.searchTerm = '';
    this.selectedType1 = '';
    this.selectedType2 = '';
    this.orderDirection = "asc";
    this.orderBy = 'id';
    this.filteredPokemons = [...this.pokemons];
  }
}