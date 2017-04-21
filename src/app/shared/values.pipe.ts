import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {
  transform(value: any, arg1: any, arg2?: any): Object[] {
    const keyArr: any[] = Object.keys(value);
    const dataArr = [];
    const keyName = arg1;

    keyArr.forEach((key: any) => {
      value[key][keyName] = key;
      dataArr.push(value[key]);
    });

    if (arg2) {
      dataArr.sort((a: Object, b: Object): number => {
        return a[keyName] > b[keyName] ? 1 : -1;
      });
    }

    return dataArr;
  }
}
