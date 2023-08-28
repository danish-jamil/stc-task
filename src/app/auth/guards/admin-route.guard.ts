import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

export const adminRouteGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.loggedInUser$.asObservable().pipe(
    map((user) => {
      console.log(user); // TODO: fix it shit head O.O
      if (user && user.username === 'admin') {
        return true;
      } else {
        // User is not authenticated, redirect to the login page
        return router.parseUrl('/login');
      }
    })
  );
};
