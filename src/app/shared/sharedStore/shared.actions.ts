

import {Action} from "@ngrx/store";

export const SET_TOOLBAR_TITLE = 'SET_TOOLBAR_TITLE';
export const SET_ACTUAL_ROUTE = 'SET_ACTUAL_ROUTE';
export const SET_NEXT_ROUTE = 'SET_NEXT_ROUTE';

export class SetToolbarTitle implements Action {
  readonly  type = SET_TOOLBAR_TITLE;
  constructor( public payload: string) {
  }
}
export class SetActualRoute implements Action {
  readonly  type = SET_ACTUAL_ROUTE;
  constructor( public payload: string) {
  }
}

export class SetNextRoute implements Action {
  readonly  type = SET_NEXT_ROUTE;
  constructor( public payload: string) {
  }
}
export type SharedActions = SetToolbarTitle | SetActualRoute | SetNextRoute ;
