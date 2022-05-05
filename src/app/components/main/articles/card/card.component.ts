import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { searchSelector} from '../../../../reducers/search';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: any;

  public search!: string; 

  search$ = this.store.select(searchSelector).subscribe((str: string) => this.search = str);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
