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
  attack: number;
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
  abilities: string[] =['Overgrow','ab1','ab2'];
  pokemonCards: (Pokemon | null)[] = [null, null, null, null, null, null];
  selectedNature: string = this.pokemonCards[this.selectedPokemonIndex]?.nature || 'None';
  selectedItem: string = this.pokemonCards[this.selectedPokemonIndex]?.item || 'None';
  selectedMove: string[] = this.pokemonCards[this.selectedPokemonIndex]?.moves || ['None','None','None','None'];
  selectedAbility: string = this.pokemonCards[this.selectedPokemonIndex]?.ability || 'None';
  ivs: number[] = [0,0,0,0,0,0];
  evs: number[] = [0,0,0,0,0,0];
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
      attack: 49,
      specialAttack: 65,
      defense: 49,
      specialDefense: 65,
      speed: 45,
      hp: 45,
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
      attack:62,
      specialAttack: 80,
      defense: 63,
      specialDefense: 80,
      speed: 60,
      hp: 60,
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
      pokemon.moves[index] = this.selectedMove[index];
    }   
  }
  updateAbility(){
    const pokemon = this.pokemonCards[this.selectedPokemonIndex];
    if(pokemon){
      console.log(this.selectedAbility);
      pokemon.ability= this.selectedAbility;
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

  obtainStatsWithCertainLevel(stat: number,ivs:number,evs:number,level:number,isPs: boolean) : number{
    if(ivs > 31) ivs = 31;
    if(ivs < 0) ivs = 0;
    if(evs > 252) evs = 252
    if(evs < 0) evs = 0
    evs = evs / 4;
    stat = 2 * stat;
    const finalPart = isPs ? level + 10: 5;
    const finalStat= (((stat + ivs + evs) * level) / 100)+ finalPart;
    return finalStat;
  }

  resetAttributesSelected(){
    this.selectedNature = this.pokemonCards[this.selectedPokemonIndex]?.nature || 'None';
    this.selectedItem = this.pokemonCards[this.selectedPokemonIndex]?.item || 'None';
    this.selectedMove = this.pokemonCards[this.selectedPokemonIndex]?.moves || ['None','None','None','None'];
    this.selectedAbility = this.pokemonCards[this.selectedPokemonIndex]?.ability || 'None';
  }

}
