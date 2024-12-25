import { bootstrapApplication } from '@angular/platform-browser';
import { pokemonConfig } from './app/shared/configs/pokemon.config';
import { RootComponent } from './app/shared/components/root/root.component';

bootstrapApplication(RootComponent, pokemonConfig)
  .catch((err) => console.error(err));
