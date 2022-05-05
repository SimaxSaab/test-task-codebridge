import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  // public sub: Subscription;
  // public popup!: boolean;

  constructor() { 
    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(false)
    //   }, 10000)
    // });
    // this.sub = stream$.subscribe((value: any) => {
    //   console.log(value);
    //   this.popup = value;
    // });
    // this.popup = true;
  }

  ngOnInit(): void {
  }

}
