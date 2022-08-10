import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from 'src/app/favourites/favourites.component';

import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
