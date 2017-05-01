import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'FilterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {
employees:any;
  transform(employees: any[], term: any): any {
  
  }

}
