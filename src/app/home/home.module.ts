import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ScalladComponent } from './scallad/scallad.component';
import { HomelistComponent } from './homelist/Homelist.component';
import { CellComponent } from './homelist/cell/cell.component';
import { HotComponent } from './homelist/hot/hot.component';
import { HomeComponent } from './home.component';

import {ScalladService} from './scallad/scallad.service'
import {HomelistService} from './homelist/homelist.service'

import {NetdatePipe} from '../netdate.pipe'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScalladComponent, HomelistComponent, CellComponent, HotComponent, HomeComponent,NetdatePipe],
  exports:[ScalladComponent,HomelistComponent,CellComponent,HotComponent,HomeComponent],
  providers:[ScalladService,HomelistService]
  
})
export class HomeModule { }
