import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = new BehaviorSubject<string[]>([]) ;

  constructor() { }

  addUser(username){
    const users = this.users.value;
    users.push(username);
    this.users.next(users);
  }

}
