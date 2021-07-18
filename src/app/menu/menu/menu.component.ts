import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  joueurs?: Joueur[];
  displayAddButton = true;
  fullTeam = false;
  constructor(private joueurService: JoueurService) { }

  ngOnInit(): void {
    this.joueurService.getAll().subscribe(data =>{
      this.joueurs = data;
    if (this.joueurs.length >= 23){
      this.displayAddButton = false; 
      this.fullTeam = true;
    }
    
    });
  }
}
