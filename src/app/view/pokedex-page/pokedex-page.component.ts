import { PokemonModel } from 'src/core/_model/pokemon-model.class';
import { PokemonService } from './../../../core/_service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.sass']
})
export class PokedexPageComponent implements OnInit {

  pokemon: PokemonModel = new PokemonModel()
  listPokemon: PokemonModel[] = []
  listAll: any[] = []
  constructor(private service:PokemonService) { }

  ngOnInit(): void {
    console.log("olá mundo");
    this.service.getPokemon('ditto').subscribe((res)=>{
      this.pokemon = res
    });

    this.getAll()
       
  }

 async getAll(){

   const e = await this.service.getAll().pipe(map((res: any) => this.listAll = res.results
    )).toPromise()
  
    this.allSprites(this.listAll)
  }

 async allSprites(list: any[]){
  console.log("saude", list);
  
  this.listAll.forEach(async f=>{    
    try{
     const c = await this.service.getPokemon(f.name).pipe(
      map((res: any)=>  this.listPokemon.push(res)
      )
     ).toPromise();
    }catch (error){

    }
  })
   
  }

}
