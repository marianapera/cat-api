import { Component, OnInit } from '@angular/core';

import { CatService } from 'src/app/services/cat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { AllCats } from 'src/app/models/allcats.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  cat: any;
  perfil: string[];
  valor: string[];
  
  constructor(readonly catService: CatService, private route: ActivatedRoute) {
    this.perfil = ['adaptability', 'intelligence', 'energy_level', 'affection_level', 'health_issues', 'dog_friendly'];
  }

  ngOnInit(): void {
    this.catService.detailsId(this.route.snapshot.params["id"]).subscribe((info: AllCats) => {
        this.cat = info;
        console.log(info);
      })
  }

  favCat(id: string){
    this.catService.postFavs(id).subscribe(
      fav => console.log(fav)
    );
  }
}
