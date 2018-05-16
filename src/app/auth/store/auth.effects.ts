

import {Injectable, OnDestroy} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import 'rxjs/operator/switchMap';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import * as AuthActions from './auth.actions';
import {User} from "../user.model";
import {UserData} from "../user.interface";
import {MatSnackBar} from '@angular/material';
import {Store} from "@ngrx/store";
import * as fromShared from '../../shared/sharedStore/shared.reducers';
import * as fromApp from '../../store/app.reducers';
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthEffects  implements OnDestroy{
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
          console.log("valid user login");
          this.snackBar.open('Welcome back ', user.name,{
            duration: 2000 ,
            panelClass:['mySnackbarSuccess']
          });
          this.mySubscription = this.store.select('shared')
            .map((state: fromShared.State) => {
              return state.actualRoute;
            })
            .subscribe((link) => {
              this.router.navigate([link]);
            })

          return [ {
            type: AuthActions.LOGIN
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        } else {
          console.log("invalid user login");
          this.snackBar.open('Password or Username invalid', 'retry',{duration: 2000 , panelClass:['mySnackbarError']});
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
          this.snackBar.open('register successfully welcome ' ,  user.name,{
            duration: 2000 ,
            panelClass:['mySnackbarSuccess']
          });
          return [ {
            type: AuthActions.LOGIN
          } , {
            type: AuthActions.SET_USER,
            payload: user
          } ];
        } else {
          this.snackBar.open('Register process failed', 'retry',{
            duration: 2000 ,
            panelClass:['mySnackbarError']
          });
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
            this.router.navigate(['/home'])
            return{
              type: AuthActions.LOGOUT
            };
        })
  mySubscription: Subscription;
 constructor(private action$: Actions, private httpClient: HttpClient , private router: Router, public snackBar: MatSnackBar,
             private store: Store<fromApp.AppState>){

 }
 ngOnDestroy() {
   if(this.mySubscription){
     this.mySubscription.unsubscribe();
   }
 }
}
