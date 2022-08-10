import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesComponent } from './favourites.component';
import { MaterialModule } from '../material.module';
import { ToolbarModule } from '../components/toolbar/toolbar.module';


@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToolbarModule
  ],
  exports: [FavouritesComponent]
})
export class FavouritesModule { }
