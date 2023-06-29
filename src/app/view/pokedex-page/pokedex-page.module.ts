import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexPageComponent } from './pokedex-page.component';
import { PokemonService } from 'src/core/_service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PokedexPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    
  ],
  providers:[PokemonService]
})
export class PokedexPageModule { }
