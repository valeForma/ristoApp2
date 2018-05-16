import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Store} from "@ngrx/store";

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducer';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      return this.store.select('auth')
        .map((auth: fromAuth.State) => {
             if(auth.logged) {
               return true;
             } else {
               this.router.navigate(['/login']);
               return false;
             }
          });
  }

}
