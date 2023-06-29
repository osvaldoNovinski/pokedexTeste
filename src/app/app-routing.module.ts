import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './view/pokedex-page/pokedex-page.component';
import { PokedexPageModule } from './view/pokedex-page/pokedex-page.module';

const routes: Routes = [
  
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
    { path: 'pokedex', component: PokedexPageComponent },

    
    // path:'**',
    // children:[
    //   {
    //     path:'pokedex', loadChildren:()=>import('./view/pokedex-page/pokedex-page.module').then(a=>a.PokedexPageModule),
    //     component:PokedexPageComponent
    //   }
    // ]
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PokedexPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
