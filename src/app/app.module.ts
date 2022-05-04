import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/main/search/search.component';
import { ArticlesComponent } from './components/main/articles/articles.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/main/articles/card/card.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './pipes/highlight.pipe';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { ArticleComponent } from './components/article/article.component';
import { MainComponent } from './components/main/main.component';

const routes = [
  { path: '', component: MainComponent },
  { path: 'article/:articleId', component: ArticleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArticlesComponent,
    CardComponent,
    SearchPipe,
    HighlightPipe,
    MainComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
