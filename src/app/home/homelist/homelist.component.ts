import { Component, OnInit } from '@angular/core';
import {HomelistService} from './homelist.service';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {
    private MZoneArr:Array<any>;
		private MZtwoArr:Array<any>;
		
		private changeType:any;
		
		private mzdata:any;
		private mztwo:any;
  constructor(mzdata:HomelistService,mztwo:HomelistService) {
  	this.mzdata=mzdata;
    this.mztwo=mztwo;
  }
  	
  ngOnInit() {
  	this.MZoneArr=this.mzdata.getmzdata();
  	this.MZtwoArr=this.mztwo.getmatwo();
  }

}
