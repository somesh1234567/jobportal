import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsGuard implements CanActivate {
  canActivate() {
    if (sessionStorage.getItem("u") == null) {
      return false;
    }
    else {
      return true;
    }
  }
  
}
