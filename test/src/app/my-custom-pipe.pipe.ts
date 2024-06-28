import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uppercase',standalone:true})
export class MyCustomPipePipe implements PipeTransform {


transform(value: string):string {
  return value.toUpperCase()
}
}