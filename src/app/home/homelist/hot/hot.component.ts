import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {
@Input () HotArr:any;
  constructor() { }

  ngOnInit() {
  }

}
