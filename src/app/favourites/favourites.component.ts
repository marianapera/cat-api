import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatService } from '../services/cat.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.sass']
})
export class FavouritesComponent implements OnInit {
  favs: any;

  constructor(private catService: CatService, private router: Router) { }

  ngOnInit(): void {
    this.catService.allFavs().subscribe(
      (favs) => this.favs = favs
    )
  }

  deleteFav(image_id: string){
    this.catService.deleteFav(image_id).subscribe(
      () => {
        this.catService.allFavs().subscribe(
          (fav)=> this.favs = fav
        )}
    )
  }

  routerInfo(id: string){
    this.router.navigate(['/details', id]);
  }
}
