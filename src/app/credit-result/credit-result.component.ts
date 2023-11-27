// credit-result.component.ts
import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-credit-result',
  templateUrl: './credit-result.component.html',
  styleUrls: ['./credit-result.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(400)),
    ])
  ]
})
export class CreditResultComponent implements OnInit {
  @Input() result: any;

  resultAvailable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.result) {
      this.resultAvailable = true;
    }
  }
}
