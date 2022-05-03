import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {

  public searchStr!: string;

  public arts: any;
  private _articlesService: any;

  constructor(articlesService:ArticlesService) {
    this._articlesService = articlesService;
  }

  ngOnInit(): void {
    this._articlesService.getAll().subscribe((arts: any) => {
      this.arts = arts;
      console.log(this.arts);});
  }
}
