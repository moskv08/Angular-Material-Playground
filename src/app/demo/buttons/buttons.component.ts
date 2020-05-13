import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button mat-stroked-button color="primary">
  <mat-icon>face</mat-icon> Primary</button>
  <mat-divider></mat-divider>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
