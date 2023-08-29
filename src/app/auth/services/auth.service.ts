import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface FakeUser {
  username: string;
  password: string;
}

type Permission = 'admin' | 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private allowedUsers: FakeUser[] = [
    {
      username: 'user',
      password: 'user',
    },
    {
      username: 'admin',
      password: 'admin',
    },
  ];

  loggedInUser?: FakeUser;

  login(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        const user = this.allowedUsers.find(
          (x) => x.username === username && x.password === password
        );
        if (user) {
          this.loggedInUser = user;
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  isLoggedIn() {
    return !!!this.loggedInUser;
  }

  hasPermission(permission: Permission) {
    // Assumption: both admin and user can access products page
    return (
      this.loggedInUser?.username === permission ||
      this.loggedInUser?.username === 'admin'
    );
  }
}
