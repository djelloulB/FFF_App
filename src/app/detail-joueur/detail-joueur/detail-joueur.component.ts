import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.css']
})
export class DetailJoueurComponent implements OnInit {
  [x: string]: any;
  id!: number;
  isLoading = false;
  joueur?: Joueur;

  constructor(private activatedRoute: ActivatedRoute, private joueurService: JoueurService, private router: Router ) {
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id')); 
  }

  ngOnInit(): void {
    this.joueurService.getOne(this.id).subscribe((data?: Joueur)=> {
      this.joueur = data;
      
    })
    
  }
  delete(id: number){
    this.isLoading = true;
    this.joueurService.delete(id).subscribe(data => {
    this.router.navigate(['/']);

    } )

  }

}
