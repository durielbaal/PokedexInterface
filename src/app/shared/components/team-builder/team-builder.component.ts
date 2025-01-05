import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Pokemon {
  pokedexNumber: number;
  name: string;
  image: string;
  types: string[];
  moves: string[];
  ability: string;
  item: string;
  nature: string;
  stats: Stats;
}
interface Stats {
  attack: number,
  specialAttack: number,
  defense: number,
  specialDefense: number,
  speed: number,
  hp: number,
}
@Component({
  selector: 'app-team-builder',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './team-builder.component.html',
  styleUrl: './team-builder.component.css'
})

export class TeamBuilderComponent {
  menuVisible: boolean = false;
  selectedPokemonIndex: number = 0;
  items: string[] = ['None', 'Miracle Seed', 'Focus Sash'];
  natures: string[] = ['Modest', 'Adamant', 'Jolly', 'Timid'];
  moves: string[] =['move1','move2','move3','Tackle','Flamethrower','move5','move6',];
  pokemonCards: (Pokemon | null)[] = [null, null, null, null, null, null];
  selectedNature: string = this.pokemonCards[this.selectedPokemonIndex]?.nature || 'None';
  selectedItem: string = this.pokemonCards[this.selectedPokemonIndex]?.item || 'None';
  selectedMove: string[] = this.pokemonCards[this.selectedPokemonIndex]?.moves || ['None','None','None','None'];
  get statsArray() {
    const selectedPokemon = this.pokemonCards[this.selectedPokemonIndex];
    return selectedPokemon ? [
      { name: 'HP', value: selectedPokemon.stats.hp },
      { name: 'Attack', value: selectedPokemon.stats.attack },
      { name: 'Defense', value: selectedPokemon.stats.defense },
      { name: 'Special Attack', value: selectedPokemon.stats.specialAttack },
      { name: 'Special Defense', value: selectedPokemon.stats.specialDefense },
      { name: 'Speed', value: selectedPokemon.stats.speed },
    ] : [];
  }
  allPokemon: Pokemon[] =  [
    {
      pokedexNumber: 1,
      name: 'Bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['Grass', 'Poison'],
      moves: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip'],
      ability: 'Overgrow',
      item: 'None',
      nature: 'Docile',
      stats: {
        attack: 49,
        specialAttack: 65,
        defense: 49,
        specialDefense: 65,
        speed: 45,
        hp: 45
      }
    },
    {
      pokedexNumber: 2,
      name: 'Ivysaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      types: ['Grass', 'Poison'],
      moves: ['Tackle', 'Growl', 'Leech Seed', 'Razor Leaf'],
      ability: 'Overgrow',
      item: 'None',
      nature: 'Bold',
      stats: {
        attack: 62,
        specialAttack: 80,
        defense: 63,
        specialDefense: 80,
        speed: 60,
        hp: 60
      }
    },
    {
      pokedexNumber: 3,
      name: 'Venusaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      types: ['Grass', 'Poison'],
      moves: ['Tackle', 'Growl', 'Solar Beam', 'Vine Whip'],
      ability: 'Overgrow',
      item: 'None',
      nature: 'Calm',
      stats: {
        attack: 82,
        specialAttack: 100,
        defense: 83,
        specialDefense: 100,
        speed: 80,
        hp: 80
      }
    },
    {
      pokedexNumber: 4,
      name: 'Charmander',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['Fire'],
      moves: ['Scratch', 'Growl', 'Ember', 'Smokescreen'],
      ability: 'Blaze',
      item: 'None',
      nature: 'Jolly',
      stats: {
        attack: 52,
        specialAttack: 60,
        defense: 43,
        specialDefense: 50,
        speed: 65,
        hp: 39
      }
    },
    {
      pokedexNumber: 5,
      name: 'Charmeleon',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      types: ['Fire'],
      moves: ['Scratch', 'Growl', 'Flamethrower', 'Dragon Rage'],
      ability: 'Blaze',
      item: 'None',
      nature: 'Adamant',
      stats: {
        attack: 64,
        specialAttack: 80,
        defense: 58,
        specialDefense: 65,
        speed: 80,
        hp: 58
      }
    },
    {
      pokedexNumber: 6,
      name: 'Charizard',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['Fire', 'Flying'],
      moves: ['Flamethrower', 'Fly', 'Slash', 'Fire Spin'],
      ability: 'Blaze',
      item: 'None',
      nature: 'Modest',
      stats: {
        attack: 84,
        specialAttack: 109,
        defense: 78,
        specialDefense: 85,
        speed: 100,
        hp: 78
      }
    },
    // El resto de los Pokémon seguirían con la misma estructura
  ];

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  deletePokemon() {
    if (this.selectedPokemonIndex !== null) {
      this.pokemonCards[this.selectedPokemonIndex] = null;
    }
  }

  updateNature(){
    const pokemon = this.pokemonCards[this.selectedPokemonIndex];
    if(pokemon){
      pokemon.nature = this.selectedNature;
    }   
  }
  
  updateItem(){
    const pokemon = this.pokemonCards[this.selectedPokemonIndex];
    if(pokemon){
      pokemon.item = this.selectedItem;
    }   
  }

  updateMove(index: number){
    const pokemon = this.pokemonCards[this.selectedPokemonIndex];
    if(pokemon){
      console.log("move "+this.selectedMove[index])
      pokemon.moves[index] = this.selectedMove[index];
      console.log("change "+this.selectedMove[index])
    }   
  }

  selectPokemonForCard(index: number) {
    this.selectedPokemonIndex = index;
    this.resetAttributesSelected();
  }


  replacePokemon(pokemon: Pokemon) {
      this.pokemonCards[this.selectedPokemonIndex] = pokemon;
      if(this.selectedPokemonIndex < this.pokemonCards.length-1){
        this.selectedPokemonIndex++;
        this.resetAttributesSelected();
      }
    
  }

  obtainStatsWithCertainLevel(stat: number,ivs:number,evs:number,level:number) : number{
    evs = evs / 4;
    stat = 2 * stat;
    let finalStat =(((stat + ivs + evs) * level) / 100)+ level + 10;
    return finalStat;
  }

  resetAttributesSelected(){
    this.selectedNature = this.pokemonCards[this.selectedPokemonIndex]?.nature || 'None';
    this.selectedItem = this.pokemonCards[this.selectedPokemonIndex]?.item || 'None';
    this.selectedMove = this.pokemonCards[this.selectedPokemonIndex]?.moves || ['None','None','None','None'];
  }
}
