import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
