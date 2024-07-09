import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
    const _router:Router = inject(Router)
    const _authService :AuthService = inject(AuthService)
    if (_authService.Islogin()) {
      return true;
    }
    _router.navigate(['/login'])
    return false
};