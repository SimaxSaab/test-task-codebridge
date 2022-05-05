import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  './popup.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-task-codebridge';

  public sub: Subscription;
  public popup!: boolean;

  constructor() { 
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(false)
      }, 15000)
    });
    this.sub = stream$.subscribe((value: any) => {
      this.popup = value;
    });
    this.popup = true;
  }

  ngOnInit(): void {
  }

}
