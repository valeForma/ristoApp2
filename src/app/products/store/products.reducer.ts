import {Product} from '../product.model';
import * as ProductsActions from './products.actions';

export interface State {
  productsList: Product[];
  filteredProducts: Product[];
}
const initialState: State = {
  productsList: [],
  filteredProducts: []
}

export function productsReducer(state = initialState , action: ProductsActions.ProductsActions){
  switch (action.type){
    case ProductsActions.SET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload
      } ;
    default:
      return state;
  }

}
