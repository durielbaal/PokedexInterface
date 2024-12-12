import { bootstrapApplication } from '@angular/platform-browser';
import { pokemonConfig } from './app/shared/configs/pokemon.config';
import { PokedexComponent } from './app/shared/components/pokedex/pokedex.component';

bootstrapApplication(PokedexComponent, pokemonConfig)
  .catch((err) => console.error(err));
