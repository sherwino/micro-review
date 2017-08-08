import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodSearch',
  pure: false     // <!-- We mark the pipe as "impure"
})

@Injectable()
export class ProductSearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
      if (!items) {
        return [];
      }

      if (!value) {
        return items;
      }

      const myPattern = new RegExp(value, 'i');
      return items.filter(it => it[field].match(myPattern));

  }

}
