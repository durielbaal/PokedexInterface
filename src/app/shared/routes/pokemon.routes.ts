// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from '../components/pokedex/pokedex.component';
import { LoginComponent } from '../components/login/login.component';
import { PageErrorComponent } from '../components/page-error/page-error.component';
import { TeamBuilderComponent } from '../components/team-builder/team-builder.component';
 // Importa tu componente

export const pokemonRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige la ruta base a la página de Pokedex
  { path: 'pokedex', component: PokedexComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'teamBuilder', component: TeamBuilderComponent },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '/404' }
  // Puedes añadir más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(pokemonRoutes)],  // Configura el enrutador con las rutas
  exports: [RouterModule]  // Exporta el RouterModule para que sea accesible en todo el módulo
})
export class AppPokemonModelRouting { }