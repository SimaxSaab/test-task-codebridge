import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { search } from 'src/app/reducers/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchStr!: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  search(): void {
    this.store.dispatch(search({update: this.searchStr}));
  }
}
