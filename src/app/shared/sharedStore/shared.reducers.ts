
import * as SharedActions from './shared.actions';

export interface State {
  toolBarTitle: string;
  actualRoute: string;
  nextRoute: string;
}

const initialState: State ={
  toolBarTitle : 'home',
  actualRoute: '/home',
  nextRoute: '/orders'

}

export function SharedReducer(state = initialState , action: SharedActions.SharedActions ){
  switch (action.type) {
    case SharedActions.SET_TOOLBAR_TITLE :
      return{
        ...state,
        toolBarTitle: action.payload
      };
    case SharedActions.SET_ACTUAL_ROUTE:
      return{
        ...state,
        actualRoute: action.payload
      };
    case SharedActions.SET_NEXT_ROUTE:
      return{
        ...state,
        nextRoute: action.payload
      };
    default:
      return state;

  }

}
