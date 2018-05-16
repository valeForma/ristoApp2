
import {Injectable, OnDestroy} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import 'rxjs/operators/switchMap';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducer';
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/operator/take';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private  store: Store<fromApp.AppState>) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return this.store.select('auth').
      take(1).
      switchMap((auth: fromAuth.State) => {
      if (auth.logged &&  auth.user.token) {
        console.log("logged user");
        const copiedReq = req.clone({headers: req.headers.set('x-auth', auth.user.token)});
        return next.handle(copiedReq);
      } else {
        console.log(" not logged user");
        return next.handle(req);
      }
    });

  }

}
