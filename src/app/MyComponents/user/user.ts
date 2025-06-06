import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
//import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
import {UserType} from './user.model';
import { Card } from "../../shared/card/card";

// type UserType = {
//     id: string;
//     avatar: string;
//     name: string
//   }

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  // imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);       //while using signals
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;                          //normally
  // }

  @Input({required: true}) user !: UserType;
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;                                       //while using @Input
  }

  // imagePath = computed(() => {return 'assets/users/' + this.avatar();});                     // while using input

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
