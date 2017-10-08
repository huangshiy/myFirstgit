import { Component, OnInit } from '@angular/core';
import {CommonsService} from '../commons.service'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
	private changeType:any;

  constructor(changeType:CommonsService) {
  	this.changeType=changeType;
  }

  ngOnInit() {
  }
  change(){
  	console.log("即将改变")
  	this.changeType.getChangeType();
  }
  
}
