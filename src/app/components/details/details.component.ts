import { Component, OnInit } from '@angular/core';

import { CatService } from 'src/app/services/cat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  catsFavs: any[];

  constructor(readonly catService: CatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.catService.detalhesId(this.route.snapshot.params["id"]).subscribe()
  }

  // favoritos(){
  //   this.catService.allFavs().subscribe(
  //     favs => {
  //       this.catsFavs = favs;
  //       console.log(favs);
  //     }
  //   )
  // }
}
