import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private userservice: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      let id = params['id'];
      this.user = null;
      if(!id) id = 1;
      
      // Fetch user when reload (F5)
      this.userservice.users.subscribe(users => {
        if (users.length == 0) return;
        setTimeout(() => {
          this.user = this.userservice.loadUserById(id);
        }, 500);
        
      });

    });
  }

}
