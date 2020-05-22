import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const WIDTH_BREAKPOINT = 720;  

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${WIDTH_BREAKPOINT}px)`);
  $users: Observable<User[]>;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.$users = this.userservice.users;
    this.userservice.loadAllUsers();

    this.$users.subscribe(data => {
      console.log(data);
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches; 
  }
}
