import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-deatail-joueur',
  templateUrl: './deatail-joueur.component.html',
  styleUrls: ['./deatail-joueur.component.css']
})
export class DeatailJoueurComponent implements OnInit {
  id: number;
  joueur?: Joueur;
  constructor(private activatedRoute: ActivatedRoute, private joueurService: JoueurService,) {
    this.id = parseInt(<string> this.activatedRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.joueurService.getOne(this.id).subscribe(data => {
      this.joueur = data;
    });
  }

}
