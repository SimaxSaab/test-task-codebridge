import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(arts: any, search: string = '') {
    if (!search.trim()) {
      return arts;
    }
    let newArr: any = [];
    arts.forEach((art: any) => {
      var countName = (art.title.toLowerCase().split(search.toLowerCase()).length - 1);
      var countDesc = (art.summary.toLowerCase().split(search.toLowerCase()).length - 1);
      newArr.push({ n: countName, d: countDesc, obj: art});
    });
    newArr.sort((a: any, b: any) => {
      if (a.n < b.n || b.d > a.n) return 1;
      else return -1;
    });
    console.log(newArr);
    return newArr.map((a: any) => a.obj).filter((art: any) => {
      return art.title.toLowerCase().includes(search.toLowerCase())
        || art.summary.toLowerCase().includes(search.toLowerCase());
    });
  }
}