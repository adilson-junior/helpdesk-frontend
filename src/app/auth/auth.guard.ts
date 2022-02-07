import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.verificarAcesso();
  }

  private verificarAcesso() {
    let authenticated = this.authService.isAuthenticated();
    if(authenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }  
  }

    canLoad(route: Route ): Observable<boolean>|Promise<boolean>|boolean {
      return this.verificarAcesso();
    }
  
}
