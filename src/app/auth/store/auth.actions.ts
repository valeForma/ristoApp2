

import {Action} from "@ngrx/store";
import {User} from "../user.model";

export const  LOGIN = 'LOGIN';
export const  LOGOUT = 'LOGOUT';
export const  REGISTER = 'REGISTER';
export const  SET_USER = 'SET_USER';
export const  LOGIN_EFF = 'LOGIN_EFF';
export const  REGISTER_EFF = 'REGISTER_EFF';
export const  LOGOUT_EFF = 'LOGOUT_EFF'
export class Login implements Action {
  readonly  type = LOGIN;
}

export class Register implements Action {
  readonly  type = REGISTER;

}
export class Logout implements Action {
  readonly type = LOGOUT;
}
export class SetUser implements Action{
  readonly type = SET_USER;
  constructor(public payload: User){}
}
export class LoginEff implements Action {
  readonly type = LOGIN_EFF;
  constructor(public payload: {email: string , password: string}){
  }
}
export class RegisterEff implements Action {
  readonly type = REGISTER_EFF;
  constructor(public payload: User) {
  }
}

export class LogoutEff implements Action {
  readonly type = LOGOUT_EFF;
}
export type AuthActions =
  Login |
  Register |
  Logout |
  LoginEff |
  SetUser |
  RegisterEff |
  LogoutEff;

