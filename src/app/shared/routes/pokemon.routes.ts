// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from '../components/pokedex/pokedex.component';
 // Importa tu componente

export const pokemonRoutes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },  // Redirige la ruta base a la página de Pokedex
  { path: 'pokedex', component: PokedexComponent },  // Ruta para el componente Pokedex
  // Puedes añadir más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(pokemonRoutes)],  // Configura el enrutador con las rutas
  exports: [RouterModule]  // Exporta el RouterModule para que sea accesible en todo el módulo
})
export class AppPokemonModelRouting { }