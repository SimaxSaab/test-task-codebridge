import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(arts: any, search = '', ...args: any[]) {
    if (!search.trim()) {
      return arts;
    }

    return arts.filter((art: any) => {
      return art.title.toLowerCase().includes(search.toLowerCase()) || art.summary.toLowerCase().includes(search.toLowerCase());
    })
  }
}