// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexComponent } from '../components/pokedex/pokedex.component';
import { PokemonService } from '../../core/services/pokemon.service';

@NgModule({
  imports: [
    BrowserModule,PokedexComponent
  ],
  providers: [PokemonService],

})
export class AppModule { }