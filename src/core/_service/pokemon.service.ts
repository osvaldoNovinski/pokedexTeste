import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonModel } from '../_model/pokemon-model.class';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private httpClient:HttpClient) { }

  getPokemon(name: string):Observable<PokemonModel>{
    return this.httpClient.get<PokemonModel>(API_URL+'/'+name)
    
  }

  getAll():Observable<any>{
    return this.httpClient.get<any>(API_URL+'?limit=100000&offset=0')
  }
}
