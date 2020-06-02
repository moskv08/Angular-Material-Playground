import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const WIDTH_BREAKPOINT = 720;  

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${WIDTH_BREAKPOINT}px)`);
  $users: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(private userservice: UserService, private router: Router) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.$users = this.userservice.users;
    this.userservice.loadAllUsers();

    // Subscribe to be able to close the navigation in mobile mode
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection(): void {
    this.dir = this.dir == 'ltr'? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches; 
  }
}
