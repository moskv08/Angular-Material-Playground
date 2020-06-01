import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  user: User;
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];

  constructor(private dialogRef: MatDialogRef<ContactDialogComponent>) { }

  ngOnInit(): void {
    this.user = new User();
  }

  saveContact(): void {
    this.dialogRef.close(this.user);
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }

}
