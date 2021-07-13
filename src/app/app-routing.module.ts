import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './add-joueur/add-joueur/add-joueur.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur/detail-joueur.component';


import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'add-joueur', component: AddJoueurComponent},
  {path:'joueur/:id', component: DetailJoueurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
