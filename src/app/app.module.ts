import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexPageComponent } from './view/pokedex-page/pokedex-page.component';
import { PokedexPageModule } from './view/pokedex-page/pokedex-page.module';
import { PokemonService } from 'src/core/_service/pokemon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokedexPageModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
