import { Component } from '@angular/core';
import { Header } from "./MyComponents/header/header";
import { User } from "./MyComponents/user/user";
import { Tasks } from "./MyComponents/tasks/tasks";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Essentials';

  users = DUMMY_USERS;

  selectedUserId ?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}