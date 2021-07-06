import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeRoutingModule } from './mfe-routing.module';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    MfeRoutingModule
  ]
})
export class MfeModule { }
