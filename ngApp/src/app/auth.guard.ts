import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

// @Injectable()
// export class PermissionsService {

//   constructor(
//     public router: Router,
//     public authService: AuthService
//   ) { }

//   canActivate(): boolean {
//     if (this.authService.loggedIn()) {
//       return true
//     } else {
//       this.router.navigate(['/login']);
//       return false
//     }
//   }

// }

export const authGuard: CanActivateFn = (route, state) => {
  const _router:Router = inject(Router)
  const _authService :AuthService = inject(AuthService)
  if (_authService.loggedIn()) {
    return true;
  }
  _router.navigate(['/login'])
  return false

};
