import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
  transform(text: any, search = '', ...args: any[]) {
    if (!search.trim()) {
      return text;
    }
    
    let pos = 0, str = '', posRes = 0;
    while (true) {
      const startIndex = text.toLowerCase().indexOf(search.toLowerCase(), pos);
      if (startIndex !== -1) {
        str += text.slice(posRes, startIndex) + '<i>' + search.toUpperCase() + '</i>'; 
        pos = startIndex + 1;
        posRes = startIndex + search.length;
      } else {
        str += text.slice(posRes);
        return str;
      }
    }
  }
}