import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/models/joueur';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  [x: string]: any;

  joueurFormulaire = new Joueur();
  isLoading = false;
  ajoueurPostee = [
    "gardien",
    "defenseur",
    "millieu",
    "Attaquant"
  ]

  constructor() { }

  ngOnInit(): void {
  }
  joueurSubmit() {
    console.log(this.joueurFormulaire);
    this.isLoading = true;
    this.joueurService.add(this.joueurFormulaire).subscribe(data => {
    this.router.navigate(['/']);
    
    })
  }
}
