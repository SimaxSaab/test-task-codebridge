import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

import { Store } from '@ngrx/store';
import { searchSelector} from 'src/app/reducers/search';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {

  // public searchStr!: string; 
  public search!: string; 

  search$ = this.store.select(searchSelector).subscribe((str: string) => this.search = str);

  public arts: any;
  private _articlesService: any;

  constructor(articlesService:ArticlesService, private store: Store) {
    this._articlesService = articlesService;
  }

  ngOnInit(): void {
    this._articlesService.getAll().subscribe((arts: any) => {
      this.arts = arts;
      console.log(this.arts);});
  }
}
