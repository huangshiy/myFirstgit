import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadComponent} from './head/head.component';
import { LeftComponent } from './left/left.component'
import {CommonsService} from './commons.service'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeadComponent, LeftComponent],
  exports:[HeadComponent,LeftComponent],
  providers:[CommonsService]
  
})
export class CommonsModule { }
