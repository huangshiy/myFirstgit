import { Injectable } from '@angular/core';

@Injectable()
export class CommonsService {
   menu:any=false;
  constructor() { }
    getType(){
	  return this.menu;
	  	     }
	getChangeType(){
		console.log(this.menu)
	 this.menu = !this.menu;
	 
	        }
      }