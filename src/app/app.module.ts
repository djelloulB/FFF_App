import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddJoueurComponent } from './add-joueur/add-joueur/add-joueur.component';
import { DeatailJoueurComponent } from './detail-joueur/deatail-joueur/deatail-joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddJoueurComponent,
    DeatailJoueurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
