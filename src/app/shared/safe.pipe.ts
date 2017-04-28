import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'safe'})
export class SafeNavigationPipe implements PipeTransform{
  transform(obj: any, property: string) {
    if(obj && obj[property]) {
      return true;
    } else {
      return false;
    }
  }
}
