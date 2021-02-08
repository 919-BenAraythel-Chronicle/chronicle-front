import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  dummyData = [
    {
      uID: 'lkajioenflkjsodijfoje',
      displayName: 'Dylan Mahaffey',
      email: 'dylan.mahaffey@gmail.com'
    },
    {
      uID: 'ffdsuiyueuhejhuihusiu',
      displayName: 'Alec Sherlock',
      email: 'alec@gmail.com'
    },
    {
      uID: 'ueue87uhcviuhviuhiuaad',
      displayName: 'George Yoo',
      email: 'geo@gmail.com'
    },
  ]

  private users: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  get Users(): BehaviorSubject<any[]> {
    this.populateUsers();
    return this.users;
  }

  constructor() { }

  populateUsers() {
    //make api call for users
    this.users.next(this.dummyData);
  }
}