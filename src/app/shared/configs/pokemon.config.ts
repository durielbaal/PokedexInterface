import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { pokemonRoutes, AppPokemonModelRouting } from '../routes/pokemon.routes';

export const pokemonConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(pokemonRoutes),
    provideHttpClient()
  ]
};
