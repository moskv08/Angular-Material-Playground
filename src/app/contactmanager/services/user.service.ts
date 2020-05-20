import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore: {
    users: User[];
  }

  constructor(private http: HttpClient) {

    this.dataStore = { users: [] };
  }
  
  loadAllUsers() {
    const url = 'https://angular-material-api.azurewebsites.net/users';

    this.http.get<User[]>(url).subscribe(
      data => {
        this.dataStore.users = data;
      }, error => {
        console.log(`Failed to fetch this thing. Error: ${error.message}`);
      }
    )

  }
}
