import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module'
import {CommonsModule} from './commons/commons.module';
import {CommonsService} from './commons/commons.service';




@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,HomeModule,CommonsModule,BrowserAnimationsModule
  ],
  providers: [CommonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
