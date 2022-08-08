import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AllCats } from 'src/app/shared/allcats.model';
import { CatService } from 'src/app/shared/cat.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})

export class CardsComponent implements OnInit {
  @Input('dados') cats: any;

  constructor(readonly catService: CatService,  private router: Router) {}

  ngOnInit(): void {
    this.catService.getRacas().subscribe(
      (dados: AllCats) => {
        this.cats = dados;
        console.log(dados);
      })

      
  }

  favCat(id: string){
    this.catService.postFavs(id).subscribe(
      fav => console.log(fav)
    )
  }

  routeInfo(id: string){
    this.router.navigate([]);
  }
}