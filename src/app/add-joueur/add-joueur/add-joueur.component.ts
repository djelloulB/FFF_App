import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  [x: string]: any;

  joueurFormulaire = new Joueur();
  isLoading = false;
  joueurPoste = [
    "gardien",
    "defenseur",
    "millieu",
    "Attaquant"
  ]

  constructor(private router: Router, private joueurService: JoueurService) { }

  ngOnInit(): void {
  }
  joueurSubmit() {
    console.log(this.joueurFormulaire);
    this.isLoading = true;
    this.joueurService.add(this.joueurFormulaire).subscribe((data: any) => {
    this.router.navigate(['/']);
    this.notifier.success(this.annonceFormulaire.titre + " a bien été ajouté");  
    
    })
  }
}
