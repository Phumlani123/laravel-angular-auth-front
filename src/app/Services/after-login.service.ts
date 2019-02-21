import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): boolean |

  Observable<boolean> | Promise<boolean> {
    return this.Token.loggedIn()
  }

  constructor(private Token : TokenService) { }
}
