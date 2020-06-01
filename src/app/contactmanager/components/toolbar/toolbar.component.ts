import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../components/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewContactDialog(): void {
    let dialogRef = this.dialog.open(ContactDialogComponent, { 
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed.', result);
    });
  }

}
