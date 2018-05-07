

import {User} from "../user.model";
import * as AuthActions from './auth.actions'

export interface State {
  user: User;
  logged: boolean;
}

const initialState: State ={
  user: null,
  logged: false
}

export function authReducer(state = initialState , action: AuthActions.AuthActions ){
  switch (action.type) {
    case AuthActions.LOGIN :
    case AuthActions.REGISTER :
      return {
        ...state,
        logged: true
      };
    case AuthActions.LOGOUT :
      return {
        ...state,
        user: null,
        logged: false
      };
    case AuthActions.SET_USER :
      return{
        ...state,
        user: action.payload
      };
    default:
      return state;
  }

}
