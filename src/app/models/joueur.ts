export class Joueur {
    id: number| undefined;
    nom: string | undefined;
    prenom:string | undefined;
    poste: string| undefined;
    image: string| undefined;

    constructor(
        id?: number , 
        nom?: string , 
        prenom?: string , 
        poste?: string, 
        image?:string
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.poste = poste;
        this.image = image;
      }
}
