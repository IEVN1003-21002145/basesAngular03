import { Component } from '@angular/core';

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  templateUrl: './heroeslist.component.html',

})

export class HeroeslistComponent {

  imageWIDTH:number=40;
  imageMARGIN:number=2;
  mostrarImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.mostrarImage=!this.mostrarImage;
  }

  heroes:any[]=[
    {
      Image: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccoro",
      Descripcion:"Mono verde",
      race:"Namekiano",
      ki:2.000
    },
    {
      Image:"https://dragonball-api.com/characters/Freezer.webp",
      nombre:"Freezer",
      Descripcion:"Onda vital",
      race:"Alien",
      ki:530.000
    },
    {
      Image:"https://dragonball-api.com/transformaciones/Gotenks_SSJ3.webp",
      nombre:"Gotenks",
      Descripcion:"Fantasmagorico",
      race:"Human",
      ki:65.600
    }
  ]

}
