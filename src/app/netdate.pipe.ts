import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'netdate'
})
export class NetdatePipe implements PipeTransform {

  transform(value: any): any {
    var date=new Date(value)
  	var y=date.getMonth()+1
  	var d=date.getDate()
  	var now=y+"月"+d+"日"
  	return now
  }

}
