import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveContact(): void {
    console.log('Thug Life!');
  }

  dismiss(): void {
    console.log('Thug Life!');
  }

}
