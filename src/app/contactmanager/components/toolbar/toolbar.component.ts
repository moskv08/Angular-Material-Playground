import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../components/contact-dialog/contact-dialog.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDirection = new EventEmitter<void>();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

  openNewContactDialog(): void {
    let dialogRef = this.dialog.open(ContactDialogComponent, { 
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed.', result);

      // No NULL was passed back (close with a save action)
      if (result) {
        this.openSnackBar("Contact added.", "Navigate").onAction().subscribe(() => {
          // Navigate to new created user
          this.router.navigate(['/contactmanager', result.id]);
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
