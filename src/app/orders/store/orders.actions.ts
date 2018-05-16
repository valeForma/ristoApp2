

import {Action} from "@ngrx/store";
import {Product} from "../../products/product.model";
import {myOrder} from "../myorder.model";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SET_PERSONS = 'SET_PERSONS';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const LOAD_ORDERS = 'LOAD_ORDERS';
export const SAVE_ORDER = 'SAVE_ORDER';
export const SET_ORDERS_LIST = 'SET_ORDERS_LIST';
export const SET_ORDER_SAVED = 'SET_ORDER_SAVED';
export const SET_ORDER_TO_SAVE = 'SET_ORDER_TO_SAVE';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product){

  }
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(public payload: Product){

  }
}
export class SetPersons implements Action {
  readonly type = SET_PERSONS;
  constructor(public payload: number){}
}
export class UpdateTotal implements Action {
  readonly type = UPDATE_TOTAL;
  constructor(public payload: number){}
}
export class CancelOrder implements Action {
  readonly type = CANCEL_ORDER;
}
export class SaveOrder implements Action {
  readonly type = SAVE_ORDER;

}
export class SetOrdersList implements Action{
  readonly type = SET_ORDERS_LIST;
  constructor(public payload: myOrder[]){
  }
}
export class LoadOrders implements Action{
  readonly type = LOAD_ORDERS;
}

export class SetOrderSaved implements Action{
  readonly type = SET_ORDER_SAVED;
  constructor(public payload: boolean){
  }
}
export class SetOrderTosave implements Action {
  readonly type = SET_ORDER_TO_SAVE;
  constructor(public payload: boolean){
  }
}
export type OrdersActions =
  AddProduct |
  RemoveProduct |
  SetPersons |
  UpdateTotal |
  CancelOrder |
  SaveOrder |
  LoadOrders |
  SetOrdersList |
  SetOrderSaved |
  SetOrderTosave;
