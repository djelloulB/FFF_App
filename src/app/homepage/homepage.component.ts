import { Component, OnInit } from '@angular/core';
import { Joueur } from '../models/joueur';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  joueurs?: Joueur[];
  isLoading = false;
  displayAddButton = true;
  
  constructor(private joueurService: JoueurService) { }
  
  ngOnInit(): void {
    this.isLoading = true;
    this.joueurService.getAll().subscribe(data =>{
      this.joueurs = data;
      if (this.joueurs.length >= 23 ){
        this.displayAddButton = false; 
      }
      this.isLoading = false;
    })
  }
  delete(id: number){
    this.isLoading = true;
    this.joueurService.delete(id).subscribe(data => {
    this.ngOnInit();

    } )

  }
  
}
