import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddJoueurComponent } from './add-joueur/add-joueur/add-joueur.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur/detail-joueur.component';
import { MenuComponent } from './menu/menu/menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddJoueurComponent,
    DetailJoueurComponent,
    MenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
