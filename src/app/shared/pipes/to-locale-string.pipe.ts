import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleString'
})
export class ToLocaleString implements PipeTransform {

  transform(value: string): string {
    return Number.parseInt(value).toLocaleString();
  }

}
