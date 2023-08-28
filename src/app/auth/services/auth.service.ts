import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface FakeUser {
  username: string;
  password: string;
}

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

  loggedInUser$ = new Subject<FakeUser>();

  login(username: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        const user = this.allowedUsers.find(
          (x) => x.username === username && x.password === password
        );
        if (user) {
          this.loggedInUser$.next(user);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }
}
