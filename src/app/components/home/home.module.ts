import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { CardsComponent } from './cards/cards.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DetailsComponent } from '../details/details.component';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule,
    ToolbarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
