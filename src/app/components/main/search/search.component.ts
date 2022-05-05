import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { search } from '../../../reducers/search';

import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchStr!: string;
  public toogleSearch: boolean = true;
  public toggleText: string = 'The most successful IT companies in 2020';
  public buttonText: string = 'Включить поиск с логикой RxJs, при которой фильтрация будет проходить по ентеру';
  public search$!: Observable<Event>;
  public sub$!: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.search$ = fromEvent<Event>(
      document.querySelector('#search') as HTMLInputElement,
      'change'
    );
    this.sub$ = this.search$.pipe(
        map(event => {
          return (event.target as HTMLInputElement).value;
        })).subscribe((value: any) => {
      console.log(value);
      this.store.dispatch(search({update: value}));
    });
  }

  search(): void {
    if (this.toogleSearch) this.store.dispatch(search({update: this.searchStr}));
  }

  toggle(): void {
    if (this.toogleSearch) {
      this.toggleText = 'The most successful IT companies in 2020';
      this.buttonText = 'Включить поиск с логикой RxJs, при которой фильтрация будет проходить по ентеру';
    } else {
      this.toggleText = 'RxJs enabled';
      this.buttonText = 'Отключить поиск с логикой RxJs';
    }
  }
}
