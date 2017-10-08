import { Component, OnInit } from '@angular/core';
import {CommonsService} from '../commons.service';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  animations:[
  	trigger('leftnav',[
  		state('void',style({'right':'100%'})),
  		state('show',style({'right':'20%'})),
  		state('hide',style({'right':'100%'})),
  		transition('*=>*',animate(200))
  	]),
  	trigger('leftnavouter',[
  		state('void',style({'background':'rgba(0,0,0,0)'})),
  		state('show1',style({'background':'rgba(0,0,0,0.5)'})),
  		state('hide1',style({'background':'rgba(0,0,0,0)'})),
  		transition('*=>*',animate(200))
  	])
  ]
})
export class LeftComponent implements OnInit {

  private Ltype:any;
	private type:Boolean = true;
	private leftnav:string;
 	private leftnavouter:string;

  constructor(Ltype:CommonsService) { 
     this.Ltype=Ltype;
  }

  ngOnInit() {
  	this.type=this.Ltype.getType();
  }
  ngDoCheck(){
  	this.type=this.Ltype.getType();
  		if(this.type){
  		this.leftnav = 'show';
		this.leftnavouter = 'show1';
  	}else{
  		this.leftnav = 'hide';
		this.leftnavouter = 'hide1';
  	}
  }

}