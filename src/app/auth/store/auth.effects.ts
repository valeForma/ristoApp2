

import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/operator/switchMap';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import * as AuthActions from './auth.actions';
import {User} from "../user.model";
import {UserData} from "../user.interface";

@Injectable()
export class AuthEffects {
  private url = './api/users/';
  @Effect()
  authLogin = this.action$
    .ofType(AuthActions.LOGIN_EFF)
    .map((action: AuthActions.LoginEff) => {
      return action.payload;
    })
    .switchMap((payload) => {
      return this.httpClient.post<UserData>(this.url + 'login', payload ,{
        observe: 'body',
        responseType: 'json'
      })
    })
    .map((userData) => {
      if(userData && userData.token && userData.user){
      const user = userData.user;
      user.token = userData.token;
      return user;
      }
      return null;
        }
    )
    .mergeMap((user: User) => {
        if(user) {
          console.log(user);
          this.router.navigate(['/poducts']);
          return [ {
            type: AuthActions.LOGIN
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        } else {
          this.router.navigate(['/login']);
          return [ {
            type: AuthActions.LOGOUT
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        }
    });
    @Effect()
    authRegister = this.action$
      .ofType(AuthActions.REGISTER_EFF)
      .map((action: AuthActions.RegisterEff) => {
          return action.payload;
      }).switchMap((payload) => {
         return this.httpClient.post<UserData>(this.url + 'register', payload , {
            observe: 'body',
            responseType: 'json'
          })
      })
      .map((userData) => {

          const user = userData.user;
          user.token = userData.token;
          return user;
        }
      )
      .mergeMap((user: User) => {
        if(user) {
          this.router.navigate(['/poducts']);
          return [ {
            type: AuthActions.LOGIN
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        } else {
          this.router.navigate(['/register']);
          return [ {
            type: AuthActions.LOGOUT
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        }
      });
      @Effect()
      authLogout = this.action$
        .ofType(AuthActions.LOGOUT_EFF)
        .switchMap((action: AuthActions.LogoutEff) => {
            return this.httpClient.post(this.url + 'logout',{
              observe: 'response'
            })
        }).map(() => {
            return{
              type: AuthActions.LOGOUT
            };
        })
 constructor(private action$: Actions, private httpClient: HttpClient , private router: Router){

 }
}
