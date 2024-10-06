import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(person: any[], searchText: string): string[] {
    if (!person) return [];
    if (!searchText) return [];
    if (searchText == "") return person;

    searchText = searchText.toLowerCase();

    return person.filter(it => {
      return it.toString().toLowerCase().includes(searchText);
    });

  }

}
