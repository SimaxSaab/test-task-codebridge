import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

import { Store } from '@ngrx/store';
import { searchSelector} from '../../reducers/search';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss', '../main/main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  
  public search!: string; 
  public article: any;
  public articleId!: number;
  private _articlesService: any;

  search$ = this.store.select(searchSelector).subscribe((str: string) => this.search = str);

  constructor(private route: ActivatedRoute,articlesService:ArticlesService, private store: Store) {
    this.route.params.subscribe((params: any) => this.articleId = params.articleId);
    this._articlesService = articlesService;
  }

  ngOnInit(): void {
    this._articlesService.getById(this.articleId).subscribe((article: any) => {
      this.article = article;
    });
  }

}
