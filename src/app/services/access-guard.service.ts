import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate{
  constructor (
    private router : Router,
) { }

/**
 * Check if the user is logged in before calling http
 *
 * @param route
 * @param state
 * @returns {boolean}
 */
canActivate (
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
    const requiresLogin = route.data.requiresLogin || false;
    if(requiresLogin){
      this.router.navigate(['login']);
    }
    return;
}
}
