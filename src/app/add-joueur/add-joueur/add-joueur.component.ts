import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    "milieu",
    "Attaquant"
  ]

  constructor(private router: Router, private joueurService: JoueurService, private notifier: ToastrService) { }

  ngOnInit(): void {
  }
  joueurSubmit() {
    console.log(this.joueurFormulaire);
    this.isLoading = true;
    this.joueurService.add(this.joueurFormulaire).subscribe((data: any) => {
    this.notifier.success("Le joueur " + this.joueurFormulaire.prenom + " a bien été ajouté");  
    this.router.navigate(['/']);
    
    })
  }
}
