import { Component, OnInit } from '@angular/core';
import {ScalladService} from './scallad.service'
declare var Swiper:any;

@Component({
  selector: 'app-scallad',
  templateUrl: './scallad.component.html',
  styleUrls: ['./scallad.component.css']
})
export class ScalladComponent implements OnInit {
	private scall:any;
	private scallAD:any;
	

  constructor(scall:ScalladService) {
  	this.scall=scall;
  }

  ngOnInit() {
  	this.scallAD=this.scall.getAD();
  	window.onload=function(){
  		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        observer:true,
			  observeParents:true
        
    });
  	}
  }

}
