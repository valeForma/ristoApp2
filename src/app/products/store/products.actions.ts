

import {Action} from "@ngrx/store";
import {Product} from "../product.model";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
}
export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;
  constructor(public payload: Product[]){
  }
}

export type ProductsActions = LoadProducts | SetProducts ;
