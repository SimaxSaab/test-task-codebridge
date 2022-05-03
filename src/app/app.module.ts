import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArticlesComponent,
    CardComponent,
    SearchPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
