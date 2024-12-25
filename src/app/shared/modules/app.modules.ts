// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonService } from '../../core/services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { AppPokemonModelRouting } from '../routes/pokemon.routes';
import { CommonModule } from '@angular/common';
import { RootComponent } from '../components/root/root.component';

@NgModule({
  
  imports: [
    BrowserModule,FormsModule,AppPokemonModelRouting,CommonModule,RootComponent
  ],
  providers: [PokemonService],

})
export class AppModule { }