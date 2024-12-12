// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/Pokemon';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private baseUrl = 'http://localhost:8080/pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<{ [key: string]: Pokemon[] }>(`${this.baseUrl}/pokedex/get/Hoenn`).pipe(
      map((response) => {
        const key = Object.keys(response)[0]; // Obtén la clave del Map
        return response[key]; // Devuelve la lista de Pokémon
      })
    );
  }
}
