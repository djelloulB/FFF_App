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

  constructor(private joueurService: JoueurService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.joueurService.getAll().subscribe(data =>{
      this.joueurs = data;
      this.isLoading = false;
    })
  }
}
