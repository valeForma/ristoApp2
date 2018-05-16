import { ActionReducerMap } from '@ngrx/store';

import * as FromOrders from '../orders/store/orders.reducers';
import * as FromProducts from '../products/store/products.reducer';
import * as FromAuth from '../auth/store/auth.reducer';
import * as FromShared from '../shared/sharedStore/shared.reducers';

export interface AppState {
 orders: FromOrders.State,
 products: FromProducts.State,
 auth: FromAuth.State,
 shared: FromShared.State
}

export const reducers: ActionReducerMap<AppState> = {
  orders: FromOrders.ordersReducer,
  products: FromProducts.productsReducer,
  auth: FromAuth.authReducer,
  shared: FromShared.SharedReducer
};
